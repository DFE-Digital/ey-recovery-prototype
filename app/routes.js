const express = require('express')
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

//routing for incorrect/correct quiz results
router.post('/brain-development/test-result', (req, res) => {
  // Make a variable and give it the value from 'quiz result value in radio buttons'
  const quizResult = req.session.data['quiz-result'];

  // Check whether the variable matches a condition
  if (quizResult === 'correct') {
    // Send user to next page
    res.redirect('/brain-development/test-1-pass');
  } else {
    // Send user to ineligible page
    res.redirect('/brain-development/test-1-fail');
  }
});

module.exports = router
