package services;

import org.json.JSONObject;

import tools.FriendTools;
import tools.ServiceTools;
import tools.UserTools;

public class GetLikesS {

	public static JSONObject getLikes(int id_message) {
		
		return FriendTools.getNblikes(id_message) ;
	}
}
