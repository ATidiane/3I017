<<<<<<< HEAD
/**
 * 
 */

/*function init() {
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
	
}*/

function signout() {
	c = getCookie("page");
	if (c == 2) {
		k = getCookie("key");
		if (k.length != 0) logout();
		setCookie("page", 1);
	}
}


/*####################################################################################################*
 *-----------------------------------------Make Welcome Panel-----------------------------------------* 
 *####################################################################################################*/

function makeWelcomePanel() {
	var body = "" +
	"<header id=\"entete\">" +
	"<div id='div-entete'>" +
	"<div id='left-entete'>" +
	"<div class=\"round_img\">" +
	"<img src=\"img/logo5.png\" alt=\"logo\" height=\"42\" width=\"42\"> " +
	"</div>" +
	"<ul>" +
	"<li id='about'>About</li>" +
	"</ul>" +
	"</div>" +
	"<div id='right-entete'>" +
	"<ul>" +
	"<li id='connexion' onclick='makeConnexionPanel();'>Connexion</li>" +
	"</ul>" +
	"</div>" +
	"</div>" +
	"</header>" +
	"<div id='bg'></div>" +
	"<div id='main'>" +
    "<div id='register_main' >" +
    "<h3>Rejoignez Twister</h3>" +
	"<form method='GET' action='javascript:(function () {})()' onsubmit='enregistrement(this);' >" +
	"<div class='ids'>" +
	"<label for='prenom'>Prenom</label>" + 
	"<input type='text' name='prenom' id='prenom' onfocus='removeErrorIf(this);' onblur='lengthError(this);' autofocus />" +
	"</div>" + 
	"<div class='ids'>" +
	"<label for='nom'>Nom</label>" +	
	"<input type='text' name='nom' id='nom' onfocus='removeErrorIf(this);' onblur='lengthError(this);' />" +
	"</div>" + 
	"<div class='ids'>" +
	"<label for='login'>Login</label>" +
	"<input type='text' name='login' id='login' onfocus='removeErrorIf(this);' onblur='lengthError(this);' />" +
	"</div>" + 
	"<div class='ids'>" + 
	"<label for='email'>Email</label>" +
	"<input type='text' name='email' id='email' onfocus='removeErrorIf(this);' onblur='isEmail(this);' />" +
	"</div>" + 
	"<div class='ids'>" + 
	"<label for='pass'>Password</label>" +
	"<input type='password' name='pass' id='pass' onfocus='removeErrorIf(this);' onblur='mdpError(this);' />" +
	"</div>" +
	"<div class='ids'>" +
	"<label for='confirmez'>Confirmez</label>" +
	"<input type='password' name='confirmez' id='confirmez' onfocus='removeErrorIf(this);' onblur= 'confirmezError(this);' />" +
	"</div>" +
	"<div class='register'>" +
	"<input type='submit' value=\"s'enregistrer\" id ='enregistrer'/>" +
	"</div>" + 
	"</form>" +
	"</div>" + 		
	"</div>" +
	"<footer id='footer'></footer>";
	
	var link = "<link href=\"css/enregistrement.css\" rel=\"stylesheet\" media=\"all\" type=\"text/css\">";
	$('link').replaceWith(link);
	document.body.innerHTML = body;
	setCookie("page", 0);
}

/*####################################################################################################*
 *----------------------------------------Make Connection Panel----------------------------------------* 
 *####################################################################################################*/

function makeConnexionPanel() {
	
	$("#barError").remove();
	var button_register = "<li id='inscrire' onclick='makeWelcomePanel();'>s'inscrire</li>";
	var connexion_main = "" +
	"<div id=\"connexion_main\">" +
	"<h3>Bon retour sur Twister</h3>" +
	"<form method=\"GET\" action=\"javascript:(function () {})()\" onsubmit='connexion(this);' >" +
	"<div class='ids'>" +
	"<label for='login'>Login</label>" +
	"<input type='text' name='login' id='login' onfocus='removeErrorIf(this);' onblur='lengthError(this);' autofocus />" +
	"</div>" +
	"<div class='ids'>" +
	"<label for='pass'>Password</label>" +
	"<input type='password' name='pass' id='pass' onfocus='removeErrorIf(this);' onblur='lengthError(this);' />" +
	"</div>" +
	"<div id='oubli' onclick='makeReinitializePanel();'>Mot de passe oublié ?</div>" +
	
	"<div id='connect'>" +
	"<input type='submit' value='se connecter' id ='connection'/>" +
	"</div>" +
	"</form>" +
	"<div class='modal-reinitialize'>" +
	"<div id='reinitialize-content'>" +
	"<span class='close'>&times;</span>" +
	"<div id='reinitialize-header'>Mot de passe Oublié</div>" +
	"<div id='reinitialize-body'>" +
	"<p>Veuillez nous indiquez l'adresse mail associée à votre compte</p>" +
	"<form method='GET' action='javascript:(function () {})()' onsubmit='MakeSearchMailResponse(this);' >" +
	"<input type='text' name='mailR' id='mailR' placeholder='Votre adresse mail' onfocus='removeErrorIf(this);' autofocus/>" +
	"<div id='searchMail-div'>" +
	"<input type='submit' id='searchMail' value='Recherchez' />" +
	"</div>" +
	"</form>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>";
	
	var c = getCookie("page");
	var link = "<link href=\"css/connexion.css\" rel=\"stylesheet\" media=\"all\" type=\"text/css\">";
	$('link').replaceWith(link);
	if (c != 1) {
		$('#connexion').replaceWith(button_register);
		$('#main').html(connexion_main);
	} else {
		var header = ""+
		"<header id=\"entete\">" +
		"<div id='div-entete'>" +
		"<div id='left-entete'>" +
		"<div class=\"round_img\">" +
		"<img src=\"img/logo5.png\" alt=\"logo\" height=\"42\" width=\"42\"> " +
		"</div>" +
		"<ul>" +
		"<li id='about'>About</li>" +
		"</ul>" +
		"</div>" +
		"<div id='right-entete'>" +
		"<ul>" +
		"<li id='inscrire' onclick='makeWelcomePanel();'>s'inscrire</li>" +
		"</ul>" +
		"</div>" +
		"</div>" +
		"</header>" +
		"<div id='bg'></div>";
		
		var footer = "<footer id='footer'></footer>";
		body = header + "<div id='main'>"+ connexion_main + "</div>" + footer;
		document.body.innerHTML = body;
	}
	
	setCookie("page", 1);
}


/*####################################################################################################*
 *----------------------------------------Traitement d'erreurs----------------------------------------* 
 *####################################################################################################*/

function removeErrorIf(e) {
	var id = "#"+e.id
	var error = id+" ~ .error";
	$(error).remove();
	removeMsgError(e.id);
	$(id).css('border-color','#0086b3');
}

function showTheRed(id) {
	$(id).after("<span class='error'>!</span>");
	$(id).css('border-color','red');
}

function lengthError(e) {
	var v = e.value;
	var id = '#'+e.id;
	var oldmsg = $(id+" ~ .error");
	
	if (v.length > 20) {
		showTheRed(id);
		insertMsgError(e.id, "trop long (20 caractères maximum)");
	} else {
		$(id).css('border-color', 'black');
	}
}

function isEmail(e){
	var email = e.value
	var id = '#'+e.id;
    var regEmail = new RegExp('^([0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5})?$','i');
	var oldmsg = $(id+" ~ .error");
	var bool = true;
	
    if (!regEmail.test(email)) {
    	showTheRed(id);
    	insertMsgError(e.id, "invalide");
    	bool = false;
	} else {
		$(id).css('border-color', 'black');
	}
    return bool;

}

function mdpError(e) {
	var mdp = e.value
	var id = '#'+e.id;
	var oldmsg = $(id+" ~ .error");
	
	if (mdp.length < 8 && mdp.length > 0) {
		showTheRed(id);
		insertMsgError(e.id, "trop court(8 caractères minimum)");
	} else {
		$(id).css('border-color', 'black');
	}

}

function confirmezError(e) {
	var mdp = $("#pass").val();
	var confirmez = e.value;
	
	var id = '#'+e.id;
	var oldmsg = $(id+" ~ .error");
	
	if (confirmez.length > 0 && mdp != confirmez) {
		showTheRed(id);
		insertMsgError(e.id, "mots de passe non correspondants");
	} else {
		$(id).css('border-color', 'black');
	}

}

function insertMsgError(id, msg) {
	$('#'+id).before("<span class='errormsg'>"+msg+"</span>");
}

function removeMsgError(id) {
	var msgerror = "label[for="+id+"] ~  .errormsg";
	if (!$(msgerror).length) {
		var msgerror = ".errormsg:first-child";
	}
	$(msgerror).remove();
}

/*####################################################################################################*
 *----------------------------------------Start of Connection-----------------------------------------* 
 *####################################################################################################*/

function connexion(f) {
	var login = f.login.value;
	var pass = f.pass.value;
	var ok = verifFormConnexion(f.login, f.pass);
	if (ok) {
		alert("Start");
		connecte(login, pass);
	}
	return false;
}

function verifFormConnexion(login, pass) {
	var vlogin = login.value;
	var vpass = pass.value;
	var bool = true;
	
	if (vlogin.length == 0) {
		showTheRed('#'+login.id);
		insertMsgError(login.id, "Obligatoire");
		bool = false;
	} else if (vlogin.length > 20) {
		lengthError(login);
		bool = false;
	}
	
	if (vpass.length == 0) {
		showTheRed('#'+pass.id);
		insertMsgError(pass.id, "Obligatoire");
		bool = false;
	}
	return bool;
}

function responseConnexion(rep) {
	var json = rep;
	
	var bool = true;
	
	if (json.ErrorCode == 1) {
		var notUser = "<div id='barError'>Les données saisies ne correspondent à aucun "
			+ "n'utilisateur dans notre base de données!</div>";
		
		if ($("#barError").length) {
			$("#barError").replaceWith(notUser);
		} else {
			$("#main").prepend(notUser);
		}
		showTheRed("#login");
		showTheRed("#pass");
		bool = false;
	} else if (json.ErrorCode == 2) {
		var wrongpass = "<div id='barError'>Mauvais mot de passe. Veuillez retentez!</div>";
		
		if ($("#barError").length) {
			$("#barError").replaceWith(wrongpass);
			
		} else {
			$("#main").prepend(wrongpass);
		}
		$("#barError").css({"width":"25%"});
		showTheRed("#pass");
		bool = false;
	} else {
		setCookie("page", 2);
		setCookie("key", json.key);
		setCookie("login", json.login);
		
		env.key = json.key;
		env.id = json.id_user;
		alert(env.id);
		env.login = json.login;
		env.follows = new Set();
		env.followers = new Set();
		
		for (var i=0; i<(rep.follows).length; i++) {
			env.follows.add(rep.follows[i]);
		
		}
		
		for (var i=0; i<(rep.followers).length; i++) {
			env.followers.add(rep.followers[i]);
		}
		
		// Transiter vers la page principale après connexion
		makeMainPanel(-1, env.login);
		
		alert(env.follows.size);
		$("#abonnements span").html(env.follows.size);
		$("#abonnes span").html(env.followers.size);
	}
	return bool;
}

