/**
 * 
 */

function makeEnregistrementPanel () {
	
	var s = "";
	s += "<!DOCTYPE html><html><head><meta charset=\"UTF-8\">";
	s += "<title>Enregistrement</title>"
	s += "<link href=\"../css/Enregistrement.css\" rel=\"stylesheet\" type=\"text/css\" />"
	s += "</head><body>";
	s += "<h1>Enregistrement</h1><div id=\"connexion_main\" >";
	s += "<form method=\"GET\" action=\"javascript:(function () {})()\" >";
	s += "<div id=\"prenom\"><span>Prenom</span><input type=\"text\" name=\"prenom\" />";
	s += "</div><div id=\"nom\"><span>Nom</span><input type=\"text\" name=\"nom\" />";
	s += "</div><div class=\"ids\"><span>Login</span><input type=\"text\" name=\"login\"/>
	s += "</div>";
		
		
	document.write(s);
	
	
}