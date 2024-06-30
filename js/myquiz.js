const studentButton = document.getElementById('studentButton');
const teacherButton = document.getElementById('teacherButton');

studentButton.addEventListener('click', () => {
    window.location.href = "../html/student.html";
});

teacherButton.addEventListener('click', () => {
    window.location.href = "../html/teacher.html";
});



