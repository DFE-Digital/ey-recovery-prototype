const express = require('express')
const { Console } = require('console')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/quiz-1-answer', function (req, res) {

  var partOfBrain = req.session.data['part-of-brain']

  if (partOfBrain == "Occipital lobes"){
    res.redirect('sprint-1/brain-development/quiz-1-right')
  } else {
    res.redirect('sprint-1/brain-development/quiz-1-wrong')
  }

});

//routing for incorrect/correct quiz results- end of module
router.post('/sprint-7/brain-development/test-result', (req, res) => {
  // Make a variable and give it the value from 'quiz result value in radio buttons'
  const quizResult = req.session.data['quiz-result'];

  // Check whether the variable matches a condition
  if (quizResult === 'correct') {
    // Send user to next page
    res.redirect('/sprint-7/brain-development/test-1-pass');
  } else {
    // Send user to ineligible page
    res.redirect('/sprint-7/brain-development/test-1-fail');
  }
});


//routing for incorrect/correct quiz results - mid assessment
router.post('/sprint-7/brain-development/quiz-answer-2', (req, res) => {
  // Make a variable and give it the value from 'quiz result value in radio buttons'
  const quiz2Answer = req.session.data['answer'];

  // Check whether the variable matches a condition
  if (quiz2Answer === 'true') {
    // Send user to next page
    res.redirect('/sprint-7/brain-development/quiz-2-right');
  } else {
    // Send user to ineligible page
    res.redirect('/sprint-7/brain-development/quiz-2-wrong');
  }
});

 //routing for quiz 1 validation
 router.post('/brain-development/quiz-1-answer', (req, res) => {
  // Make a variable and give it the value from 'quiz result value in radio buttons'
  var quizAnswer = req.session.data['quiz-answer'];

  // Check whether the variable matches a condition
  if(quizAnswer === 'filled') {
    //Radio button is checked

    // Send user to next page
    res.redirect('/brain-development/quiz-1-right');
  } else {
    // Send user to error page
    res.redirect('/brain-development/quiz-1-error');
  }
});

module.exports = router
