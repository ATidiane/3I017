package services;

import org.json.JSONObject;

import tools.MessageTools;

public class ListMessagesS {
	
	public static JSONObject listMessages(String key, int id_user) {
		return MessageTools.listMessages(key, id_user);
	}
	
}
