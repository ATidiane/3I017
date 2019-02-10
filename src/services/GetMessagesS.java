package services;

import com.mongodb.BasicDBObject;

import tools.MessageTools;

public class GetMessagesS {
	
	/**
	 * @param key of session
	 * @param from id of the user which we want to see posts (and his friends),
	 * -1 if no limit (principal page)
	 * @param id_max each message must have an id < to id_max, -1 if no limit
	 * @param id_min each message must have an id > to id_min, -1 if no limit
	 * @param nb number of messages we want to see, -1 if no limit
	 * @return 
	 */
	public static BasicDBObject getMessages(String key, int from, int id_max, int id_min, int nb, String query) {
		return MessageTools.getMessages(key, from, id_max, id_min, nb, query);
	}
	
}
