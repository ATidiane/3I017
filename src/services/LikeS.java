package services;

import org.json.JSONObject;

import tools.FriendTools;
import tools.MessageTools;
import tools.ServiceTools;

public class LikeS {
	public static JSONObject like(String key, int id_message) {
		if (key == null) 
			return ServiceTools.serviceRefused("Paramètre(s) vide(s)", -1);
		return FriendTools.addLike(key, id_message);
	}
}
