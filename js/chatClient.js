/**
 * drag & drop
 **/
(function() {
	var oServerInfo = {
		'host' : 'localhost',
		'port' : 8887
	}
	var ws = new WebSocket("ws://" + oServerInfo.host + ':' + oServerInfo.port);

	
	ws.onopen = function() {
		console.log('[WebSocket] onOpen');

	}

	ws.onmessage = function(event) {
		console.log('[WebSocket] onMessage' + event.data);


	}

	ws.onclose = function() {
		console.log('[WebSocket] onClose');
		ws.close();
		ws = null;
	}

	$('.btn btn-default').bind('click', function(event) {
		if(!ws) {
			return;
		}

		var sMsg = $('.form-control').text();

		ws.send(sMsg);		

	});


})();