package services;

import org.json.*;

import tools.FriendTools;
import tools.ServiceTools;

public class RemoveFriendS {
	public static JSONObject removeFriend(String key, int id_friend) {
		if (key == null)
			return ServiceTools.serviceRefused("Paramètre(s) vide(s)", -1);
		
		boolean is_friend = FriendTools.alreadyFriend(key, id_friend);
		if (!is_friend) 
			return ServiceTools.serviceRefused("Not Friends", -2);
		
		return FriendTools.deleteFriend(key, id_friend);
	}
}
