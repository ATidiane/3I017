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