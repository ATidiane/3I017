package services;

import org.json.JSONObject;

import com.mongodb.BasicDBObject;

import tools.MessageTools;
import tools.ServiceTools;
import tools.UserTools;

public class PostCommentS {

	public static BasicDBObject postComment(String key, int id_message, String text) {
		return MessageTools.postComment(key, id_message, text);
	}
	
}
