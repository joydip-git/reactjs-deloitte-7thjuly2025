export function saveToken(token: string) {
    sessionStorage.setItem('token', token)
}

export function removeToken() {
    sessionStorage.removeItem('token')
}

export function getToken(): string | null {
    return sessionStorage.getItem('token')
}

export function isLoggedIn(): boolean {
    return sessionStorage.getItem('token') !== null
}