function attachEvents() {
	$("#deconnexion").click(function() {
		logout();
	});
	
	$("#post").click(function() {
		newMessage();
	});
	
	$("#profil").click(function() {
		makeMainPanel(env.id, env.login);
		env.lastId = undefined;
		completeMessages(env.key, env.id, -1, -1, 10);
	});
	
	$("#accueil").click(function() {
		makeMainPanel(-1, env.login);
		env.lastId = undefined;
		completeMessages(env.key, -1, -1, -1, 10);
	})
	
}

function connecte(login, pass) {
	if (!noConnection) {
		$.ajax({
			type : "GET",
			url : "http://li328.lip6.fr:8280/gr1_bboy/Login",
			data : "login="+login+"&mdp="+pass,
			datatype : "json",
			error : function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success : function (rep) {
				if (responseConnexion(rep)) {
					completeMessages(rep.key, -1, -1, -1, 10);
				}
			}
		});
	} else {
		responseConnexion({"key":325, "id":3, "login":"viniya", "follows":[2]});
	}
	alert("OK");
}


/*####################################################################################################*
 *-----------------------------------------End of Connection------------------------------------------* 
 *####################################################################################################*/

/*####################################################################################################*
 *----------------------------------------Start of Registering----------------------------------------* 
 *####################################################################################################*/

function enregistrement(f) {
	var prenom = f.prenom.value;
	var nom = f.nom.value;
	var login = f.login.value;
	var email = f.email.value;
	var pass = f.pass.value;
	var confirmez = f.confirmez.value;
	var ok = verifFormRegistering(f.prenom, f.nom, f.login, f.email, f.pass, f.confirmez);
	if (ok) {
		enregistre(prenom, nom, email, login, pass)
	}
	
	return true;
}

function verifFormRegistering(prenom, nom, login, email, pass, confirmez) {
	var vprenom = prenom.value;
	var vnom = nom.value;
	var vlogin = login.value;
	var vemail = email.value;
	var vpass = pass.value;
	var vconfirmez = confirmez.value;
	var bool = true;
	
	if (vprenom.length == 0) {
		showTheRed('#'+prenom.id);
		insertMsgError(prenom.id, "Obligatoire");
		bool = false;
	} else if (vprenom.length > 20) {
		lengthError(prenom);
		bool = false;
	}
	
	if (vnom.length == 0) {
		showTheRed('#'+nom.id);
		insertMsgError(nom.id, "Obligatoire");
		bool = false;
	} else if (vnom.length > 20) {
		lengthError(nom);
		bool = false;
	}
	
	if (vlogin.length == 0) {
		showTheRed('#'+login.id);
		insertMsgError(login.id, "Obligatoire");
		bool = false;
	} else if (vlogin.length > 20) {
		lengthError(login);
		bool = false;
	}
	
	if (vemail.length == 0) {
		showTheRed('#'+email.id);
		insertMsgError(email.id, "Obligatoire");
		bool = false;
	} else if (!isEmail(email)){
		bool = false;
	}
	
	if (vpass.length == 0) {
		showTheRed('#'+pass.id);
		insertMsgError(pass.id, "Obligatoire");
		bool = false;
	} else if (vpass.length < 8) {
		mdpError(pass);
		bool = false;
	}
	
	if (vconfirmez.length == 0) {
		showTheRed('#'+confirmez.id);
		insertMsgError(confirmez.id, "Obligatoire");
		bool = false;
	} else if (vconfirmez != vpass){
		confirmezError(confirmez);
		bool = false;
	}
	return bool;
}

function responseRegistering(rep, login) {
	var json = rep;
	var userExist = "<div id='barError'>Ce login existe déja. Veuillez en choisir un autre!</div>";
	var mailExist = "<div id='barError'>Cette adresse mail existe déja. Veuillez en choisir une autre!</div>";
	var bool = true;
	if (json.ErrorCode == -2) {
		if ($("#barError").length) {
			$("#barError").replaceWith(userExist);
		} else {
			$("#main").prepend(userExist);
		}
		$("#barError").css({"width":"30%"});
		showTheRed("#login");
		bool = false;
	} else if (json.ErrorCode == -3) {
		if ($("#barError").length) {
			$("#barError").replaceWith(mailExist);
		} else {
			$("#main").prepend(mailExist);
		}
		$("#barError").css({"width":"35%"});
		showTheRed("#email");
		bool = false;
	}
	return bool;
}

function enregistre(prenom, nom, mail, login, pass){
	if (!noConnection) {
		$.ajax({
			type:"GET",
			url:"http://li328.lip6.fr:8280/gr1_bboy/createUser",
			data:"nom="+nom+"&prenom="+prenom+"&mail="+mail+"&login="+login+"&mdp="+pass,
			datatype: "json",
			error : function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function (rep) {
				if (responseRegistering(rep)) {
					connecte(login, pass);
					//makeMainPanel(-1, login);
				}
			}
		});
	} else {
		
	}
		
}

/*####################################################################################################*
 *-----------------------------------------End of Registering-----------------------------------------* 
 *####################################################################################################*/

/*####################################################################################################*
 *-----------------------------------Reinitializing Accounts By Mail----------------------------------* 
 *####################################################################################################*/

function makeReinitializePanel() {
	
	// Get the modal
	var modal =document.getElementsByClassName('modal-reinitialize')[0];
	// Get the button that opens the modal
	var btn = document.getElementById('oubli');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// Open the modal 
	modal.style.display = "block";
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
	
}

function MakeSearchMailResponse(f) {
	var mail = f.mailR.value;
	var ok = verifFormSearchMail(f.mailR);
	if (ok) {
		mailBase(mail)
	}
	return false;
}

function verifFormSearchMail(mail) {
	var v = mail.value;
	var id = '#'+mail.id;
	var bool = true;
	
	if (v.length == 0) {
		showTheRed(id);
		insertMsgError(mail.id, "Obligatoire");
		$(".errormsg").css({"right":"75px"});
		bool = false;
	} else if (!isEmail(mail)) {
		$(".errormsg").css({"right":"75px"});
		bool = false;
	}
	
	return bool;
}

function responseReinitialize(rep) {
	
}

function mailBase(mail) {
	if (!noConnection) {
		$.ajax({
			type : "GET",
			url : "http://li328.lip6.fr:8280/gr1_bboy/",
			data : "mail="+pass,
			datatype : "json",
			error : function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success : function (rep) {
				responseReinitialize(rep);
			}
		});
	} else {
	}
}

/*####################################################################################################*
 *----------------------------------------------End of it---------------------------------------------* 
 *####################################################################################################*/

/*####################################################################################################*
 *------------------------------------------ Make MAIN Panel------------------------------------------* 
 *####################################################################################################*/


function makeMainPanel(fromId, fromLogin, query) {
	if(fromId == undefined) {
		fromId = -1;
	}
	
	env.fromId = fromId;
	env.minId = -1;
	env.maxId = -1;
	env.msgs = new Array();
	env.nb = 10;
	env.query = null;
	
	var search = "";
	if ($(".div-search").length) {
		search = "";
	} else {
		search += "<div class='div-search'>" +
		"<input type='text' name='search' id='search' placeholder='Ex: Ahmed' onclick=''/>" +
		"<label for='search' onsubmit=''>Recherchez</label>" +
		"</div>";
	}
	
	var rightEnteteUl = "<ul>";
	var bg_header = "<div id='bg'></div>";
	var new_message = "<div id='div-new-message'>" +
	"<textarea name='new-message' id='new-message' cols='76' rows='1' maxlength='140' placeholder='Racontez-nous!'" +
	"onclick=\"javascript:if(document.getElementById('new-message').rows == 2) return; document.getElementById('new-message').rows = 3\" " +
	"onblur=\"javascript:if(document.getElementById('new-message').value.length == 0) document.getElementById('new-message').rows = 1\"></textarea>" +
	"<input type='submit' name='post' id='post' value='Postez'/>" +
	"</div>";
	
	var suivre_id = "suivre-"+fromId;
	var nosuivre_id = "nosuivre-"+fromId;
	var nb_abonnements 
	
	var id_forfriend = fromId;
	if (fromId < 0) {
		id_forfriend = env.id;
		var link = "<link href=\"css/MainPage.css\" rel=\"stylesheet\" media=\"all\" type=\"text/css\">";
		rightEnteteUl += "<li id='profil'>Hi "+ fromLogin +"!</li>";
	} else if (fromId > 0) {
		var link = "<link href=\"css/MainPage.css\" rel=\"stylesheet\" media=\"all\" type=\"text/css\">";
		rightEnteteUl += "<li id='accueil'>Accueil</li>";
		
		if (env.fromId == env.id) {
			id_forfriend = env.id;
			bg_header = "<div id='bg-header'>" +
			"<span class='name-profil'>"+ fromLogin + "</span>" +
			"<input type='button' value='Editer votre profil' class='btn-bg-header' />"+
			"</div>";
		} else if (env.follows.has(fromId)) {
			id_forfriend = fromId;
			bg_header = "<div id='bg-header'>" +
			"<span class='name-profil'>"+ fromLogin + "</span>" +
			"<input id="+nosuivre_id+" type='button' value='Ne plus suivre' class='btn-bg-header' " +
					"onclick=\"removeFriend('"+env.key+"',"+fromId+");\"/>"+
			"</div>";
		} else if (!env.follows.has(fromId)){
			id_forfriend = fromId;
			bg_header = "<div id='bg-header'>" +
			"<span class='name-profil'>"+ fromLogin + "</span>" +
			"<input id="+suivre_id+" type='button' value='Suivre' class='btn-bg-header'" +
					"onclick=\"addFriend('"+env.key+"',"+fromId+");\"/>"+
			"</div>";
			new_message = '';
		}
	} 
	
	rightEnteteUl += "<li id='deconnexion'>Deconnexion</li></ul>";
	
	var main = "" + 
	"<div id='main'>" +
		"<section id='stats'>" +
		"<h1>Statistiques</h1>" +
		"<div id='#nb-friends-messages'>" +
			"<div id='abonnements' class='stats-childs'> Abonnements " +
			"<span></span>" +
			"</div>" +
			"<div id='abonnes' class='stats-childs'> Abonnés " +
			"<span></span>" +
			"</div>" +
			"<div id='tweets' class='stats-childs'> Nombre de Tweets " +
			"<span></span>" +
			"</div>" +
		"</div>" +
		"</section>" +
	
		"<section id='messages'>" +
		new_message +
		"<div id='div-list-messages'>" +
		 
		"</div>" +	  
			
	
		"</section>" +
		
		"<section id='bonus'>" +
			"<div id='div-friends'>" +
				"<h1>Abonnements</h1>" +
				"<div id='friends'></div>" +
				"<h3 id='h3-abonnes'onclick=\"listFollowers('"+env.key+"',"+id_forfriend+");\">Voir les abonnés " +
				"<img src=\"img/icons/arrow_right.png\" alt=\"arrow_right\" height=\"32\" width=\"32\"/>" +
				"</h3>" +
			"</div>" +
		"</section>" +
	"</div>";
	
	$('link').replaceWith(link);
	$('#left-entete ul').remove();
	$('.round_img').after(search);
	$('#right-entete ul').replaceWith(rightEnteteUl);
	
	if (env.fromId == -1) {
		$('#bg-header').replaceWith(bg_header);
	}
	
	if ($('#bg').length) {
		$('#bg').replaceWith(bg_header);
	} else {
		$('#bg-header').replaceWith(bg_header);
	}
	$('#main').replaceWith(main);
	
	listFriends(env.key, id_forfriend);
	attachEvents();
}


