import { observable, action, computed, runInAction } from 'mobx';
import axios from 'axios';

export default class Store {

    @observable
    timer: number = 0;

    @observable
    clicks: number = 0;

    @observable
    pokemon: Pokemon;

    constructor() {
        setInterval(() => this.tick(), 1000);
    }

    @action.bound
    tick() {
        this.timer += 1;
    }

    @action
    resetTimer() {
        this.timer = 0;
    }

    @action
    click() {
        this.clicks += 1;
    }

    @computed
    get summary() {
        return {
            clicks: this.clicks,
            timer: this.timer
        };
    }

    @action
    async catchPokemon(id: number) {

        try {

            let pokeResponse = await axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`);
            let pokeData = pokeResponse.data as Pokemon;

            runInAction(() => {
                this.pokemon = pokeData;
            });

        } catch (error) {
            console.log(error);
        }
    }
}

interface Pokemon {
    name: string;
}