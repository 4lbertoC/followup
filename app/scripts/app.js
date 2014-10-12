(function(document) {
    'use strict';
    var scaffoldTemplate = document.querySelector('scaffold-template');
    var events = document.querySelector('#events');
    var ajax = document.querySelector('core-ajax');
    var questionList = document.querySelector('question-list');

    document.addEventListener('polymer-ready', function() {

        ajax.addEventListener('core-response', function(e) {
            events.events = e.detail.response.events;
        });

        ajax.go();

    });
    document.querySelector('#new-event-button').addEventListener('click', function(e) {
        window.open('publish/?userID=22', '_self');
    });

    window.FollowUp = {};

    FollowUp.openQuestionList = function(eventID) {

        scaffoldTemplate.setPage(2);
        questionList.eventID = eventID;
        history.pushState({
            eventID: eventID
        }, 'FollowUp', '/event/' + eventID);
    };

    window.addEventListener('popstate', function(data) {
        var eventIDregex = /.*\/event\/([0-9]+)/
        var match = document.URL.match(eventIDregex);
        if (match) {
            scaffoldTemplate.setPage(2);
            var eventID = match[1];
            questionList.eventID = eventID;
        } else {
            scaffoldTemplate.setPage(0);
        }
    });

    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));