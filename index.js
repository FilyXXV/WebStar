// Variabili globali per tenere traccia dell'indice dell'immagine corrente e del timer per l'animazione
let currentIndex = 0; // Indice dell'immagine attualmente visualizzata
let timer; // Timer per l'animazione automatica

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
    timer = setInterval(function() {
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
    
    switch(selectedValue) {
        case 'it':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Chi Siamo';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Servizi';
            document.getElementById('first_title').innerHTML = 'Benvenuti su WebStar';
            document.getElementById('first_text').innerHTML = 'Siamo WebStar, una squadra dedicata di esperti creativi che si occupa della progettazione e dello sviluppo di siti web su misura. La nostra passione è trasformare le tue idee in esperienze digitali coinvolgenti e di successo. Con una vasta esperienza nel settore, ci impegniamo a offrire soluzioni web innovative che non solo soddisfano le tue esigenze, ma superano le tue aspettative, fornendo una presenza online che si distingue nel panorama digitale.';
            document.getElementById('second_title').innerHTML = 'Cosa Offriamo';
            document.getElementById('second_text').innerHTML = 'Dal design alla programmazione, offriamo una gamma completa di servizi per soddisfare le esigenze digitali della tua azienda. Oltre alla creazione di siti web esteticamente accattivanti e funzionali, ci concentriamo sull\'ottimizzazione per i motori di ricerca e sull\'integrazione di strumenti avanzati per garantire un\'elevata performance e una user experience impeccabile. Il nostro obiettivo è fornire soluzioni web che rispecchino l\'identità del tuo marchio.';
            document.getElementById('third_title').innerHTML = 'Il Nostro Approccio';
            document.getElementById('third_text').innerHTML = 'Il nostro approccio si basa sulla collaborazione e sulla trasparenza. Prima di iniziare qualsiasi progetto, ci impegniamo a comprendere appieno i tuoi obiettivi, il tuo pubblico di riferimento e le tue esigenze specifiche. Utilizziamo questo approccio orientato al cliente per guidare ogni fase del processo, dalla pianificazione alla realizzazione, garantendo che il risultato finale sia perfettamente allineato con le tue aspettative e pronto a generare risultati tangibili per il tuo business.';
            document.getElementById('fourth_title').innerHTML = 'Perché Sceglierci';
            document.getElementById('fourth_text').innerHTML = 'Scegliere WebStar significa affidarsi a un team di professionisti appassionati e competenti che mettono il cliente al centro di ogni decisione e azione. Oltre alla nostra vasta esperienza nel settore, ci impegniamo a offrire un servizio clienti eccezionale e un supporto continuo. Siamo pronti a collaborare con te per trasformare la tua visione in una presenza digitale di successo, offrendoti soluzioni web innovative che ti permettono di distinguerti nel vasto mercato.';
            document.getElementById('address').innerHTML = 'Indirizzo:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Numero: +39 3383687855';
            break;
        case 'en':
            document.getElementById('buttonCHISIAMO').innerHTML = 'About Us';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('first_title').innerHTML = 'Welcome to WebStar';
            document.getElementById('first_text').innerHTML = 'We are WebStar, a dedicated team of creative experts specializing in custom website design and development. Our passion is to turn your ideas into engaging and successful digital experiences. With extensive experience in the industry, we strive to provide innovative web solutions that not only meet your needs but exceed your expectations, delivering an online presence that stands out in the digital landscape.';
            document.getElementById('second_title').innerHTML = 'What We Offer';
            document.getElementById('second_text').innerHTML = 'From design to programming, we offer a complete range of services to meet your company\'s digital needs. In addition to creating aesthetically pleasing and functional websites, we focus on search engine optimization and integrate advanced tools to ensure high performance and impeccable user experience. Our goal is to provide web solutions that reflect your brand identity.';
            document.getElementById('third_title').innerHTML = 'Our Approach';
            document.getElementById('third_text').innerHTML = 'Our approach is based on collaboration and transparency. Before starting any project, we commit to fully understanding your goals, target audience, and specific needs. We use this customer-oriented approach to guide every phase of the process, from planning to execution, ensuring that the final result is perfectly aligned with your expectations and ready to deliver tangible results for your business.';
            document.getElementById('fourth_title').innerHTML = 'Why Choose Us';
            document.getElementById('fourth_text').innerHTML = 'Choosing WebStar means relying on a team of passionate and competent professionals who put the customer at the center of every decision and action. In addition to our extensive experience in the industry, we are committed to providing exceptional customer service and ongoing support. We are ready to collaborate with you to turn your vision into a successful digital presence, offering innovative web solutions that allow you to stand out in the vast market.';
            document.getElementById('address').innerHTML = 'Address:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Phone: +39 3383687855';
            break;
        case 'es':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Nosotros';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Servicios';
            document.getElementById('first_title').innerHTML = 'Bienvenidos a WebStar';
            document.getElementById('first_text').innerHTML = 'Somos WebStar, un equipo dedicado de expertos creativos especializados en diseño y desarrollo de sitios web personalizados. Nuestra pasión es convertir tus ideas en experiencias digitales atractivas y exitosas. Con una amplia experiencia en la industria, nos esforzamos por ofrecer soluciones web innovadoras que no solo satisfagan tus necesidades, sino que superen tus expectativas, brindando una presencia en línea que se destaque en el panorama digital.';
            document.getElementById('second_title').innerHTML = 'Lo Que Ofrecemos';
            document.getElementById('second_text').innerHTML = 'Desde el diseño hasta la programación, ofrecemos una gama completa de servicios para satisfacer las necesidades digitales de tu empresa. Además de crear sitios web estéticamente atractivos y funcionales, nos enfocamos en la optimización para motores de búsqueda e integramos herramientas avanzadas para garantizar un alto rendimiento y una experiencia de usuario impecable. Nuestro objetivo es proporcionar soluciones web que reflejen la identidad de tu marca.';
            document.getElementById('third_title').innerHTML = 'Nuestro Enfoque';
            document.getElementById('third_text').innerHTML = 'Nuestro enfoque se basa en la colaboración y la transparencia. Antes de comenzar cualquier proyecto, nos comprometemos a comprender completamente tus objetivos, tu público objetivo y tus necesidades específicas. Utilizamos este enfoque orientado al cliente para guiar cada fase del proceso, desde la planificación hasta la ejecución, asegurando que el resultado final esté perfectamente alineado con tus expectativas y listo para ofrecer resultados tangibles para tu negocio.';
            document.getElementById('fourth_title').innerHTML = 'Por Qué Elegirnos';
            document.getElementById('fourth_text').innerHTML = 'Elegir WebStar significa confiar en un equipo de profesionales apasionados y competentes que ponen al cliente en el centro de cada decisión y acción. Además de nuestra amplia experiencia en la industria, nos comprometemos a brindar un servicio al cliente excepcional y soporte continuo. Estamos listos para colaborar contigo para convertir tu visión en una presencia digital exitosa, ofreciendo soluciones web innovadoras que te permitan destacarte en el vasto mercado.';
            document.getElementById('address').innerHTML = 'Directiòn:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Teléfono: +39 3383687855';
            break;
        case 'fr':
            document.getElementById('buttonCHISIAMO').innerHTML = 'À propos';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('first_title').innerHTML = 'Bienvenue chez WebStar';
            document.getElementById('first_text').innerHTML = 'Nous sommes WebStar, une équipe dévouée d\'experts créatifs spécialisés dans la conception et le développement de sites web personnalisés. Notre passion est de transformer vos idées en expériences numériques engageantes et réussies. Avec une expérience étendue dans l\'industrie, nous nous efforçons de fournir des solutions web innovantes qui non seulement répondent à vos besoins, mais dépassent vos attentes, offrant une présence en ligne qui se démarque dans le paysage numérique.';
            document.getElementById('second_title').innerHTML = 'Ce Que Nous Offrons';
            document.getElementById('second_text').innerHTML = 'Du design à la programmation, nous offrons une gamme complète de services pour répondre aux besoins numériques de votre entreprise. En plus de créer des sites web esthétiquement plaisants et fonctionnels, nous nous concentrons sur l\'optimisation pour les moteurs de recherche et intégrons des outils avancés pour garantir des performances élevées et une expérience utilisateur impeccable. Notre objectif est de fournir des solutions web qui reflètent l\'identité de votre marque.';
            document.getElementById('third_title').innerHTML = 'Notre Approche';
            document.getElementById('third_text').innerHTML = 'Notre approche est basée sur la collaboration et la transparence. Avant de commencer tout projet, nous nous engageons à comprendre pleinement vos objectifs, votre public cible et vos besoins spécifiques. Nous utilisons cette approche axée sur le client pour guider chaque phase du processus, de la planification à l\'exécution, en veillant à ce que le résultat final soit parfaitement aligné sur vos attentes et prêt à fournir des résultats tangibles pour votre entreprise.';
            document.getElementById('fourth_title').innerHTML = 'Pourquoi Nous Choisir';
            document.getElementById('fourth_text').innerHTML = 'Choisir WebStar signifie compter sur une équipe de professionnels passionnés et compétents qui placent le client au centre de chaque décision et action. En plus de notre vaste expérience dans l\'industrie, nous nous engageons à fournir un service client exceptionnel et un soutien continu. Nous sommes prêts à collaborer avec vous pour transformer votre vision en une présence numérique réussie, en offrant des solutions web innovantes qui vous permettent de vous démarquer sur le marché vaste.';
            document.getElementById('address').innerHTML = 'Adresse:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Téléphone: +39 3383687855';
            break;
        case 'de':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Über Uns';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Dienste';
            document.getElementById('first_title').innerHTML = 'Willkommen bei WebStar';
            document.getElementById('first_text').innerHTML = 'Wir sind WebStar, ein engagiertes Team von kreativen Experten, spezialisiert auf maßgeschneidertes Webdesign und -entwicklung. Unsere Leidenschaft ist es, Ihre Ideen in ansprechende und erfolgreiche digitale Erlebnisse zu verwandeln. Mit umfangreicher Erfahrung in der Branche streben wir danach, innovative Web-Lösungen anzubieten, die nicht nur Ihre Bedürfnisse erfüllen, sondern Ihre Erwartungen übertreffen, und eine Online-Präsenz bieten, die sich in der digitalen Landschaft auszeichnet.';
            document.getElementById('second_title').innerHTML = 'Was Wir Bieten';
            document.getElementById('second_text').innerHTML = 'Vom Design bis zur Programmierung bieten wir ein umfassendes Angebot an Dienstleistungen, um die digitalen Anforderungen Ihres Unternehmens zu erfüllen. Neben der Erstellung ästhetisch ansprechender und funktionaler Websites konzentrieren wir uns auf Suchmaschinenoptimierung und integrieren fortschrittliche Tools, um eine hohe Leistung und eine makellose Benutzererfahrung zu gewährleisten. Unser Ziel ist es, Web-Lösungen anzubieten, die Ihre Markenidentität widerspiegeln.';
            document.getElementById('third_title').innerHTML = 'Unser Ansatz';
            document.getElementById('third_text').innerHTML = 'Unser Ansatz basiert auf Zusammenarbeit und Transparenz. Bevor wir ein Projekt beginnen, verpflichten wir uns, Ihre Ziele, Ihre Zielgruppe und Ihre spezifischen Anforderungen vollständig zu verstehen. Wir nutzen diesen kundenorientierten Ansatz, um jede Phase des Prozesses, von der Planung bis zur Umsetzung, zu leiten und sicherzustellen, dass das Endergebnis perfekt auf Ihre Erwartungen abgestimmt ist und bereit ist, konkrete Ergebnisse für Ihr Unternehmen zu liefern.';
            document.getElementById('fourth_title').innerHTML = 'Warum Uns Wählen';
            document.getElementById('fourth_text').innerHTML = 'WebStar bietet ein Team leidenschaftlicher und kompetenter Fachleute, die den Kunden in den Mittelpunkt stellen. Neben unserer Branchenerfahrung bieten wir herausragenden Kundenservice und kontinuierliche Unterstützung. Zusammen verwirklichen wir Ihre Vision und bieten innovative Web-Lösungen, damit Sie sich auf dem Markt abheben können.';
            document.getElementById('address').innerHTML = 'Adresse:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Telefon: +39 3383687855';
            break;
    }
}


