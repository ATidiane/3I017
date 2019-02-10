/**
 * 
 */

function makeConnexionPanel() {

    $("#barError").remove(); // Remove Error Panel
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
        //rester à la page de connexion ( page de connexion - cookie : 1)
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
