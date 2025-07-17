const Register = () => {
    return (
        <form>
            <div>
                <label className="form-label mt-4" htmlFor="txtName">UserName: &nbsp;</label>
                <input className='form-control' type="text" id='txtName' />
            </div>
            <div>
                <label className="form-label mt-4" htmlFor="txtPwd">Password: &nbsp;</label>
                <input type="text" className='form-control' id='txtPwd' />
            </div>
            <div>
                <input type="submit" value="Regsiter" className='btn btn-primary' />
            </div>
        </form>
    )

}

export default Register