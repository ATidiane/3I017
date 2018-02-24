package tests;

import java.io.PrintWriter;
import java.net.UnknownHostException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mongodb.BasicDBObject;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.Mongo;

import services.GetMessagesS;
import services.LoginS;
import services.PostCommentS;
import services.PostMessageS;
import services.DeleteMessageS;

public class MongoDBTest {
	public static void main(String args[]) {
		
		Mongo m;
		try {
			//PostCommentS.postComment("xMNqrsy5LmlIMgiYhcRNwqIfDidXeTAp", 28, "Having fun in Techno Web ? LOL");
			//PostMessageS.postMessage("KcjufB8QoI73Phzo8uOBgtaB99YYseLk", "Yep it works");
			System.out.println(GetMessagesS.getMessages("PDkoqbMzIojXVJZrnDAGWtrt1uNZ98uq", 2, -1, -1, -1, null).toString());
			//DeleteMessageS.deleteMessage("blabla", 61).toString();
			m = new Mongo("li328.lip6.fr", 27130);
			DB db = m.getDB("gr1_2017_balde_chanem");
			DBCollection coll = db.getCollection("comments");
			DBCursor curs = coll.find();
			while(curs.hasNext()) {
				DBObject o = curs.next();
				System.out.println(o);
			}
		} catch (UnknownHostException e) {
			e.printStackTrace();
		}
		
	}
}
