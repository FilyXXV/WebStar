<?php
    session_start();
?>

<html>
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="prodotti.css">
        <title>Servizzi</title>
        <link rel="icon" href="immagini/smallicon.png">
        <style>
            @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
        </style>
        <script src="prodotti.js"></script>
        <script>
            var nomeUtente = "<?php echo isset($_SESSION['nomeUtente']) ? $_SESSION['nomeUtente'] : ''; ?>";
            var nome = "<?php echo isset($_SESSION['nome']) ? $_SESSION['nome'] : ''; ?>";
            var cognome = "<?php echo isset($_SESSION['cognome']) ? $_SESSION['cognome'] : ''; ?>";
            var mail = "<?php echo isset($_SESSION['mail']) ? $_SESSION['mail'] : ''; ?>";
            var numCarta = "<?php echo isset($_SESSION['numCarta']) ? $_SESSION['numCarta'] : ''; ?>";
        </script>
    </head>

    <body>
        <img src="immagini/logo_website.png" alt="logo" id="logo_website">
        <div id="menu">
            <a href="index.php"><button id="buttonHOME">Home</button> </a>
            <a href="chisiamo.php"><button id="buttonCHISIAMO">Chi Siamo</button> </a>
            <a href="prodotti.php"><button id="buttonPRODOTTI">Servizi</button> </a>
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
        <div id="product">
            <button id="image_left" onclick="changeImage(-1)"><img src="immagini/image_left.png"></button>
            <button id="image_right" onclick="changeImage(1)"><img src="immagini/image_right.png"></button>
            <div id="image">
                <img src="immagini/photo1.png" alt="immagine_1" id="slide1">
                <img src="immagini/photo2.png" alt="immagine_2" id="slide1">
                <img src="immagini/photo3.png" alt="immagine_3" id="slide1">
            </div>
            <div id="dot-container">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <p id="description">Il nostro pacchetto di base offre una soluzione efficiente e conveniente per coloro che
                necessitano di un sito web di base per avviare la propria presenza online. In questo livello, ti forniremo
                un sito web professionale con un design accattivante e funzionalità essenziali. Riceverai una revisione
                principale per assicurarci che il sito soddisfi le tue esigenze iniziali.</p>
            <div id="buy">
                <button id="buttonBASE" onclick="buttonClicked('buttonBASE'); calculateTotal()"
                    class="clicked">Base</button>
                <button id="buttonSTANDARD" onclick="buttonClicked('buttonSTANDARD'); calculateTotal()">Standard</button>
                <button id="buttonPREMIUM" onclick="buttonClicked('buttonPREMIUM'); calculateTotal()">Premium</button>
            </div>
            <p id="design">Design Base:</p>
            <p id="price">40€</p>
            <ul id="short_desc">
                <li id="li7">Semplice Design</li>
                <li id="li8">2-3 Pagine</li>
                <li id="li9">Logo Personalizzato</li>
                <li id="li10">Sicurezza Base</li>
            </ul>
            <img src="immagini/clock.png" id="clock">
            <p id="time">Giorni:</p>
            <p id="time_num">30</p>
            <img src="immagini/revision.png" id="arrows">
            <p id="revision">Revisioni:</p>
            <p id="rev_num">1</p>
            <img src="immagini/separatore.png" id="separatore1">
            <p id="opz_aggiutive">Opzioni Aggiuntive</p>
            <img src="immagini/separatore.png" id="separatore2">
            <?php
                if(isset($_SESSION['nomeUtente'])) {
                    // Se l'utente è loggato, mostra il pulsante "Acquista"
                    echo '<form><button id="buttonBUY" onclick="acquista()">Acquista</button></form>';
                } else {
                    // Se l'utente non è loggato, reindirizzalo alla pagina di login
                    echo '<button id="buttonBUY" onclick="registrati()">Acquista</button>';
                   // Assicura che lo script si interrompa dopo il reindirizzamento
                }
            ?>
            <img src="immagini/buy.png" id="img_buy">
            <ul id="optional">
                <li class="option" id="li1">Search Engine Optimization</li>
                <button id="confirm2" onclick="optionClicked('confirm2'); calculateTotal()">
                    <img src="immagini/check.png">
                </button>
                <li class="option" id="li2">Hosting</li>
                <button id="confirm3" onclick="optionClicked('confirm3'); calculateTotal()">
                    <img src="immagini/check.png">
                </button>
                <li class="option" id="li3">Manutenzione Periodica</li>
                <button id="confirm4" onclick="optionClicked('confirm4'); calculateTotal()">
                    <img src="immagini/check.png">
                </button>
                <li class="option" id="li4">Servizi Chat in Tempo Reale</li>
                <button id="confirm5" onclick="optionClicked('confirm5'); calculateTotal()">
                    <img src="immagini/check.png">
                </button>
                <li class="option" id="li5">Gestione delle Newsletter</li>
                <button id="confirm6" onclick="optionClicked('confirm6'); calculateTotal()">
                    <img src="immagini/check.png">
                </button>
                <li class="option" id="li6">Servizi di Traduzione</li>
                <button id="confirm7" onclick="optionClicked('confirm7'); calculateTotal()">
                    <img src="immagini/check.png">
                </button>
            </ul>
            <p id="total">Totale:</p>
            <p id="final_price">40€</p>
        </div>
        <div id="table">
            <p id="packeges">Pacchetti:</p>
            <p id="base">Base:</p>
            <p id="standard">Standard:</p>
            <p id="premium">Premium:</p>

            <div id="yes">
                <img src="immagini/no.png" id="checkyes1">
                <img src="immagini/notincluded.png" id="checkyes2">
                <img src="immagini/yes.png" id="checkyes3">
                <img src="immagini/notincluded.png" id="checkyes4">
                <img src="immagini/notincluded.png" id="checkyes5">
                <img src="immagini/no.png" id="checkyes6">
                <img src="immagini/yes.png" id="checkyes7">
                <img src="immagini/no.png" id="checkyes8">
                <img src="immagini/no.png" id="checkyes9">
                <img src="immagini/notincluded.png" id="checkyes10">
                <img src="immagini/yes.png" id="checkyes11">
                <img src="immagini/no.png" id="checkyes12">
                <img src="immagini/notincluded.png" id="checkyes13">
                <img src="immagini/no.png" id="checkyes14">
                <img src="immagini/yes.png" id="checkyes15">
                <img src="immagini/notincluded.png" id="checkyes16">
            </div>
            <div id="optionals">
                <img src="immagini/no.png" id="notincluded1">
                <img src="immagini/notincluded.png" id="notincluded2">
                <img src="immagini/yes.png" id="notincluded3">
                <img src="immagini/notincluded.png" id="notincluded4">
                <img src="immagini/notincluded.png" id="notincluded5">
                <img src="immagini/yes.png" id="notincluded6">
                <img src="immagini/yes.png" id="notincluded7">
                <img src="immagini/yes.png" id="notincluded8">
                <img src="immagini/yes.png" id="notincluded9">
                <img src="immagini/notincluded.png" id="notincluded10">
                <img src="immagini/yes.png" id="notincluded11">
                <img src="immagini/yes.png" id="notincluded12">
                <img src="immagini/notincluded.png" id="notincluded13">
                <img src="immagini/yes.png" id="notincluded14">
                <img src="immagini/yes.png" id="notincluded15">
                <img src="immagini/notincluded.png" id="notincluded16">

            </div>
            <div id="no">
                <img src="immagini/yes.png" id="checkno1">
                <img src="immagini/notincluded.png" id="checkno2">
                <img src="immagini/yes.png" id="checkno3">
                <img src="immagini/notincluded.png" id="checkno4">
                <img src="immagini/notincluded.png" id="checkno5">
                <img src="immagini/yes.png" id="checkno6">
                <img src="immagini/yes.png" id="checkno7">
                <img src="immagini/yes.png" id="checkno8">
                <img src="immagini/yes.png" id="checkno9">
                <img src="immagini/notincluded.png" id="checkno10">
                <img src="immagini/yes.png" id="checkno11">
                <img src="immagini/yes.png" id="checkno12">
                <img src="immagini/notincluded.png" id="checkno13">
                <img src="immagini/yes.png" id="checkno14">
                <img src="immagini/yes.png" id="checkno15">
                <img src="immagini/notincluded.png" id="checkno16">
            </div>
            <img src="immagini/separatore.png" id="separatore3">
            <img src="immagini/separatore.png" id="separatore4">
            <p id="price">Prezzo:</p>
            <p id="baseprice">40€:</p>
            <p id="standardprice">60€:</p>
            <p id="premiumprice">100€:</p>
            <p id="additional_price1">+20€</p>
            <p id="additional_price2">+10€</p>
            <p id="additional_price3">+30€</p>
            <p id="additional_price4">+10€</p>
            <p id="additional_price5">+50€</p>
            <p id="additional_price6">+40€</p>
            <p id="optiontext">Consegna Rapida<br>Hosting<br>Servizi di Branding<br>Servizzi di Traduzione<br>Search Engine
                Optimization<br>Immagini 3D<br>Integrazione Social Media<br>Grafica Animata<br>Sicurezza
                Avanzata<br>Manutenzione Periodica<br>Inserisci Publicità<br>Visualizzazione Mobile<br>Servizi Chat in Tempo
                Reale<br>Servizio di Backup<br>Rimborso entro 1 mese<br>Gestione delle Newsletter<br></p>
            <img src="immagini/yes.png" id="checkyes0">
            <p id="yes0">:Yes</p>
            <img src="immagini/no.png" id="checkno0">
            <p id="no0">:No</p>
            <img src="immagini/notincluded.png" id="notincluded0">
            <p id="optional0">:Buy separately</p>
        </div>
        <div id="comments">
            <p id="recensioni">Recensioni</p>
            <img src="immagini/user.png" alt="" id="usernameimg1">
            <p id="username1">F******</p>
            <p id="usernametext1">WebStar ha fatto un ottimo lavoro nel realizzare il mio sito. Consigliatissimi!</p>
            <img src="immagini/user.png" alt="" id="usernameimg2">
            <p id="username2">A****</p>
            <p id="usernametext2">Servizio eccellente! Il team di WebStar ha creato un sito web straordinario per il mio
                business. Consigliatissimi!</p>
            <img src="immagini/user.png" alt="" id="usernameimg3">
            <p id="username3">C****</p>
            <p id="usernametext3">Sito web perfetto! Grazie, WebStar!</p>
            <img src="immagini/user.png" alt="" id="usernameimg4">
            <p id="username4">G*******</p>
            <p id="usernametext4">Efficienti e competenti! WebStar ha superato le mie aspettative nel creare il mio sito
                web. Davvero soddisfatto! Grazie Mille :D</p>
            <img src="immagini/user.png" alt="" id="usernameimg5">
            <p id="username5">T****</p>
            <p id="usernametext5">WebStar ha fatto un ottimo lavoro nel realizzare il mio sito.</p>
            <img src="immagini/user.png" alt="" id="usernameimg6">
            <p id="username6">L****</p>
            <p id="usernametext6">Professionali e veloci. Ottimo lavoro!</p>
            <img src="immagini/user.png" alt="" id="usernameimg7">
            <p id="username7">S***</p>
            <p id="usernametext7">Grazie a WebStar ho ora un sito web di alta qualità che rispecchia perfettamente il mio
                brand. Felicissimo del risultato!</p>
            <img src="immagini/user.png" alt="" id="usernameimg8">
            <p id="username8">M******</p>
            <p id="usernametext8">Soddisfatto al 100%! WebStar ha creato il mio sito web in modo rapido e preciso. </p>
        </div>
        <div id="info">
            <p id="infotext">Hai qualcosa da chiederci?<br>scrivici è risponderemo a tutte le vostre domande!</p>
            <img src="immagini/messages.png" alt="" id="messages">
        </div>
        <div id="end">
            <a href="https://maps.app.goo.gl/52s91kwjmE1MR9Wt8"><p id="address">Indirizzo:<u> Corso dei Mille 176, Palermo PA 90100, IT</u></p></a>
            <p id="phone">Numero: +39 3383687855</p>
            <p id="mail">E-Mail: info@webstar.com</p>
            <a href="#" id="go_up"><img src="immagini/go_up.png"></a>
            <p id="credit">MADE BY CUSUMANO FILIPPO KAROL <br>
                © Website created for educational reasons and not for commercial purposes ©
            </p>
            <img src="immagini/logo_planet.png" id="logo_planet">
            <a href="index.php"><img src="immagini/logo_star.png" id="logo_star"></a>
        </div>
    </body>
</html>