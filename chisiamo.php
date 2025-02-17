<?php
    session_start();
?>
<html>
    <head>
        <link rel="stylesheet" href="chisiamo.css">
        <title>Chi Siamo</title>
        <link rel="icon" href="immagini/smallicon.png">
        <meta charset="utf-8"/>
        <style>
            @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
        </style>
        <script src="chisiamo.js"></script>
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
                <img src="immagini/imgchisiamo1.png" alt="immagine_1" id="slide1">
                <img src="immagini/imgchisiamo2.png" alt="immagine_2" id="slide1">
                <img src="immagini/imgchisiamo3.png" alt="immagine_3" id="slide1">
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
            <h1 id="first_title">La Nostra Storia</h1>
            <p id="first_text">
                La nostra storia è un viaggio intriso di passione, audacia e un impegno incessante per l'eccellenza nel mondo digitale. Nasce dall'idea visionaria di rivoluzionare il modo in cui le aziende si presentano online, un'idea che abbiamo abbracciato con fervore fin dai nostri umili inizi. Lungo il percorso, abbiamo affrontato molte sfide e superato ostacoli con determinazione e creatività, ma ogni sfida ha rappresentato un'opportunità per crescere e imparare. Ogni progetto che abbiamo completato è stato un tassello fondamentale nel nostro percorso verso il successo, guadagnando la fiducia e il rispetto dei nostri clienti e della comunità imprenditoriale. Continuiamo a crescere e a prosperare, guidati dalla nostra passione per l'innovazione e il desiderio di creare soluzioni digitali che lasciano un'impronta duratura nel mondo online e contribuiscono a plasmare il futuro del business digitale.
            </p>
        </div>
        <div id="second_div">
            <h1 id="second_title">La Nostra Filosofia</h1>
            <p id="second_text">
                La nostra filosofia è il cuore pulsante di ogni progetto che affrontiamo. Siamo mossi da una profonda passione per il design e un'incessante ricerca della perfezione in ogni dettaglio. Ogni pixel, ogni riga di codice, è concepito con cura e attenzione, con l'obiettivo di superare le aspettative dei nostri clienti e creare esperienze digitali straordinarie che si distinguono nel panorama online. Siamo impegnati a creare non solo siti web, ma vere e proprie opere d'arte digitali che catturano l'attenzione e ispirano azioni. La nostra filosofia è intrisa di innovazione, creatività e un impegno costante per l'eccellenza, garantendo che ogni progetto sia un successo sotto ogni aspetto e rappresenti il massimo dell'ingegno e della maestria digitale
            </p>
        </div>
        <div id="third_div">
            <h1 id="third_title">Il Nostro Team</h1>
            <p id="third_text">
                Il cuore pulsante di WebStar è il nostro eccezionale team di talenti, una squadra di individui straordinari che portano con sé una vasta esperienza, competenze uniche e una passione contagiosa per l'innovazione. Siamo più di una semplice squadra: siamo una famiglia di creativi, programmatori e esperti di marketing che lavorano insieme in perfetta sinergia per raggiungere un unico obiettivo: il successo dei nostri clienti. Grazie alla nostra collaborazione sinergica e alla nostra dedizione al risultato, siamo in grado di affrontare le sfide più complesse e trasformare le visioni dei nostri clienti in realtà digitali di successo. Il nostro team è il nostro punto di forza e la nostra garanzia di qualità, e siamo orgogliosi di mettere le nostre competenze e la nostra passione al servizio dei nostri clienti per aiutarli a raggiungere nuove vette di successo nel mondo digitale.
            </p>
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
