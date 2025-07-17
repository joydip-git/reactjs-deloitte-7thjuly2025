import { BehaviorSubject } from "rxjs"

export class Storage {
    private static instance: Storage | null = null;
    private store = new BehaviorSubject<number>(0)
    dataObservable = this.store.asObservable()

    publish(value: number) {
        this.store.next(value)
    }

    private constructor() {
        console.log('created...');
    }

    static instantiate() {
        if (this.instance === null)
            this.instance = new Storage()

        return this.instance
    }
}