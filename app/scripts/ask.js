(function(document) {
    'use strict';
    var eventInfo = document.querySelector('event-info');
    // var ajax = document.querySelector('core-ajax');

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

        // ajax.addEventListener('core-response', function(e) {
        //     events.updateModel(e.detail.response.events);
        // });

        // ajax.go();
        // eventInfo.updateModel({
        //     user: user,
        //     event: eventData
        // });
        eventInfo.build(20, 66);

        console.log('Polymer is ready to rock!');
    });
    // document.querySelector('#new-event-button').addEventListener('click', function(e) {
    //     pages.selected = 1;
    // });
    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));