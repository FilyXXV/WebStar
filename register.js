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
            document.getElementById('welcome').innerHTML = 'Benvenuto';
            document.getElementById('nome_utente').innerHTML = 'Nome Utente';
            document.getElementById('password').innerHTML = 'Password';
            document.getElementById('input_nome_utente').placeholder = 'Inserisci';
            document.getElementById('input_password').placeholder = 'Inserisci';
            document.getElementById('mail').innerHTML = 'Mail';
            document.getElementById('input_mail').placeholder = 'Inserisci';
            document.getElementById('nome').innerHTML = 'Nome';
            document.getElementById('input_nome').placeholder = 'Inserisci';
            document.getElementById('cognome').innerHTML = 'Cognome';
            document.getElementById('input_cognome').placeholder = 'Inserisci';
            document.getElementById('paese').innerHTML = 'N° Carta';
            document.getElementById('input_paese').placeholder = 'Inserisci';
            document.getElementById('citta').innerHTML = 'CVV';
            document.getElementById('input_citta').placeholder = 'Inserisci';
            document.getElementById('indirizzo').innerHTML = 'Scadenza';
            document.getElementById('input_indirizzo').placeholder = 'Inserisci';
            document.getElementById('confirm').innerHTML = 'Conferma';
            document.getElementById('register_text').innerHTML = 'Hai già un account? clicca qui per accedere.';
            document.getElementById('register').innerHTML = 'Accedi';
            break;
        case 'en':
            document.getElementById('buttonCHISIAMO').innerHTML = 'About Us';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('welcome').innerHTML = 'Welcome';
            document.getElementById('nome_utente').innerHTML = 'Username';
            document.getElementById('password').innerHTML = 'Password';
            document.getElementById('input_nome_utente').placeholder = 'Enter';
            document.getElementById('input_password').placeholder = 'Enter';
            document.getElementById('mail').innerHTML = 'Email';
            document.getElementById('input_mail').placeholder = 'Enter';
            document.getElementById('nome').innerHTML = 'Name';
            document.getElementById('input_nome').placeholder = 'Enter';
            document.getElementById('cognome').innerHTML = 'Surname';
            document.getElementById('input_cognome').placeholder = 'Enter';
            document.getElementById('paese').innerHTML = 'Card Number';
            document.getElementById('input_paese').placeholder = 'Enter';
            document.getElementById('citta').innerHTML = 'CVV';
            document.getElementById('input_citta').placeholder = 'Enter';
            document.getElementById('indirizzo').innerHTML = 'Expiration Date';
            document.getElementById('input_indirizzo').placeholder = 'Enter';
            document.getElementById('confirm').innerHTML = 'Confirm';
            document.getElementById('register_text').innerHTML = 'Already have an account? Click here to login.';
            document.getElementById('register').innerHTML = 'Login';
            break;
        case 'es':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Nosotros';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Servicios';
            document.getElementById('welcome').innerHTML = 'Bienvenido';
            document.getElementById('nome_utente').innerHTML = 'Nombre de Usuario';
            document.getElementById('password').innerHTML = 'Contraseña';
            document.getElementById('input_nome_utente').placeholder = 'Ingresar';
            document.getElementById('input_password').placeholder = 'Ingresar';
            document.getElementById('mail').innerHTML = 'Correo Electrónico';
            document.getElementById('input_mail').placeholder = 'Ingresar';
            document.getElementById('nome').innerHTML = 'Nombre';
            document.getElementById('input_nome').placeholder = 'Ingresar';
            document.getElementById('cognome').innerHTML = 'Apellido';
            document.getElementById('input_cognome').placeholder = 'Ingresar';
            document.getElementById('paese').innerHTML = 'Número de Tarjeta';
            document.getElementById('input_paese').placeholder = 'Ingresar';
            document.getElementById('citta').innerHTML = 'CVV';
            document.getElementById('input_citta').placeholder = 'Ingresar';
            document.getElementById('indirizzo').innerHTML = 'Fecha de Expiración';
            document.getElementById('input_indirizzo').placeholder = 'Ingresar';
            document.getElementById('confirm').innerHTML = 'Confirmar';
            document.getElementById('register_text').innerHTML = 'Cuenta existente? Inicia sesión aquí.';
            document.getElementById('register').innerHTML = 'Iniciar Sesión';
            break;
        case 'fr':
            document.getElementById('buttonCHISIAMO').innerHTML = 'À propos';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('welcome').innerHTML = 'Bienvenue';
            document.getElementById('nome_utente').innerHTML = 'Nom d\'Utilisateur';
            document.getElementById('password').innerHTML = 'Mot de Passe';
            document.getElementById('input_nome_utente').placeholder = 'Entrer';
            document.getElementById('input_password').placeholder = 'Entrer';
            document.getElementById('mail').innerHTML = 'Email';
            document.getElementById('input_mail').placeholder = 'Entrer';
            document.getElementById('nome').innerHTML = 'Prénom';
            document.getElementById('input_nome').placeholder = 'Entrer';
            document.getElementById('cognome').innerHTML = 'Nom de Famille';
            document.getElementById('input_cognome').placeholder = 'Entrer';
            document.getElementById('paese').innerHTML = 'Numéro de Carte';
            document.getElementById('input_paese').placeholder = 'Entrer';
            document.getElementById('citta').innerHTML = 'CVV';
            document.getElementById('input_citta').placeholder = 'Entrer';
            document.getElementById('indirizzo').innerHTML = 'Date d\'Expiration';
            document.getElementById('input_indirizzo').placeholder = 'Entrer';
            document.getElementById('confirm').innerHTML = 'Confirmer';
            document.getElementById('register_text').innerHTML = 'Compte déjà créé? Connectez-vous ici.';
            document.getElementById('register').innerHTML = 'Se Connecter';
            break;
        case 'de':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Über Uns';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Dienste';
            document.getElementById('welcome').innerHTML = 'Willkommen';
            document.getElementById('nome_utente').innerHTML = 'Benutzername';
            document.getElementById('password').innerHTML = 'Passwort';
            document.getElementById('input_nome_utente').placeholder = 'Eingeben';
            document.getElementById('input_password').placeholder = 'Eingeben';
            document.getElementById('mail').innerHTML = 'E-Mail';
            document.getElementById('input_mail').placeholder = 'Eingeben';
            document.getElementById('nome').innerHTML = 'Vorname';
            document.getElementById('input_nome').placeholder = 'Eingeben';
            document.getElementById('cognome').innerHTML = 'Nachname';
            document.getElementById('input_cognome').placeholder = 'Eingeben';
            document.getElementById('paese').innerHTML = 'Kartennummer';
            document.getElementById('input_paese').placeholder = 'Eingeben';
            document.getElementById('citta').innerHTML = 'CVV';
            document.getElementById('input_citta').placeholder = 'Eingeben';
            document.getElementById('indirizzo').innerHTML = 'Ablaufdatum';
            document.getElementById('input_indirizzo').placeholder = 'Eingeben';
            document.getElementById('confirm').innerHTML = 'Bestätigen';
            document.getElementById('register_text').innerHTML = 'Konto vorhanden? Hier anmelden.';
            document.getElementById('register').innerHTML = 'Anmelden';
            break;
    }
}