// Hier werden Variablen deklariert, die auf bestimmte HTML-Elemente verweisen.
const categorySelection = document.getElementById('category-selection');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const categoryButtons = document.querySelectorAll('.category-btn');

const questions = {
    allgemein: {
            leicht: [
                {
                    question: "Was ist die Hauptstadt von Frankreich?",
                    options: ["London", "Paris", "Berlin", "Madrid"],
                    answer: 1
                },
                {
                    question: "Wie viele Kontinente gibt es?",
                    options: ["5", "6", "7", "8"],
                    answer: 2
                },
                {
                    question: "Welches Tier ist der König des Dschungels?",
                    options: ["Elefant", "Löwe", "Tiger", "Giraffe"],
                    answer: 1
                },
                {
                    question: "Was ist das größte Säugetier der Welt?",
                    options: ["Elefant", "Giraffe", "Nashorn", "Blauwal"],
                    answer: 3
                },
                {
                    question: "Welches Element hat das chemische Symbol „H“?",
                    options: ["Helium", "Stickstoff", "Wasserstoff", "Kohlenstoff"],
                    answer: 2
                },

                {
                    question: "Was ist die Hauptstadt von Kanada?",
                    options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
                    answer: 1
                },
                {
                    question: "Welcher Berg ist der höchste Berg der Welt?",
                    options: ["K2", "Mount Everest", "Kilimandscharo", "Makalu"],
                    answer: 1
                },
                {
                    question: "Wie viele Bundesländer hat Deutschland?",
                    options: ["16", "17", "19", "21"],
                    answer: 0
                },
                {
                    question: "Wie viele Oscars gewann der Film Titanic?",
                    options: ["9", "11", "13", "8"],
                    answer: 1
                },
                {
                    question: "Was ist die Hauptstadt von Australien?",
                    options: ["Canberra", "Sydney", "Melbourne", "Perth"],
                    answer: 0
                }
            ],
            schwer: [
                {
                    question: "Wie lang ist die Strecke eines Marathons?",
                    options: ["10km", "12,195km", "42,195km", "45,195km"],
                    answer: 2
                },
                {
                    question: "Wie viele Knochen hat ein erwachsener Mensch?",
                    options: ["205", "206", "207", "208"],
                    answer: 1
                },
                {
                    question: "Wann wurde der erste Weltkrieg beendet?",
                    options: ["1914", "1912", "1918", "1916"],
                    answer: 2
                },
                {
                    question: "Welcher Ozean ist der größte?",
                    options: ["Atlantik", "Pazifik", "Indischer Ozean", "Arktischer Ozean"],
                    answer: 1
                },
                {
                    question: "Welches chemische Element hat das Symbol „Au“?",
                    options: ["Silber", "Kupfer", "Eisen", "Gold"],
                    answer: 3
                },

                {
                    question: "Wie heißt der längste Fluss der Welt?",
                    options: ["Amazonas", "Jangtsekiang (Yangtze)", "Nil", "Mississippi"],
                    answer: 2
                },
                {
                    question: "Welche Gürtelfarbe kannst du im Kampfsport Karate nicht verdienen?",
                    options: ["schwarz", "rot", "grün", "weiß"],
                    answer: 1
                },
                {
                    question: "Wofür stehen die olympischen Ringe?",
                    options: ["Einheit der fünf Kontinente", "Verbundenheit von Athleten", "Vereinigung der Welt durch Sport", "Symbol für die Vielfalt der Sportarten"],
                    answer: 0
                },
                {
                    question: "Aus wie vielen Einzelknochen besteht eine menschliche Hand?",
                    options: ["14", "143", "42", "27"],
                    answer: 3
                },
                {
                    question: "Was ist die Hauptstadt von Russland?",
                    options: ["Moskau", "St. Petersburg", "Nowosibirsk", "Jekaterinburg"],
                    answer: 0
                }
            ],
            "sehr-schwer": [
                {
                    question: "In welchem Jahr endete der 2. Weltkrieg?",
                    options: ["1943", "1945", "1947", "1950"],
                    answer: 1
                },
                {
                    question: "Wie viele Staaten hat die USA?",
                    options: ["48", "50", "52", "54"],
                    answer: 1
                },
                {
                    question: "Was ist die Hauptstadt von Brasilien?",
                    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                    answer: 2
                },
                {
                    question: "Was ist die Hauptstadt von Südafrika?",
                    options: ["Johannesburg", "Pretoria", "Kapstadt", "Durban"],
                    answer: 1
                },
                {
                    question: "Welches ist das einzige Tier, das seinen Kopf nicht drehen kann?",
                    options: ["Schlange", "Känguru", "Elefant", "Delfin"],
                    answer: 0
                },

                {
                    question: "Welches Land hat die meisten UNESCO-Welterbestätten?",
                    options: ["Italien", "Frankreich", "Spanien", "China"],
                    answer: 3
                },
                {
                    question: "Wie viele Zeitzonen gibt es auf der Erde?",
                    options: ["12", "16", "24", "28"],
                    answer: 2
                },
                {
                    question: "Welches Land hat die längste Küstenlinie der Welt?",
                    options: ["Kanada", "Australien", "Norwegen", "Russland"],
                    answer: 0
                },
                {
                    question: "Welcher Planet unseres Sonnensystems ist der Sonne am nächsten?",
                    options: ["Mars", "Venus", "Merkur", "Jupiter"],
                    answer: 2
                },
                {
                    question: "Was ist die Hauptstadt von Saudi-Arabien?",
                    options: ["Riad", "Dschidda", "Mekka", "Medina"],
                    answer: 0
                }
            ]
        },
       informatik: {
            leicht: [
                {
                    question: "Was ist HTML eine Abkürzung?",
                    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
                    answer: 0
                },
                {
                    question: "Wer ist oft als 'Vater des Computers' bezeichnet?",
                    options: ["Bill Gates", "Alan Turing", "Charles Babbage", "Tim Berners-Lee"],
                    answer: 2
                },
                {
                    question: "Was ist die Basis von Programmierung?",
                    options: ["Binärsystem", "Dezimalsystem", "Hexadezimalsystem", "Oktalsystem"],
                    answer: 0
                },
                {
                    question: "Welche Firma entwickelte die Java-Programmiersprache?",
                    options: ["Oracle", "Microsoft", "IBM", "Sun Microsystems"],
                    answer: 3
                },
                {
                    question: "Was ist der Begriff für eine Programmierfehler?",
                    options: ["Bug", "Feature", "Virus", "Glitch"],
                    answer: 0
                },
                {
                    question: "Was ist eine häufig verwendete Datenbankmanagementsprache?",
                    options: ["SQL", "HTML", "Python", "Ruby"],
                    answer: 0
                },
                {
                    question: "Welche Firma entwickelte das Betriebssystem 'Windows'?",
                    options: ["Microsoft", "Apple", "IBM", "Google"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufig verwendetes Versionskontrollsystem?",
                    options: ["Git", "SVN", "Mercurial", "Bazaar"],
                    answer: 0
                },
                {
                    question: "Was ist der Standardwebserver auf den meisten Unix-Systemen?",
                    options: ["Apache", "Nginx", "IIS", "Lighttpd"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufig verwendetes Betriebssystem für Webserver?",
                    options: ["Linux", "Windows", "Mac OS", "Ubuntu"],
                    answer: 0
                }
            ],
            schwer: [
                {
                    question: "Was ist die Grundlage für die Datenkommunikation im Internet?",
                    options: ["TCP/IP", "FTP", "HTTP", "SMTP"],
                    answer: 0
                },
                {
                    question: "Welche Programmiersprache wird oft für die Entwicklung von iOS-Apps verwendet?",
                    options: ["Swift", "Java", "C#", "Python"],
                    answer: 0
                },
                {
                    question: "Welche Firma entwickelte die Programmiersprache 'C++'?",
                    options: ["AT&T", "IBM", "Microsoft", "Google"],
                    answer: 0
                },
                {
                    question: "Was ist eine „Rekursion“ in der Informatik?",
                    options: ["Ein spezieller Typ von Variablen", "Eine Methode zur Datensicherung", "Ein Prozess, bei dem eine Funktion sich selbst aufruft", "Eine Art von Schleife in einem Programm"],
                    answer: 2
                },
                {
                    question: "Was ist der Begriff für eine Methode zum Schutz von Passwörtern durch Verschlüsselung?",
                    options: ["Hashing", "Salting", "Cryptography", "Obfuscation"],
                    answer: 0
                },
                {
                    question: "Was ist die Funktion eines Routers?",
                    options: ["Datenpakete zwischen Netzwerken weiterleiten", "Datenpakete in einem Netzwerk übertragen", "Firewall-Schutz bieten", "Daten sichern und wiederherstellen"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufig verwendetes Versionskontrollsystem?",
                    options: ["Git", "SVN", "Mercurial", "Bazaar"],
                    answer: 0
                },
                {
                    question: "Was ist der Hauptzweck eines Betriebssystems?",
                    options: ["Verwaltung von Hardware und Software", "Datenbankverwaltung", "Benutzerschnittstelle bereitstellen", "Textverarbeitung"],
                    answer: 0
                },
                {
                    question: "Was ist ein „Thread“ in der Programmierung?",
                    options: ["Eine bestimmte Art von Datenstruktur", "Ein Programm zur Steuerung von Netzwerkverbindungen", "Ein ausführbarer Programmcode", "Ein Ausführungspfad innerhalb eines Prozesses, der unabhängig von anderen Pfaden arbeitet"],
                    answer: 3
                },
                {
                    question: "Was bedeutet die Abkürzung „GUI“?",
                    options: ["Global User Interface", "Graphical User Interface", "General Utility Interface", "Grouped User Input"],
                    answer: 1
                }
            ],
            "sehr-schwer": [
                {
                    question: "Welcher Prozessorhersteller steht hinter der Ryzen-Serie?",
                    options: [ "Intel", "AMD", "Nvidia", "ARM"],
                    answer: 1
                },
                {
                    question: "Was ist die Hauptfunktion eines VPN?",
                    options: ["Sicherheit und Privatsphäre gewährleisten", "Höhere Download-Geschwindigkeiten ermöglichen", "Geoblocking umgehen", "Verbesserte WLAN-Reichweite bieten"],
                    answer: 0
                },
                {
                    question: "Was ist „SQL“?",
                    options: ["Eine Programmiersprache für Datenbanken", "Ein Betriebssystem", "Ein Webbrowser", "Ein Grafikformat"],
                    answer: 0
                },
                {
                    question: "Was ist „TCP/IP“?",
                    options: ["Ein Verschlüsselungsprotokoll", "Ein Netzwerkprotokoll", "Eine Speichereinheit", "Ein Betriebssystem"],
                    answer: 1
                },
                {
                    question: "Was ist der Zweck eines Content-Management-Systems (CMS)?",
                    options: ["Erstellung und Verwaltung von Websites", "Sicherung von Datenbanken", "Erstellung von Grafiken und Designs", "Entwicklung von Apps"],
                    answer: 0
                },
                {
                    question: "Welches Unternehmen steht hinter dem Betriebssystem 'macOS'?",
                    options: ["Microsoft", "Google", "Apple", "Linux Foundation"],
                    answer: 2
                },
                {
                    question: "Was ist eine gängige Entwicklungsumgebung für Java?",
                    options: ["Visual Studio Code", "Xcode", "Sublime Text", "Eclipse"],
                    answer: 3
                },
                {
                    question: "Was ist die Funktion eines Domain Name Systems (DNS)?",
                    options: ["Übersetzung von Domainnamen in IP-Adressen", "Sicherung von Datenbanken", "Ausführung von Netzwerkanalysen", "Erstellung von Webinhalten"],
                    answer: 0
                },
                {
                    question: "Was ist ein „Hash-Algorithmus“?",
                    options: ["Ein Algorithmus zur Erzeugung von kryptographischen Schlüsseln", "Eine Methode zur Speicherung von Passwörtern in einer Datenbank", "Eine Funktion zur Verschlüsselung von Datenübertragung", "Eine mathematische Funktion, die eine Eingabesequenz in eine feste Ausgabesequenz umwandelt"],
                    answer: 3
                },
                {
                    question: "Was ist ein häufig verwendetes Betriebssystem für Mobilgeräte?",
                    options: ["Android", "iOS", "Windows Phone", "BlackBerry OS"],
                    answer: 0
                }
            ]
        },
        business: {
            leicht: [
                {
                    question: "Was ist ein häufig verwendetes Kriterium für den Erfolg eines Unternehmens?",
                    options: ["Gewinn", "Umsatz", "Anzahl der Mitarbeiter", "Marktkapitalisierung"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufig verwendetes Finanzinstrument für die Beschaffung von Kapital?",
                    options: ["Aktie", "Anleihe", "Darlehen", "Hypothek"],
                    answer: 1
                },
                {
                    question: "Was bedeutet die Abkürzung 'CEO'?",
                    options: ["Chief Financial Officer", "Chief Operating Officer", "Chief Executive Officer", "Chief Technology Officer"],
                    answer: 2
                },
                {
                    question: "Was ist ein häufig verwendetes Instrument zur Analyse der Wirtschaftlichkeit eines Unternehmens?",
                    options: ["Bilanz", "Cashflow-Statement", "Kapitalflussrechnung", "Gewinn- und Verlustrechnung"],
                    answer: 3
                },
                {
                    question: "Was ist ein häufig verwendetes Modell für strategisches Management?",
                    options: ["SWOT-Analyse", "PESTLE-Analyse", "Porters Five Forces", "Balanced Scorecard"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufig verwendetes Instrument zur Kundenbindung?",
                    options: [ "Preissenkung", "Treueprogramm", "Werbegeschenke", "Marketingkampagne"],
                    answer: 1
                },
                {
                    question: "Was ist ein häufiges Merkmal eines Monopols?",
                    options: ["Mehrere Anbieter", "Niedrige Markteintrittsbarrieren", "Ein einziger Anbieter", "Preiswettbewerb"],
                    answer: 2
                },
                {
                    question: "Was ist ein häufiger Bestandteil einer Unternehmensstrategie?",
                    options: ["Rückgang", "Stagnation", "Ineffizienz", "Wachstum"],
                    answer: 3
                },
                {
                    question: "Was ist ein häufiges Ziel des Qualitätsmanagements?",
                    options: ["Kundenzufriedenheit verbessern", "Kosten senken", "Produktivität steigern", "Gewinn maximieren"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufiger Bestandteil einer Marketingstrategie?",
                    options: ["Marktforschung", "Gewinnmaximierung", "Kostensenkung", "Kapitalbeschaffung"],
                    answer: 0
                }
            ],
            schwer: [
                {
                    question: "Was ist Supply Chain Management?",
                    options: ["Ein Konzept zur Verwaltung von Lieferketten in der Logistik", "Ein Modell zur Verwaltung von Finanzmitteln in einem Unternehmen", "Ein Prozess zur Überwachung der Mitarbeiterproduktivität", "Ein Softwaretool zur Verwaltung von Kundendaten"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufig verwendetes Instrument für die Bewertung von Investitionen?",
                    options: ["Return on Investment (ROI)", "Kapitalwertmethode", "Kosten-Nutzen-Analyse", "Break-Even-Analyse"],
                    answer: 1
                },
                {
                    question: "Was ist ein häufiges Merkmal einer oligopolistischen Marktstruktur?",
                    options: [ "Viele Anbieter", "Keine Markteintrittsbarrieren", "Wenige Anbieter", "Niedriger Preiswettbewerb"],
                    answer: 2
                },
                {
                    question: "Was ist ein häufiges Ziel der Corporate Governance?",
                    options: ["Kostensenkung", "Gewinnmaximierung", "Wachstum", "Transparenz und Rechenschaftspflicht"],
                    answer: 3
                },
                {
                    question: "Was ist ein häufig verwendetes Modell für die strategische Planung?",
                    options: ["Balanced Scorecard", "PESTLE-Analyse", "Porters Five Forces", "SWOT-Analyse"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufig verwendetes Instrument zur Risikominderung?",
                    options: [ "Kredit", "Versicherung", "Investition", "Kapitalbeschaffung"],
                    answer: 1
                },
                {
                    question: "Was ist ein häufiger Bestandteil einer Personalstrategie?",
                    options: ["Produktentwicklung", "Finanzierung", "Rekrutierung und Auswahl", "Kundendienst"],
                    answer: 2
                },
                {
                    question: "Was ist ein häufig verwendetes Instrument zur Bewertung der Wettbewerbsfähigkeit?",
                    options: ["Outsourcing", "Diversifikation", "Kapitalbeschaffung", "Benchmarking"],
                    answer: 3
                },
                {
                    question: "Was ist ein häufig verwendetes Instrument zur Kostenkontrolle?",
                    options: ["Budgetierung", "Marketing", "Investition", "Kapitalbeschaffung"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufiges Ziel der Marktforschung?",
                    options: ["Verständnis der Kundenbedürfnisse", "Kostensenkung", "Gewinnmaximierung", "Kapitalbeschaffung"],
                    answer: 0
                }
            ],
            "sehr-schwer": [
                {
                    question: "Was ist ein häufiges Ziel der Unternehmensethik?",
                    options: ["Moralisches Verhalten fördern", "Wachstum", "Kosten senken", "Gewinn maximieren"],
                    answer: 0
                },
                {
                    question: "Was ist ein häufiges Merkmal der Balanced Scorecard?",
                    options: ["Einzelne Leistungskennzahl", "Mehrere Leistungskennzahlen", "Finanzmetriken", "Kundenzufriedenheit"],
                    answer: 1
                },
                {
                    question: "Was ist ein häufiges Instrument zur Förderung von Innovationen?",
                    options: ["Kostensenkung", "Marketing", "Forschung und Entwicklung", "Kapitalbeschaffung"],
                    answer: 2
                },
                {
                    question: "Was ist ein häufiges Ziel des Risikomanagements?",
                    options: ["Gewinn maximieren", "Kosten senken", "Wachstum", "Risiken minimieren"],
                    answer: 3
                },
                {
                    question: "Was ist ein häufig verwendetes Instrument zur Bewertung der Finanzperformance?",
                    options: ["Kennzahlenanalyse", "Prozessanalyse", "Marketinganalyse", "Kundenzufriedenheitsanalyse"],
                    answer: 0
                },
                {
                    question: "Was ist Cluster Analysis in der Datenanalyse?",
                    options: ["Eine Methode zur Verbesserung der Serverleistung in Rechenzentren", "Eine Technik zur Gruppierung von Datenobjekten basierend auf der Ähnlichkeit ihrer Eigenschaften", "Eine Software zur Analyse von Kundennachfragen", "Ein Analyseinstrument zur Identifizierung von Sicherheitslücken in Computernetzwerken"],
                    answer: 1
                },
                {
                    question: "Was ist Machine Vision?",
                    options: ["Eine Technik zur Verbesserung der Bildqualität in digitalen Kameras", "Eine Methode zur Verbesserung der Leseleistung optischer Laufwerke", "Ein Bereich der künstlichen Intelligenz, der sich mit der Interpretation von visuellen Informationen durch Computer befasst", "Ein Konzept zur Verbesserung der Gesichtserkennungstechnologie"],
                    answer: 2
                },
                {
                    question: "Was ist Crowdsourcing?",
                    options: ["Ein Finanzierungsmodell, bei dem eine große Anzahl von Personen kleine Beträge zur Realisierung eines Projekts beiträgt", "Ein Ansatz zur Auslagerung von Geschäftsprozessen an externe Dienstleister", "Ein Konzept zur Verbesserung der Kundenbindung in Online-Shops", "Eine Methode zur Analyse von Marktdaten"],
                    answer: 0
                },
                {
                    question: "Was ist Inferenz in der Statistik?",
                    options: ["Eine Methode zur Vorhersage von zukünftigen Trends", "Ein Prozess zur Ableitung von Schlussfolgerungen aus gegebenen Daten oder Annahmen", "Ein Analyseansatz zur Identifizierung von Ausreißern in Datensätzen", "Eine Technik zur Transformation von Daten in visuelle Darstellungen"],
                    answer: 1
                },
                {
                    question: "Was ist Digital Twin in der Industrie 4.0?",
                    options: ["Ein digitaler Drucker für die Herstellung von Prototypen", "Ein virtueller Assistent für die Produktionsplanung", "Ein digitales Abbild eines industriellen Roboters", "Ein virtuelles Modell eines physischen Produkts, Prozesses oder Systems, das in Echtzeit mit seinem realen Gegenstück synchronisiert ist"],
                    answer: 3
                }
            ]
        }
    };

// Hier werden Variablen für den aktuellen Status des Spiels initialisiert.
let currentCategory = null;
let currentQuestionIndex = 0;
let currentLevel = null;
let currentQuestions = [];
let correctAnswers = 0; // Variable, um die Anzahl der richtigen Antworten zu verfolgen
let totalQuestionsAnswered = 0; // Variable, um die Anzahl der insgesamt beantworteten Fragen zu verfolgen


function hideCategorySelection() {
    categorySelection.style.display = 'none';
}

// Diese Funktion startet das Spiel mit der ausgewählten Kategorie.
function startGame(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    currentQuestions = []; // Setze die Liste der aktuellen Fragen zurück
    gameEnded = false; // Setze gameEnded zurück
    hideCategorySelection();
    showCategoryInfo(category);
}

// Diese Funktion zeigt die Informationen zur ausgewählten Kategorie an.
function showCategoryInfo(category) {
    const categoryInfo = document.getElementById('category-info');
    categoryInfo.textContent = `Kategorie: ${category}`;
    categoryInfo.style.display = 'block';
    const levelSelection = document.createElement('div');
    levelSelection.id = 'level-selection';
    levelSelection.innerHTML = `
        <h2>Wähle ein Level:</h2>
        <button class="level-btn" data-level="leicht">Leicht</button>
        <button class="level-btn" data-level="schwer">Schwer</button>
        <button class="level-btn" data-level="sehr-schwer">Sehr schwer</button>
    `;
    document.getElementById('question-container').appendChild(levelSelection);
    // Füge Event-Listener für Levelauswahl hinzu
    document.querySelectorAll('.level-btn').forEach(button => {
        button.addEventListener('click', () => {
            currentLevel = button.getAttribute('data-level');
            startQuestions(currentLevel); // Starte die Fragen mit dem ausgewählten Level
        });
    });
}

// Diese Funktion startet das Quiz mit den ausgewählten Fragen.
function startQuestions(level) {
    console.log('Level ausgewählt:', level);
    document.getElementById('level-selection').style.display = 'none'; // Entferne die Levelauswahl
    showQuestion(); // Rufe die Funktion auf, um die Fragen anzuzeigen
}

// Diese Funktion wählt zufällige Fragen für das Spiel aus.
function getRandomQuestions(level) {
    const allQuestions = questions[currentCategory][level];
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5); // Mische die Fragen zufällig
    return shuffledQuestions.slice(0, 5); // Wähle die ersten 5 Fragen aus
}

// Diese Funktion zeigt eine Frage und ihre Optionen an.
function showQuestion() {
    const categoryInfo = document.getElementById('category-info');
    categoryInfo.textContent = `Kategorie: ${currentCategory} | Level: ${currentLevel}`;
    categoryInfo.style.display = 'block';

    if (currentQuestions.length === 0) {
        currentQuestions = getRandomQuestions(currentLevel, 5); // Wähle zufällige Fragen aus
    }

    const question = currentQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionContainer = document.createElement('div');
        optionContainer.classList.add('option-container');
        const optionButton = document.createElement('button');
        optionButton.classList.add('option');
        optionButton.textContent = option;
        optionButton.onclick = () => checkAnswer(index);
        optionContainer.appendChild(optionButton);
        optionsElement.appendChild(optionContainer);
    });

    questionElement.style.display = 'block';
    optionsElement.style.display = 'block';
}

// Diese Variable verfolgt den Status des Spiels (beendet oder nicht).
let gameEnded = false; // Variable, um den Zustand des Spielendes zu verfolgen

// Diese Funktion überprüft die ausgewählte Antwort und zeigt das Ergebnis an.
function checkAnswer(selectedIndex) {
    const question = currentQuestions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    // Deaktiviere alle Buttons, um weitere Klicks zu verhindern
    options.forEach(option => {
        option.disabled = true;
    });

    // Überprüfe die ausgewählte Antwort
    if (selectedIndex === question.answer) {
        options[selectedIndex].classList.add('correct');
        correctAnswers++; // Inkrementiere die Anzahl der richtigen Antworten
    } else {
        options[selectedIndex].classList.add('wrong');
        setTimeout(() => {
            options[question.answer].classList.add('correct');
        }, 2000); // Warte 2 Sekunden, bevor die richtige Antwort angezeigt wird
    }

    totalQuestionsAnswered++; // Inkrementiere die Anzahl der insgesamt beantworteten Fragen

    // Warte 3 Sekunden, bevor die nächste Frage angezeigt wird
    setTimeout(() => {
        // Gehe zur nächsten Frage
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion(); // Zeige die nächste Frage an
        } else {
            if (!gameEnded) { // Überprüfe, ob das Spiel bereits beendet ist
                gameEnded = true; // Setze den Zustand auf "Spiel beendet"
                // Zeige den Score am Ende an
                showScore();
                setTimeout(() => {
                    alert('Spiel beendet!'); // Zeige den Alert "Spiel beendet!" nach 5 Sekunden
                    showCategorySelection(); // Aufruf der Funktion, um die Kategorieauswahl anzuzeigen
                    document.getElementById('question').style.display = 'none'; // Frage ausblenden
                    document.getElementById('options').style.display = 'none'; // Antwortmöglichkeiten ausblenden
                    document.getElementById('level-selection').style.display = 'none'; // Levelauswahl ausblenden
                }, 5000);
            }
        }
    }, 5000); // Warte 5 Sekunden
}

// Diese Funktion zeigt den Score am Ende des Spiels an.
function showScore() {
    const scoreContainer = document.createElement('div');
    scoreContainer.id = 'score-container';
    scoreContainer.innerHTML = `
        <h2>Score</h2>
        <p>Richtige Antworten: ${correctAnswers}</p>
        <p>Falsche Antworten: ${totalQuestionsAnswered - correctAnswers}</p>
        <p>Insgesamt beantwortete Fragen: ${totalQuestionsAnswered}</p>
    `;
    scoreContainer.style.textAlign = 'center'; // Zentriere den Text
    scoreContainer.style.marginTop = '50px'; // Füge mehr Abstand zum Container hinzu
    document.getElementById('question-container').appendChild(scoreContainer);

    // Timeout einrichten, um den Score-Container nach einigen Sekunden zu entfernen
    setTimeout(() => {
        scoreContainer.remove();
        // Setze die Variablen für den Score zurück
        correctAnswers = 0;
        totalQuestionsAnswered = 0;
    }, 5000); // Warte 5 Sekunden, bevor der Score-Container entfernt und die Variablen zurückgesetzt werden
}

// Diese Funktion zeigt den Alert "Spiel beendet!" an.
function showAlert() {
    alert('Spiel beendet!');
    showCategorySelection(); // Zeige die Kategorieauswahl an, wenn der Alert geschlossen wird
    document.getElementById('question').style.display = 'none'; // Frage ausblenden
    document.getElementById('options').style.display = 'none'; // Antwortmöglichkeiten ausblenden
    document.getElementById('level-selection').style.display = 'none'; // Levelauswahl ausblenden
    showScore(); // Score anzeigen
}


// Hier wird das Spiel gestartet, indem das Kategorieauswahlmenü angezeigt wird.
showCategorySelection();

// Hier wird der Event-Listener für das Schließen des Alerts hinzugefügt.
window.addEventListener('beforeunload', function(event) {
    // Verstecke den Score
    const scoreContainer = document.getElementById('score-container');
    if (scoreContainer) {
        scoreContainer.remove();
    }
});

// Diese Funktion blendet das Kategorieauswahlmenü ein.
function showCategorySelection() {
    categorySelection.style.display = 'block';
    const categoryInfo = document.getElementById('category-info');
    categoryInfo.style.display = 'none';
    const levelSelection = document.getElementById('level-selection');
    if (levelSelection) {
        levelSelection.remove(); // Entferne die Levelauswahl
    }
}

// Hier werden Event-Listener für die Kategorieauswahlbuttons hinzugefügt.
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        startGame(category);
    });
});

// Hier wird das Spiel gestartet, indem das Kategorieauswahlmenü angezeigt wird.
showCategorySelection();