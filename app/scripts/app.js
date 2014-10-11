(function(document) {
	'use strict';
	var pages = document.querySelector('core-pages');
	var discussions = document.querySelector('#discussions');
	var ajax = document.querySelector('core-ajax');

	document.addEventListener('polymer-ready', function() {

		ajax.addEventListener('core-response', function(e) {
			discussions.updateModel(e.detail.response.events);
		});

		ajax.go();

		
		console.log('Polymer is ready to rock!');
	});
	document.querySelector('#new-discussion-button').addEventListener('click', function(e) {
		pages.selected = 1;
	});
	// wrap document so it plays nice with other libraries
	// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));