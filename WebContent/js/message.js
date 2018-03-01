/**
 * 
 */

function Message(id, author, text, date, comments) {
	this.id = id;
	this.author = author;
	this.text = text;
	this.date = date;
	if ( comments == undefined ) {
		comments = []
	} 
	this.comments = comments;
}

Message.prototype.getHtml() {
	var s = "<div id=\"Message_\"" + this.id + "class=\"message\">" + this.text ;
	for (i=0 ; i< comments.length ; i++ ) {
		s += this.comments[i] ;
		s += " ";
	}
	s += "</div>";
}
