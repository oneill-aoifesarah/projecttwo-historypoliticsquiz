// Quiz Questions, Multiple Choice, and Correct Answers
const quizData =[
    {
        question: 'Which country is known as the Hermit Kingdom?',
        options: [
            'North Korea',
            'Senegal',
            'Myanmar',
            'China'
        ],
        answer: 'North Korea',
    },
    {
        question: 'What is the term for the political and economic theory of Karl Marx and Friedrich Engels that advocates for a classless society and the means of production owned by the community?',
        options: [
            'Fascism',
            'Capitalism',
            'Socialism',
            'Communism'
        ],
        answer: 'Communism',
    },
    {
        question: 'What is the international coalition of countries that opposes the use of chemical weapons and is known for its chemical weapons watchdog role?',
        options: [
            'NATO',
            'Interpol',
            'UNICEF', 
            'OPCW'
        ],
        answer: 'OPCW',
    },
    {
        question: 'What is the name of the historic peace agreement between Israel and the United Arab Emirates signed in 2020?',
        options: [
            'Camp David Accords',
            'Oslo Accords', 
            'Abraham Accords',
            'Peace of Paris'
        ],
        answer: 'Abraham Accords',
    },
    {
        question: 'Which city is considered the political and administrative capital of Saudi Arabia?',
        options: [
            'Mecca',
            'Medina',
            'Jeddah',
            'Riyadh'
        ],
        answer: 'Riyadh',
    },
    {
        question: 'Which treaty, signed in 1957, established the European Economic Community (EEC), a precursor to the EU?',
        options: [
            'Maastricht Treaty',
            'Lisbon Treaty',
            'Treaty of Rome',
            'Schengen Agreement'
        ],
        answer: 'Treaty of Rome',
    },
    {
        question: 'Who is the current President of the European Commission as of 2023?',
        options: [
            'Ursula von der Leyen',
            'Jean-Claude Juncker',
            'Angela Merkel',
            'Emmanuel Macron',
        ],
        answer: 'Ursula von der Leyen',
    },
    {
        question: 'What is the term for the peace agreement signed in 1998 that helped bring an end to the conflict in Northern Ireland?',
        options: [
            'Good Friday Agreement',
            'Bloody Sunday Agreement',
            'Cork Accord',
            'Lisbon Treaty',
        ],
        answer: 'Good Friday Agreement',
    },
    {
        question: 'What was the title of the famous document through which King Henry VIII sought an annulment of his marriage to Catherine of Aragon?',
        options: [
            'Declaration of Independence',
            'Magna Carta',
            'Act of Supremacy',
            'Act of Succession'
        ],
        answer: 'Act of Succession',
    },
    {
        question: 'Which amendment to the U.S. Constitution grants women the right to vote?',
        options: [
            '1st Amendment',
            '14th Amendment',
            '19th Amendment',
            '2nd Amendment'
        ],
        answer: '19th Amendment',
    },
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitContainer = document.getElementById('submit');
const tryAgainContainer = document.getElementById('tryAgain');
const revealAnswerContainer = document.getElementById('revealAnswer');