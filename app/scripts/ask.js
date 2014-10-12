(function(document) {
    'use strict';
    var scaffoldTemplate = document.querySelector('scaffold-template');

    var questionSubmitted = document.querySelector('question-submitted');

    document.addEventListener('polymer-ready', function() {
        console.log('Polymer is ready to rock!');
    });

    window.FollowUp = {};

    FollowUp.onQuestionSubmit = function(questionID) {
    	scaffoldTemplate.setPage(1);
        questionSubmitted.questionID = questionID;
    };
    
    // document.querySelector('#new-event-button').addEventListener('click', function(e) {
    //     pages.selected = 1;
    // });
    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));