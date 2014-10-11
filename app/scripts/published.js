(function(document) {
    'use strict';
    var pages = document.querySelector('core-pages');

    var user = {
        "userID": "18",
        "password": "hahaha",
        "email": "pippo@example.com",
        firstName: "Max",
        lastName: "Mustermann"
    };
   

    document.addEventListener('polymer-ready', function() {
        console.log('Polymer is ready to rock!');
    });

    window.FollowUp = {};

    FollowUp.onEventPublished = function(eventID) {
        window.open('/published?eventID=?'+eventID,'_self');
    };
    
    // document.querySelector('#new-event-button').addEventListener('click', function(e) {
    //     pages.selected = 1;
    // });
    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));