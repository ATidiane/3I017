package services;

import org.json.JSONObject;

import tools.MessageTools;
import tools.ServiceTools;

public class DeleteMessageS {
	public static JSONObject deleteMessage(String key, int id_message) {
		if (key == null) 
			return ServiceTools.serviceRefused("Paramètre(s) vide(s)", -1);
		if (id_message == -1) 
			return ServiceTools.serviceRefused("The message id is empty", -2);
		
		return MessageTools.deleteMessage(key, id_message);
	}
}