/*####################################################################################################*
 *-----------------------------------------------LogOut-----------------------------------------------* 
 *####################################################################################################*/

function responseLogout(rep) {
	var json = rep;
	if (json.ErrorCode == undefined) {
		setCookie("page", 1);
		makeConnexionPanel();
	}
}


function logout() {
	if (env.key != undefined) {
		if (!noConnection) {
			$.ajax({
				type : "GET",
				url : "http://li328.lip6.fr:8280/gr1_bboy/Logout",
				data : "key="+env.key,
				datatype : "json",
				error : function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success : responseLogout
			});
		} else {
		}
	}
}


/*####################################################################################################*
 *---------------------------------------------End LogOut---------------------------------------------* 
 *####################################################################################################*/

function Commentaire(id, author, text, date) {
	this.id = id;
	this.author = author;
	this.text = text;
	var date_regExp = new RegExp("^([^(GMT)]*)GMT.*$")
	var date_wanted;
	if (date_regExp.test(date)) {
		date_wanted = RegExp["$1"];
	} else {
		date_wanted = date;
	}
	this.date = date_wanted;
}

Commentaire.prototype.getHtml = function() {
	var s = "<div class='div-one-comment'>" +
	"<div class='one-comment'>" + 
	"<div class='photo-comment-auteur'>" +
	"<img src=\"img/icons/avatar.png\" alt=\"avatar\" height=\"42\" width=\"42\"" +
	"onclick='redirectHimTo("+this.author.id+",\""+this.author.login+"\");'/> " +
	"<div class='comment-auteur-text'>" +
	"<span class='comment-auteur' onclick='redirectHimTo("+this.author.id+",\""+this.author.login+"\");'>" + this.author.login +
	"</span> " + this.text +
	"</div>" +
	"<div class='comment-date'>" + this.date +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>";
	
	return s;
}

function Message(id, author, text, date, comments) {
	this.id = id;
	this.author = author;
	this.text = text;
	var date_regExp = new RegExp("^([^(GMT)]*)GMT.*$")
	var date_wanted;
	if (date_regExp.test(date)) {
		date_wanted = RegExp["$1"];
	} else {
		date_wanted = date;
	}
	this.date = date_wanted;
	if (comments == undefined ) {
		comments = []
	} 
	this.comments = comments;
	this.likes = 0;
}

Message.prototype.getHtml = function() {
	var msg_id = "message_" + this.id;
	var post_comment = "post-comment-" + this.id;
	var new_comment = "new-comment-" + this.id;
	var div_new_comment = "div-new-comment-" + this.id;
	var div_comments = "div-comments-" + this.id;
	var btn_likes = "btn-likes-" + this.id;
	var btn_comments = "btn-comments" + this.id;
	var div_msg_buttons = "div-msg-buttons-" + this.id;
	var msg_buttons = "msg-buttons-" + this.id;
	var nb_likes = "nb-likes-"+ this.id;
	var nb_comments = "nb-comments-"+ this.id;

	var basket = '';
	if (this.author.id == env.id) {
		basket = "<img src=\"img/icons/basket.png\" alt=\"like\" height=\"25\" width=\"25\"" +
				"onclick='deleteMessage(\""+env.key+"\","+this.id+");'/> ";
	}
	
	var s = "<div id="+msg_id+" class='div-one-msg'>" +
	"<div class='one-msg'>" +
		"<div class='photo-msg-auteur'>" +
			"<img src=\"img/icons/avatar.png\" alt=\"avatar\" height=\"55\" width=\"55\"" +
			"onclick='redirectHimTo("+this.author.id+",\""+this.author.login+"\");'/>" +
			"<div class='msg-auteur' onclick='redirectHimTo("+this.author.id+",\""+this.author.login+"\");'>" + this.author.login +
			"</div>" +
			"<div class='msg-date'>" + this.date +  basket +
			"</div>" +	
		"</div>" +
		"<div class='msg-text'>" + this.text + 
		 "</div><hr/>" +
	
		"<div id='"+div_msg_buttons+"' class='div-msg-buttons'>" +
			"<div id='"+msg_buttons+"' class='msg-buttons'>" +
	
				"<div id='"+btn_likes+"' class='btn-likes' onclick='addLike(this);'>" +
				"<img src=\"img/icons/like.png\" alt=\"like\" height=\"25\" width=\"25\"'/> " +
				"j'aime " +
				"</div>" +
				
				"<div id='"+btn_comments+"' class='btn-comments' onclick=\"showHideComments('"+this.id+"');\">" +
				"<img src=\"img/icons/pen.png\" alt=\"pen\" height=\"25\" width=\"25\"/> " +
				"réagir " + 
				"</div>" +
				
				"<div id='"+nb_likes+"' class='nb-likes' >" +
				"<span>0</span>" +
				"<img src=\"img/icons/heart.png\" alt=\"pen\" height=\"25\" width=\"25\"/> " +
				"</div>" +
				
				"<div id='"+nb_comments+"' class='nb-comments' >" +
				"<span>"+this.comments.length+"</span>" +
				"<img src=\"img/icons/cloud_text.png\" alt=\"pen\" height=\"25\" width=\"25\"/> " +
				"</div>" +
	
			"</div>" +
		"</div>" +
	"</div>" +
	"<div id='"+div_comments+"' class='div-comments' style='display: none;'>";
	
	for (i=0 ; i< this.comments.length ; i++ ) {
		s += this.comments[i].getHtml();
	}
	
	s += "</div>" +
	"<div id='"+div_new_comment+"' class='div-new-comment' style='display: none;'>" +
		"<div class='new-comment-img-text'>" +
			"<img src=\"img/icons/avatar.png\" alt=\"avatar\" height=\"42\" width=\"42\"/> " +
			"<textarea name='new-comment' class='new-comment' style='overflow-y: visible;'" +
			"placeholder=\"Qu'en pensez vous ?\" onkeyup='textAreaAdjust(this);'" +
			"id='"+new_comment+"'>" +
			"</textarea>" +
		"</div>" +
		"<input type='submit' id='"+post_comment+"'name='post-comment' class='post-comment' value='Postez'" +
		"style='display: none;' onclick='newComment(this);'/>" +
	"</div>" +
	"</div>";
	
	return s;
}

function showHideComments(id) {
	var div_comments = $("#div-comments-"+id);
	var div_new_comment = $("#div-new-comment-"+id);
	
	if ((!div_comments.is(':visible')) && (!div_new_comment.is(':visible'))) {
		div_comments.css("display", "block")
		div_new_comment.css("display", "flex");
	} else {
		div_comments.css("display", "none");
		div_new_comment.css("display", "none");
	}
}

function textAreaAdjust(o) {
	var id = "#"+o.id;
	if ((o.value.length == 0) && ($(".post-comment").length)) {
		$($(id).parent().siblings("input")).css("display", "none");
	} else {
		$($(id).parent().siblings("input")).css("display", "block");
	}
	o.style.height = "1px";
	o.style.height = (8+o.scrollHeight)+"px";
}

function redirectHimTo(id_user, elem) {
	var login = elem;
	makeMainPanel(id_user, login);
	env.lastId = undefined;
	completeMessages(env.key, id_user, -1, -1, 10);
}

/*####################################################################################################*
 *-------------------------------------------Complete Messages-----------------------------------------* 
 *####################################################################################################*/

function revival(key,value) {
	console.log("in revival");
	if(value.error == 0 ){
		alert("error");
		var o = new Object(value.error);
		return o;
	}
	
	if(value.comments != undefined ){
		console.log("salut");
		var m = new Message(value.id,value.auteur,value.text,value.date,value.comments);
		return m;
	} else if(value.texte != undefined) {
		console.log("coucou");
		var c = new Commentaire(value.id,value.auteur,value.texte,value.date);
		return c;
	} else if (key =='date') {
		console.log("date");
		var d = new Date(value.$date);
		return d;
	} else {
		return value;
	}
}


function completeMessagesResponse(rep) {
	var tab = JSON.parse(rep, revival).list_messages;
	var lastId = undefined;
	for (var i=0; i<tab.length; i++) {
		$("#div-list-messages").append(tab[i].getHtml());
		env.msgs[tab[i].id] = tab[i];
		if (tab[i].id > env.maxId) {
			env.maxId = tab[i].id;
		}
		
		if ((env.minId < 0) || (tab[i].id < env.minId)) {
			env.minId = tab[i].id;
		}
		
		lastId = tab[i].id;
	}
	env.lastId = lastId;
	/*env.maxId = env.minId;
	env.minId = -1;*/
	
	$("#tweets span").html(env.msgs.length);
	$("#message_" + lastId).appear();
	
	$.force_appear();
}

function completeMessages() {
	var max = env.maxId;
	var min = env.minId;
	if (env.lastId != undefined) {
		max = env.lastId;
		min = -1;
	}
	if (env.key != undefined) {
		if (!noConnection)  {
			$.ajax ({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_bboy/GetMessages",
				datatype:"text/plain",
				data:"key=" +env.key+ "&from=" +env.fromId+ "&id_max=" +max+ "&id_min=" +min+ "&nb=" +env.nb+ "&query=" +env.query,
				error:function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success: completeMessagesResponse
			});
		} else {
			/*var tab = getFromLocalDb(env.fromId, -1, env.minId, 10);
			completeMessagesReponse(JSON.stringify(tab));*/
		}
	}
}


/*####################################################################################################*
 *-------------------------------------------Refresh Messages-----------------------------------------* 
 *####################################################################################################*/

function refreshMessagesResponse(rep) {
	var tab = JSON.parse(rep,revival).list_messages;
	if(tab.erreur != undefined) {
		alert("erreur");
	} else {
		for(var i=tab.length-1; i>=0; i--){
			$("#div-list-messages").prepend(tab[i].getHtml());
			env.msgs[tab[i].id] = tab[i];
			if(tab[i].id > env.maxId) {
				env.maxId = tab[i].id;
			}
		}
	}
}

