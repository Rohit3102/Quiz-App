const quizContainer = document.querySelector('#quiz-container');
const questionContainer = document.querySelector('#question-container');
const optionsContainer = document.querySelector('#options-container');
const nextButton = document.querySelector('#next-button');

let currentQuestionIndex = 0;
let score = 0;


const quizData = [
    {
        question: '1 :- Bharat mein "Rajpath" kahan sthit hai?',
        options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
        correctOption: 0,
    },

    {
        question: '2 :- Vishwa mein sabse bada mahasagar kaun sa hai?',
        options: ['Atlantic Mahasagar', 'Indian Mahasagar', 'Arctic Mahasagar', 'Pacific Mahasagar'],
        correctOption: 3,
    },

    {
        question: '3 :- Bharat ka sabse uncha pahad kaun sa hai?',
        options: ['K2 (Mount Godwin-Austen)', 'Kangchenjunga', 'Mount Everest', 'Annapurna'],
        correctOption: 2,
    },

    {
        question: '4 :- Bharat ka Rashtrapati kaun hai? (2022 mein)',
        options: ['Ram Nath Kovind', 'Narendra Modi', 'Sonia Gandhi', 'Amit Shah'],
        correctOption: 0,
    },

    {
        question: '5 :- Bharat ki sabse lambi nadi kaun si hai?',
        options: ['Yamuna', 'Ganga', 'Brahmaputra', 'Godavari'],
        correctOption: 1,
    },

    {
        question: '6 :- Nobel Prize kis kshetra mein diya jata hai?',
        options: ['Sahitya', 'Shastra', 'Sangeet', 'Shanti'],
        correctOption: 3,
    },

    {
        question: '7 :- Bharat ka sabse bada jila kaun sa hai?',
        options: ['Allahabad', 'Jaipur', 'Kachchh', 'Leh'],
        correctOption: 2,
    },

    {
        question: '8 :- World Health Organization (WHO) ka mukhyalaya kahan sthit hai?',
        options: ['New York', 'Paris', 'Geneva', 'London'],
        correctOption: 2,
    },

    {
        question: '9 :- Bharat mein sabse adhik spoken language konsi hai?',
        options: ['Hindi', 'Bengali', 'Telugu', 'Marathi'],
        correctOption: 0,
    },

    {
        question: '10 :- Bharat mein sabse unchi choti kaun si hai?',
        options: ['Nanda Devi', 'Kangchenjunga', 'K2 (Mount Godwin-Austen)', 'Annapurna'],
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

