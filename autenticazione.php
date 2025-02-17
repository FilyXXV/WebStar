<?php
session_start();
$usr = $_POST['nomeUtente'];
$psw = $_POST['psw'];

$db_servername = "fdb1031.freehostingeu.com";
$db_username = "4375090_webstar";
$db_password = ")c(HOd1w4J43pc.!";
$db_name = "4375090_webstar";

$conn = mysqli_connect($db_servername, $db_username, $db_password, $db_name);


$usrRiconosciuto = false;
$sql = "SELECT id_utenti, nomeUtente, psw, mail, nome, cognome, numCarta, cvv, scadenza, salt FROM utenti";
$risultato = mysqli_query($conn, $sql);
if (mysqli_num_rows($risultato) > 0) {
    while ($riga = mysqli_fetch_assoc($risultato)) {
        $pswSalt = $psw . $riga["salt"];
        $pswSalt = md5($pswSalt);
        if (($riga['nomeUtente'] == $usr) && ($riga['psw'] == $pswSalt)) {
            $usrRiconosciuto = true;
        
            // Imposta le variabili di sessione
            $_SESSION['nomeUtente'] = $usr;
            $_SESSION['mail'] = $riga['mail'];
            $_SESSION['nome'] = $riga['nome'];
            $_SESSION['cognome'] = $riga['cognome'];
            $_SESSION['numCarta'] = $riga['numCarta'];
            $_SESSION['cvv'] = $riga['cvv'];
            $_SESSION['scadenza'] = $riga['scadenza'];
        
            // Verifica se la chiave "id_utenti" esiste nell'array $riga prima di accedere ad essa
            if (isset($riga['id_utenti'])) {
                $_SESSION['id_utente'] = $riga['id_utenti'];
            } else {
                // Gestisci il caso in cui la chiave "id_utenti" non esiste nell'array
                echo "Errore: chiave 'id_utenti' non presente nell'array.";
            }
        }
        
    }
} else {
    echo "<br>0 risultati";
}

mysqli_close($conn);

if ($usrRiconosciuto) {
    echo '<style>
            @import url("https://fonts.cdnfonts.com/css/ibm-plex-mono-3");
            #h1{
                position: absolute;
                top: 242px;
                left: 684px;
                font-family: "IBM Plex Mono";
                font-style: normal;
                font-weight: 700;
                font-size: 27px;
                line-height: 30px;
                display: flex;
                align-items: center;
                text-align: justify;
                color: #4F5B71;
                width: 134px;
                height: 13px;
                z-index: 1;
            }
        </style><h1 id="h1">LOGIN OK</h1>';
    echo '<style>
            #text{
                position: absolute;
                top: 319px;
                left: 497px;
                font-family: "IBM Plex Mono";
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 30px;
                display: flex;
                align-items: center;
                text-align: justify;
                color: #4F5B71;
                width: 519px;
                height: 21px;
                z-index: 1;
            }
        </style>
        <p id="text">Nome Utente e Password sono corretti, benvenuto! <br/>';
    echo '<style>
            @import url("https://fonts.cdnfonts.com/css/ibm-plex-mono-3");
            body {
                background-image: url(immagini/chiaroREGISTER.png);
                height: 657px;
            }
            #entra{
                position: absolute;
                top: 320px;
                left: 673px;
                font-family: "IBM Plex Mono";
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 30px;
                display: flex;
                align-items: center;
                text-align: justify;
                color: #4F5B71;
                width: 54px;
                height: 30px;
            }
            #container{
                position: absolute;
                width: 1461px;
                height: 641px;
                left: 40px;
                top: 39px;
                background: linear-gradient(90.86deg, rgba(255, 255, 255, 0.4) 10.67%, rgba(255, 255, 255, 0.1) 87.84%);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                backdrop-filter: blur(20px);
                border-radius: 40px;
                outline: 1px solid white;
                border: none;
            }
        </style>
        <div id="container"><a href="index.php" id="entra">ENTRA</a></div>';
        
} else {
    echo '<style>
            @import url("https://fonts.cdnfonts.com/css/ibm-plex-mono-3");
            #h1errore{
                position: absolute;
                top: 243px;
                left: 644px;
                font-family: "IBM Plex Mono";
                font-style: normal;
                font-weight: 700;
                font-size: 27px;
                line-height: 30px;
                display: flex;
                align-items: center;
                text-align: justify;
                color: #4F5B71;
                width: 213px;
                height: 13px;
                z-index: 1;
            }
        </style><h1 id="h1errore">LOGIN ERRORE</h1>';
    echo '<style>
            #texterrore{
                position: absolute;
    top: 290px;
    left: 409px;
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: justify;
    color: #4F5B71;
    width: 738px;
    height: 21px;
    z-index: 1;
            }
        </style>
        <p id="texterrore">Nome Utente e Password NON sono corretti oppure NON sei registrato<br/>';
    echo '<style>
            @import url("https://fonts.cdnfonts.com/css/ibm-plex-mono-3");
            body {
                background-image: url(immagini/chiaroREGISTER.png);
                height: 657px;
            }
            #entra{
                    position: absolute;
                    top: 320px;
                    left: 597px;
                    font-family: "IBM Plex Mono";
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 30px;
                    display: flex;
                    align-items: center;
                    text-align: justify;
                    color: #4F5B71;
                    width: 54px;
                    height: 30px;
            }
            #entra2{
                  position: absolute;
            	top: 302px;
            	left: 690px;
            	font-family: "IBM Plex Mono";
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 30px;
            display: flex;
            align-items: center;
            text-align: justify;
            color: #4F5B71;
            width: 54px;
            height: 30px;
            }
            #entra3{
                position: absolute;
    top: 320px;
    left: 717px;
    font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: justify;
    color: #4F5B71;
    width: 54px;
    height: 30px;
            }
            #container{
                position: absolute;
                width: 1461px;
                height: 641px;
                left: 40px;
                top: 39px;
                background: linear-gradient(90.86deg, rgba(255, 255, 255, 0.4) 10.67%, rgba(255, 255, 255, 0.1) 87.84%);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                backdrop-filter: blur(20px);
                border-radius: 40px;
                outline: 1px solid white;
                border: none;
            }
        </style>
        <div id="container"><a href="login.php" id="entra">RIPROVA</a> <p id="entra2"> o </p> <a href="register.php" id="entra3">REGISTRATI</a></div>';
}
?>
</body>
</html>
