<?php

    // Connessione al database
    session_start();
    $db_servername = "fdb1031.freehostingeu.com";
        $db_username = "4375090_webstar";
        $db_password = ")c(HOd1w4J43pc.!";
        $db_name = "4375090_webstar";

    // Crea la connessione
    $conn = mysqli_connect($db_servername, $db_username, $db_password, $db_name);

    // Verifica la connessione
    if (!$conn) {
        die("Connessione al database fallita: " . mysqli_connect_error());
    }

    $selectedButton = $_POST['selectedButton'];

    // Ricevi l'array di opzioni selezionate
    $selectedOptions = $_POST['selectedOptions'];

    $id_utente = $_SESSION['id_utente'];

    $cvv = $_SESSION['cvv'];
    $scadenza = $_SESSION['scadenza'];

    // Query per selezionare i dati dalla tabella utenti
    $sqlSelect = "SELECT id_utenti, nomeUtente, mail, nome, cognome, numCarta, cvv, scadenza FROM utenti WHERE id_utenti = $id_utente";

    // Esegue la query di selezione
    $result = mysqli_query($conn, $sqlSelect);

    // Inizializza la variabile $datotrovato
    $datotrovato = false;

    // Verifica se ci sono risultati
    if (mysqli_num_rows($result) > 0) {
    // Ottieni i dati dell'utente
            $row = mysqli_fetch_assoc($result);

            // Assegna i valori alle variabili
            $nomeUtente = $row['nomeUtente'];
            $mail = $row['mail'];
            $nome = $row['nome'];
            $cognome = $row['cognome'];
            $numCarta = $row['numCarta'];
            $cvv = $row['cvv'];
            $scadenza = $row['scadenza'];

            // Imposta la variabile $datotrovato su true
            $datotrovato = true;
        }else {
        echo "Nessun risultato trovato nella tabella utenti.";
    }

    if ($datotrovato){
        $sqlInsert = "INSERT INTO acquisti (id_acquisti, id_utenti, servizio, opzioni_aggiuntive, mail, nome_acquirente, cognome_acquirente, numCarta_acquirente, cvv, scadenza, data_acquisto) 
              VALUES (Null, '$id_utente', '$selectedButton', '" . implode(", ", $selectedOptions) . "','$mail', '$nome', '$cognome', '$numCarta', '$cvv', '$scadenza', NOW())";


            // Esegui la query di inserimento
            if (mysqli_query($conn, $sqlInsert)) {
                echo "<style>#div {
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
                body {
                    background-image: url(immagini/chiaroREGISTER.png);
                    height: 657px;
                }</style><div id='div'></div>";
                echo "<style>#title {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    left: 324px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 700px;
                    font-size: 50px;
                    line-height: 117px;
                    margin-top: 5px;
                    margin-bottom: 0px;
                    color: #4F5B71;
                }</style><h1 id='title'>Grazie per aver scelto WebStar</h1>";
                echo "<style>#title2 {
               		 @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    left: 589px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 700px;
                    font-size: 25px;
                    line-height: 117px;
                    margin-top: 59px;
                    margin-bottom: 0px;
                    color: #4F5B71;
                }</style><h2 id='title2'>Riepilogo dell'ordine</h2>";
                echo "<style> #info {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 700px;
                    font-size: 23px;
                    line-height: 117px;
                    margin-top: 94px;
                    margin-bottom: 0px;
                    color: #4F5B71;
                }</style><h2 id='info'>Informazioni personali:</h2>";
                echo "<style>#nome_utente {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    top: 151px;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    width: 280;
                    color: #4F5B71;
                }</style><p id='nome_utente'><u>Nome Utente</u>: " . $nomeUtente . "</p>";
                echo "<style>#nome {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    top: 172px;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    width: 280;
                    color: #4F5B71;
                }</style><p id='nome'><u>Nome</u>: " . $nome . "</p>";
                echo "<style>#cognome {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    top: 190px;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    width: 280;
                    color: #4F5B71;
                }</style><p id='cognome'><u>Cognome</u>: " . $cognome . "</p>";
                echo "<style>#mail {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    top: 212px;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    width: 919px;
                    color: #4F5B71;
                }</style><p id='mail'><u>Email</u>: " . $mail . "</p>";
                echo "<style>#ncarta {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    top: 231px;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    width: 357px;
                    color: #4F5B71;
                }</style><p id='ncarta'><u>N° Carta</u>: " . $numCarta . "</p>";
                echo "<style>#acquisti {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 700px;
                    font-size: 23px;
                    line-height: 117px;
                    margin-top: 262px;
                    margin-bottom: 0px;
                    color: #4F5B71;
                }</style><h2 id='acquisti'>Acquisti:</h2>";
                echo "<style>#cvv {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    top: 253px;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    width: 280;
                    color: #4F5B71;
                }</style><p id='cvv'><u>CVV</u>: " . $cvv . "</p>";
                echo "<style>#scadenza {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    top: 276px;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    width: 280;
                    color: #4F5B71;
                }</style><p id='scadenza'><u>Scadenza</u>: " . $scadenza . "</p>";
                echo "<style>#servizio {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    top: 330px;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    width: 333px;
                    color: #4F5B71;
                }</style><h3 id='servizio'>Servizio Scelto: " . $selectedButton . "</h3>";
                echo "<style>#optinal_title {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    left: 63px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 700px;
                    font-size: 23px;
                    line-height: 117px;
                    margin-top: 330px;
                    margin-bottom: 0px;
                    color: #4F5B71;
                }</style><h2 id='optinal_title'>Optional selezionati:</h2>";
                echo "<style>#optional_list {
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    top: 401px;
                    left: 48px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 23px;
                    color: #4F5B71;
                }</style><ul id='optional_list'>";
                foreach ($selectedOptions as $option) {
                    echo "<style>.optional {
                    	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                        margin-bottom: 10px; /* Spazio tra gli elementi dell'elenco */
                    }</style><li class='optional'>" . $option . "</li>";
                }
                echo "</ul>";
                echo "<br><style>#prezzo_finale{
                	@import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
                    position: absolute;
                    left: 403px;
                    font-family: 'IBM Plex Mono';
                    font-style: normal;
                    font-weight: 700px;
                    font-size: 23px;
                    line-height: 117px;
                    margin-top: 552px;
                    margin-bottom: 0px;
                    color: #4F5B71;
                }</style><h3 id='prezzo_finale'>Clicca pulsante per tornare alla </h3>";
                echo '<style>#buttonHOME{
                	@import url("https://fonts.cdnfonts.com/css/ibm-plex-mono-3");
                    position: absolute;
                    width: 160px;
                    height: 38px;
                    left: 873px;
                    top: 617px;
                
                    background: linear-gradient(90.86deg, rgba(255, 255, 255, 0.4) 10.67%, rgba(255, 255, 255, 0.1) 87.84%);
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    backdrop-filter: blur(20px);
                    border-radius: 40px;
                    outline: 1px solid white ;
                    border: none;
                
                
                    font-family: "IBM Plex Mono";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 31px;
                
                    color: #23334D;
                } #buttonHOME:hover{
                	@import url("https://fonts.cdnfonts.com/css/ibm-plex-mono-3");
                    outline: 1px solid white ;
                    border: none;
                    background: linear-gradient(91.65deg, rgba(35, 51, 77, 0.5) 10.61%, rgba(35, 51, 77, 0.2) 100.66%);
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    backdrop-filter: blur(20px);
                    border-radius: 40px;
                
                    font-family: "IBM Plex Mono";
                    font-style: normal;
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 31px;
                
                    color: #23334D;
                }</style><a href="index.php"><button id="buttonHOME">Home</button></a>';
            } else {
                echo "Errore durante l'inserimento dei dati nella tabella: " . mysqli_error($conn);

            }
    }
                



    // Chiudi la connessione al database
    mysqli_close($conn);
?>
