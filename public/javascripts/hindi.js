const quizContainer = document.querySelector('#quiz-container');
const questionContainer = document.querySelector('#question-container');
const optionsContainer = document.querySelector('#options-container');
const nextButton = document.querySelector('#next-button');

let currentQuestionIndex = 0;
let score = 0;
const quizData = [
    {
        question:  '1 :- भारत का सबसे बड़ा राज्य कौन सा है?',
        options: ['महाराष्ट्र', 'राजस्थान', 'उत्तर प्रदेश', 'मध्य प्रदेश'],
        correctOption: 2,
        },
        
        {
        question: '2 :- कौन-कौन से रंग हिंदी रंगमंच के लिए प्रमुख हैं?',
        options: ['लाल और हरा', 'पीला और नीला', 'सफेद और काला', 'नीला और भूरा'],
        correctOption: 0,
        },
        
        {
        question: '3 :- हिंदी का लिपि सार्वजनिक रूप से कौन-कौन सी है?',
        options: ['देवनागरी', 'कौस्तुभ', 'ब्राह्मी', 'गुरुमुखी'],
        correctOption: 0,
        },
        
        {
        question: '4 :- भारतीय संगीत में रागों की संख्या कितनी है?',
        options: ['52', '108', '72', '12'],
        correctOption: 1,
        },
        
        {
        question: '5 :- हिंदी के प्रमुख लेखक "प्रेमचंद" का असली नाम क्या था?',
        options: ['हरिवंशराय', 'धर्मवीर', 'मुक्तिबोध', 'चंद्रकांत'],
        correctOption: 0,
        },
        {
            question: '6 :- भारत की सबसे ऊची इमारत कौन सी है?',
            options: ['भरतीय उच्च न्यायालय', 'कुतुब मीनार', 'राजपथ भवन', 'इंडिया गेट'],
            correctOption: 1,
            },
            
            {
            question: '7 :- किस दिन हिंदी दिवस मनाया जाता है?',
            options: ['14 अगस्त', '5 सितंबर', '10 जनवरी', '14 सितंबर'],
            correctOption: 3,
            },
            
            {
            question: '8 :- भारतीय वायुसेना का स्थापना दिवस कब मनाया जाता है?',
            options: ['8 अक्टूबर', '15 अगस्त', '4 दिसंबर', '12 मार्च'],
            correctOption: 0,
            },
            
            {
            question: '9 :- हिंदी फिल्म इंडस्ट्री को क्या कहा जाता है?',
            options: ['Bollywood', 'Tollywood', 'Kollywood', 'Hollywood'],
            correctOption: 0,
            },
            
            {
            question: '10 :- भारतीय गणराज्य का राष्ट्रीय गान क्या है?',
            options: ['जन गण मन', 'सारे जहाँ से अच्छा', 'वन्दे मातरम', 'जहा हैं तेरा आसमान'],
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

    