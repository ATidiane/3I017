package services;

import org.json.JSONObject;

import tools.FriendTools;

public class GetLikesS {

	public static JSONObject getLikes(int id_message) {
		
		return FriendTools.getNblikes(id_message) ;
	}
}
