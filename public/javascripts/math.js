const quizContainer = document.querySelector('#quiz-container');
const questionContainer = document.querySelector('#question-container');
const optionsContainer = document.querySelector('#options-container');
const nextButton = document.querySelector('#next-button');

let currentQuestionIndex = 0;
let score = 0;
const quizData = [
    {
        question: '1 :-  पाई (π) का मान दो दशमलव स्थानों तक क्या है?',
        options: ['3.14', '3.21', '3.27', '3.33'],
        correctOption: 0,
    },
    
    {
        question: '2 :- यदि एक आयत की लंबाई 8 इकाइयाँ है और चौड़ाई 5 इकाइयाँ है, तो इसका क्षेत्र क्या है?',
        options: ['40 वर्ग इकाइयाँ', '13 वर्ग इकाइयाँ', '26 वर्ग इकाइयाँ', '48 वर्ग इकाइयाँ'],
        correctOption: 0,
    },
    
    {
        question: '3 :- समीकरण हल करें: 2x + 5 = 15',
        options: ['x = 5', 'x = 10', 'x = 7', 'x = 3'],
        correctOption: 1,
    },
    
    {
        question: '4 :- 144 का वर्गमूल क्या है?',
        options: ['10', '12', '14', '16'],
        correctOption: 1,
    },
    
    {
        question: '5 :- यदि एक त्रिभुज के कोण 30°, 60°, और 90° माप के होते हैं, तो यह किस प्रकार का त्रिभुज है?',
        options: ['समबाहु', 'समद्विबाहु', 'विषमबाहु', 'समकोणी'],
        correctOption: 3,
    },
    
    {
        question: '6 :- एक षट्कोण के आंतर कोणों का योग क्या है?',
        options: ['120°', '180°', '360°', '540°'],
        correctOption: 2,
    },
    
    {
        question: '7 :- यदि एक संख्या को 20% बढ़ाया जाता है और फिर 10% घटाया जाता है, तो कुल प्रतिशत परिवर्तन क्या है?',
        options: ['10%', '8%', '12%', '15%'],
        correctOption: 1,
    },
    
    {
        question: '8 :- 7 और 49 के वर्गमूल का गुणफल क्या है?',
        options: ['7', '14', '21', '49'],
        correctOption: 0,
    },
    
    {
        question: '9 :- एक वृत्त का क्षेत्रफल जिसका त्रिज्या 5 इकाइयाँ है, क्या है?',
        options: ['25π वर्ग इकाइयाँ', '50π वर्ग इकाइयाँ', '100π वर्ग इकाइयाँ', '125π वर्ग इकाइयाँ'],
        correctOption: 0,
    },
    
    {
        question: '10 :- यदि x = 3 और y = 5, तो x² + y² का मूल्य क्या है?',
        options: ['14', '20', '34', '40'],
        correctOption: 2,
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

