package services;

import org.json.JSONObject;

import tools.FriendTools;
import tools.ServiceTools;

public class UnLikeS {
	public static JSONObject unlike(String key, int id_message) {
		if (key == null) 
			return ServiceTools.serviceRefused("Paramètre(s) vide(s)", -1);
		return FriendTools.deleteLike(key, id_message);
	}
}
