<?php
    session_start();
?>
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <title>Home</title>
        <link rel="icon" href="immagini/smallicon.png">
        <meta charset="utf-8"/>
        <style>
            @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
        </style>
        <script src="index.js"></script>
    </head>
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
        <div id="starting_image">
            <button id="image_left"onclick="changeImage(-1)"><img src="immagini/image_left.png"></button>
            <button id="image_right" onclick="changeImage(1)"><img src="immagini/image_right.png"></button>
            <div id="image">
                <img src="immagini/imghome1.png" alt="immagine_1" id="slide1">
                <img src="immagini/imghome2.png" alt="immagine_2" id="slide1">
                <img src="immagini/imghome3.png" alt="immagine_3" id="slide1">
            </div>
            <div id="dot-container">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>            
        </div>                 
        
        <div>
            <img src="immagini/separatore.png" id="image_divider">
        </div>
        <div id="first_div">
            <h1 id="first_title">Benvenuti su WebStar</h1>
            <p id="first_text">
                Siamo WebStar, una squadra dedicata di esperti creativi che si occupa della progettazione e dello sviluppo di siti web su misura. La nostra passione è trasformare le tue idee in esperienze digitali coinvolgenti e di successo. Con una vasta esperienza nel settore, ci impegniamo a offrire soluzioni web innovative che non solo soddisfano le tue esigenze, ma superano le tue aspettative, fornendo una presenza online che si distingue nel panorama digitale.
            </p>
            <img src="immagini/imgtext1.png" id="first_image">
        </div>
        <div id="second_div">
            <h1 id="second_title">Cosa Offriamo</h1>
            <p id="second_text">
                Dal design alla programmazione, offriamo una gamma completa di servizi per soddisfare le esigenze digitali della tua azienda. Oltre alla creazione di siti web esteticamente accattivanti e funzionali, ci concentriamo sull'ottimizzazione per i motori di ricerca e sull'integrazione di strumenti avanzati per garantire un'elevata performance e una user experience impeccabile. Il nostro obiettivo è fornire soluzioni web che rispecchino l'identità del tuo marchio.
            </p>
            <img src="immagini/imgtext2.png" id="second_image">
        </div>
        <div id="third_div">
            <h1 id="third_title">Il Nostro Approccio</h1>
            <p id="third_text">
                Il nostro approccio si basa sulla collaborazione e sulla trasparenza. Prima di iniziare qualsiasi progetto, ci impegniamo a comprendere appieno i tuoi obiettivi, il tuo pubblico di riferimento e le tue esigenze specifiche. Utilizziamo questo approccio orientato al cliente per guidare ogni fase del processo, dalla pianificazione alla realizzazione, garantendo che il risultato finale sia perfettamente allineato con le tue aspettative e pronto a generare risultati tangibili per il tuo business.
            </p>
            <img src="immagini/imgtext3.png" id="third_image">
        </div>
        <div id="fourth_div">
            <h1 id="fourth_title">Perché Sceglierci</h1>
            <p id="fourth_text">
                Scegliere WebStar significa affidarsi a un team di professionisti appassionati e competenti che mettono il cliente al centro di ogni decisione e azione. Oltre alla nostra vasta esperienza nel settore, ci impegniamo a offrire un servizio clienti eccezionale e un supporto continuo. Siamo pronti a collaborare con te per trasformare la tua visione in una presenza digitale di successo, offrendoti soluzioni web innovative che ti permettono di distinguerti nel vasto mercato.
            </p>
            <img src="immagini/imgtext4.png" id="fourth_image">
        </div>
        <div id="end">
            <a href="https://maps.app.goo.gl/52s91kwjmE1MR9Wt8"><p id="address">Indirizzo:<u> Corso dei Mille 176, Palermo PA 90100, IT</u></p></a>
            <p id="phone">Numero: +39 3383687855</p>
            <p id="mail">E-Mail: info@webstar.com</p>
            <a href="#"  id="go_up"><img src="immagini/go_up.png"></a>
            <p id="credit">MADE BY CUSUMANO FILIPPO KAROL <br>
                © Website created for educational reasons and not for commercial purposes ©
            </p>
            <img src="immagini/logo_planet.png" id="logo_planet">
            <a href="index.php"><img src="immagini/logo_star.png" id="logo_star"></a>
        </div>
    </body>
</html>
