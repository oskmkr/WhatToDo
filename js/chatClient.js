/**
 * drag & drop
 **/
(function() {
	var oServerInfo = {
		'host' : 'localhost',
		'port' : 8886
	}
	var ws = new WebSocket("ws://" + oServerInfo.host + ':' + oServerInfo.port);

	var board = $('#board');

	ws.onopen = function() {
		console.log('[WebSocket] onOpen');

	}

	ws.onmessage = function(event) {
		console.log('[WebSocket] onMessage' + event.data);


		board.val(board.val() + '\n' + event.data);
	}

	ws.onclose = function() {
		console.log('[WebSocket] onClose');
		ws.close();
		ws = null;
	}

	var send = function() {
		if(!ws) {
			return;
		}

		var sMsg = $('input.form-control').val();

		ws.send(sMsg);		
	}

	$('input.form-control').bind('keypress', function(event) {

    	if (event.keyCode == 13) {
    		send();
    	}

	});
	
	$('.btn.btn-default').bind('click', function(event) {
		send();

	});
})();