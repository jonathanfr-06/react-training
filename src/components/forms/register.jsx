import '../../../src/assets/css/components/forms/register.css'


function Register() {
    return (
        <div>
            <form action="#" class='form-register'>
                <label htmlFor="nom">Nom *</label>
                <input type="text" name="nom" />
                <label htmlFor="prenom">Prénom *</label>
                <input type="text" name="prenom" />
                <label htmlFor="prenom">Date de naissance </label>
                <input type="date" name="birthday" />
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" />
                <label htmlFor="password">Mot de passe *</label>
                <input type="password" name="password" />
                <label htmlFor="confirm-password">Confirmer mot de passe *</label>
                <input type="password" name="confirm-password" />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    )
}

export default Register;