function refreshMessages() {
	if (env.key != undefined) {
		if(!noConnection ) {
			$.ajax({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_bboy/GetMessages",
				datatype:"text/plain",
				data:"key="+env.key+"&from="+env.fromId+"&id_max=-1&id_min="+env.maxId+"&nb="+env.nb+"&query="+env.query,
				error : function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success:refreshMessagesResponse
			});
		} else {
			refreshMessagesResponse(JSON.stringify(getFromLocalDb(env.fromId,env.maxId,-1,-1)));
		}
	}
}


/*####################################################################################################*
 *---------------------------------------------new Message--------------------------------------------* 
 *####################################################################################################*/

function newMessageReponse(rep) {
	if(rep.error != undefined) {
		alert(rep.erreur);
	} else {
		$("#new-message").val('');
		$('#new-message').attr('placeholder','Racontez-nous!');
		$("#new-message").attr('rows', 1);
		alert('Post ok');
		
		refreshMessages();
	}
}

function newMessage() {
	var texte = $("#new-message").val();
	if (texte.length == 0) { 
		$('#new-message').attr('placeholder', 'Pour poster, veillez écrire quelque chose...');
		return; 
	}
	
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax ({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_bboy/PostMessage",
				datatype:"json",
				data:"key="+env.key+"&text="+texte,
				error:function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success: newMessageReponse
			});
		} else {
		}
	}
}

/*####################################################################################################*
 *--------------------------------------------Delete Message------------------------------------------* 
 *####################################################################################################*/

function deleteMessageResponse(rep, msg_id) {
	var json = rep;
	if (json.ErrorCode != undefined) {
		alert("Erreur");
	} else {
		env.msgs.splice(msg_id);
		$("#message_"+msg_id).remove();
	}
}

function deleteMessage(key, msg_id) {
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax ({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_bboy/DeleteMessage",
				datatype:"json",
				data:"key="+env.key+"&id_message="+msg_id,
				error:function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success: function (rep) {
					deleteMessageResponse(rep, msg_id);
				}
			});
		} else {
			
		}
	}
}

/*####################################################################################################*
 *---------------------------------------------new Comment--------------------------------------------* 
 *####################################################################################################*/

function newCommentResponse(rep, id_message) {
	var json = JSON.parse(rep);
	
	//Empty the text area
	$("#new-comment-"+id_message).val('');
	
	if (json.ErrorCode) {
		alert("erreur");
	} else {
		var comment = new Commentaire(json.id,json.auteur,json.texte, new Date(json.date.$date));
		var comment_html = comment.getHtml();
		var comments_msg = env.msgs[id_message].comments;
		comments_msg.push(comment);
		$("#div-comments-"+id_message).append(comment_html);
		var d_attr_id = $("#nb-comments-"+id_message+" span").html(comments_msg.length);
	}
}

function getIdNumber(element) {
	var id = element.id;
	var id_msg_regExp = new RegExp("^[^-]*-[^-]*-(.*)$");
	var id_message;
	if (id_msg_regExp.test(id)) {
		id_message = RegExp["$1"];
	}
	return id_message;
}

function newComment(element) {
	var id_message = getIdNumber(element);
	
	var texte = $("#new-comment-"+id_message).val();
	alert(texte);
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax ({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_bboy/PostComment",
				datatype:"json",
				data:"key="+env.key+"&id_message="+id_message+"&text="+texte,
				error:function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success: function (rep) {
					newCommentResponse(rep, id_message);
				}
			});
		} else {
		}
	}
}

/*####################################################################################################*
 *---------------------------------------------End Message--------------------------------------------* 
 *####################################################################################################*/

/*####################################################################################################*
 *---------------------------------------------add Friend---------------------------------------------* 
 *####################################################################################################*/


function addFriendResponse(rep, id_friend) {
	var json = rep;
	if (json.ErrorCode != undefined) {
		alert("Erreur");
	} else {
		var nosuivre_id = "nosuivre-"+id_friend;
		var nosuivre_input = "" +
		"<input id="+nosuivre_id+" type='button' value='Ne plus suivre' class='btn-bg-header'" +
		"onclick=\"removeFriend('"+env.key+"',"+id_friend+");\"/>";
		$("#suivre-"+id_friend).replaceWith(nosuivre_input);
		$("#div-new-message").css("display","flex");
		var nb_abonnements = $("#abonnements span").val();
		$("#abonnements span").html(nb_abonnements+1);
	}
}


function addFriend(key, id_friend) {
	
	if (key != undefined) {
		$.ajax({
			type: "GET",
			url: "http://li328.lip6.fr:8280/gr1_bboy/AddFriend",
			datatype: "json",
			data: "key="+key+"&id_friend="+id_friend,
			error: function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function(rep) {
				addFriendResponse(rep, id_friend);
			}
		});
	} else {
		
	}
}

/*####################################################################################################*
 *--------------------------------------------remove Friend-------------------------------------------* 
 *####################################################################################################*/

function removeFriendResponse(rep, id_friend) {
	var json = rep;
	if (json.ErrorCode != undefined) {
		alert('Erreur');
	} else {
		var suivre_id = "suivre-"+id_friend;
		var suivre_input = "" +
		"<input id="+suivre_id+" type='button' value='Suivre' class='btn-bg-header'" +
		"onclick=\"addFriend('"+env.key+"',"+id_friend+");\"/>";
		$("#nosuivre-"+id_friend).replaceWith(suivre_input);
		$("#div-new-message").css("display","none");
		var nb_abonnements = $("#abonnements span").val();
		$("#abonnements span").html(nb_abonnements-1);
	}
}

function removeFriend(key, id_friend) {
	
	if (key != undefined) {
		$.ajax({
			type: "GET",
			url: "http://li328.lip6.fr:8280/gr1_bboy/RemoveFriend",
			datatype: "json",
			data: "key="+key+"&id_friend="+id_friend,
			error: function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function(rep) {
				removeFriendResponse(rep, id_friend);
			}
		});
	} else {
		
	}
}

/*####################################################################################################*
 *--------------------------------------------list Follows-------------------------------------------* 
 *####################################################################################################*/

function listFriendsResponse(rep, id_friend) {
	if (rep.ErrorCode != undefined) {
		alert('Erreur');
	} else {
		var friends = rep.friends;
		var friends_html = "";
		for (i=0; i<friends.length; i++) {
			friends_html += ("<span>"+friends[i]+"<img src=\"img/icons/minus.png\" " +
					"alt=\"avatar\" height=\"32\" width=\"32\"></span>");
		}
		var h3_abonnes = "<h3 id='h3-abonnes'onclick=\"listFollowers('"+env.key+"',"+id_friend+");\">Voir les abonnés " +
		"<img src=\"img/icons/arrow_right.png\" alt=\"arrow_right\" height=\"32\" width=\"32\"/>" +
		"</h3>";
		$("#div-friends h1").html("Abonnements");
		$("#div-friends #friends").html(friends_html);
		$("#h3-abonnements").replaceWith(h3_abonnes);
	}
}

function listFriends(key, id_user) {
	
	if (key != undefined) {
		$.ajax({
			type: "GET",
			url: "http://li328.lip6.fr:8280/gr1_bboy/ListFriends",
			datatype: "json",
			data: "key="+key+"&id_user="+id_user,
			error: function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function(rep) {
				listFriendsResponse(rep, id_user);
			}
		});
	} else {
		
	}
}

/*####################################################################################################*
 *--------------------------------------------list Followers-------------------------------------------* 
 *####################################################################################################*/

function listFollowersResponse(rep, id_friend) {
	if (rep.ErrorCode != undefined) {
		alert('Erreur');
	} else {
		var followers = rep.followers;
		var followers_html = "";
		for (i=0; i<followers.length; i++) {
			followers_html += ("<span>"+followers[i]+"<img src=\"img/icons/minus.png\" " +
					"alt=\"avatar\" height=\"32\" width=\"32\"></span>");
		}
		var h3_abonnements = "<h3 id='h3-abonnements'onclick=\"listFriends('"+env.key+"',"+id_friend+");\">Voir les abonnements " +
		"<img src=\"img/icons/arrow_right.png\" alt=\"arrow_right\" height=\"32\" width=\"32\"/>" +
		"</h3>";
	
		$("#div-friends h1").html("Abonnés");
		$("#div-friends #friends").html(followers_html);
		$("#h3-abonnes").replaceWith(h3_abonnements);
	}
}

function listFollowers(key, id_friend) {
	
	if (key != undefined) {
		$.ajax({
			type: "GET",
			url: "http://li328.lip6.fr:8280/gr1_bboy/ListFollowers",
			datatype: "json",
			data: "key="+key+"&id_user="+id_friend,
			error: function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function(rep) {
				listFollowersResponse(rep, id_friend);
			}
		});
	} else {
		
	}
}

/*####################################################################################################*
 *---------------------------------------------new Like--------------------------------------------* 
 *####################################################################################################*/


function addLikeResponse(rep,id_message){
	var json = JSON.parse(rep);
	
	if(json.ErrorCode){
		alert("Erreur");
	}else{
		var nb_likes = env.msgs[id_message].likes+1;
		env.msgs[id_message].likes = nb_likes;
		$("#nb-likes-"+id_message+"span").html(nb_likes);
		
	}
}


function addLike(element) {
	var id_message = getIdNumber(element);
	alert(element)
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_bboy/Like",
				datatype:"json",
				data:"key="+env.key+"&message_id="+id_message,
				error:function(jqXHR,textStatus,errorThrown) {
					alert(textStatus);
				},
				sucess: function(rep){
					addLikeResponse(rep,id_message);
				}
			});
		}else {
		}
	}
}





/*####################################################################################################*
 *-------------------------------------------Handle Cookies-------------------------------------------* 
 *####################################################################################################*/

function setCookie(sName, sValue) {
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + (365*24*60*60*1000));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}

function getCookie(sName) {
    var oRegex = new RegExp("(?:; )?" + sName + "=([^;]*);?");

    if (oRegex.test(document.cookie)) {
            return decodeURIComponent(RegExp["$1"]);
    } else {
            return null;
    }
}

/*####################################################################################################*
 *---------------------------------------------End Cookies--------------------------------------------* 
 *####################################################################################################*/
||||||| merged common ancestors
=======
/**
 * 
 */

/*function init() {
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
	
}*/

function signout() {
	c = getCookie("page");
	if (c == 2) {
		k = getCookie("key");
		if (k.length != 0) logout();
		setCookie("page", 1);
	}
}


/*####################################################################################################*
 *-----------------------------------------Make Welcome Panel-----------------------------------------* 
 *####################################################################################################*/

