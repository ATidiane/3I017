/**
 * 
 */

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