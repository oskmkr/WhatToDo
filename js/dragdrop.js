/**
 * drag & drop
 **/
(function() {

	var onDragStart = function(event) {
		console.log('onDragStart');
		event.dataTransfer.setData('dragItem', event.target.id);
	};

	var onDragEnter = function(event) {
		console.log('onDragEnter');
	};

	var onDragOver = function(event) {
		console.log('onDragOver');

	};

	var onDrop = function(event) {
		console.log('onDrop');

		var id = event.dataTransfer.getData('dragItem');

		var el = $(id);

		if(el && el.parentNode != event.currentTarget) {

			el.parentNode.removeChild(el);

			event.currentTarget.appendChild(el);
		}

		event.stopPropagation();
	};

	$('.input-group').bind('dragstart', onDragStart);

})();