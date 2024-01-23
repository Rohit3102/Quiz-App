const quizContainer = document.querySelector('#quiz-container');
const questionContainer = document.querySelector('#question-container');
const optionsContainer = document.querySelector('#options-container');
const nextButton = document.querySelector('#next-button');

let currentQuestionIndex = 0;
let score = 0;
const quizData = [
    {
        question: '1 :- Which river is known as the "Ganga of the South" in India?',
        options: ['Yamuna', 'Krishna', 'Godavari', 'Cauvery'],
        correctOption: 2,
    },

    {
        question: '2 :- Who is known as the "Father of the Nation" in India?',
        options: ['Jawaharlal Nehru', 'Sardar Patel', 'Subhas Chandra Bose', 'Mahatma Gandhi'],
        correctOption: 3,
    },

    {
        question: '3 :- Which Indian festival is known as the Festival of Lights?',
        options: ['Holi', 'Diwali', 'Navratri', 'Eid'],
        correctOption: 1,
    },

    {
        question: '4 :- What is the currency of India?',
        options: ['Yuan', 'Dollar', 'Rupee', 'Euro'],
        correctOption: 2,
    },

    {
        question: '5 :- Which mountain range separates Europe and Asia?',
        options: ['Andes', 'Himalayas', 'Alps', 'Ural'],
        correctOption: 3,
    },
    {
        question: '6 :- What is the largest planet in our solar system?',
        options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
        correctOption: 1,
    },

    {
        question: '7 :- Which famous scientist developed the theory of general relativity?',
        options: ['Isaac Newton', 'Niels Bohr', 'Albert Einstein', 'Galileo Galilei'],
        correctOption: 2,
    },

    {
        question: '8 :- In which year did the Titanic sink?',
        options: ['1912', '1905', '1920', '1931'],
        correctOption: 0,
    },

    {
        question: '9 :- What is the capital of Japan?',
        options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
        correctOption: 2,
    },

    {
        question: '10 :- Who wrote the play "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Leo Tolstoy'],
        correctOption: 1,
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

