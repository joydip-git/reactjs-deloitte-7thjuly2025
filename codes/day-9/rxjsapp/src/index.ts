// import { map, Observable, of, filter, Subscription, BehaviorSubject } from "rxjs";
import { Subscription } from "rxjs";
import { Storage } from "./storage";


//const obs: Observable<number> = of<number>(0)
//consumer
const consumerInstance = Storage.instantiate()
const subscription: Subscription =
    consumerInstance
        .dataObservable
        .subscribe({
            next: (data) => { console.log('got ' + data) },
            error: (err) => { console.log(err) },
            complete: () => { console.log('something else...') }
        })
// .pipe(
//     filter(
//         (x) => x % 2 !== 0
//     ),
//     map(
//         (x) => x * 2
//     )
// )


setTimeout(() => subscription.unsubscribe(), 7000)

const publisherInstance = Storage.instantiate()

let value = 1
setInterval(
    () => {
        console.log('publishing: ' + value);
        publisherInstance.publish(value)
        ++value
    }, 1000
)