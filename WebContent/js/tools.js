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