function makeWelcomePanel() {
	var body = "" +
	"<header id=\"entete\">" +
	"<div id='div-entete'>" +
	"<div id='left-entete'>" +
	"<div class=\"round_img\">" +
	"<img src=\"img/logo5.png\" alt=\"logo\" height=\"42\" width=\"42\"> " +
	"</div>" +
	"<ul>" +
	"<li id='about'>About</li>" +
	"</ul>" +
	"</div>" +
	"<div id='right-entete'>" +
	"<ul>" +
	"<li id='connexion' onclick='makeConnexionPanel();'>Connexion</li>" +
	"</ul>" +
	"</div>" +
	"</div>" +
	"</header>" +
	"<div id='bg'></div>" +
	"<div id='main'>" +
    "<div id='register_main' >" +
    "<h3>Rejoignez Twister</h3>" +
	"<form method='GET' action='javascript:(function () {})()' onsubmit='enregistrement(this);' >" +
	"<div class='ids'>" +
	"<label for='prenom'>Prenom</label>" + 
	"<input type='text' name='prenom' id='prenom' onfocus='removeErrorIf(this);' onblur='lengthError(this);' autofocus />" +
	"</div>" + 
	"<div class='ids'>" +
	"<label for='nom'>Nom</label>" +	
	"<input type='text' name='nom' id='nom' onfocus='removeErrorIf(this);' onblur='lengthError(this);' />" +
	"</div>" + 
	"<div class='ids'>" +
	"<label for='login'>Login</label>" +
	"<input type='text' name='login' id='login' onfocus='removeErrorIf(this);' onblur='lengthError(this);' />" +
	"</div>" + 
	"<div class='ids'>" + 
	"<label for='email'>Email</label>" +
	"<input type='text' name='email' id='email' onfocus='removeErrorIf(this);' onblur='isEmail(this);' />" +
	"</div>" + 
	"<div class='ids'>" + 
	"<label for='pass'>Password</label>" +
	"<input type='password' name='pass' id='pass' onfocus='removeErrorIf(this);' onblur='mdpError(this);' />" +
	"</div>" +
	"<div class='ids'>" +
	"<label for='confirmez'>Confirmez</label>" +
	"<input type='password' name='confirmez' id='confirmez' onfocus='removeErrorIf(this);' onblur= 'confirmezError(this);' />" +
	"</div>" +
	"<div class='register'>" +
	"<input type='submit' value=\"s'enregistrer\" id ='enregistrer'/>" +
	"</div>" + 
	"</form>" +
	"</div>" + 		
	"</div>" +
	"<footer id='footer'></footer>";
	
	var link = "<link href=\"css/enregistrement.css\" rel=\"stylesheet\" media=\"all\" type=\"text/css\">";
	$('link').replaceWith(link);
	document.body.innerHTML = body;
	setCookie("page", 0);
}

/*####################################################################################################*
 *----------------------------------------Make Connection Panel----------------------------------------* 
 *####################################################################################################*/

function makeConnexionPanel() {
	
	$("#barError").remove();
	var button_register = "<li id='inscrire' onclick='makeWelcomePanel();'>s'inscrire</li>";
	var connexion_main = "" +
	"<div id=\"connexion_main\">" +
	"<h3>Bon retour sur Twister</h3>" +
	"<form method=\"GET\" action=\"javascript:(function () {})()\" onsubmit='connexion(this);' >" +
	"<div class='ids'>" +
	"<label for='login'>Login</label>" +
	"<input type='text' name='login' id='login' onfocus='removeErrorIf(this);' onblur='lengthError(this);' autofocus />" +
	"</div>" +
	"<div class='ids'>" +
	"<label for='pass'>Password</label>" +
	"<input type='password' name='pass' id='pass' onfocus='removeErrorIf(this);' onblur='lengthError(this);' />" +
	"</div>" +
	"<div id='oubli' onclick='makeReinitializePanel();'>Mot de passe oublié ?</div>" +
	
	"<div id='connect'>" +
	"<input type='submit' value='se connecter' id ='connection'/>" +
	"</div>" +
	"</form>" +
	"<div class='modal-reinitialize'>" +
	"<div id='reinitialize-content'>" +
	"<span class='close'>&times;</span>" +
	"<div id='reinitialize-header'>Mot de passe Oublié</div>" +
	"<div id='reinitialize-body'>" +
	"<p>Veuillez nous indiquez l'adresse mail associée à votre compte</p>" +
	"<form method='GET' action='javascript:(function () {})()' onsubmit='MakeSearchMailResponse(this);' >" +
	"<input type='text' name='mailR' id='mailR' placeholder='Votre adresse mail' onfocus='removeErrorIf(this);' autofocus/>" +
	"<div id='searchMail-div'>" +
	"<input type='submit' id='searchMail' value='Recherchez' />" +
	"</div>" +
	"</form>" +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>";
	
	var c = getCookie("page");
	var link = "<link href=\"css/connexion.css\" rel=\"stylesheet\" media=\"all\" type=\"text/css\">";
	$('link').replaceWith(link);
	if (c != 1) {
		$('#connexion').replaceWith(button_register);
		$('#main').html(connexion_main);
	} else {
		var header = ""+
		"<header id=\"entete\">" +
		"<div id='div-entete'>" +
		"<div id='left-entete'>" +
		"<div class=\"round_img\">" +
		"<img src=\"img/logo5.png\" alt=\"logo\" height=\"42\" width=\"42\"> " +
		"</div>" +
		"<ul>" +
		"<li id='about'>About</li>" +
		"</ul>" +
		"</div>" +
		"<div id='right-entete'>" +
		"<ul>" +
		"<li id='inscrire' onclick='makeWelcomePanel();'>s'inscrire</li>" +
		"</ul>" +
		"</div>" +
		"</div>" +
		"</header>" +
		"<div id='bg'></div>";
		
		var footer = "<footer id='footer'></footer>";
		body = header + "<div id='main'>"+ connexion_main + "</div>" + footer;
		document.body.innerHTML = body;
	}
	
	setCookie("page", 1);
}


/*####################################################################################################*
 *----------------------------------------Traitement d'erreurs----------------------------------------* 
 *####################################################################################################*/

function removeErrorIf(e) {
	var id = "#"+e.id
	var error = id+" ~ .error";
	$(error).remove();
	removeMsgError(e.id);
	$(id).css('border-color','#0086b3');
}

function showTheRed(id) {
	$(id).after("<span class='error'>!</span>");
	$(id).css('border-color','red');
}

function lengthError(e) {
	var v = e.value;
	var id = '#'+e.id;
	var oldmsg = $(id+" ~ .error");
	
	if (v.length > 20) {
		showTheRed(id);
		insertMsgError(e.id, "trop long (20 caractères maximum)");
	} else {
		$(id).css('border-color', 'black');
	}
}

function isEmail(e){
	var email = e.value
	var id = '#'+e.id;
    var regEmail = new RegExp('^([0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5})?$','i');
	var oldmsg = $(id+" ~ .error");
	var bool = true;
	
    if (!regEmail.test(email)) {
    	showTheRed(id);
    	insertMsgError(e.id, "invalide");
    	bool = false;
	} else {
		$(id).css('border-color', 'black');
	}
    return bool;

}

function mdpError(e) {
	var mdp = e.value
	var id = '#'+e.id;
	var oldmsg = $(id+" ~ .error");
	
	if (mdp.length < 8 && mdp.length > 0) {
		showTheRed(id);
		insertMsgError(e.id, "trop court(8 caractères minimum)");
	} else {
		$(id).css('border-color', 'black');
	}

}

function confirmezError(e) {
	var mdp = $("#pass").val();
	var confirmez = e.value;
	
	var id = '#'+e.id;
	var oldmsg = $(id+" ~ .error");
	
	if (confirmez.length > 0 && mdp != confirmez) {
		showTheRed(id);
		insertMsgError(e.id, "mots de passe non correspondants");
	} else {
		$(id).css('border-color', 'black');
	}

}

function insertMsgError(id, msg) {
	$('#'+id).before("<span class='errormsg'>"+msg+"</span>");
}

function removeMsgError(id) {
	var msgerror = "label[for="+id+"] ~  .errormsg";
	if (!$(msgerror).length) {
		var msgerror = ".errormsg:first-child";
	}
	$(msgerror).remove();
}

/*####################################################################################################*
 *----------------------------------------Start of Connection-----------------------------------------* 
 *####################################################################################################*/

function connexion(f) {
	var login = f.login.value;
	var pass = f.pass.value;
	var ok = verifFormConnexion(f.login, f.pass);
	if (ok) {
		alert("Start");
		connecte(login, pass);
	}
	return false;
}

function verifFormConnexion(login, pass) {
	var vlogin = login.value;
	var vpass = pass.value;
	var bool = true;
	
	if (vlogin.length == 0) {
		showTheRed('#'+login.id);
		insertMsgError(login.id, "Obligatoire");
		bool = false;
	} else if (vlogin.length > 20) {
		lengthError(login);
		bool = false;
	}
	
	if (vpass.length == 0) {
		showTheRed('#'+pass.id);
		insertMsgError(pass.id, "Obligatoire");
		bool = false;
	}
	return bool;
}

function responseConnexion(rep) {
	var json = rep;
	
	var bool = true;
	
	if (json.ErrorCode == 1) {
		var notUser = "<div id='barError'>Les données saisies ne correspondent à aucun "
			+ "n'utilisateur dans notre base de données!</div>";
		
		if ($("#barError").length) {
			$("#barError").replaceWith(notUser);
		} else {
			$("#main").prepend(notUser);
		}
		showTheRed("#login");
		showTheRed("#pass");
		bool = false;
	} else if (json.ErrorCode == 2) {
		var wrongpass = "<div id='barError'>Mauvais mot de passe. Veuillez retentez!</div>";
		
		if ($("#barError").length) {
			$("#barError").replaceWith(wrongpass);
			
		} else {
			$("#main").prepend(wrongpass);
		}
		$("#barError").css({"width":"25%"});
		showTheRed("#pass");
		bool = false;
	} else {
		setCookie("page", 2);
		setCookie("key", json.key);
		setCookie("login", json.login);
		
		env.key = json.key;
		env.id = json.id_user;
		alert(env.id);
		env.login = json.login;
		env.follows = new Set();
		env.followers = new Set();
		
		for (var i=0; i<(rep.follows).length; i++) {
			env.follows.add(rep.follows[i]);
		
		}
		
		for (var i=0; i<(rep.followers).length; i++) {
			env.followers.add(rep.followers[i]);
		}
		
		// Transiter vers la page principale après connexion
		makeMainPanel(-1, env.login);
		
		alert(env.follows.size);
		$("#abonnements span").html(env.follows.size);
		$("#abonnes span").html(env.followers.size);
	}
	return bool;
}

function attachEvents() {
	$("#deconnexion").click(function() {
		logout();
	});
	
	$("#post").click(function() {
		newMessage();
	});
	
	$("#profil").click(function() {
		makeMainPanel(env.id, env.login);
		env.lastId = undefined;
		completeMessages(env.key, env.id, -1, -1, 10);
	});
	
	$("#accueil").click(function() {
		makeMainPanel(-1, env.login);
		env.lastId = undefined;
		completeMessages(env.key, -1, -1, -1, 10);
	})
	
}

