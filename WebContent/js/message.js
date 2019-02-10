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
    //this.likes = 0;
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