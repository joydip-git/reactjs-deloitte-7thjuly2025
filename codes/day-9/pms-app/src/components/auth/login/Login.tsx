import { useState, type FormEvent } from "react"
import { authenticate } from "../../../services/authservice"
import type { User } from "../../../models/user"
//import { saveToken } from "../../../services/tokenservice"
import { useNavigate, useSearchParams } from "react-router-dom"
import TokenStorage from "../../../services/tokenservice"

const Login = () => {

    const tokenStore = TokenStorage.instantiate()

    const [queryParams, setQueryParams] = useSearchParams()
    const navigateTo = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const user: User = { username, password }
        try {
            const response = await authenticate(user)
            const apiResponse = response.data
            if (apiResponse.data) {
                //saveToken(apiResponse.data)
                tokenStore.saveToken(apiResponse.data)
                const url = queryParams.get('redirectUrl')
                if (url)
                    navigateTo(`/${url}`)
                else
                    navigateTo('/products')

            } else {
                alert(apiResponse.message)
            }
        } catch (error: any) {
            alert(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="form-label mt-4" htmlFor="txtName">UserName: &nbsp;</label>
                <input className='form-control' type="text" id='txtName' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label className="form-label mt-4" htmlFor="txtPwd">Password: &nbsp;</label>
                <input type="password" className='form-control' id='txtPwd' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
                <input type="submit" value="Login" className='btn btn-primary' />
            </div>
        </form>
    )
}

export default Login