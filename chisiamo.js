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
            document.getElementById('first_title').innerHTML = 'La Nostra Storia';
            document.getElementById('first_text').innerHTML = 'La nostra storia è un viaggio intriso di passione, audacia e un impegno incessante per l\'eccellenza nel mondo digitale. Nasce dall\'idea visionaria di rivoluzionare il modo in cui le aziende si presentano online, un\'idea che abbiamo abbracciato con fervore fin dai nostri umili inizi. Lungo il percorso, abbiamo affrontato molte sfide e superato ostacoli con determinazione e creatività, ma ogni sfida ha rappresentato un\'opportunità per crescere e imparare. Ogni progetto che abbiamo completato è stato un tassello fondamentale nel nostro percorso verso il successo, guadagnando la fiducia e il rispetto dei nostri clienti e della comunità imprenditoriale. Continuiamo a crescere e a prosperare, guidati dalla nostra passione per l\'innovazione e il desiderio di creare soluzioni digitali che lasciano un\'impronta duratura nel mondo online e contribuiscono a plasmare il futuro del business digitale.';
            document.getElementById('second_title').innerHTML = 'La Nostra Filosofia';
            document.getElementById('second_text').innerHTML = 'La nostra filosofia è il cuore pulsante di ogni progetto che affrontiamo. Siamo mossi da una profonda passione per il design e un\'incessante ricerca della perfezione in ogni dettaglio. Ogni pixel, ogni riga di codice, è concepito con cura e attenzione, con l\'obiettivo di superare le aspettative dei nostri clienti e creare esperienze digitali straordinarie che si distinguono nel panorama online. Siamo impegnati a creare non solo siti web, ma vere e proprie opere d\'arte digitali che catturano l\'attenzione e ispirano azioni. La nostra filosofia è intrisa di innovazione, creatività e un impegno costante per l\'eccellenza, garantendo che ogni progetto sia un successo sotto ogni aspetto e rappresenti il massimo dell\'ingegno e della maestria digitale.';
            document.getElementById('third_title').innerHTML = 'Il Nostro Team';
            document.getElementById('third_text').innerHTML = 'Il cuore pulsante di WebStar è il nostro eccezionale team di talenti, una squadra di individui straordinari che portano con sé una vasta esperienza, competenze uniche e una passione contagiosa per l\'innovazione. Siamo più di una semplice squadra: siamo una famiglia di creativi, programmatori e esperti di marketing che lavorano insieme in perfetta sinergia per raggiungere un unico obiettivo: il successo dei nostri clienti. Grazie alla nostra collaborazione sinergica e alla nostra dedizione al risultato, siamo in grado di affrontare le sfide più complesse e trasformare le visioni dei nostri clienti in realtà digitali di successo. Il nostro team è il nostro punto di forza e la nostra garanzia di qualità, e siamo orgogliosi di mettere le nostre competenze e la nostra passione al servizio dei nostri clienti per aiutarli a raggiungere nuove vette di successo nel mondo digitale.';
            document.getElementById('address').innerHTML = 'Indirizzo:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Numero: +39 3383687855';
            break;
        case 'en':
            document.getElementById('buttonCHISIAMO').innerHTML = 'About Us';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('first_title').innerHTML = 'Our Story';
            document.getElementById('first_text').innerHTML = 'Our story is a journey filled with passion, audacity, and an unwavering commitment to excellence in the digital world. It stems from the visionary idea of revolutionizing how businesses present themselves online, an idea we have embraced fervently since our humble beginnings. Along the way, we have faced many challenges and overcome obstacles with determination and creativity, but each challenge has presented an opportunity to grow and learn. Every project we have completed has been a vital piece in our journey to success, earning the trust and respect of our clients and the entrepreneurial community. We continue to grow and thrive, driven by our passion for innovation and the desire to create digital solutions that leave a lasting imprint on the online world and help shape the future of digital business.';
            document.getElementById('second_title').innerHTML = 'Our Philosophy';
            document.getElementById('second_text').innerHTML = 'Our philosophy is the beating heart of every project we undertake. We are driven by a deep passion for design and an unwavering pursuit of perfection in every detail. Every pixel, every line of code, is crafted with care and attention, with the goal of surpassing our clients\' expectations and creating extraordinary digital experiences that stand out in the online landscape. We are committed to creating not just websites, but true digital works of art that capture attention and inspire action. Our philosophy is infused with innovation, creativity, and a constant commitment to excellence, ensuring that every project is a success in every aspect and represents the pinnacle of digital ingenuity and mastery.';
            document.getElementById('third_title').innerHTML = 'Our Team';
            document.getElementById('third_text').innerHTML = 'The beating heart of WebStar is our exceptional team of talents, a team of extraordinary individuals who bring with them vast experience, unique skills, and a contagious passion for innovation. We are more than just a team: we are a family of creatives, programmers, and marketing experts who work together in perfect synergy to achieve a single goal: the success of our clients. Thanks to our synergistic collaboration and dedication to results, we are able to tackle the most complex challenges and transform our clients\' visions into successful digital realities. Our team is our strength and our guarantee of quality, and we are proud to put our skills and passion at the service of our clients to help them reach new heights of success in the digital world.';
            document.getElementById('address').innerHTML = 'Address:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Phone: +39 3383687855';
            break;
        case 'es':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Nosotros';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Servicios';
            document.getElementById('first_title').innerHTML = 'Nuestra Historia';
            document.getElementById('first_text').innerHTML = 'Nuestra historia es un viaje lleno de pasión, audacia y un compromiso inquebrantable con la excelencia en el mundo digital. Surge de la idea visionaria de revolucionar cómo las empresas se presentan en línea, una idea que hemos abrazado fervientemente desde nuestros humildes comienzos. En el camino, hemos enfrentado muchos desafíos y superado obstáculos con determinación y creatividad, pero cada desafío ha representado una oportunidad para crecer y aprender. Cada proyecto que hemos completado ha sido una pieza vital en nuestro viaje hacia el éxito, ganando la confianza y el respeto de nuestros clientes y de la comunidad empresarial. Seguimos creciendo y prosperando, impulsados por nuestra pasión por la innovación y el deseo de crear soluciones digitales que dejen una huella duradera en el mundo online y ayuden a dar forma al futuro de los negocios digitales.';
            document.getElementById('second_title').innerHTML = 'Nuestra Filosofía';
            document.getElementById('second_text').innerHTML = 'Nuestra filosofía es el corazón latente de cada proyecto que emprendemos. Estamos impulsados por una profunda pasión por el diseño y una búsqueda inquebrantable de la perfección en cada detalle. Cada píxel, cada línea de código, está elaborado con cuidado y atención, con el objetivo de superar las expectativas de nuestros clientes y crear experiencias digitales extraordinarias que se destaquen en el panorama online. Estamos comprometidos a crear no solo sitios web, sino verdaderas obras de arte digital que capturen la atención e inspiren acción. Nuestra filosofía está impregnada de innovación, creatividad y un compromiso constante con la excelencia, asegurando que cada proyecto sea un éxito en cada aspecto y represente el pináculo del ingenio y la maestría digital.';
            document.getElementById('third_title').innerHTML = 'Nuestro Equipo';
            document.getElementById('third_text').innerHTML = 'El corazón latente de WebStar es nuestro excepcional equipo de talentos, un equipo de individuos extraordinarios que aportan una vasta experiencia, habilidades únicas y una pasión contagiosa por la innovación. Somos más que un simple equipo: somos una familia de creativos, programadores y expertos en marketing que trabajan juntos en perfecta sinergia para lograr un solo objetivo: el éxito de nuestros clientes. Gracias a nuestra colaboración sinérgica y dedicación a los resultados, podemos abordar los desafíos más complejos y transformar las visiones de nuestros clientes en realidades digitales exitosas. Nuestro equipo es nuestra fuerza y nuestra garantía de calidad, y estamos orgullosos de poner nuestras habilidades y pasión al servicio de nuestros clientes para ayudarles a alcanzar nuevas alturas de éxito en el mundo digital.';
            document.getElementById('address').innerHTML = 'Direcciòn:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Teléfono: +39 3383687855';
            break;
        case 'fr':
            document.getElementById('buttonCHISIAMO').innerHTML = 'À propos';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Services';
            document.getElementById('first_title').innerHTML = 'Notre Histoire';
            document.getElementById('first_text').innerHTML = 'Notre histoire est un voyage rempli de passion, d\'audace et d\'un engagement inébranlable envers l\'excellence dans le monde numérique. Elle découle de l\'idée visionnaire de révolutionner la façon dont les entreprises se présentent en ligne, une idée que nous avons embrassée avec ferveur depuis nos modestes débuts. En chemin, nous avons affronté de nombreux défis et surmonté des obstacles avec détermination et créativité, mais chaque défi a présenté une opportunité de croissance et d\'apprentissage. Chaque projet que nous avons mené à bien a été une pièce essentielle de notre voyage vers le succès, gagnant la confiance et le respect de nos clients et de la communauté entrepreneuriale. Nous continuons à croître et à prospérer, animés par notre passion pour l\'innovation et le désir de créer des solutions numériques qui laissent une empreinte durable dans le monde en ligne et contribuent à façonner l\'avenir des affaires numériques.';
            document.getElementById('second_title').innerHTML = 'Notre Philosophie';
            document.getElementById('second_text').innerHTML = 'Notre philosophie est le cœur battant de chaque projet que nous entreprenons. Nous sommes animés par une passion profonde pour le design et une quête inébranlable de la perfection dans chaque détail. Chaque pixel, chaque ligne de code, est conçu avec soin et attention, dans le but de dépasser les attentes de nos clients et de créer des expériences numériques extraordinaires qui se démarquent dans le paysage en ligne. Nous nous engageons à créer non seulement des sites web, mais de véritables œuvres d\'art numériques qui captent l\'attention et inspirent à l\'action. Notre philosophie est imprégnée d\'innovation, de créativité et d\'un engagement constant envers l\'excellence, garantissant que chaque projet est un succès sous tous les aspects et représente l\'apogée de l\'ingéniosité et de la maîtrise numériques.';
            document.getElementById('third_title').innerHTML = 'Notre Équipe';
            document.getElementById('third_text').innerHTML = 'Le cœur battant de WebStar est notre équipe exceptionnelle de talents, une équipe d\'individus extraordinaires qui apportent avec eux une vaste expérience, des compétences uniques et une passion contagieuse pour l\'innovation. Nous sommes plus qu\'une simple équipe : nous sommes une famille de créatifs, de programmeurs et d\'experts en marketing qui travaillent ensemble en parfaite synergie pour atteindre un seul objectif : le succès de nos clients. Grâce à notre collaboration synergique et à notre dévouement aux résultats, nous sommes en mesure de relever les défis les plus complexes et de transformer les visions de nos clients en réalités numériques réussies. Notre équipe est notre force et notre garantie de qualité, et nous sommes fiers de mettre nos compétences et notre passion au service de nos clients pour les aider à atteindre de nouveaux sommets de succès dans le monde numérique.';
            document.getElementById('address').innerHTML = 'Direcciòn:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Teléfono: +39 3383687855';
            break;
        case 'de':
            document.getElementById('buttonCHISIAMO').innerHTML = 'Über Uns';
            document.getElementById('buttonPRODOTTI').innerHTML = 'Dienste';
            document.getElementById('first_title').innerHTML = 'Unsere Geschichte';
            document.getElementById('first_text').innerHTML = 'Unsere Geschichte ist eine Reise voller Leidenschaft, Kühnheit und einem unerschütterlichen Engagement für Exzellenz in der digitalen Welt. Sie entstand aus der visionären Idee, wie Unternehmen sich online präsentieren, eine Idee, die wir seit unseren bescheidenen Anfängen begeistert verfolgen. Auf unserem Weg haben wir viele Herausforderungen gemeistert und Hindernisse mit Entschlossenheit und Kreativität überwunden, aber jede Herausforderung war eine Gelegenheit zum Wachsen und Lernen. Jedes Projekt, das wir abgeschlossen haben, war ein wesentliches Puzzlestück auf unserem Weg zum Erfolg, das Vertrauen und Respekt unserer Kunden und der unternehmerischen Gemeinschaft gewonnen hat. Wir wachsen und gedeihen weiter, angetrieben von unserer Leidenschaft für Innovation und dem Wunsch, digitale Lösungen zu schaffen, die einen bleibenden Eindruck in der Online-Welt hinterlassen und die Zukunft des digitalen Geschäfts gestalten.';
            document.getElementById('second_title').innerHTML = 'Unsere Philosophie';
            document.getElementById('second_text').innerHTML = 'Unsere Philosophie ist das schlagende Herz jedes Projekts, das wir angehen. Wir werden von einer tiefen Leidenschaft für Design und einem unermüdlichen Streben nach Perfektion in jedem Detail angetrieben. Jeder Pixel, jede Zeile Code, wird mit Sorgfalt und Aufmerksamkeit gestaltet, mit dem Ziel, die Erwartungen unserer Kunden zu übertreffen und außergewöhnliche digitale Erlebnisse zu schaffen, die sich in der Online-Landschaft abheben. Wir sind bestrebt, nicht nur Websites, sondern echte digitale Kunstwerke zu schaffen, die Aufmerksamkeit erregen und zu Handlungen inspirieren. Unsere Philosophie ist geprägt von Innovation, Kreativität und einem ständigen Engagement für Exzellenz, was gewährleistet, dass jedes Projekt in jeder Hinsicht ein Erfolg ist und den Gipfel der digitalen Genialität und Meisterschaft repräsentiert.';
            document.getElementById('third_title').innerHTML = 'Unser Team';
            document.getElementById('third_text').innerHTML = 'Das schlagende Herz von WebStar ist unser herausragendes Team von Talenten, ein Team außergewöhnlicher Individuen, das umfangreiche Erfahrung, einzigartige Fähigkeiten und eine ansteckende Leidenschaft für Innovation mitbringt. Wir sind mehr als nur ein Team: Wir sind eine Familie von Kreativen, Programmierern und Marketingexperten, die zusammen in perfekter Synergie arbeiten, um ein gemeinsames Ziel zu erreichen: den Erfolg unserer Kunden. Dank unserer synergistischen Zusammenarbeit und unserer Hingabe zu Ergebnissen können wir auch die komplexesten Herausforderungen bewältigen und die Visionen unserer Kunden erfolgreich in digitale Realitäten umsetzen. Unser Team ist unsere Stärke und unsere Garantie für Qualität, und wir sind stolz darauf, unsere Fähigkeiten und unsere Leidenschaft zum Wohl unserer Kunden einzusetzen, um ihnen zu helfen, im digitalen Bereich neue Höhen des Erfolgs zu erreichen.';
            document.getElementById('address').innerHTML = 'Adresse:<u> Corso dei Mille 176, Palermo PA 90100, IT</u>';
            document.getElementById('phone').innerHTML = 'Telefon: +39 3383687855';
            break;
    }
}