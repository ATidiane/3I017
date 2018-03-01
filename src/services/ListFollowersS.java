package services;

import org.json.JSONObject;

import tools.FriendTools;
import tools.ServiceTools;

public class ListFollowersS {
	public static JSONObject listFollowers(String key, int id_user) {
		if (key == null) 
			return ServiceTools.serviceRefused("Paramètre(s) vide(s)", -1);
		if (id_user == -1) {
			return ServiceTools.serviceRefused("The id is empty", -2);
		}
		return FriendTools.listFollowers(key, id_user);
	}
} 
