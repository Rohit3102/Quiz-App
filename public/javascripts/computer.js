const quizContainer = document.querySelector('#quiz-container');
const questionContainer = document.querySelector('#question-container');
const optionsContainer = document.querySelector('#options-container');
const nextButton = document.querySelector('#next-button');

let currentQuestionIndex = 0;
let score = 0;


const quizData = [
    {
        question: '1 :- What does HTML stand for?',
        options: ['Hypertext Markup Language', 'Hyperlink and Text Markup Language', 'High-Level Text Markup Language', 'Hypertext and Links Markup Language'],
        correctOption: 0,
    },

    {
        question: '2 :- Which programming language is known for its use in machine learning and data science?',
        options: ['Java', 'Python', 'C++', 'JavaScript'],
        correctOption: 1,
    },

    {
        question: '3 :- What does CSS stand for in web development?',
        options: ['Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets'],
        correctOption: 3,
    },

    {
        question: '4 :- In programming, what does the acronym "API" stand for?',
        options: ['Application Programming Interface', 'Advanced Programming Interface', 'Automated Programming Interface', 'Application Process Integration'],
        correctOption: 0,
    },

    {
        question: '5 :- Which data structure follows the Last In, First Out (LIFO) principle?',
        options: ['Queue', 'Stack', 'Linked List', 'Array'],
        correctOption: 1,
    },

    {
        question: '6 :- What is the purpose of the "git" version control system?',
        options: ['Database Management', 'Project Management', 'Source Code Management', 'File Compression'],
        correctOption: 2,
    },

    {
        question: '7 :- What is the role of a "compiler" in programming?',
        options: ['Translates source code to machine code', 'Manages memory allocation', 'Handles user input/output', 'Optimizes database queries'],
        correctOption: 0,
    },

    {
        question: '8 :- Which programming paradigm does JavaScript primarily follow?',
        options: ['Procedural', 'Functional', 'Object-Oriented', 'Logical'],
        correctOption: 2,
    },

    {
        question: '9 :- What is the purpose of the "SQL" language?',
        options: ['Styling web pages', 'Server-side scripting', 'Database query language', 'File manipulation'],
        correctOption: 2,
    },

    {
        question: '10 :- In networking, what does "HTTP" stand for?',
        options: ['Hypertext Transfer Protocol', 'Hyperlink Text Transmission Protocol', 'High-Level Transfer Protocol', 'Host and Terminal Transfer Protocol'],
        correctOption: 0,
    }
];


function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = index;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        optionsContainer.appendChild(label);
    });
}

// answer and move to the next question
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const selectedOptionIndex = parseInt(selectedOption.value);

        if (selectedOptionIndex === quizData[currentQuestionIndex].correctOption) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }
}

//  display the score
function endQuiz() {
    quizContainer.innerHTML = `<h1>Quiz Completed</h1>
                            <p>Your Score: ${score}/${quizData.length}</p>`;
}

//  Next button
nextButton.addEventListener('click', checkAnswer);

// Initial load
loadQuestion();

