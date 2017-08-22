import { observable, action, computed,  } from 'mobx';

export default class Store {

    @observable
    timer: number = 0;

    @observable
    clicks: number = 0;

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
}