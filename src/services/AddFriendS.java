package services;

import org.json.*;

import tools.FriendTools;
import tools.ServiceTools;

public class AddFriendS {
	public static JSONObject addFriend(String key, int id_friend) {
		if (key == null)
			return ServiceTools.serviceRefused("Paramètre(s) vide(s)", -1);
		
		boolean is_friend = FriendTools.alreadyFriend(key, id_friend);
		if (is_friend) 
			return ServiceTools.serviceRefused("Already Friends", -2);
		
		return FriendTools.insertFriend(key, id_friend);
	}

}
