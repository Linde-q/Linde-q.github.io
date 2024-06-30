let quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
];

let storedQuizData = localStorage.getItem('quizData');
if (storedQuizData != null) {
    quizData = quizData.concat(JSON.parse(localStorage.getItem('quizData')));
}

const quiz = document.getElementById('quiz')

const answerEls = document.querySelectorAll('.answer')

const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h1 id="home"><button id="returnButton" title="返回首页">返回</button>学生端</h1>
                <h2>You answered </br>${score}/${quizData.length} questions </br>correctly</h2>
                
                <button onclick="location.reload()">再次作答</button>
            `
            returnHome();
        }
    } else {
        alert("请至少选择一个选项")

    }
})

returnHome();

function returnHome() {
    const returnButton = document.getElementById('returnButton');
    returnButton.addEventListener('click', () => {
        window.location.href = "../myquiz.html";
    });
}
