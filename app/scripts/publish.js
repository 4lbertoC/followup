(function(document) {
    'use strict';
    var pages = document.querySelector('core-pages');

    var baseUrl = document.URL;
    var path = baseUrl.match(/(.*)\/publish/)[1];

    document.addEventListener('polymer-ready', function() {
        console.log('Polymer is ready to rock!');
    });

    window.FollowUp = {};

    FollowUp.onEventPublished = function(eventID) {
        window.open(path + '/published/?eventID='+eventID,'_self');
    };
    
    // document.querySelector('#new-event-button').addEventListener('click', function(e) {
    //     pages.selected = 1;
    // });
    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));