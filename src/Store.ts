import { observable } from 'mobx';

export default class Store {

    @observable
    timer: number = 0;

    @observable
    clicks: number = 0;

    constructor() {
        setInterval(() => { this.timer += 1; }, 1000);
    }

    resetTimer() {
        this.timer = 0;
    }

    click() {
        this.clicks += 1;
    }
}