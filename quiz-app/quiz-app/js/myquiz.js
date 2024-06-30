const studentButton = document.getElementById('studentButton');
const teacherButton = document.getElementById('teacherButton');

studentButton.addEventListener('click', () => {
    window.location.href = "../quiz-app/html/student.html";
});

teacherButton.addEventListener('click', () => {
    window.location.href = "../quiz-app/html/teacher.html";
});



