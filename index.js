
const questions = document.querySelectorAll('.question');
const qstt = document.querySelectorAll(".qst")
const answers = document.querySelectorAll('.answer');
const arrow1s = document.querySelectorAll('.arrow1');
const arrow2s = document.querySelectorAll('.arrow2');

answers.forEach((answer) => {
  answer.style.display = 'none';
});
arrow2s.forEach((arrow) => {
  arrow.style.display = 'none';
});
questions.forEach((kitxvebi,index ) => {
  const arrow1 = arrow1s[index];
  const arrow2 = arrow2s[index];
  const answer = answers[index];
  const qst = qstt[index];
  
arrow1.addEventListener('click', function() {
    answer.style.display = 'block'; 
    qst.style.color = "#1E1F36";
    qst.style.fontWeight = "700"
    arrow1.style.display = 'none';
    arrow2.style.display = 'block'; 
  });

arrow2.addEventListener('click', function() {
    answer.style.display = 'none'; 
    arrow1.style.display = 'block'; 
    arrow2.style.display = 'none'; 
    qst.style.color = "#4B4C5F";
    qst.style.fontWeight = "400"
  });
});































// const questions = document.querySelectorAll('.question');
// const answers = document.querySelectorAll('.answer');
// const arrow1s = document.querySelectorAll('.arrow1');
// const arrow2s = document.querySelectorAll('.arrow2');

// questions.forEach((question, index) => {
//   const arrow1 = arrow1s[index];
//   const arrow2 = arrow2s[index];
//   const answer = answers[index];

//   answer.style.display = 'none';
//   arrow2.style.display = 'none';

//   arrow1.addEventListener('click', function() {
//     answer.style.display = 'block';
//     arrow1.style.display = 'none';
//     arrow2.style.display = 'block';
//   });

//   arrow2.addEventListener('click', function() {
//     answer.style.display = 'none';
//     arrow1.style.display = 'block';
//     arrow2.style.display = 'none';
//   });
// });

// const questions = document.getElementsByClassName('question');
// const arrow1s = document.getElementsByClassName('arrow1');
// const arrow2s = document.getElementsByClassName('arrow2');
// const answers = document.getElementsByClassName('answer');

// const toggleAnswer = function(index) {
//   return function() {
//     const arrow1 = arrow1s[index];
//     const arrow2 = arrow2s[index];
//     const answer = answers[index];

//     if (answer.style.display === 'none') {
//       answer.style.display = 'block';
//       arrow1.style.display = 'none';
//       arrow2.style.display = 'block';
//     } else {
//       answer.style.display = 'none';
//       arrow1.style.display = 'block';
//       arrow2.style.display = 'none';
//     }
//   };
// };

// for (let i = 0; i < questions.length; i++) {
//   const question = questions[i];
//   question.addEventListener('click', toggleAnswer(i));
// }


// const question1 = document.querySelector('.question');
// const arrow1 = question1.querySelector('.arrow1');
// const arrow2 = question1.querySelector('.arrow2');
// const answer = question1.nextElementSibling;

// arrow1.addEventListener('click', function() {
//   answer.style.display = 'block'; // Show the answer
//   arrow1.style.display = 'none'; // Hide arrow1
//   arrow2.style.display = 'block'; // Show arrow2
// });

// arrow2.addEventListener('click', function() {
//   answer.style.display = 'none'; // Hide the answer
//   arrow1.style.display = 'block'; // Show arrow1
//   arrow2.style.display = 'none'; // Hide arrow2
// });

// arrow1.addEventListener('click', function() {
//   const questionHeading = document.querySelector('.faq h1');
//   questionHeading.style.fontSize = '15px'; // Set font size to 15px
//   questionHeading.style.color = '#1E1F36'; // Set font color to #1E1F36
// });














// const question1 = document.querySelector('.question');
// const arrow1 = question1.querySelector('.arrow1');
// const arrow2 = question1.querySelector('.arrow2');
// const answer = question1.nextElementSibling;

// arrow1.addEventListener('click', function() {
//   if (answer.style.display === 'none') {
//     answer.style.display = 'block'; // Show the answer
//     arrow1.style.display = 'none'; // Hide arrow1
//     arrow2.style.display = 'block'; // Show arrow2
//   } else {
//     answer.style.display = 'none'; // Hide the answer
//     arrow1.style.display = 'block'; // Show arrow1
//     arrow2.style.display = 'none'; // Hide arrow2
//   }
// });

// arrow2.addEventListener('click', function() {
//   answer.style.display = 'none'; // Hide the answer
//   arrow1.style.display = 'block'; // Show arrow1
//   arrow2.style.display = 'none'; // Hide arrow2
// });