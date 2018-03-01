package services;

import org.json.JSONObject;

import tools.ServiceTools;
import tools.UserTools;

public class GetPassS {
	
	public static JSONObject getPass(String mail) {
		if(mail == null)
			return ServiceTools.serviceRefused("Paramètre(s) vide(s)", -1);
		
		if(!UserTools.mailExist(mail))
			return ServiceTools.serviceRefused("Mail does not exit", 4);
					
		String m = UserTools.getpassbyMail(mail);
		return new JSONObject();
	}

}
