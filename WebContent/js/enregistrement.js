/**
 * 
 */

function enregistrement(f) {
	var login = f.login.value;
	var pass = f.pass.value;
	var retapez = f.retapez.value;
	var ok = verifFormConnexion(login, pass, retapez);
	if (ok) {
		enregistrement(login, pass);
	}
}

function funcErreur(msg) {
	var msgBox = "<div id =\"erreurConnect\">" + msg + "</div>";
	var oldmsg = $("#erreurConnect");
	
	if (oldmsg.length == 0) {
		$("form").prepend(msgBox);
	} else {
		oldmsg.replaceWith(msgBox);
	}
	
	return false;
}

function verifFormConnection(login, pass, retapez) {
	if (login.length == 0) {
		funcErreur("Login obligatoire");
	} else if (login.length > 20) {
		funcErreur("Login trop long")
	} else if (pass.length == 0) {
		funcErreur("Mot de passe obligatoire");
	} else if (pass.length < 8) {
		funcErreur("Mot de passe court");
	} else if (pass != retapez) {
		funcErreur("Mot de passe différent");
	} 
	
	return true;
}

function enregistre(prenom,nom,mail,login,password){
	$.ajax({
		type:"GET",
		url:"Enregistrement",
		data:"prenom="+prenom+"&nom="+nom+"&mail="+mail+"&login="+login+"&pass="+pass,
		datatype:json,
		error : function(jqXHR, textStatus, errorThrown) {
			alert(textStatus);
		},
		success:
	})
}

