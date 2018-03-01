/**
 * 
 */

function init() {
	env = new Object ();
	
	//Event to activate when last message appear
	$("body").on("appear", function(event, $affected) {
		$.clear_appear();
		completeMessages();
	});
	
	// Asks to the client to activate cookies
	if (!navigator.cookieEnabled) {
        alert("Activez vos cookies !");
	}
	
	noConnection = false;
	if (noConnection) {
		
		env.id = 1;
		env.login = "Ahmed";
		env.key = "MGVNX120";
	} else {
		var c = getCookie("page");
		var k = getCookie("key");
		if (c == null || c == 0) {
			makeWelcomePanel(); 
		} else if (c == 1) {
			makeConnexionPanel();
		} else if (c == 2) {
			if (k.length != 0) {
				logout();
				setCookie("page", 1);
				makeConnexionPanel();
			}
		}
		
	}
	
}