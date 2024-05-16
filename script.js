const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

const quizData = [
    {   
        question: "What is the capital of India?",
        options: ["Kolkata", "Mumbai", "Delhi", "Chennai"],
        answer: "Delhi"
    },

    {
        "question": "Which city is known as the 'Pink City' of India?",
        "options": ["Jaipur", "Delhi", "Mumbai", "Agra"],
        "answer": "Jaipur"
    },

    {
        "question": "Which river is considered the holiest river in India?",
        "options": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "answer": "Ganga"
    },

    {
        "question": "Who was the first Prime Minister of India?",
        "options": ["Jawaharlal Nehru", "Indira Gandhi", "Mahatma Gandhi", "Sardar Vallabhbhai Patel"],
        "answer": "Jawaharlal Nehru"
    },

    {
        "question": "Who holds the record for the highest individual score in Test cricket?",
        "options": ["Sachin Tendulkar", "Brian Lara", "Ricky Ponting", "Virat Kohli"],
        "answer": "Brian Lara"
    },

    {
        "question": "Which country won the ICC Cricket World Cup in 2019?",
        "options": ["India", "Australia", "England", "New Zealand"],
        "answer": "England"
    },

    {
        "question": "Who is known as the 'God of Cricket'?",
        "options": ["Virat Kohli", "Rohit Sharma", "Sachin Tendulkar", "MS Dhoni"],
        "answer": "Sachin Tendulkar"
    },
];

function buildQuiz() {
    quizData.forEach((quizItem, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `${index + 1}. ${quizItem.question}<br>`;
        
        quizItem.options.forEach(option => {
            const optionElement = document.createElement('input');
            optionElement.type = 'radio';
            optionElement.name = `question${index}`;
            optionElement.value = option;
            questionElement.appendChild(optionElement);
            questionElement.appendChild(document.createTextNode(option));
            questionElement.appendChild(document.createElement('br'));
        });

        quizContainer.appendChild(questionElement);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('input[type="radio"]:checked');
    let score = 0;

    quizData.forEach((quizItem, index) => {
        const userAnswer = answerContainers[index]?.value;
        if (userAnswer === quizItem.answer) {
            score++;
        }
    });

    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);