function connecte(login, pass) {
	if (!noConnection) {
		$.ajax({
			type : "GET",
			url : "http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/Login",
			data : "login="+login+"&mdp="+pass,
			datatype : "json",
			error : function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success : function (rep) {
				if (responseConnexion(rep)) {
					getBg();
					completeMessages(rep.key, -1, -1, -1, 10);
				}
			}
		});
	} else {
		responseConnexion({"key":325, "id":3, "login":"viniya", "follows":[2]});
	}
	alert("OK");
}


/*####################################################################################################*
 *-----------------------------------------End of Connection------------------------------------------* 
 *####################################################################################################*/

/*####################################################################################################*
 *----------------------------------------Start of Registering----------------------------------------* 
 *####################################################################################################*/

function enregistrement(f) {
	var prenom = f.prenom.value;
	var nom = f.nom.value;
	var login = f.login.value;
	var email = f.email.value;
	var pass = f.pass.value;
	var confirmez = f.confirmez.value;
	var ok = verifFormRegistering(f.prenom, f.nom, f.login, f.email, f.pass, f.confirmez);
	if (ok) {
		enregistre(prenom, nom, email, login, pass)
	}
	
	return true;
}

function verifFormRegistering(prenom, nom, login, email, pass, confirmez) {
	var vprenom = prenom.value;
	var vnom = nom.value;
	var vlogin = login.value;
	var vemail = email.value;
	var vpass = pass.value;
	var vconfirmez = confirmez.value;
	var bool = true;
	
	if (vprenom.length == 0) {
		showTheRed('#'+prenom.id);
		insertMsgError(prenom.id, "Obligatoire");
		bool = false;
	} else if (vprenom.length > 20) {
		lengthError(prenom);
		bool = false;
	}
	
	if (vnom.length == 0) {
		showTheRed('#'+nom.id);
		insertMsgError(nom.id, "Obligatoire");
		bool = false;
	} else if (vnom.length > 20) {
		lengthError(nom);
		bool = false;
	}
	
	if (vlogin.length == 0) {
		showTheRed('#'+login.id);
		insertMsgError(login.id, "Obligatoire");
		bool = false;
	} else if (vlogin.length > 20) {
		lengthError(login);
		bool = false;
	}
	
	if (vemail.length == 0) {
		showTheRed('#'+email.id);
		insertMsgError(email.id, "Obligatoire");
		bool = false;
	} else if (!isEmail(email)){
		bool = false;
	}
	
	if (vpass.length == 0) {
		showTheRed('#'+pass.id);
		insertMsgError(pass.id, "Obligatoire");
		bool = false;
	} else if (vpass.length < 8) {
		mdpError(pass);
		bool = false;
	}
	
	if (vconfirmez.length == 0) {
		showTheRed('#'+confirmez.id);
		insertMsgError(confirmez.id, "Obligatoire");
		bool = false;
	} else if (vconfirmez != vpass){
		confirmezError(confirmez);
		bool = false;
	}
	return bool;
}

function responseRegistering(rep, login) {
	var json = rep;
	var userExist = "<div id='barError'>Ce login existe déja. Veuillez en choisir un autre!</div>";
	var mailExist = "<div id='barError'>Cette adresse mail existe déja. Veuillez en choisir une autre!</div>";
	var bool = true;
	if (json.ErrorCode == -2) {
		if ($("#barError").length) {
			$("#barError").replaceWith(userExist);
		} else {
			$("#main").prepend(userExist);
		}
		$("#barError").css({"width":"30%"});
		showTheRed("#login");
		bool = false;
	} else if (json.ErrorCode == -3) {
		if ($("#barError").length) {
			$("#barError").replaceWith(mailExist);
		} else {
			$("#main").prepend(mailExist);
		}
		$("#barError").css({"width":"35%"});
		showTheRed("#email");
		bool = false;
	}
	return bool;
}

function enregistre(prenom, nom, mail, login, pass){
	if (!noConnection) {
		$.ajax({
			type:"GET",
			url:"http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/createUser",
			data:"nom="+nom+"&prenom="+prenom+"&mail="+mail+"&login="+login+"&mdp="+pass,
			datatype: "json",
			error : function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function (rep) {
				if (responseRegistering(rep)) {
					connecte(login, pass);
					//makeMainPanel(-1, login);
				}
			}
		});
	} else {
		
	}
		
}

/*####################################################################################################*
 *-----------------------------------------End of Registering-----------------------------------------* 
 *####################################################################################################*/

/*####################################################################################################*
 *-----------------------------------Reinitializing Accounts By Mail----------------------------------* 
 *####################################################################################################*/

function makeReinitializePanel() {
	
	// Get the modal
	var modal =document.getElementsByClassName('modal-reinitialize')[0];
	// Get the button that opens the modal
	var btn = document.getElementById('oubli');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	// Open the modal 
	modal.style.display = "block";
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	    modal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
	
}

function MakeSearchMailResponse(f) {
	var mail = f.mailR.value;
	var ok = verifFormSearchMail(f.mailR);
	if (ok) {
		mailBase(mail)
	}
	return false;
}

function verifFormSearchMail(mail) {
	var v = mail.value;
	var id = '#'+mail.id;
	var bool = true;
	
	if (v.length == 0) {
		showTheRed(id);
		insertMsgError(mail.id, "Obligatoire");
		$(".errormsg").css({"right":"75px"});
		bool = false;
	} else if (!isEmail(mail)) {
		$(".errormsg").css({"right":"75px"});
		bool = false;
	}
	
	return bool;
}

function responseReinitialize(rep) {
	
}

function mailBase(mail) {
	if (!noConnection) {
		$.ajax({
			type : "GET",
			url : "http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/",
			data : "mail="+pass,
			datatype : "json",
			error : function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success : function (rep) {
				responseReinitialize(rep);
			}
		});
	} else {
	}
}

/*####################################################################################################*
 *----------------------------------------------End of it---------------------------------------------* 
 *####################################################################################################*/

/*####################################################################################################*
 *------------------------------------------ Make MAIN Panel------------------------------------------* 
 *####################################################################################################*/


function makeMainPanel(fromId, fromLogin, query) {
	if(fromId == undefined) {
		fromId = -1;
	}
	
	env.fromId = fromId;
	env.minId = -1;
	env.maxId = -1;
	env.msgs = new Array();
	env.nb = 10;
	env.query = null;
	
	var search = "";
	if ($(".div-search").length) {
		search = "";
	} else {
		search += "<div class='div-search'>" +
		"<input type='text' name='search' id='search' placeholder='Ex: Ahmed' onclick=''/>" +
		"<label for='search' onsubmit=''>Recherchez</label>" +
		"</div>";
	}
	
	var rightEnteteUl = "<ul>";
	var bg_header = "<div id='bg'></div>";
	var new_message = "<div id='div-new-message'>" +
	"<textarea name='new-message' id='new-message' cols='76' rows='1' maxlength='140' placeholder='Racontez-nous!'" +
	"onclick=\"javascript:if(document.getElementById('new-message').rows == 2) return; document.getElementById('new-message').rows = 3\" " +
	"onblur=\"javascript:if(document.getElementById('new-message').value.length == 0) document.getElementById('new-message').rows = 1\"></textarea>" +
	"<input type='submit' name='post' id='post' value='Postez'/>" +
	"</div>";
	
	var suivre_id = "suivre-"+fromId;
	var nosuivre_id = "nosuivre-"+fromId;
	var nb_abonnements 
	
	var id_forfriend = fromId;
	if (fromId < 0) {
		id_forfriend = env.id;
		var link = "<link href=\"css/MainPage.css\" rel=\"stylesheet\" media=\"all\" type=\"text/css\">";
		rightEnteteUl += "<li id='profil'>Hi "+ fromLogin +"!</li>";
	} else if (fromId > 0) {
		var link = "<link href=\"css/MainPage.css\" rel=\"stylesheet\" media=\"all\" type=\"text/css\">";
		rightEnteteUl += "<li id='accueil'>Accueil</li>";
		
		if (env.fromId == env.id) {
			id_forfriend = env.id;
			bg_header = "<div id='bg-header'>" +
			"<span class='name-profil'>"+ fromLogin + "</span>" +
			"<input type='button' value='Editer votre profil' class='btn-bg-header' />"+
			"</div>";
		} else if (env.follows.has(fromId)) {
			id_forfriend = fromId;
			bg_header = "<div id='bg-header'>" +
			"<span class='name-profil'>"+ fromLogin + "</span>" +
			"<input id="+nosuivre_id+" type='button' value='Ne plus suivre' class='btn-bg-header' " +
					"onclick=\"removeFriend('"+env.key+"',"+fromId+");\"/>"+
			"</div>";
		} else if (!env.follows.has(fromId)){
			id_forfriend = fromId;
			bg_header = "<div id='bg-header'>" +
			"<span class='name-profil'>"+ fromLogin + "</span>" +
			"<input id="+suivre_id+" type='button' value='Suivre' class='btn-bg-header'" +
					"onclick=\"addFriend('"+env.key+"',"+fromId+");\"/>"+
			"</div>";
			new_message = '';
		}
	} 
	
	rightEnteteUl += "<li id='deconnexion'>Deconnexion</li></ul>";
	
	var main = "" + 
	"<div id='main'>" +
		"<section id='stats'>" +
		"<h1>Statistiques</h1>" +
		"<div id='#nb-friends-messages'>" +
			"<div id='abonnements' class='stats-childs'> Abonnements " +
			"<span></span>" +
			"</div>" +
			"<div id='abonnes' class='stats-childs'> Abonnés " +
			"<span></span>" +
			"</div>" +
			"<div id='tweets' class='stats-childs'> Nombre de Tweets " +
			"<span></span>" +
			"</div>" +
		"</div>" +
		"</section>" +
	
		"<section id='messages'>" +
		"<div id='perso'>" +
		"<span id='name-perso'>Choose the personalization you want</span>" +
		"<ul>" +
		"<li onclick=\"changeBg('blue');\" style='background-color:blue'>blue</li>" +
		"<li onclick=\"changeBg('red');\" style='background-color:red'>red</li>" +
		"<li onclick=\"changeBg('green');\" style='background-color:green'>green</li>" +
		"</ul>" +
		"</div>" +
		new_message +
		"<div id='div-list-messages'>" +
		 
		"</div>" +	  
			
	
		"</section>" +
		
		"<section id='bonus'>" +
			"<div id='div-friends'>" +
				"<h1>Abonnements</h1>" +
				"<div id='friends'></div>" +
				"<h3 id='h3-abonnes'onclick=\"listFollowers('"+env.key+"',"+id_forfriend+");\">Voir les abonnés " +
				"<img src=\"img/icons/arrow_right.png\" alt=\"arrow_right\" height=\"32\" width=\"32\"/>" +
				"</h3>" +
			"</div>" +
		"</section>" +
	"</div>";
	
	$('link').replaceWith(link);
	$('#left-entete ul').remove();
	$('.round_img').after(search);
	$('#right-entete ul').replaceWith(rightEnteteUl);
	
	if (env.fromId == -1) {
		$('#bg-header').replaceWith(bg_header);
	}
	
	if ($('#bg').length) {
		$('#bg').replaceWith(bg_header);
	} else {
		$('#bg-header').replaceWith(bg_header);
	}
	$('#main').replaceWith(main);
	
	listFriends(env.key, id_forfriend);
	attachEvents();
}


