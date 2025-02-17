<?php
    session_start();
?>  
<html>
    <head>
        <link rel="stylesheet" href="register.css">
        <title>Login</title>
        <link rel="icon" href="immagini/smallicon.png">
        <meta charset="utf-8"/>
        <style>
            @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
        </style>
        <script src="register.js"></script>
    <body>
        <img src="immagini/logo_website.png" alt="logo" id="logo_website">
        <div id="menu">
            <a href="index.php"><button  id="buttonHOME">Home</button> </a>
            <a href="chisiamo.php"><button  id="buttonCHISIAMO">Chi Siamo</button> </a>
            <a href="prodotti.php"><button  id="buttonPRODOTTI">Servizi</button> </a>
        </div>
        <div id="option">
            <?php
                if(isset($_SESSION['nomeUtente'])) {
                    // L'utente è già registrato, mostra il pulsante di logout
                    echo "<a href='logout.php'><button id='button_login'><img src='immagini/button_logout.png'></button></a>";
                } else {
                    // L'utente non è ancora registrato, mostra il pulsante di login
                    echo "<a href='login.php'><button id='button_login'><img src='immagini/button_login.png'></button></a>";
                }
            ?>
            <select id="change_language" onchange="changeText()">
                <option value="it">Italiano 🇮🇹</option>
                <option value="en">English 🇬🇧</option>
                <option value="es">Español 🇪🇸</option>
                <option value="fr">Français 🇫🇷</option>
                <option value="de">Deutsch 🇩🇪</option>
            </select>
        </div>
        <form method="post" action="registrazione.php" id="form">
            <div id="login">
                <h1 id="welcome">Benvenuto</h1>
                <p id="nome_utente">Nome Utente</p>
                <input type="text" id="input_nome_utente" placeholder="Inserisci" name="nomeUtente" required>
                <p id="password">Password</p>
                <input type="password" id="input_password" placeholder="Inserisci" name="psw" required>
                <p id="mail">Mail</p>
                <input type="text" id="input_mail" placeholder="Inserisci" name="mail" required>
                <p id="nome">Nome</p>
                <input type="text" id="input_nome" placeholder="Inserisci" name="nome" required>
                <p id="cognome">Cognome</p>
                <input type="text" id="input_cognome" placeholder="Inserisci" name="cognome" required>
                <p id="paese">N° Carta</p>
                <input type="number" id="input_paese" placeholder="Inserisci" name="numCarta" min="0" max="9999999999999999"  required>
                <p id="citta">CVV</p>
                <input type="number" id="input_citta" placeholder="Inserisci" name="cvv" min="0" max="999" required>
                <p id="indirizzo">Scadenza</p>
                <input type="month" id="input_indirizzo" placeholder="Inserisci" name="scadenza" min="<?php echo date('Y-m'); ?>" required>
                <input type="submit" id="confirm" value="Conferma">
            </div>
            <script>
                // Ottieni i riferimenti agli elementi HTML
                var inputNumCarta = document.getElementById('input_paese');
                var inputCVV = document.getElementById('input_citta');
                var form = document.getElementById('form');

                // Aggiungi un gestore di eventi per il submit del modulo
                form.addEventListener('submit', function(event) {
                    // Verifica la lunghezza del numero di carta
                    if (inputNumCarta.value.length !== 16) {
                        alert("ERRORE: Il numero della carta che hai inserito è sbagliato, deve contenere almeno 16 cifre");
                        event.preventDefault(); // Impedisci l'invio del modulo
                    }

                    // Verifica la lunghezza del CVV
                    if (inputCVV.value.length !== 3) {
                        alert("ERRORE: Il CVV che hai inserito è sbagliato, deve contenere almeno 3 cifre");
                        event.preventDefault(); // Impedisci l'invio del modulo
                    }
                });
            </script>
        </form>
        <button onclick="showpassword()" id="showpassword"><img id="passwordImage" src="immagini/hidepassword.png" alt=""></button>
        <p id="register_text">Hai già un account? clicca qui per accedere.</p>
        <a href="login.php"><button id="register">Accedi</button></a>
    </body>
</html>