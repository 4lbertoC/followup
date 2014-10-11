(function(document) {
    'use strict';
    var pages = document.querySelector('core-pages');
    var questionSubmitted = document.querySelector('question-submitted');

    var user = {
        "userID": "18",
        "password": "hahaha",
        "email": "pippo@example.com",
        firstName: "Max",
        lastName: "Mustermann"
    };
    var eventData = {
        "eventID": "123",
        "title": "Title of the event",
        "description": "Description of the event",
        "date": Date.now()
    };

    document.addEventListener('polymer-ready', function() {
        console.log('Polymer is ready to rock!');
    });

    window.FollowUp = {};

    FollowUp.onQuestionSubmit = function(questionID) {
        pages.selected = 1;
        questionSubmitted.questionID = questionID;
    };
    
    // document.querySelector('#new-event-button').addEventListener('click', function(e) {
    //     pages.selected = 1;
    // });
    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));