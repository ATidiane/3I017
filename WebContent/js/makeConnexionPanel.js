/**
 * 
 */

function makeConnexionPanel() {
	
	var s = "";
	//s += "<!DOCTYPE html><html><head><meta charset="UTF-8">";
	s += "<title>Twister</title>";
	s += "<link href=\"../css/Connexion.css\" rel=\"stylesheet\" type=\"text/css\" />";
	s += "<script type='text/javascript' src = '../js/connexion.js'></script>";
	s += "</head><body>	<div id=\"connexion_main\"><h1>Ouvrir une session</h1>";
	s += "<form method=\"GET\" action=\"javascript:(function () {})()\" onsubmit=javascript:connexion(this);>";
	s += "<div class=\"ids\"><span>Login</span><input type=\"text\" name=\"login\" /></div>";
	s += "<div class=\"ids\"><span>Mot de passe</span><input type=\"password\" name=\"pass\" /></div>";
	s += "<div class=\"buttons\"><input type=\"submit\" value=\"Connexion\" /></div>";
	s += "<div class=\"connexion_links\">" ;
	s += "<div id=\"link1\">Mot de passe perdu</div><div id=\"link2\">Pas encore inscrit ?</div></div>";
	s += "<div class=\"clear\"></div>";
	s += "</form></div></body></html>";
	
	document.write(s);
}