/*####################################################################################################*
 *-----------------------------------------------LogOut-----------------------------------------------* 
 *####################################################################################################*/

function responseLogout(rep) {
	var json = rep;
	if (json.ErrorCode == undefined) {
		setCookie("page", 1);
		makeConnexionPanel();
	}
}


function logout() {
	if (env.key != undefined) {
		if (!noConnection) {
			$.ajax({
				type : "GET",
				url : "http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/Logout",
				data : "key="+env.key,
				datatype : "json",
				error : function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success : responseLogout
			});
		} else {
		}
	}
}


/*####################################################################################################*
 *---------------------------------------------End LogOut---------------------------------------------* 
 *####################################################################################################*/

function Commentaire(id, author, text, date) {
	this.id = id;
	this.author = author;
	this.text = text;
	var date_regExp = new RegExp("^([^(GMT)]*)GMT.*$")
	var date_wanted;
	if (date_regExp.test(date)) {
		date_wanted = RegExp["$1"];
	} else {
		date_wanted = date;
	}
	this.date = date_wanted;
}

Commentaire.prototype.getHtml = function() {
	var s = "<div class='div-one-comment'>" +
	"<div class='one-comment'>" + 
	"<div class='photo-comment-auteur'>" +
	"<img src=\"img/icons/avatar.png\" alt=\"avatar\" height=\"42\" width=\"42\"" +
	"onclick='redirectHimTo("+this.author.id+",\""+this.author.login+"\");'/> " +
	"<div class='comment-auteur-text'>" +
	"<span class='comment-auteur' onclick='redirectHimTo("+this.author.id+",\""+this.author.login+"\");'>" + this.author.login +
	"</span> " + this.text +
	"</div>" +
	"<div class='comment-date'>" + this.date +
	"</div>" +
	"</div>" +
	"</div>" +
	"</div>";
	
	return s;
}

function Message(id, author, text, date, comments) {
	this.id = id;
	this.author = author;
	this.text = text;
	var date_regExp = new RegExp("^([^(GMT)]*)GMT.*$")
	var date_wanted;
	if (date_regExp.test(date)) {
		date_wanted = RegExp["$1"];
	} else {
		date_wanted = date;
	}
	this.date = date_wanted;
	if (comments == undefined ) {
		comments = []
	} 
	this.comments = comments;
	this.likes = 0;
}

Message.prototype.getHtml = function() {
	var msg_id = "message_" + this.id;
	var post_comment = "post-comment-" + this.id;
	var new_comment = "new-comment-" + this.id;
	var div_new_comment = "div-new-comment-" + this.id;
	var div_comments = "div-comments-" + this.id;
	var btn_likes = "btn-likes-" + this.id;
	var btn_comments = "btn-comments" + this.id;
	var div_msg_buttons = "div-msg-buttons-" + this.id;
	var msg_buttons = "msg-buttons-" + this.id;
	var nb_likes = "nb-likes-"+ this.id;
	var nb_comments = "nb-comments-"+ this.id;

	var basket = '';
	if (this.author.id == env.id) {
		basket = "<img src=\"img/icons/basket.png\" alt=\"like\" height=\"25\" width=\"25\"" +
				"onclick='deleteMessage(\""+env.key+"\","+this.id+");'/> ";
	}
	
	var s = "<div id="+msg_id+" class='div-one-msg'>" +
	"<div class='one-msg'>" +
		"<div class='photo-msg-auteur'>" +
			"<img src=\"img/icons/avatar.png\" alt=\"avatar\" height=\"55\" width=\"55\"" +
			"onclick='redirectHimTo("+this.author.id+",\""+this.author.login+"\");'/>" +
			"<div class='msg-auteur' onclick='redirectHimTo("+this.author.id+",\""+this.author.login+"\");'>" + this.author.login +
			"</div>" +
			"<div class='msg-date'>" + this.date +  basket +
			"</div>" +	
		"</div>" +
		"<div class='msg-text'>" + this.text + 
		 "</div><hr/>" +
	
		"<div id='"+div_msg_buttons+"' class='div-msg-buttons'>" +
			"<div id='"+msg_buttons+"' class='msg-buttons'>" +
	
				"<div id='"+btn_likes+"' class='btn-likes' onclick='addLike(this);'>" +
				"<img src=\"img/icons/like.png\" alt=\"like\" height=\"25\" width=\"25\"'/> " +
				"j'aime " +
				"</div>" +
				
				"<div id='"+btn_comments+"' class='btn-comments' onclick=\"showHideComments('"+this.id+"');\">" +
				"<img src=\"img/icons/pen.png\" alt=\"pen\" height=\"25\" width=\"25\"/> " +
				"réagir " + 
				"</div>" +
				
				"<div id='"+nb_likes+"' class='nb-likes' >" +
				"<span>0</span>" +
				"<img src=\"img/icons/heart.png\" alt=\"pen\" height=\"25\" width=\"25\"/> " +
				"</div>" +
				
				"<div id='"+nb_comments+"' class='nb-comments' >" +
				"<span>"+this.comments.length+"</span>" +
				"<img src=\"img/icons/cloud_text.png\" alt=\"pen\" height=\"25\" width=\"25\"/> " +
				"</div>" +
	
			"</div>" +
		"</div>" +
	"</div>" +
	"<div id='"+div_comments+"' class='div-comments' style='display: none;'>";
	
	for (i=0 ; i< this.comments.length ; i++ ) {
		s += this.comments[i].getHtml();
	}
	
	s += "</div>" +
	"<div id='"+div_new_comment+"' class='div-new-comment' style='display: none;'>" +
		"<div class='new-comment-img-text'>" +
			"<img src=\"img/icons/avatar.png\" alt=\"avatar\" height=\"42\" width=\"42\"/> " +
			"<textarea name='new-comment' class='new-comment' style='overflow-y: visible;'" +
			"placeholder=\"Qu'en pensez vous ?\" onkeyup='textAreaAdjust(this);'" +
			"id='"+new_comment+"'>" +
			"</textarea>" +
		"</div>" +
		"<input type='submit' id='"+post_comment+"'name='post-comment' class='post-comment' value='Postez'" +
		"style='display: none;' onclick='newComment(this);'/>" +
	"</div>" +
	"</div>";
	
	return s;
}

function showHideComments(id) {
	var div_comments = $("#div-comments-"+id);
	var div_new_comment = $("#div-new-comment-"+id);
	
	if ((!div_comments.is(':visible')) && (!div_new_comment.is(':visible'))) {
		div_comments.css("display", "block")
		div_new_comment.css("display", "flex");
	} else {
		div_comments.css("display", "none");
		div_new_comment.css("display", "none");
	}
}

function textAreaAdjust(o) {
	var id = "#"+o.id;
	if ((o.value.length == 0) && ($(".post-comment").length)) {
		$($(id).parent().siblings("input")).css("display", "none");
	} else {
		$($(id).parent().siblings("input")).css("display", "block");
	}
	o.style.height = "1px";
	o.style.height = (8+o.scrollHeight)+"px";
}

function redirectHimTo(id_user, elem) {
	var login = elem;
	makeMainPanel(id_user, login);
	env.lastId = undefined;
	completeMessages(env.key, id_user, -1, -1, 10);
}

/*####################################################################################################*
 *-------------------------------------------Complete Messages-----------------------------------------* 
 *####################################################################################################*/

function revival(key,value) {
	console.log("in revival");
	if(value.error == 0 ){
		alert("error");
		var o = new Object(value.error);
		return o;
	}
	
	if(value.comments != undefined ){
		console.log("salut");
		var m = new Message(value.id,value.auteur,value.text,value.date,value.comments);
		return m;
	} else if(value.texte != undefined) {
		console.log("coucou");
		var c = new Commentaire(value.id,value.auteur,value.texte,value.date);
		return c;
	} else if (key =='date') {
		console.log("date");
		var d = new Date(value.$date);
		return d;
	} else {
		return value;
	}
}


function completeMessagesResponse(rep) {
	var tab = JSON.parse(rep, revival).list_messages;
	var lastId = undefined;
	for (var i=0; i<tab.length; i++) {
		$("#div-list-messages").append(tab[i].getHtml());
		env.msgs[tab[i].id] = tab[i];
		if (tab[i].id > env.maxId) {
			env.maxId = tab[i].id;
		}
		
		if ((env.minId < 0) || (tab[i].id < env.minId)) {
			env.minId = tab[i].id;
		}
		
		lastId = tab[i].id;
	}
	env.lastId = lastId;
	/*env.maxId = env.minId;
	env.minId = -1;*/
	
	$("#tweets span").html(env.msgs.length);
	$("#message_" + lastId).appear();
	
	$.force_appear();
}

function completeMessages() {
	var max = env.maxId;
	var min = env.minId;
	if (env.lastId != undefined) {
		max = env.lastId;
		min = -1;
	}
	if (env.key != undefined) {
		if (!noConnection)  {
			$.ajax ({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/GetMessages",
				datatype:"text/plain",
				data:"key=" +env.key+ "&from=" +env.fromId+ "&id_max=" +max+ "&id_min=" +min+ "&nb=" +env.nb+ "&query=" +env.query,
				error:function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success: completeMessagesResponse
			});
		} else {
			/*var tab = getFromLocalDb(env.fromId, -1, env.minId, 10);
			completeMessagesReponse(JSON.stringify(tab));*/
		}
	}
}


/*####################################################################################################*
 *-------------------------------------------Refresh Messages-----------------------------------------* 
 *####################################################################################################*/

function refreshMessagesResponse(rep) {
	var tab = JSON.parse(rep,revival).list_messages;
	if(tab.erreur != undefined) {
		alert("erreur");
	} else {
		for(var i=tab.length-1; i>=0; i--){
			$("#div-list-messages").prepend(tab[i].getHtml());
			env.msgs[tab[i].id] = tab[i];
			if(tab[i].id > env.maxId) {
				env.maxId = tab[i].id;
			}
		}
	}
}

function refreshMessages() {
	if (env.key != undefined) {
		if(!noConnection ) {
			$.ajax({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/GetMessages",
				datatype:"text/plain",
				data:"key="+env.key+"&from="+env.fromId+"&id_max=-1&id_min="+env.maxId+"&nb="+env.nb+"&query="+env.query,
				error : function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success:refreshMessagesResponse
			});
		} else {
			refreshMessagesResponse(JSON.stringify(getFromLocalDb(env.fromId,env.maxId,-1,-1)));
		}
	}
}


