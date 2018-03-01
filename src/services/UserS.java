package services;

import org.json.*;

import tools.*;

public class UserS {
	
	public static JSONObject createUser(String nom, String prenom, String mail, String login, String mdp) {
		if (nom == null || prenom == null || mail == null || login == null || mdp == null) {
			return ServiceTools.serviceRefused("Paramètre(s) vide(s)", -1);
		}
		
		if (UserTools.userExist(login)) {
			return ServiceTools.serviceRefused("Login existe déja", -2);
		}
		
		if (UserTools.mailExist(mail)) {
			return ServiceTools.serviceRefused("L'adresse mail existe déja", -3);
		}
		
		return UserTools.insertUser(nom, prenom, mail, login, mdp);
	}
	

}
