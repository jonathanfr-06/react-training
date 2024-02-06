function Register()
{
    return(
        <div>
            <form action="#" class='form-register'>
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" />
                <label htmlFor="prenom">Prénom</label>
                <input type="text" name="prenom"  />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    )
}

export default Register;