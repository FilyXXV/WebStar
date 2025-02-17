<?php
    session_start();
    
    // Inizializza la variabile $nomeUtente
    $nomeUtente = "";

    // Verifica se la chiave 'nomeUtente' è impostata nella sessione
    if(isset($_SESSION['nomeUtente'])) {
        // Se è impostata, salva il nome utente nella variabile temporanea
        $nomeUtente = $_SESSION['nomeUtente'];
        
        // Elimina la chiave 'nomeUtente' dalla sessione
        unset($_SESSION['nomeUtente']);
    }

    // Distruggi la sessione
    session_destroy();
?>

<html>
    <head>
        <link rel="stylesheet" href="logout.css">
        <title>Login</title>
        <link rel="icon" href="immagini/smallicon.png"> 
        <meta charset="utf-8"/>
        <style>
            @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
        </style>
        <script src="login.js"></script>
    </head>
    <body>
        <img src="immagini/logo_website.png" alt="logo" id="logo_website">
        <div id="menu">
            <a href="index.php"><button  id="buttonHOME">Home</button> </a>
            <a href="chisiamo.php"><button  id="buttonCHISIAMO">Chi Siamo</button> </a>
            <a href="prodotti.php"><button  id="buttonPRODOTTI">Servizi</button> </a>
        </div>
        <div id="option">
            <!-- Non tentare di accedere a $_SESSION['nomeUtente'] dopo aver distrutto la sessione -->
            <a href="login.php"><button id="button_login"><img src="immagini/button_login.png"></button></a>
            <select id="change_language" onchange="changeText()">
                <option value="it">Italiano 🇮🇹</option>
                <option value="en">English 🇬🇧</option>
                <option value="es">Español 🇪🇸</option>  
                <option value="fr">Français 🇫🇷</option>
                <option value="de">Deutsch 🇩🇪</option>
            </select>
        </div>
        <form method="post" action="autenticazione.php">
            <div id="login">
                <!-- Mostra il nome utente salvato nella variabile temporanea -->
                <p id="logout">Arrivederci, <?php echo $nomeUtente; ?>. Hai effettuato il logout.</p>
            </div>
        </form>
        <a href="index.php"><button id="register">Torna alla Home</button></a>
    </body>
</html>
