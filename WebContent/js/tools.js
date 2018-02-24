/**
 * 
 */

function teste() {
	alert("Test");
}

function revival(key,value) {
	
	if( value.error != 0 ){
		var o = new Object(value.error);
		return o;
	}
	if(value.comments != undefined ){
		var m = new Message(value.id,value.author,value.text,value.date,value.comments);
		return m;
	} else if(value.texte != undefined) {
		var c = new Commentaire(value.id,value.author,value.text,value.date);
		return c;
	} else if (key =='date') {
		var d = new Date(value);
		return d;
	} else {
		return value;
	}
	
}



function completeMessages() {
	var tab = getFromLocalDb(env.fromId, -1, env.minId, 10);
	if (!noConnection)  {
		$.ajax ({
			type:"GET",
			url:"",
			datatype:"json",
			data:"login=" +login+ "&pass="+pass,
			error:function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: completeMessagesReponse;
		});
	} else {
		var tab = getFromLocalDb(env.fromId, -1, env.minId, 10);
		completeMessagesReponse(JSON.stringify(tab));
	}
}

function getFromLocalDb(from, minId, maxId, nbMax) {
	var tab = [];
	var nb = 0;
	var f = undefined;

	if (from > 0) {
		f = follows[from];
		if (f == undefined) {
			f = new Set();
		}
	}
	
	for (var i=localdb.length-1; i>=0; i--) {
		if ((nbMax >= 0) && (nb >= nbMax)) {
			break;
		}
		
		if (localdb[i] == undefined) {
			continue;
		}
		
		if (((maxId < 0) || (localdb[i].id < maxId)) &&
				(localdb[i].id > minId)) {
			if ((from < 0) || (localdb[i].auteur.id == from) ||
					(f.has(localdb[i].auteur.id))) {
				tab.push(localdb[i]);
				nb++;
			}
		}
	}
	
	return tab;
	
}

function completeMessagesReponse(rep) {
	var tab = JSON.parse(rep, revival);
	var lastId = undefined;
	
	for (var i=0; i<tab.length; i++) {
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
	
	$.force_appear();
}

function refreshMessages() {
	
	if(!noConnection ){
		$.ajax{(
			type:"GET",
			url:"ListMessages",
			datatype:"text/plain",
			data:"key="+env.key+"&query=''&from="+env.fromId+"&id_min="+env.maxId+"&id_message=-1&nb=-1",
			error : function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success:refreshMessagesReponse
		)};
	} else {
		refreshMessagesResponse(JSON.stringify(getFromLocalDb(env.fromId,env.maxId,-1,-1)));
	}
}

function refreshMessagesResponse(rep) {
	var tab = JSON.parse(rep,revival);
	if(tab.erreur != undefined) {
		alert(erreur);
	} else {
		for(var = val.length-1,i>=0;i--){
			$("Messages").prepend(tab[i]);
			env.msgs(tab[i].id)= tab[i];
			if(tab[i].id > env.maxId) {
				env.maxId = tab[i].getHtml();
			}
		}
	}
}

function newMessage(id,author,comments) {
	var texte = $("#Message").val();
	if(!noConnection) {
		$.ajax ({
			type:"GET",
			url:"",
			datatype:"json",
			data:"id="+id+"&author="+author+"&texte="+texte+"&date="+new Date()+"&comments="+comments),
			error:function(jqXHR, textStatus, errorThrown) {
				alert(textStatus);
			},
			success: newMessageReponse
		});
	}else {
		var m = new Message(localdb.length,{"id":env.id,"login":env.login},texte,new Date()));
		localdb[m.id]=m;
		newMessageReponse({});
	}
}

function newMessageReponse(rep) {
	if(rep.error != undefined) {
		alert(rep.erreur);
	}else {
		refreshMessages();
	}
}

function slideshow() {
	var myIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    for (i = 0; i < x.length; i++) {
	       x[i].style.display = "none";  
	    }
	    myIndex++;
	    if (myIndex > x.length) {myIndex = 1}    
	    x[myIndex-1].style.display = "block";  
	    setTimeout(carousel, 4000); // Change image every 4 seconds
	}
}
