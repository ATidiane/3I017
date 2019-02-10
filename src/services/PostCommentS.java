package services;

import com.mongodb.BasicDBObject;

import tools.MessageTools;

public class PostCommentS {

	public static BasicDBObject postComment(String key, int id_message, String text) {
		return MessageTools.postComment(key, id_message, text);
	}
	
}
