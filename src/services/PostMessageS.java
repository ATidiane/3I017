package services;

import org.json.*;

import tools.MessageTools;
import tools.ServiceTools;

public class PostMessageS {

	public static JSONObject postMessage(String key, String text) {
		if (key == null || text == null) 
			return ServiceTools.serviceRefused("Paramètre(s) vide(s)", -1);
		
		return MessageTools.postMessage(key, text);
	}
	
}
