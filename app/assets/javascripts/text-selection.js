var CFObject

function highlight(text, state) {
  var inputText = document.getElementById('textSelection')
  var innerHTML = inputText.innerHTML
  inputText.innerHTML = innerHTML.replace(new RegExp(text, 'ig'), function (
    phrase
  ) {
    return (
      `<mark class="content-highlight content-highlight-${state}">${phrase}</mark>`
    )
  })
}

function performFeedbackHighlightFormatting() {
  $('#contentToTest mark.content-highlight').contents().unwrap()
  CFObject.feedback.good.sort(function (a, b) {
    return b.length - a.length
  })
  CFObject.feedback.bad.sort(function (a, b) {
    return b.length - a.length
  })
  for (phrase of CFObject.feedback.good) {
    highlight(phrase, 'good')
  }
  for (phrase of CFObject.feedback.bad) {
    highlight(phrase, 'bad')
  }
  for (phrase of CFObject.feedback.maybe) {
    highlight(phrase, 'maybe')
  }
}

var ContentResearch = {
  feedback: {
    good: [],
    bad: [],
    maybe: [],
  },

  vote: function (selection, state) {
    var asLines = selection.split('\n')
    asLines = asLines.filter((line) => {
      return line.trim().length > 2
    })
    for (line of asLines) {
      switch(state) {
        case 'good':
          this.feedback.good.push(line.trim())
          break;
        case 'bad':
          this.feedback.bad.push(line.trim())
          break;
        case 'maybe':
          this.feedback.maybe.push(line.trim())
          break;
      }
    }
    performFeedbackHighlightFormatting()
    $('input#export-field').val(JSON.stringify(this.feedback))
  },

  voteUp: function () {
    var selection = window.getSelection().toString()
    if (selection) {
      this.vote(selection.trim(), 'good')
    }
  },

  voteDown: function () {
    var selection = window.getSelection().toString()
    if (selection) {
      this.vote(selection, 'bad')
    }
  },

  voteMaybe: function () {
    var selection = window.getSelection().toString()
    if (selection) {
      this.vote(selection, 'maybe')
    }
  },
}

CFObject = ContentResearch

function removePhrase(phrase) {
  CFObject.feedback.good = CFObject.feedback.good.filter(
    (instance) => instance !== phrase
  )
  CFObject.feedback.bad = CFObject.feedback.bad.filter(
    (instance) => instance !== phrase
  )
  CFObject.feedback.maybe = CFObject.feedback.maybe.filter(
    (instance) => instance !== phrase
  )
}

$(document).on('click', 'mark.content-highlight', function () {
  var phrase = $(this).text()
  removePhrase(phrase)
  performFeedbackHighlightFormatting()
})


var loadedResponses = $('input#export-field').val()

if (loadedResponses.length > 0) {
  CFObject.feedback = JSON.parse(loadedResponses)
  performFeedbackHighlightFormatting()
}

/*
function adaptFooterBottomMargin() {
  const hightOfVoteButtonContainer = $('.vote-button-container').height()
  $('footer.govuk-footer').css('margin-bottom', hightOfVoteButtonContainer + 'px')
  console.log(hightOfVoteButtonContainer)
}

adaptFooterBottomMargin()

$(window).on('resize', adaptFooterBottomMargin)
*/