/*####################################################################################################*
 *---------------------------------------------new Message--------------------------------------------* 
 *####################################################################################################*/

function newMessageReponse(rep) {
	if(rep.error != undefined) {
		alert(rep.erreur);
	} else {
		$("#new-message").val('');
		$('#new-message').attr('placeholder','Racontez-nous!');
		$("#new-message").attr('rows', 1);
		alert('Post ok');
		
		refreshMessages();
	}
}

function newMessage() {
	var texte = $("#new-message").val();
	if (texte.length == 0) { 
		$('#new-message').attr('placeholder', 'Pour poster, veillez écrire quelque chose...');
		return; 
	}
	
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax ({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/PostMessage",
				datatype:"json",
				data:"key="+env.key+"&text="+texte,
				error:function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success: newMessageReponse
			});
		} else {
		}
	}
}

/*####################################################################################################*
 *--------------------------------------------Delete Message------------------------------------------* 
 *####################################################################################################*/

function deleteMessageResponse(rep, msg_id) {
	var json = rep;
	if (json.ErrorCode != undefined) {
		alert("Erreur");
	} else {
		env.msgs.splice(msg_id);
		$("#message_"+msg_id).remove();
	}
}

function deleteMessage(key, msg_id) {
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax ({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/DeleteMessage",
				datatype:"json",
				data:"key="+env.key+"&id_message="+msg_id,
				error:function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success: function (rep) {
					deleteMessageResponse(rep, msg_id);
				}
			});
		} else {
			
		}
	}
}

/*####################################################################################################*
 *---------------------------------------------new Comment--------------------------------------------* 
 *####################################################################################################*/

function newCommentResponse(rep, id_message) {
	var json = JSON.parse(rep);
	
	//Empty the text area
	$("#new-comment-"+id_message).val('');
	
	if (json.ErrorCode) {
		alert("erreur");
	} else {
		var comment = new Commentaire(json.id,json.auteur,json.texte, new Date(json.date.$date));
		var comment_html = comment.getHtml();
		var comments_msg = env.msgs[id_message].comments;
		comments_msg.push(comment);
		$("#div-comments-"+id_message).append(comment_html);
		var d_attr_id = $("#nb-comments-"+id_message+" span").html(comments_msg.length);
	}
}

function getIdNumber(element) {
	var id = element.id;
	var id_msg_regExp = new RegExp("^[^-]*-[^-]*-(.*)$");
	var id_message;
	if (id_msg_regExp.test(id)) {
		id_message = RegExp["$1"];
	}
	return id_message;
}

function newComment(element) {
	var id_message = getIdNumber(element);
	
	var texte = $("#new-comment-"+id_message).val();
	alert(texte);
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax ({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/PostComment",
				datatype:"json",
				data:"key="+env.key+"&id_message="+id_message+"&text="+texte,
				error:function(jqXHR, textStatus, errorThrown) {
					alert(textStatus);
				},
				success: function (rep) {
					newCommentResponse(rep, id_message);
				}
			});
		} else {
		}
	}
}

/*####################################################################################################*
 *---------------------------------------------End Message--------------------------------------------* 
 *####################################################################################################*/

/*####################################################################################################*
 *---------------------------------------------add Friend---------------------------------------------* 
 *####################################################################################################*/


function addFriendResponse(rep, id_friend) {
	var json = rep;
	if (json.ErrorCode != undefined) {
		alert("Erreur");
	} else {
		var nosuivre_id = "nosuivre-"+id_friend;
		var nosuivre_input = "" +
		"<input id="+nosuivre_id+" type='button' value='Ne plus suivre' class='btn-bg-header'" +
		"onclick=\"removeFriend('"+env.key+"',"+id_friend+");\"/>";
		$("#suivre-"+id_friend).replaceWith(nosuivre_input);
		$("#div-new-message").css("display","flex");
		var nb_abonnements = $("#abonnements span").val();
		$("#abonnements span").html(nb_abonnements+1);
	}
}


function addFriend(key, id_friend) {
	
	if (key != undefined) {
		$.ajax({
			type: "GET",
			url: "http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/AddFriend",
			datatype: "json",
			data: "key="+key+"&id_friend="+id_friend,
			error: function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function(rep) {
				addFriendResponse(rep, id_friend);
			}
		});
	} else {
		
	}
}

/*####################################################################################################*
 *--------------------------------------------remove Friend-------------------------------------------* 
 *####################################################################################################*/

function removeFriendResponse(rep, id_friend) {
	var json = rep;
	if (json.ErrorCode != undefined) {
		alert('Erreur');
	} else {
		var suivre_id = "suivre-"+id_friend;
		var suivre_input = "" +
		"<input id="+suivre_id+" type='button' value='Suivre' class='btn-bg-header'" +
		"onclick=\"addFriend('"+env.key+"',"+id_friend+");\"/>";
		$("#nosuivre-"+id_friend).replaceWith(suivre_input);
		$("#div-new-message").css("display","none");
		var nb_abonnements = $("#abonnements span").val();
		$("#abonnements span").html(nb_abonnements-1);
	}
}

function removeFriend(key, id_friend) {
	
	if (key != undefined) {
		$.ajax({
			type: "GET",
			url: "http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/RemoveFriend",
			datatype: "json",
			data: "key="+key+"&id_friend="+id_friend,
			error: function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function(rep) {
				removeFriendResponse(rep, id_friend);
			}
		});
	} else {
		
	}
}

/*####################################################################################################*
 *--------------------------------------------list Follows-------------------------------------------* 
 *####################################################################################################*/

function listFriendsResponse(rep, id_friend) {
	if (rep.ErrorCode != undefined) {
		alert('Erreur');
	} else {
		var friends = rep.friends;
		var friends_html = "";
		for (i=0; i<friends.length; i++) {
			friends_html += ("<span>"+friends[i]+"<img src=\"img/icons/minus.png\" " +
					"alt=\"avatar\" height=\"32\" width=\"32\"></span>");
		}
		var h3_abonnes = "<h3 id='h3-abonnes'onclick=\"listFollowers('"+env.key+"',"+id_friend+");\">Voir les abonnés " +
		"<img src=\"img/icons/arrow_right.png\" alt=\"arrow_right\" height=\"32\" width=\"32\"/>" +
		"</h3>";
		$("#div-friends h1").html("Abonnements");
		$("#div-friends #friends").html(friends_html);
		$("#h3-abonnements").replaceWith(h3_abonnes);
	}
}

function listFriends(key, id_user) {
	
	if (key != undefined) {
		$.ajax({
			type: "GET",
			url: "http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/ListFriends",
			datatype: "json",
			data: "key="+key+"&id_user="+id_user,
			error: function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function(rep) {
				listFriendsResponse(rep, id_user);
			}
		});
	} else {
		
	}
}

/*####################################################################################################*
 *--------------------------------------------list Followers-------------------------------------------* 
 *####################################################################################################*/

function listFollowersResponse(rep, id_friend) {
	if (rep.ErrorCode != undefined) {
		alert('Erreur');
	} else {
		var followers = rep.followers;
		var followers_html = "";
		for (i=0; i<followers.length; i++) {
			followers_html += ("<span>"+followers[i]+"<img src=\"img/icons/minus.png\" " +
					"alt=\"avatar\" height=\"32\" width=\"32\"></span>");
		}
		var h3_abonnements = "<h3 id='h3-abonnements'onclick=\"listFriends('"+env.key+"',"+id_friend+");\">Voir les abonnements " +
		"<img src=\"img/icons/arrow_right.png\" alt=\"arrow_right\" height=\"32\" width=\"32\"/>" +
		"</h3>";
	
		$("#div-friends h1").html("Abonnés");
		$("#div-friends #friends").html(followers_html);
		$("#h3-abonnes").replaceWith(h3_abonnements);
	}
}

function listFollowers(key, id_friend) {
	
	if (key != undefined) {
		$.ajax({
			type: "GET",
			url: "http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/ListFollowers",
			datatype: "json",
			data: "key="+key+"&id_user="+id_friend,
			error: function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: function(rep) {
				listFollowersResponse(rep, id_friend);
			}
		});
	} else {
		
	}
}

/*####################################################################################################*
 *---------------------------------------------new Like--------------------------------------------* 
 *####################################################################################################*/


function addLikeResponse(rep,id_message){
	var json = JSON.parse(rep);
	
	if(json.ErrorCode){
		alert("Erreur");
	}else{
		var nb_likes = env.msgs[id_message].likes+1;
		env.msgs[id_message].likes = nb_likes;
		$("#nb-likes-"+id_message+"span").html(nb_likes);
		
	}
}


function addLike(element) {
	var id_message = getIdNumber(element);
	alert(element)
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/Like",
				datatype:"json",
				data:"key="+env.key+"&message_id="+id_message,
				error:function(jqXHR,textStatus,errorThrown) {
					alert(textStatus);
				},
				sucess: function(rep){
					addLikeResponse(rep,id_message);
				}
			});
		}else {
		}
	}
}

/*####################################################################################################*
*-----------------------------------------------------Exercice--------------------------------------* 
*####################################################################################################*/


function changeBgResponse(rep, color) {
	$('body').css("background-color", color);
}

function changeBg(color) {
	alert(color);
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/ChangeBackground",
				datatype:"json",
				data:"key="+env.key+"&color="+color,
				error:function(jqXHR,textStatus,errorThrown) {
					alert(textStatus);
				},
				success: function(rep){
					changeBgResponse(rep,color);
				}
			});
		}else {
		}
	}
}

function getBgResponse(rep) {
	var color = rep.color;
	$('body').css("background-color", color);
}

function getBg() {
	if (env.key != undefined) {
		if(!noConnection) {
			$.ajax({
				type:"GET",
				url:"http://li328.lip6.fr:8280/gr1_BALDE_CHANEMOUGAM/GetBackground",
				datatype:"json",
				data:"key="+env.key,
				error:function(jqXHR,textStatus,errorThrown) {
					alert(textStatus);
				},
				success: function(rep){
					getBgResponse(rep);
				}
			});
		}else {
		}
	}
}



/*####################################################################################################*
 *-------------------------------------------Handle Cookies-------------------------------------------* 
 *####################################################################################################*/

function setCookie(sName, sValue) {
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + (365*24*60*60*1000));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}

function getCookie(sName) {
    var oRegex = new RegExp("(?:; )?" + sName + "=([^;]*);?");

    if (oRegex.test(document.cookie)) {
            return decodeURIComponent(RegExp["$1"]);
    } else {
            return null;
    }
}

/*####################################################################################################*
 *---------------------------------------------End Cookies--------------------------------------------* 
 *####################################################################################################*/
>>>>>>> b9891f11d3bd0e233401915b6db3dc6e10af3e15
