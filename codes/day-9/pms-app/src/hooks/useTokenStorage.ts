import TokenStorage from "../services/tokenservice"

const useTokenStorage = () => {
    return TokenStorage.instantiate()
}

export default useTokenStorage