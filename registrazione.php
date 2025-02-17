<?php
session_start();
$usr=$_POST['nomeUtente'];
$psw=$_POST['psw'];
$mail=$_POST['mail'];
$nome=$_POST['nome'];
$cognome=$_POST['cognome'];
$numCarta=$_POST['numCarta'];
$cvv=$_POST['cvv'];
$scadenza=$_POST['scadenza'];

$salt = random_int(1, 1000000000);
$db_servername = "fdb1031.freehostingeu.com";
$db_username = "4375090_webstar";
$db_password = ")c(HOd1w4J43pc.!";
$db_name = "4375090_webstar";

$conn= mysqli_connect($db_servername,$db_username,$db_password,$db_name);

$usrDisponibile = true;
$sql="SELECT nomeUtente FROM utenti WHERE nomeUtente = '$usr'";
$risultato = mysqli_query($conn,$sql);
if(mysqli_num_rows($risultato) > 0 ){
    $usrDisponibile = false;
}

if($usrDisponibile){
    $psw = $psw . $salt;
    $psw = md5($psw);
    $sql="INSERT INTO utenti (id_utenti, nomeUtente, psw, mail, nome, cognome, numCarta, cvv, scadenza, salt) VALUES (Null, '$usr', '$psw', '$mail', '$nome', '$cognome', '$numCarta', '$cvv', '$scadenza', '$salt')";
    if(mysqli_query($conn,$sql)){
        $_SESSION['nomeUtente']=$usr;
        $_SESSION['mail']=$mail;
        $_SESSION['nome']=$nome;
        $_SESSION['cognome']=$cognome;
        $_SESSION['numCarta']=$numCarta;
        $_SESSION['cvv']=$cvv;
        $_SESSION['scadenza']=$scadenza;
        $_SESSION['id_utente'] = mysqli_insert_id($conn);
        echo "<style>
        @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
        body {
            background-image: url(immagini/chiaroREGISTER.png);
            height: 657px;
        }
        #registrato{
            position: absolute;
            top: 220px;
            left: 419px;
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 30px;
            display: flex;
            align-items: center;
            text-align: justify;
            color: #4F5B71;
            width: 627px;
            height: 100px;
        }
        #divregistrato{
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
            <div id='divregistrato'><p id='registrato'><br>Nuovo record creato con successo: nuovo utente registrato!<br></p></div>";

    
    }
    else{
        echo "ERRORE: " .$sql . "<br>" .mysqli_error($conn);
    }
}
else{
    echo"
        <br>
        <style>
        @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
            body {
                background-image: url(immagini/chiaroREGISTER.png);
                height: 657px;
            }
            #text{
                position: absolute;
                top: 234px;
                left: 480px;
                font-family: 'IBM Plex Mono';
                font-style: normal;
                font-weight: 700;
                font-size: 18px;
                line-height: 30px;
                display: flex;
                align-items: center;
                text-align: justify;
                color: #4F5B71;
                width: 510px;
                height: 100px;
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
        <div id='container'>
            <p id='text'>SPIACENTE! Nome Utente già utilizzato! <a href='register.php'>RIPROVA</a></p>
        </div>"
    ;
}
mysqli_close($conn);
?>
<br><a href="index.php" id="login">
<style>
    #login{
        position: absolute;
        top: 349px;
        left: 676px;
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
        display: flex;
        align-items: center;
        text-align: justify;
        color: #4F5B71;
        width: 151px;
        height: 40px;
    }
</style>VAI ALLA HOME </a>
</body>
</html>
