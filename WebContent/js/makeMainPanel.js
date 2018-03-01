/**
 * 
 */

function makeMainPanel (fromId, fromLogin, query) {
	
	env.msgs = [];
	env.minId = -1;
	env.maxId = -1;
	
	alert(fromId);
	
	if(fromId == undefined) {
		fromId = -1;
	}
	
	env.fromId = fromId;
	env.fromLogin = fromLogin;
	
	console.log(env.fromLogin);
	env.query = query;
	
	alert(env.fromId);
	//var s = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><title>Main Page</title>";
	//s += "<link href=\"Mainpage.css\" rel=\"stylesheet\" type=\"text/css\" /></head>";
	var s ="";
	if (env.fromId < 0) {
		s + = "<div id = \"title\"> Page de "+ fromLogin +"</div>";
	} else if (!env.follows.has(env.fromId)) {
		s += "<div id = \"add\"> Page de "+ fromLogin ;
		s += "<img src=\"Image/add.png\" title=\"Suivie\" alt=\"Suivie\" onclick=\"javascript:follow()\" >";
		s += "</div>";
	} else {
		s += "<div id = \"remove\"> Page de "+ fromLogin ;
		s += "<img src=\"Image/remove.png\" title=\"Suivie\" alt=\"Suivie\" onclick=\"javascript:unfollow()\" >";
		s += "</div>";
	}
	
	if (env.fromId > 0) {
		s += "<div id = \"pageprofil\"> Page de "+ fromLogin ;
		s += "<a href =\" \" >Page de Profil</a>;
		s += "</div>";
	}

	document.body.innerHTML = s;
}

function completeMessagesResponse2(rep) {
	//var tab = JSON.parse(rep, revival);
	//var lastId = undefined;
	/*for (var i=0; i<tab.length; i++) {
		$("#messages").append(tab[i].getHtml());
		env.msgs[tab[i].id] = tab[i];
		
		if (tab[i].id > env.maxId) {
			env.maxId = tab[i].id;
		}
		
		if ((env.minId < 0) || (tab[i].id < env.minId)) {
			env.minId = tab[i].id;
		}
		
		lastId = tab[i].id;
	}
	
	$("#message_" + lastId).appear();
	
	$.force.appear();*/
	var json = JSON.parse(rep);
	var s = "<div id='list-messages'>";
	var list_messages = json.list_messages;
	for (var i=0; i<list_messages.length; i++) {
		var one_msg = JSON.stringify(list_messages[i]);
		var one_msg_json = JSON.parse(one_msg);
		var msg_text = one_msg_json.text;
		var msg_date = one_msg_json.date.$date;
		var msg_auteur = one_msg_json.auteur;
		var msg_auteur_login = msg_auteur.login;
		var msg_comments = one_msg_json.comments;
		
		var comment_html = "";
		for (var j=0; j<msg_comments.length; j++) {
			var one_comment = msg_comments[j];
			//var one_comment_
			var comment_auteur = one_comment.auteur.login;
			var comment_text = one_comment.texte;
			var comment_date = one_comment.date.$date;
			comment_html += "<div class='div-one-comment'>" +
			"<div class='one-comment'>" + 
			"<div class='photo-comment-auteur'>" +
			"<img src=\"img/icons/avatar.png\" alt=\"avatar\" height=\"42\" width=\"42\"/> " +
			"<div class='comment-auteur-text'>" +
			"<span class='comment-auteur'>" + comment_auteur +
			"</span> " + comment_text +
			"</div>" +
			"<div class='comment-date'>" + comment_date +
			"</div>" +
			"</div>" +
			"</div>" +
			"</div>";
		}
		
		
		s += "<div class='div-one-msg'>" +
		"<div class='one-msg'>" +
			"<div class='photo-msg-auteur'>" +
				"<img src=\"img/icons/avatar.png\" alt=\"avatar\" height=\"55\" width=\"55\"/> " +
				"<div class='msg-auteur'>" + msg_auteur.login +
				"</div>" +
				"<div class='msg-date'>" + msg_date +
				"</div>" +	
			"</div>" +
			"<div class='msg-text'>" + msg_text +
			"</div><hr/>" +
		
			"<div class='div-msg-buttons'>" +
				"<div class='msg-buttons'>" +
		
					"<div class='btn-likes'>" +
					"<img src=\"img/icons/like.png\" alt=\"like\" height=\"32\" width=\"32\"/> " +
					"j'aime " +
					"</div>" +
					
					"<div class='btn-comments'>" +
					"<img src=\"img/icons/pen.png\" alt=\"pen\" height=\"32\" width=\"32\"/> " +
					"réagir " + 
					"</div>" +
		
				"</div>" +
			"</div>" +
		"</div>" +
		"<div class='div-comments'>" + 
			comment_html +
		"</div>" +
		"<div class='div-new-comment'>" +
			"<img src=\"img/icons/avatar.png\" alt=\"avatar\" height=\"42\" width=\"42\"/> " +
			"<textarea name='new-comment' class='new-comment' style='overflow-y: visible;'" +
			"placeholder=\"Qu'en pensez vous ?\">" +
			"</textarea>" +
			"<input type='submit' name='post-comment' class='post-comment' value='Postez'/>" +
		"</div>" +
		"</div>";
		
	}
	s += "</div>";
	$("#div-list-messages").html(s);
	//$.force_appear();
	
}
