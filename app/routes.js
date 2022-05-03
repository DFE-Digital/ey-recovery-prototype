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

})

module.exports = router
