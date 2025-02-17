function buttonClicked(clickedButtonId) {
    // Rimuovi la classe "clicked" da tutti i pulsanti
    document.getElementById("buttonBASE").classList.remove("clicked");
    document.getElementById("buttonSTANDARD").classList.remove("clicked");
    document.getElementById("buttonPREMIUM").classList.remove("clicked");

    // Aggiungi la classe "clicked" al pulsante cliccato
    document.getElementById(clickedButtonId).classList.add("clicked");

    // Cambia il testo della descrizione in base al pulsante cliccato
    changeDescription(clickedButtonId);
}

function changeDescription(buttonId) {
    var Translation = document.getElementById('change_language').value;

    switch (buttonId) {
        case "buttonBASE":
            switch (Translation) {
                case 'it':
                    document.getElementById("description").innerHTML = "Il nostro pacchetto di base offre una soluzione efficiente e conveniente per coloro che necessitano di un sito web di base per avviare la propria presenza online. In questo livello, ti forniremo un sito web professionale con un design accattivante e funzionalità essenziali. Riceverai una revisione principale per assicurarci che il sito soddisfi le tue esigenze iniziali.";
                    document.getElementById("design").innerHTML = "Design Base:";
                    document.getElementById("price").innerHTML = "40€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Semplice Design</li><li id='li8'>2-3 Pagine</li><li id='li9'>Logo Personalizzato</li><li id='li10'>Sicurezza Base</li>";
                    document.getElementById("rev_num").innerHTML = "1";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
                case 'en':
                    document.getElementById("description").innerHTML = "Our basic package offers an efficient and affordable solution for those in need of a basic website to kickstart their online presence. At this level, we will provide you with a professional website featuring an attractive design and essential functionality. You'll receive a primary review to ensure the site meets your initial requirements.";
                    document.getElementById("design").innerHTML = "Basic Design:";
                    document.getElementById("price").innerHTML = "$40";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Simple Design</li><li id='li8'>2-3 Pages</li><li id='li9'>Custom Logo</li><li id='li10'>Basic Security</li>";
                    document.getElementById("rev_num").innerHTML = "1";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
                case 'es':
                    document.getElementById("description").innerHTML = "Nuestro paquete básico ofrece una solución eficiente y asequible para aquellos que necesitan un sitio web básico para iniciar su presencia en línea. En este nivel, te proporcionaremos un sitio web profesional con un diseño atractivo y funcionalidad esencial. Recibirás una revisión principal para asegurarte de que el sitio cumpla con tus requisitos iniciales.";
                    document.getElementById("design").innerHTML = "Diseño Básico:";
                    document.getElementById("price").innerHTML = "40€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Diseño Simple</li><li id='li8'>2-3 Páginas</li><li id='li9'>Logotipo Personalizado</li><li id='li10'>Seguridad Básica</li>";
                    document.getElementById("rev_num").innerHTML = "1";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
                case 'fr':
                    document.getElementById("description").innerHTML = "Notre forfait de base offre une solution efficace et abordable pour ceux qui ont besoin d'un site web de base pour démarrer leur présence en ligne. À ce niveau, nous vous fournirons un site web professionnel doté d'un design attrayant et de fonctionnalités essentielles. Vous recevrez une révision principale pour vous assurer que le site répond à vos besoins initiaux.";
                    document.getElementById("design").innerHTML = "Design de Base :";
                    document.getElementById("price").innerHTML = "40€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Design Simple</li><li id='li8'>2-3 Pages</li><li id='li9'>Logo Personnalisé</li><li id='li10'>Sécurité de Base</li>";
                    document.getElementById("rev_num").innerHTML = "1";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
                case 'de':
                    document.getElementById("description").innerHTML = "Unser Basispaket bietet eine effiziente und kostengünstige Lösung für diejenigen, die eine grundlegende Website benötigen, um ihre Online-Präsenz zu starten. Auf diesem Niveau werden wir Ihnen eine professionelle Website mit einem ansprechenden Design und wesentlicher Funktionalität zur Verfügung stellen. Sie erhalten eine Hauptüberprüfung, um sicherzustellen, dass die Website Ihren anfänglichen Anforderungen entspricht.";
                    document.getElementById("design").innerHTML = "Grundlegendes Design:";
                    document.getElementById("price").innerHTML = "40€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Einfaches Design</li><li id='li8'>2-3 Seiten</li><li id='li9'>Benutzerdefiniertes Logo</li><li id='li10'>Grundlegende Sicherheit</li>";
                    document.getElementById("rev_num").innerHTML = "1";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
            }

            break;
        case "buttonSTANDARD":
            switch (Translation) {
                case 'it':
                    document.getElementById("description").innerHTML = "Il nostro pacchetto standard è perfetto per coloro che cercano un sito web più completo con funzionalità aggiuntive. Ti offriamo un design professionale, un numero maggiore di pagine e una sicurezza avanzata per garantire una presenza online sicura e affidabile.";
                    document.getElementById("design").innerHTML = "Design Standard:";
                    document.getElementById("price").innerHTML = "60€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Design Professionale</li><li id='li8'>4-6 Pagine</li><li id='li9'>Logo Personalizzato</li><li id='li10'>Sicurezza Avanzata</li>";
                    document.getElementById("rev_num").innerHTML = "3";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
                case 'en':
                    document.getElementById("description").innerHTML = "Our standard package is perfect for those looking for a more comprehensive website with additional features. We offer you a professional design, a greater number of pages, and advanced security to ensure a safe and reliable online presence.";
                    document.getElementById("design").innerHTML = "Standard Design:";
                    document.getElementById("price").innerHTML = "€60";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Professional Design</li><li id='li8'>4-6 Pages</li><li id='li9'>Custom Logo</li><li id='li10'>Advanced Security</li>";
                    document.getElementById("rev_num").innerHTML = "3";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
                case 'es':
                    document.getElementById("description").innerHTML = "Nuestro paquete estándar es perfecto para aquellos que buscan un sitio web más completo con funciones adicionales. Te ofrecemos un diseño profesional, un mayor número de páginas y una seguridad avanzada para garantizar una presencia en línea segura y confiable.";
                    document.getElementById("design").innerHTML = "Diseño Estándar:";
                    document.getElementById("price").innerHTML = "60€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Diseño Profesional</li><li id='li8'>4-6 Páginas</li><li id='li9'>Logotipo Personalizado</li><li id='li10'>Seguridad Avanzada</li>";
                    document.getElementById("rev_num").innerHTML = "3";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
                case 'fr':
                    document.getElementById("description").innerHTML = "Notre forfait standard est parfait pour ceux qui recherchent un site Web plus complet avec des fonctionnalités supplémentaires. Nous vous proposons un design professionnel, un plus grand nombre de pages et une sécurité avancée pour garantir une présence en ligne sûre et fiable.";
                    document.getElementById("design").innerHTML = "Design Standard :";
                    document.getElementById("price").innerHTML = "60€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Design Professionnel</li><li id='li8'>4-6 Pages</li><li id='li9'>Logo Personnalisé</li><li id='li10'>Sécurité Avancée</li>";
                    document.getElementById("rev_num").innerHTML = "3";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
                case 'de':
                    document.getElementById("description").innerHTML = "Unser Standardpaket ist perfekt für diejenigen, die eine umfassendere Website mit zusätzlichen Funktionen suchen. Wir bieten Ihnen ein professionelles Design, eine größere Anzahl von Seiten und erweiterte Sicherheit, um eine sichere und zuverlässige Online-Präsenz zu gewährleisten.";
                    document.getElementById("design").innerHTML = "Standarddesign:";
                    document.getElementById("price").innerHTML = "60€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Professionelles Design</li><li id='li8'>4-6 Seiten</li><li id='li9'>Benutzerdefiniertes Logo</li><li id='li10'>Erweiterte Sicherheit</li>";
                    document.getElementById("rev_num").innerHTML = "3";
                    document.getElementById("time_num").innerHTML = "30";
                    break;
            }
            break;
        case "buttonPREMIUM":
            switch (Translation) {
                case 'it':
                    document.getElementById("description").innerHTML = "Con il nostro pacchetto premium, ti offriamo la massima personalizzazione e funzionalità. Avrai un design completamente personalizzato, un numero illimitato di pagine e una sicurezza premium per proteggere il tuo sito da qualsiasi minaccia online.";
                    document.getElementById("design").innerHTML = "Design Premium:";
                    document.getElementById("price").innerHTML = "100€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Design Personalizzato</li><li id='li8'>Pagine Illimitate</li><li id='li9'>Logo Premium</li><li id='li10'>Sicurezza Premium</li>";
                    document.getElementById("rev_num").innerHTML = "5";
                    document.getElementById("time_num").innerHTML = "15";
                    break;
                case 'en':
                    document.getElementById("description").innerHTML = "With our premium package, we offer maximum customization and functionality. You'll have a completely customized design, an unlimited number of pages, and premium security to protect your site from any online threats.";
                    document.getElementById("design").innerHTML = "Premium Design:";
                    document.getElementById("price").innerHTML = "100€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Customized Design</li><li id='li8'>Unlimited Pages</li><li id='li9'>Premium Logo</li><li id='li10'>Premium Security</li>";
                    document.getElementById("rev_num").innerHTML = "5";
                    document.getElementById("time_num").innerHTML = "15";
                    break;
                case 'es':
                    document.getElementById("description").innerHTML = "Con nuestro paquete premium, ofrecemos máxima personalización y funcionalidad. Tendrás un diseño completamente personalizado, un número ilimitado de páginas y seguridad premium para proteger tu sitio de cualquier amenaza en línea.";
                    document.getElementById("design").innerHTML = "Diseño Premium:";
                    document.getElementById("price").innerHTML = "100€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Diseño Personalizado</li><li id='li8'>Páginas Ilimitadas</li><li id='li9'>Logotipo Premium</li><li id='li10'>Seguridad Premium</li>";
                    document.getElementById("rev_num").innerHTML = "5";
                    document.getElementById("time_num").innerHTML = "15";
                    break;
                case 'fr':
                    document.getElementById("description").innerHTML = "Avec notre forfait premium, nous offrons une personnalisation et une fonctionnalité maximales. Vous aurez un design entièrement personnalisé, un nombre illimité de pages et une sécurité premium pour protéger votre site contre toutes les menaces en ligne.";
                    document.getElementById("design").innerHTML = "Design Premium:";
                    document.getElementById("price").innerHTML = "100€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Design Personnalisé</li><li id='li8'>Pages Illimitées</li><li id='li9'>Logo Premium</li><li id='li10'>Sécurité Premium</li>";
                    document.getElementById("rev_num").innerHTML = "5";
                    document.getElementById("time_num").innerHTML = "15";
                    break;
                case 'de':
                    document.getElementById("description").innerHTML = "Mit unserem Premium-Paket bieten wir maximale Anpassungsfähigkeit und Funktionalität. Sie erhalten ein vollständig individuelles Design, eine unbegrenzte Anzahl von Seiten und Premium-Sicherheit, um Ihre Website vor jeglichen Online-Bedrohungen zu schützen.";
                    document.getElementById("design").innerHTML = "Premium-Design:";
                    document.getElementById("price").innerHTML = "100€";
                    document.getElementById("short_desc").innerHTML = "<li id='li7'>Individuelles Design</li><li id='li8'>Unbegrenzte Seiten</li><li id='li9'>Premium-Logo</li><li id='li10'>Premium-Sicherheit</li>";
                    document.getElementById("rev_num").innerHTML = "5";
                    document.getElementById("time_num").innerHTML = "15";
                    break;
            }
            break;
        default:
            break;
    }
}



