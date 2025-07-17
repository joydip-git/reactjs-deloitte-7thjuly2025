import { BehaviorSubject } from "rxjs"

class TokenStorage {
    private static instance: TokenStorage | null = null;
    private store = new BehaviorSubject<string | null>(null)
    tokenObservable = this.store.asObservable()

    saveToken(token: string) {
        this.store.next(token)
    }
    removeToken() {
        this.store.next(null)
    }
    getToken() {
        return this.store.getValue()
    }
    isLoggedIn() {
        return this.store.getValue() ? true : false
    }
    private constructor() {
        console.log('created...');
    }

    static instantiate() {
        if (this.instance === null)
            this.instance = new TokenStorage()

        return this.instance
    }
}
export default TokenStorage
//const TokenStoraageInstance = TokenStorage.instantiate()
//export default TokenStoraageInstance


// export function saveToken(token: string) {
//     sessionStorage.setItem('token', token)
// }

// export function removeToken() {
//     sessionStorage.removeItem('token')
// }

// export function getToken(): string | null {
//     return sessionStorage.getItem('token')
// }

// export function isLoggedIn(): boolean {
//     return sessionStorage.getItem('token') !== null
// }