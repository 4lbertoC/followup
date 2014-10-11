(function(document) {
    'use strict';
    var pages = document.querySelector('core-pages');
    var events = document.querySelector('#events');
    var ajax = document.querySelector('core-ajax');

    document.addEventListener('polymer-ready', function() {

        ajax.addEventListener('core-response', function(e) {
            events.updateModel(e.detail.response.events);
        });

        ajax.go();


        console.log('Polymer is ready to rock!');
    });
    document.querySelector('#new-event-button').addEventListener('click', function(e) {
        window.open('/publish','_self');
    });
    // wrap document so it plays nice with other libraries
    // http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));