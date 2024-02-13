import "../../../src/assets/css/components/forms/login.css"
import { useNavigate } from "react-router-dom";
import account from '../../../src/utils/account'

function Login()
{
    const navigate = useNavigate();


    function getData(event)
    {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        if(formDataObject.email === account[0].email && formDataObject.password === account[0].password){
            localStorage.setItem("admin", true);
            console.log('yeah man');
            navigate('/')
        }
     }
    return (
        <div>
        <form action="#" className='form-login' onSubmit={getData}>
            <h2 className='login-title'>Connexion</h2>
            <label htmlFor="nom">Email</label>
            <input type="email" name="email" required />

            <label htmlFor="password">Mot de passe *</label>
            <input type="password" name="password" required />
            <button type="submit">Connextion</button>
        </form>
    </div>
    )
}

export default Login;