<?php
session_start();
?>
<html>
    <head>
        <link rel="stylesheet" href="login.css">
        <title>Login</title>
        <link rel="icon" href="immagini/smallicon.png"> 
        <meta charset="utf-8"/>
        <style>
            @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
        </style>
        <script src="login.js"></script>
    <body>
        <img src="immagini/logo_website.png" alt="logo" id="logo_website">
        <div id="menu">
            <a href="index.php"><button  id="buttonHOME">Home</button> </a>
            <a href="chisiamo.php"><button  id="buttonCHISIAMO">Chi Siamo</button> </a>
            <a href="prodotti.php"><button  id="buttonPRODOTTI">Servizi</button> </a>
        </div>
        <div id="option">
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
                <h1 id="welcome">Bentornato</h1>
                <p id="nome_utente_mail">Nome Utente</p>
                <input type="text" id="input_nome" placeholder="Inserisci" name="nomeUtente">
                <p id="password">Password</p>
                <input type="password" id="input_password" placeholder="Inserisci" name="psw">
                <input type="submit" id="confirm" value="Accedi">
            </div>
        </form>
        <button onclick="showpassword()" id="showpassword"><img id="passwordImage" src="immagini/hidepassword.png" alt=""></button>
        <p id="register_text">Non sei ancora registrato? Clicca qui per farlo</p>
        <a href="register.php"><button id="register">Registrati</button></a>
    </body>
</html>
