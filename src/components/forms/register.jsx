import '../../../src/assets/css/components/forms/register.css'
import { useNavigate } from "react-router-dom";


function Register() {

    const navigate = useNavigate();

    function getData(event) {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log(formDataObject);

        if(formDataObject['password'] !== formDataObject['confirm-password']){
            alert('Passwords do not match.');
        }
        navigate("/");

    }

    return (
        <div>
            <form action="#" className='form-register'  onSubmit={getData}>
                <h2 className='register-title'>Inscription</h2>
                <label htmlFor="nom">Nom *</label>
                <input type="text" name="nom" required />
                <label htmlFor="prenom">Prénom *</label>
                <input type="text" name="prenom" required />
                <label htmlFor="prenom">Date de naissance </label>
                <input type="date" name="birthday" />
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" required />
                <label htmlFor="password">Mot de passe *</label>
                <input type="password" name="password" required/>
                <label htmlFor="confirm-password">Confirmer mot de passe *</label>
                <input type="password" name="confirm-password" required />
               <div className="div-checkbox"> <input type="checkbox" className='confirm-checkbox-register' required name="confirm-cgi"  /> *J'accepte les conditions générales blablabla</div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    )
}

export default Register;