package tools;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.swing.plaf.basic.BasicDesktopIconUI;

import org.json.JSONException;
import org.json.JSONObject;
import org.omg.PortableServer.SERVANT_RETENTION_POLICY_ID;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;

import db.Database;
import servlets.PostMessage;

public class MessageTools {
	
	public static int getNextSequence(String name) {
		Mongo m;
		DBCursor curs = null;
		int res = 0;
		try {
			
			m = new Mongo("li328.lip6.fr", 27130);
			DB db = m.getDB("gr1_2017_balde_chanem");			
			DBCollection coll = db.getCollection("counters");
			BasicDBObject query = new BasicDBObject();
			query.put("_id", "userid");
			BasicDBObject update = new BasicDBObject().append("$inc",
					new BasicDBObject().append("seq", 1));
			coll.update(query, update);
			curs = coll.find();
			res = (Integer) (curs.next().get("seq"));
			
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		return res;
	}
	
	public static JSONObject postMessage(String key, String text) {
		GregorianCalendar calendar = new java.util.GregorianCalendar();
		Date dod = calendar.getTime();
		try {
			DBCollection coll = Database.getMyMongoDBConnection();
			BasicDBObject obj = new BasicDBObject();
			BasicDBObject author = new BasicDBObject();
			int id_user = UserTools.getIdUserByKey(key);
			String login = UserTools.getLogin(id_user);
			System.out.println(login);
			author.put("id", id_user);
			author.put("login", login);
			obj.put("id", getNextSequence("userid"));
			obj.put("auteur", author);
			obj.put("text", text);
			obj.put("date", dod);
			obj.put("comments", new ArrayList<DBObject>());
			coll.insert(obj);
			return new JSONObject();
		} catch (UnknownHostException e) {
			e.printStackTrace();
			return ServiceTools.serviceRefused("UnknownHostException", 0);
		} 

	}
	
	public static JSONObject deleteMessage(String key, int id_message) {
		try {
			DBCollection coll = Database.getMyMongoDBConnection();
			BasicDBObject obj = new BasicDBObject();
			obj.put("id", id_message);
			coll.remove(obj);
			return new JSONObject();
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ServiceTools.serviceRefused("UnknownHostException", 0);
		}
	}
	
	public static BasicDBObject getMessages(String key, int from, int id_max, int id_min, int nb, String query) {
		Mongo m;
		DB db;
		DBCollection coll;
		DBCollection getIdMax;
		BasicDBObject messages_b = new BasicDBObject();
		List<DBObject> messages;
		
		try {
			m = new Mongo("li328.lip6.fr", 27130);
			db = m.getDB("gr1_2017_balde_chanem");			
			coll = db.getCollection("comments");
			getIdMax = db.getCollection("counters");
			messages = new ArrayList<DBObject>();
			DBCursor curs = null;
			BasicDBObject q = new BasicDBObject();
			BasicDBObject moi = new BasicDBObject();
			int id_user = UserTools.getIdUserByKey(key);
			System.out.println(id_user);
			String login = UserTools.getLogin(id_user);
			System.out.println(login);
			System.out.println(from);
			// Profile page
			if (from == id_user) {
				moi.put("id", id_user);
				moi.put("login", login);
				q.put("auteur", moi);
			} else {
				
				ArrayList<BasicDBObject> list_auteur = new ArrayList<BasicDBObject>();
				ArrayList<Integer> list_amis;
				
				// Home Page
				if (from == -1) {
					list_amis = FriendTools.getFollows(id_user);
					moi.put("id", id_user);
					moi.put("login",login);
					list_auteur.add(moi);
				} else {
					// SomeOne Page
					String login_other_user = UserTools.getLogin(from);
					list_amis = FriendTools.getFollows(from);
					moi.put("id", from);
					moi.put("login",login_other_user);
					list_auteur.add(moi);
				}
				
				for (int id: list_amis) {
					BasicDBObject ami = new BasicDBObject();
					String loginA = UserTools.getLogin(id);
					ami.put("id", id);
					ami.put("login", loginA);
					list_auteur.add(ami);
				}
				q.put("auteur", new BasicDBObject().append("$in", list_auteur));
			}
			
			if (id_max != -1) {
				BasicDBObject lt = new BasicDBObject();
				lt.put("$lt", id_max);
				q.put("id", lt);
			}
			
			if (id_min != -1) {
				BasicDBObject gt = new BasicDBObject();
				gt.put("$gt",id_min);
				q.put("id", gt);
			}
			
			curs = coll.find(q).sort(new BasicDBObject("id", -1));
			
			if (nb != -1) {
				int i = 0;
				while(curs.hasNext() && (i < nb)) {
					DBObject o = curs.next();
					messages.add(o);
					i++;
				}
			} else {
				while(curs.hasNext()) {
					DBObject o = curs.next();
					messages.add(o);
				}
			}
			
			messages_b.put("list_messages", messages);
			
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		
		return messages_b;
	}
	
	public static JSONObject listMessages(String key, int user_id) {
		GregorianCalendar calendar = new java.util.GregorianCalendar();
		
		try {
			DBCollection coll = Database.getMyMongoDBConnection();
			BasicDBObject query = new BasicDBObject();
			List<DBObject> messages = new ArrayList<DBObject>();
			DBCursor curs;
			if (key == null) {
				calendar.add(Calendar.HOUR, -1);
				Date ph = calendar.getTime();
				BasicDBObject gt = new BasicDBObject();
				gt.put("$gt", ph);
				query.put("date", gt);
				curs = coll.find(query);
			} else {
				if (user_id == 0) {
					query.put("key", key);
					curs = coll.find(query);
				} else {
					String keyfriend = UserTools.getKeyById(user_id);
					query.put("key", keyfriend);
					curs = coll.find(query);
				}
			}
			
			while(curs.hasNext()) {
				DBObject o = curs.next();
				messages.add(o);
			}
		
			JSONObject obj = new JSONObject();
			obj.put("messages", messages);
			return obj;
			
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ServiceTools.serviceRefused("UnknownHostException", 0);
		} catch (JSONException j) {
			j.printStackTrace();
			return ServiceTools.serviceRefused("JSONException", 100);
		}
	}
	
	public static BasicDBObject postComment(String key, int id_message, String text) {
		GregorianCalendar calendar = new java.util.GregorianCalendar();
		Date dod = calendar.getTime();
		BasicDBObject comment = new BasicDBObject();
		try {
			DBCollection coll = Database.getMyMongoDBConnection();
			//BasicDBObject comment = new BasicDBObject();
			BasicDBObject author = new BasicDBObject();
			int id_user = UserTools.getIdUserByKey(key);
			String login = UserTools.getLogin(id_user);
			author.put("id", id_user);
			author.put("login", login);
			
			comment.put("auteur", author);
			comment.put("texte", text);
			comment.put("date", dod);
			
			BasicDBObject query_msg = new BasicDBObject();
			query_msg.put("id", id_message);
			DBCursor curs = coll.find(query_msg);
			
			DBObject o = null;
			if (curs.hasNext()) {
				o = curs.next();
			}
			
			ArrayList<DBObject> list_comments = (ArrayList<DBObject>) o.get("comments");
			int id = list_comments.size();
			comment.put("id", id);
			
			list_comments.add(comment);
			BasicDBObject replace = new BasicDBObject();
			replace.append("$set" , new BasicDBObject().append("comments", list_comments));
			coll.update(query_msg, replace);
			
		} catch (UnknownHostException u) {
			u.printStackTrace();
			return ServiceTools.serviceRefusedBasic("UnknownHostException", 0);
		} 
		
		return comment;
	}
}