function optionClicked(confirmId) {
    var button = document.getElementById(confirmId);
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
    } else {
        button.classList.add("selected");
    }
}


// Variabili globali per tenere traccia dell'indice dell'immagine corrente e del timer per l'animazione
var currentIndex = 0; // Indice dell'immagine attualmente visualizzata
var timer; // Timer per l'animazione automatica

// Quando il documento è stato completamente caricato, avviamo la visualizzazione dell'immagine corrente e avviamo il timer per l'animazione automatica
document.addEventListener("DOMContentLoaded", function () {
    showImage(currentIndex); // Mostra l'immagine corrente all'avvio
    startTimer(); // Avvia il timer per l'animazione automatica
});

// Funzione per cambiare l'immagine visualizzata in base alla direzione specificata (avanti o indietro)
function changeImage(direction) {
    // Incrementiamo o decrementiamo l'indice dell'immagine corrente in base alla direzione
    currentIndex += direction;
    // Visualizziamo l'immagine corrispondente all'indice aggiornato
    showImage(currentIndex);
    // Riavviamo il timer per continuare l'animazione automatica
    restartTimer();
}

// Funzione per visualizzare un'immagine specifica e aggiornare lo stato attivo dei punti corrispondenti
function showImage(index) {
    // Selezioniamo tutte le immagini e tutti i punti
    const images = document.querySelectorAll('#image img');
    const dots = document.querySelectorAll('.dot');

    // Assicuriamoci che l'indice rimanga all'interno dei limiti delle immagini
    if (index < 0) {
        currentIndex = images.length - 1;
    } else if (index >= images.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Iteriamo su tutte le immagini e i punti
    for (let i = 0; i < images.length; i++) {
        // Determiniamo se l'immagine corrente è quella da visualizzare
        const isActive = i === currentIndex;
        // Aggiungiamo o rimuoviamo la classe 'active' direttamente sull'elemento corrente
        images[i].classList.toggle('active', isActive);
        dots[i].classList.toggle('active', isActive);
    }
}

// Funzione per avviare il timer per l'animazione automatica
function startTimer() {
    // Utilizziamo setInterval per chiamare la funzione changeImage ogni 3000 millisecondi (3 secondi)
    timer = setInterval(function () {
        changeImage(1); // Passiamo 1 come direzione per passare all'immagine successiva
    }, 3000);
}

// Funzione per riavviare il timer
function restartTimer() {
    // Prima di riavviare il timer, lo cancelliamo per evitare sovrapposizioni
    clearInterval(timer);
    // Poi avviamo nuovamente il timer
    startTimer();
}




function changeText() {
    var selectedValue = document.getElementById('change_language').value;

    switch (selectedValue) {
        case 'it':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Chi Siamo';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Servizi';
            document.getElementById('revision').innerHTML = 'Revisioni:';
            document.getElementById('time').innerHTML = 'Giorni:';
            document.getElementById('opz_aggiutive').innerHTML = 'Opzioni Aggiuntive';
            document.getElementById('li3').innerHTML = 'Manutenzione Periodica';
            document.getElementById('li4').innerHTML = 'Servizi Chat in Tempo Reale';
            document.getElementById('li5').innerHTML = 'Gestione delle Newsletter';
            document.getElementById('li6').innerHTML = 'Servizi di Traduzione';
            document.getElementById('buttonBUY').innerHTML = 'Acquista';
            document.getElementById('total').innerHTML = 'Totale:';
            document.getElementById('optiontext').innerHTML = 'Consegna Rapida<br>Hosting<br>Servizi di Branding<br>Servizzi di Traduzione<br>Search Engine Optimization<br>Immagini 3D<br>Integrazione Social Media<br>Grafica Animata<br>Sicurezza Avanzata<br>Manutenzione Periodica<br>Inserisci Publicità<br>Visualizzazione Mobile<br>Servizi Chat in Tempo Reale<br>Servizio di Backup<br>Rimborso entro 1 mese<br>Gestione delle Newsletter<br>';
            document.getElementById('infotext').innerHTML = 'Hai qualcosa da chiederci?<br>scrivici è risponderemo a tutte le vostre domande!';
            document.getElementById('address').innerHTML = 'Indirizzo:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Numero: +39 3383687855';
            document.getElementById('recensioni').innerHTML = 'Recensioni';
            break;
        case 'en':
            document.getElementById('buttonCHISIAMO').innerHTML = 'About Us';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('revision').innerHTML = 'Revisions:';
            document.getElementById('time').innerHTML = 'Days:';
            document.getElementById('opz_aggiutive').innerHTML = 'Additional Options';
            document.getElementById('li3').innerHTML = 'Periodic Maintenance';
            document.getElementById('li4').innerHTML = 'Real-Time Chat Services';
            document.getElementById('li5').innerHTML = 'Newsletter Management';
            document.getElementById('li6').innerHTML = 'Translation Services';
            document.getElementById('buttonBUY').innerHTML = 'Buy';
            document.getElementById('total').innerHTML = 'Total:';
            document.getElementById('optiontext').innerHTML = 'Fast Delivery<br>Hosting<br>Branding Services<br>Translation Services<br>Search Engine Optimization<br>3D Images<br>Social Media Integration<br>Animated Graphics<br>Advanced Security<br>Periodic Maintenance<br>Ad Insertion<br>Mobile Display<br>Real-Time Chat Services<br>Backup Service<br>1-Month Refund<br>Newsletter Management<br>';
            document.getElementById('infotext').innerHTML = 'Do you have any questions?<br>Write to us and we will respond to all your inquiries!';
            document.getElementById('address').innerHTML = 'Address:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Phone: +39 3383687855';
			document.getElementById('recensioni').innerHTML = 'Reviews';
            break;

        case 'es':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Nosotros';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Servicios';
            document.getElementById('revision').innerHTML = 'Revisiones:';
            document.getElementById('time').innerHTML = 'Días:';
            document.getElementById('opz_aggiutive').innerHTML = 'Opciones Adicionales';
            document.getElementById('li3').innerHTML = 'Mantenimiento Periódico';
            document.getElementById('li4').innerHTML = 'Chat en Tiempo Real';
            document.getElementById('li5').innerHTML = 'Gestión de Boletines';
            document.getElementById('li6').innerHTML = 'Servicios de Traducción';
            document.getElementById('buttonBUY').innerHTML = 'Comprar';
            document.getElementById('total').innerHTML = 'Total:';
            document.getElementById('optiontext').innerHTML = 'Entrega Rápida<br>Hosting<br>Servicios de Branding<br>Servicios de Traducción<br>Optimización SEO<br>Imágenes 3D<br>Redes Sociales<br>Gráficos Animados<br>Seguridad Avanzada<br>Mantenimiento Periódico<br>Inserción de Anuncios<br>Visualización en Móviles<br>Chat en Vivo<br>Servicio de Respaldo<br>Reembolso de 1 Mes<br>Gestión de Boletines<br>';
            document.getElementById('infotext').innerHTML = '¿Tienes alguna pregunta?<br>¡Escríbenos y responderemos todas tus consultas!';
            document.getElementById('address').innerHTML = 'Dirección:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Teléfono: +39 3383687855';
            document.getElementById('recensioni').innerHTML = 'Opiniones';
            break;
        case 'fr':
            document.getElementById('buttonCHISIAMO').innerHTML = 'À propos';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('revision').innerHTML = 'Révisions:';
            document.getElementById('time').innerHTML = 'Jours:';
            document.getElementById('opz_aggiutive').innerHTML = 'Options Additionnelles';
            document.getElementById('li3').innerHTML = 'Maintenance Périodique';
            document.getElementById('li4').innerHTML = 'Chat en Temps Réel';
            document.getElementById('li5').innerHTML = 'Gestion des Bulletins';
            document.getElementById('li6').innerHTML = 'Services de Traduction';
            document.getElementById('buttonBUY').innerHTML = 'Acheter';
            document.getElementById('total').innerHTML = 'Total:';
            document.getElementById('optiontext').innerHTML = 'Livraison Rapide<br>Hébergement<br>Services de Marque<br>Services de Traduction<br>Optimisation SEO<br>Images 3D<br>Intégration Réseaux Sociaux<br>Graphiques Animés<br>Sécurité Avancée<br>Maintenance Périodique<br>Insertion d\'Annonces<br>Affichage Mobile<br>Chat en Temps Réel<br>Service de Sauvegarde<br>Remboursement d\'1 Mois<br>Gestion des Bulletins<br>';
            document.getElementById('infotext').innerHTML = 'Vous avez des questions ?<br>Écrivez-nous et nous répondrons à toutes vos questions !';
            document.getElementById('address').innerHTML = 'Adresse:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Téléphone: +39 3383687855';
            document.getElementById('recensioni').innerHTML = 'Commentaires';
            break;
        case 'de':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Über Uns';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Dienste';
            document.getElementById('revision').innerHTML = 'Änderunge:';
            document.getElementById('time').innerHTML = 'Tage:';
            document.getElementById('opz_aggiutive').innerHTML = 'Zusätzliche Optionen';
            document.getElementById('li3').innerHTML = 'Regelmäßige Wartung';
            document.getElementById('li4').innerHTML = 'Echtzeit-Chat-Services';
            document.getElementById('li5').innerHTML = 'Newsletter-Management';
            document.getElementById('li6').innerHTML = 'Übersetzungsdienste';
            document.getElementById('buttonBUY').innerHTML = 'Kaufen';
            document.getElementById('total').innerHTML = 'Gesamt:';
            document.getElementById('optiontext').innerHTML = 'Schnelle Lieferung<br>Hosting<br>Branding-Services<br>Übersetzungsdienste<br>Suchmaschinenoptimierung<br>3D-Bilder<br>Integration Social Media<br>Animierte Grafiken<br>Erweiterte Sicherheit<br>Regelmäßige Wartung<br>Anzeigen-Einfügung<br>Mobile Anzeige<br>Echtzeit-Chat-Services<br>Backup-Service<br>1-Monats-Rückerstattung<br>Newsletter-Management<br>';
            document.getElementById('infotext').innerHTML = 'Haben Sie Fragen?<br>Schreiben Sie uns und wir werden alle Ihre Anfragen beantworten!';
            document.getElementById('address').innerHTML = 'Adresse:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Telefon: +39 3383687855';
            document.getElementById('recensioni').innerHTML = 'Bewertungen';
            break;
    }
    changeDescription(document.querySelector('.clicked').id);

}

function calculateTotal() {
    // Prendi l'opzione selezionata
    var selectedOption = document.querySelector('.clicked').id;

    // Dichiarazione dei costi delle opzioni di base
    var baseCost = 0;
    switch (selectedOption) {
        case "buttonBASE":
            baseCost = 40;
            break;
        case "buttonSTANDARD":
            baseCost = 60;
            break;
        case "buttonPREMIUM":
            baseCost = 100;
            break;
        default:
            baseCost = 0;
            break;
    }

    // Costi degli optional
    var optionalCosts = {
        "confirm2": 30, // Search Engine Optimization
        "confirm3": 20, // Hosting
        "confirm4": 10, // Manutenzione Periodica
        "confirm5": 50, // Servizi Chat in Tempo Reale
        "confirm6": 40, // Gestione delle Newsletter
        "confirm7": 10  // Servizi di Traduzione
    };

    // Calcolo del costo totale
    var totalCost = baseCost;

    // Trova tutti i pulsanti optional selezionati
    var optionalButtons = document.querySelectorAll('#optional button.selected');
    for (var i = 0; i < optionalButtons.length; i++) {
        var button = optionalButtons[i];
        var optionCost = optionalCosts[button.id];
        totalCost += optionCost;
    }

    // Visualizza il costo totale
    document.getElementById('final_price').innerHTML = totalCost + "€";
}

function acquista() {
    var price = document.getElementById('price').innerHTML;
    var final_price = document.getElementById('final_price').innerHTML;
    var selectedButton = "";

    // Verifica quale pulsante è stato cliccato e imposta la variabile selectedButton
    if (document.getElementById('buttonBASE').classList.contains('clicked')) {
        selectedButton = "BASE";
    } else if (document.getElementById('buttonSTANDARD').classList.contains('clicked')) {
        selectedButton = "STANDARD";
    } else if (document.getElementById('buttonPREMIUM').classList.contains('clicked')) {
        selectedButton = "PREMIUM";
    }

    var selectedOptions = [];

    // Verifica quali pulsanti opzionali sono stati cliccati e aggiungili all'array selectedOptions
    if (document.getElementById('confirm2').classList.contains('selected')) {
        selectedOptions.push("Search Engine Optimization");
    }
    if (document.getElementById('confirm3').classList.contains('selected')) {
        selectedOptions.push("Hosting");
    }
    if (document.getElementById('confirm4').classList.contains('selected')) {
        selectedOptions.push("Manutenzione Periodica");
    }
    if (document.getElementById('confirm5').classList.contains('selected')) {
        selectedOptions.push("Servizi Chat in Tempo Reale");
    }
    if (document.getElementById('confirm6').classList.contains('selected')) {
        selectedOptions.push("Gestione delle Newsletter");
    }
    if (document.getElementById('confirm7').classList.contains('selected')) {
        selectedOptions.push("Servizi di Traduzione");
    }
    // Verifica se nessuna opzione è stata selezionata
    if (selectedOptions.length === 0) {
        selectedOptions.push("Nessuna opzione aggiuntiva");
    }

    document.write("<div id='div'></div>");
    document.write("<h1 id='title'>Grazie per aver scelto WebStar</h1>");
    document.write("<h2 id='title2'>Riepilogo dell'ordine</h2>");
    document.write("<h2 id='info'>Informazioni personali:</h2>");
    document.write("<p id='nome_utente'>Nome Utente: " + nomeUtente + "</p>");
    document.write("<p id='nome'>Nome: " + nome + "</p>");
    document.write("<p id='cognome'>Cognome: " + cognome + "</p>");
    document.write("<p id='mail'>Email: " + mail + "</p>");
    document.write("<p id='ncarta'>N° Carta: " + numCarta + "</p>");
    document.write("<h2 id='acquisti'>Acquisti:</h2>");
    document.write("<h3 id='servizio'>Servizio Scelto: " + selectedButton + "</h3>");
    document.write("<h3 id='prezzo_servizio'>Prezzo: " + price + "</h3>");
    document.write("<h2 id='optinal_title'>Optional selezionati:</h2>");
    document.write("<ul id='optional_list'>");
    selectedOptions.forEach(function (option) {
        document.write("<li class='optional'>" + option + "</li>");
    });
    document.write("</ul>");
    document.write("<br><h3 id='prezzo_finale'>Prezzo Finale: " + final_price + "</h3>");
    document.write('<a href="index.php"><button id="buttonHOME">Home</button> </a>');

    // Crea di un modulo HTML nascosto
    var form = document.createElement('form');
    form.method = 'post';
    form.action = 'salva_dati.php';

    // Aggiunta dei campi dati al modulo
    var inputSelectedButton = document.createElement('input');
    inputSelectedButton.type = 'hidden';
    inputSelectedButton.name = 'selectedButton';
    inputSelectedButton.value = selectedButton;
    form.appendChild(inputSelectedButton);

    // Aggiungi un input nascosto per ogni opzione selezionata
    for (var i = 0; i < selectedOptions.length; i++) {
        var inputOption = document.createElement('input');
        inputOption.type = 'hidden';
        inputOption.name = 'selectedOptions[]'; // Usa [] per indicare che è un array
        inputOption.value = selectedOptions[i];
        form.appendChild(inputOption);
    }

    // Aggiunta del modulo alla pagina e submit del modulo
    document.body.appendChild(form);
    form.submit();

}

function registrati() {

    document.write("<div id='div'></div>");
    document.write("<h1 id='title'>Non sei Registrato!</h1>");
    document.write("<h2 id='title2'>Per effettuare l'ordine devi registrarti al sito</h2>");
    document.write('<a href="login.php"><button id="buttonHOME">LOGIN</button> </a>');

    // Aggiungi lo stile CSS direttamente nel DOM
    var style = document.createElement('style');
    style.innerHTML = `
    @import url('https://fonts.cdnfonts.com/css/ibm-plex-mono-3');
    body {
        background-image: url(immagini/chiaroREGISTER.png);
        height: 657px;
    }
    #title {
        position: absolute;
        left: 509px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 700px;
        font-size: 50px;
        line-height: 117px;
        margin-top: 5px;
        margin-bottom: 0px;
        color: #4F5B71;
    }
    #div {
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
    #title2 {
        position: absolute;
        left: 431px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 700px;
        font-size: 25px;
        line-height: 117px;
        margin-top: 59px;
        margin-bottom: 0px;
        color: #4F5B71;
    }
    #info {
        position: absolute;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 700px;
        font-size: 23px;
        line-height: 117px;
        margin-top: 94px;
        margin-bottom: 0px;
        color: #4F5B71;
    }
    #nome_utente {
        position: absolute;
        top: 151px;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        width: 280;
        color: #4F5B71;
    }
    #nome {
        position: absolute;
        top: 172px;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        width: 280;
        color: #4F5B71;
    }
    #cognome {
        position: absolute;
        top: 190px;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        width: 280;
        color: #4F5B71;
    }
    #mail {
        position: absolute;
        top: 212px;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        width: 280;
        color: #4F5B71;
    }
    #ncarta {
        position: absolute;
        top: 231px;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        width: 280;
        color: #4F5B71;
    }
    #acquisti {
        position: absolute;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 700px;
        font-size: 23px;
        line-height: 117px;
        margin-top: 220px;
        margin-bottom: 0px;
        color: #4F5B71;
    }
    #servizio {
        position: absolute;
        top: 282px;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        width: 299px;
        color: #4F5B71;
    }
    #prezzo_servizio {
        position: absolute;
        top: 306px;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 23px;
        width: 299px;
        color: #4F5B71;
    }
    #optinal_title {
        position: absolute;
        left: 63px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 700px;
        font-size: 23px;
        line-height: 117px;
        margin-top: 301px;
        margin-bottom: 0px;
        color: #4F5B71;
    }
    #optional_list {
        position: absolute;
        top: 364px;
        left: 48px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: #4F5B71;
    }
    .optional {
        margin-bottom: 10px; /* Spazio tra gli elementi dell'elenco */
    }
    #prezzo_finale{
        position: absolute;
        left: 68px;
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 700px;
        font-size: 23px;
        line-height: 117px;
        margin-top: 551px;
        margin-bottom: 0px;
        color: #4F5B71;
    }
    #buttonHOME{
        position: absolute;
        width: 160px;
        height: 38px;
        left: 695px;
        top: 617px;
    
        background: linear-gradient(90.86deg, rgba(255, 255, 255, 0.4) 10.67%, rgba(255, 255, 255, 0.1) 87.84%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
        border-radius: 40px;
        outline: 1px solid white ;
        border: none;
    
    
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
    
        color: #23334D;
    }
    #buttonHOME:hover{
        outline: 1px solid white ;
        border: none;
        background: linear-gradient(91.65deg, rgba(35, 51, 77, 0.5) 10.61%, rgba(35, 51, 77, 0.2) 100.66%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(20px);
        border-radius: 40px;
    
        font-family: 'IBM Plex Mono medium';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
    
        color: #23334D;
    }
    
`;

    document.head.appendChild(style);

}