window.onload = function () {
  let result = {};
  let step = 0;

  function showQuestions(questionNumber) {
    document.querySelector('.question').innerHTML = quiz[step]['q'];//выводим вопрос
    let answer = ' ';
    for (let key in quiz[step]['a']) {
      answer += `<li data-v="${key}" class="answer-variant">${quiz[step]['a'][key]}</li>`;
    }
    document.querySelector(".answer").innerHTML = answer;
  }

  document.onclick= function (event) {
    event.stopPropagation();
    if (event.target.classList.contains('.answer-variant') && step < quiz.length) {
       console.log(event.target.data);
    }
  };

  showQuestions(step);
};