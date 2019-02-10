/**
 * 
 */

function connexion(f) {
	var login = f.login.value;
	var pass = f.pass.value;
	var ok = verifFormConnexion(login, pass);
	if (ok) {
		connecte(login, pass);
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

function verifFormConnection(login, pass) {
	if (login.length == 0) {
		funcErreur("Login obligatoire");
	} else if (login.length > 20) {
		funcErreur("Login trop long")
	} else if (pass.length == 0) {
		funcErreur("Mot de passe obligatoire");
	}
	
	return true;
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
                    completeMessages(rep.key, -1, -1, -1, 10);
                }
            }
        });
    } else {
        responseConnexion({"key":325, "id":3, "login":"viniya", "follows":[2]});
    }
    alert("OK");
}

function responseConnexion(rep) {}


