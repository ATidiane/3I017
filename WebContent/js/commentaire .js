/**
 * 
 */

function Commentaire(id, author, text, date) {
	this.id = id;
	this.author = author;
	this.text = text;
	this.date = date;
}


Commentaire.prototype.getHtml() {
	var s = "<div id = \"Commentaire_\"" + this.id + "class = \"commentaire \">" + this.text + "</div>";
	return s;
}