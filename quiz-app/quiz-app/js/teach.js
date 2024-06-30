
let quizData = [];
let storedQuizData = JSON.parse(localStorage.getItem('quizData'));
if (storedQuizData) {
    storedQuizData = storedQuizData.filter(item => item !== null); // 移除 null 值
}

quizData = quizData.concat(JSON.parse(localStorage.getItem('quizData')));

const quiz = document.getElementById('quiz')

const answerEls = document.querySelectorAll('.answer')

const questionEl = document.getElementById('question')

const questionText = document.getElementById('question-text');
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', () => {
    if (getSelected() === undefined) { alert("请选中一个作为正确选项"); return; }
    if (questionText.value === '' || a_text.value === '' || b_text.value === '' || c_text.value === '' || d_text.value === '') {
        alert('请填写完整题目信息');
        return;
    }
    const newQuestion = {
        question: questionText.value,
        a: a_text.value,
        b: b_text.value,
        c: c_text.value,
        d: d_text.value,
        correct: getSelected()

    };

    // 将新问题添加到quizData中
    quizData.push(newQuestion);
    quizData = quizData.filter(item => item !== null);

    // 将更新后的quizData保存到localStorage中
    localStorage.setItem('quizData', JSON.stringify(quizData));
    alert('添加成功');

    questionText.value = '';
    a_text.value = '';
    b_text.value = '';
    c_text.value = '';
    d_text.value = '';
    deselectAnswers();
});

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

const returnButton = document.getElementById('returnButton');
returnButton.addEventListener('click', () => {
    window.location.href = "../myquiz.html";
});