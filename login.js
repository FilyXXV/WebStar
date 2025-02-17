function showpassword() {
    var x = document.getElementById("input_password");
    var img = document.getElementById("passwordImage");

    if (x.type === "password") {
        x.type = "text";
        img.src = "immagini/hidepassword.png"; // Change source to hide password image
    } else {
        x.type = "password";
        img.src = "immagini/showpassword.png"; // Change source to show password image
    }
}

function changeText() {
    var selectedValue = document.getElementById('change_language').value;

    switch (selectedValue) {
        case 'it':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Chi Siamo';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Servizi';
            document.getElementById('welcome').innerHTML = 'Bentornato';
            document.getElementById('nome_utente_mail').innerHTML = 'Nome Utente';
            document.getElementById('password').innerHTML = 'Password';
            document.getElementById('input_nome').placeholder = 'Inserisci';
            document.getElementById('input_password').placeholder = 'Inserisci';
            document.getElementById('confirm').innerHTML = 'Accedi';
            document.getElementById('register_text').innerHTML = 'Non sei ancora registrato? Clicca qui per farlo';
            document.getElementById('register').innerHTML = 'Registrati';
            break;
        case 'en':
            document.getElementById('buttonCHISIAMO').innerHTML = 'About Us';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('welcome').innerHTML = 'Welcome Back';
            document.getElementById('nome_utente_mail').innerHTML = 'Username';
            document.getElementById('password').innerHTML = 'Password';
            document.getElementById('input_nome').placeholder = 'Enter';
            document.getElementById('input_password').placeholder = 'Enter';
            document.getElementById('confirm').innerHTML = 'Log In';
            document.getElementById('register_text').innerHTML = 'Not registered yet? Click here to register';
            document.getElementById('register').innerHTML = 'Register';
            break;
        case 'es':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Nosotros';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Servicios';
            document.getElementById('welcome').innerHTML = 'Bienvenido de nuevo';
            document.getElementById('nome_utente_mail').innerHTML = 'Nombre de usuario';
            document.getElementById('password').innerHTML = 'Contraseña';
            document.getElementById('input_nome').placeholder = 'Ingrese';
            document.getElementById('input_password').placeholder = 'Ingrese';
            document.getElementById('confirm').innerHTML = 'Acceder';
            document.getElementById('register_text').innerHTML = 'Eres nuevo aquí? Regístrate haciendo clic aquí';
            document.getElementById('register').innerHTML = 'Registrarse';
            break;
        case 'fr':
            document.getElementById('buttonCHISIAMO').innerHTML = 'À propos';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('welcome').innerHTML = 'Bienvenue de retour';
            document.getElementById('nome_utente_mail').innerHTML = 'Nom d\'utilisateur';
            document.getElementById('password').innerHTML = 'Mot de passe';
            document.getElementById('input_nome').placeholder = 'Entrer';
            document.getElementById('input_password').placeholder = 'Entrer';
            document.getElementById('confirm').innerHTML = 'Se connecter';
            document.getElementById('register_text').innerHTML = 'Enregistrez-vous ici dès maintenant';
            document.getElementById('register').innerHTML = 'S\'inscrire';
            break;
        case 'de':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Über Uns';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Dienste';
            document.getElementById('welcome').innerHTML = 'Willkommen zurück';
            document.getElementById('nome_utente_mail').innerHTML = 'Benutzername';
            document.getElementById('password').innerHTML = 'Passwort';
            document.getElementById('input_nome').placeholder = 'Eingeben';
            document.getElementById('input_password').placeholder = 'Eingeben';
            document.getElementById('confirm').innerHTML = 'Anmelden';
            document.getElementById('register_text').innerHTML = 'Noch nicht registriert? Hier klicken.';
            document.getElementById('register').innerHTML = 'Registrieren';
            break;
    }
}