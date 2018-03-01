<<<<<<< HEAD
package tests;

import java.sql.Connection;
import java.util.Date;
import java.sql.Statement;

import org.json.JSONException;
import org.json.JSONObject;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Timer;
import java.util.TimerTask;

import db.Database;
import services.PostMessageS;
import services.AddFriendS;
import services.LikeS;
import services.ListFollowersS;
import services.ListFriendsS;
import services.ListMessagesS;
import services.LoginS;
import services.LogoutS;
import services.RemoveFriendS;
import services.UserS;
import servlets.ListFollowers;
import tools.FriendTools;
import tools.UserTools;

public class SqlTest {
	
	public static class MyTimer extends TimerTask {
		
		Statement st;
		Connection co;
		
		public MyTimer() {
			try {
				co = Database.getMySQLConnection();
				st = co.createStatement();
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
				
		}
		
		@Override
		public void run() {
			ResultSet users_connect;
			
			try {
				
				ArrayList<String> keys = new ArrayList<String>();
				GregorianCalendar calendar = new java.util.GregorianCalendar();
				calendar.add(Calendar.MINUTE, -1);
				Date ph = calendar.getTime();
				String query = "SELECT Connection.key from Connection Where Connection.time < '"+ ph +"'";
				users_connect = st.executeQuery(query);
				
				while(users_connect.next()) {
					String id_user = users_connect.getString("key");
					keys.add(id_user);
				}
				
				for (String k : keys){
					UserTools.removeConnection(k);
				}
				
			} catch (SQLException e) {
				e.printStackTrace();
			}	
		}
		
	}
	public static void main(String args[]) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
	
		try {
			
			/*Timer timer = new Timer();
			int interval = 60000;
			GregorianCalendar gc = new GregorianCalendar();
			Date d = gc.getTime();
			timer.schedule(new MyTimer(), d, interval);*/
			
			//JSONObject obj = UserS.createUser("SOW", "Alpha", "a@g.com", "alpha", "serious");
			//System.out.println(obj.toString());
			//JSONObject objlog = LoginS.login("alpha", "serious");
			//System.out.println(objlog.toString());
			//LogoutS.logout(UserTools.getKey("alpha"));
			//System.out.println(UserTools.getKey("viniya"));
			//JSONObject friend = AddFriendS.addFriend(UserTools.getKey("ahmed"), 6);
			//System.out.println(friend.toString());
			//JSONObject rmfriend = RemoveFriendS.removeFriend(UserTools.getKey("Ahmed"), 6);
			//System.out.println(rmfriend.toString());
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Ahmed"), "Merci chérie!"));
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Viniya"), "Nice picture babe!"));
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Ahmed"), "Do u know where to find the reference?"));
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Viniya"), "I sent u the link , check your message ;)"));
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Sadio"), "Bon Courage!"));
			//System.out.println(ListFriendsS.listFriends(UserTools.getKey("Ahmed")).toString());
			//System.out.println(ListMessagesS.listMessages(null, 0).toString());
			//FriendTools.insertFriend("crMNeyTtcLQlY7CIMqLJF7EM4TaJh4ij", 4);
			//LikeS.like("zGAM8l4M4MLygLVpqlSPcxookOhXImMc", 65);
			AddFriendS.addFriend("D7lsYtloEpIiGkcdQtXicnnnhrF5FPyI", 2);
			//System.out.println(LoginS.login("ahmed", "ahhh"));
			//System.out.println(ListFriendsS.listFriends("ZHaX39c2IDHuZppxVL1JOg4BGOfU5SAe", 1).toString());
			//System.out.println(FriendTools.PotentialFriends("ZHaX39c2IDHuZppxVL1JOg4BGOfU5SAe").toString());
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT * from User";
			res = st.executeQuery(query);
			
			System.out.println("ID_USER NOM PRENOM LOGIN MDP");
			while(res.next()) {
				String id_user = res.getString("id_user");
				String nom = res.getString("nom");
				String prenom = res.getString("prenom");
				String mail = res.getString("mail");
				String login = res.getString("login");
				String mdp = res.getString("mdp");
				
				System.out.println(id_user+" "+nom+" "+prenom+" "+mail+" "+login+" "+mdp);
			}
		} catch (SQLException s) {
			System.out.println("In the exception");
			s.printStackTrace();
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		
	}
	
	
}
||||||| merged common ancestors
=======
package tests;

import java.sql.Connection;
import java.util.Date;
import java.sql.Statement;

import org.json.JSONException;
import org.json.JSONObject;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.Timer;
import java.util.TimerTask;

import db.Database;
import services.ChangeBackgroundS;
import services.GetBackgroundS;
import services.PostMessageS;
import services.AddFriendS;
import services.LikeS;
import services.ListFriendsS;
import services.ListMessagesS;
import services.LoginS;
import services.LogoutS;
import services.RemoveFriendS;
import services.UserS;
import tools.FriendTools;
import tools.UserTools;

public class SqlTest {
	
	public static class MyTimer extends TimerTask {
		
		Statement st;
		Connection co;
		
		public MyTimer() {
			try {
				co = Database.getMySQLConnection();
				st = co.createStatement();
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
				
		}
		
		@Override
		public void run() {
			ResultSet users_connect;
			
			try {
				
				ArrayList<String> keys = new ArrayList<String>();
				GregorianCalendar calendar = new java.util.GregorianCalendar();
				calendar.add(Calendar.MINUTE, -1);
				Date ph = calendar.getTime();
				String query = "SELECT Connection.key from Connection Where Connection.time < '"+ ph +"'";
				users_connect = st.executeQuery(query);
				
				while(users_connect.next()) {
					String id_user = users_connect.getString("key");
					keys.add(id_user);
				}
				
				for (String k : keys){
					UserTools.removeConnection(k);
				}
				
			} catch (SQLException e) {
				e.printStackTrace();
			}	
		}
		
	}
	public static void main(String args[]) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
	
		try {
			
			/*Timer timer = new Timer();
			int interval = 60000;
			GregorianCalendar gc = new GregorianCalendar();
			Date d = gc.getTime();
			timer.schedule(new MyTimer(), d, interval);*/
			
			//JSONObject obj = UserS.createUser("SOW", "Alpha", "a@g.com", "alpha", "serious");
			//System.out.println(obj.toString());
			//JSONObject objlog = LoginS.login("alpha", "serious");
			//System.out.println(objlog.toString());
			//LogoutS.logout(UserTools.getKey("alpha"));
			//System.out.println(UserTools.getKey("viniya"));
			//JSONObject friend = AddFriendS.addFriend(UserTools.getKey("ahmed"), 6);
			//System.out.println(friend.toString());
			//JSONObject rmfriend = RemoveFriendS.removeFriend(UserTools.getKey("Ahmed"), 6);
			//System.out.println(rmfriend.toString());
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Ahmed"), "Merci chérie!"));
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Viniya"), "Nice picture babe!"));
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Ahmed"), "Do u know where to find the reference?"));
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Viniya"), "I sent u the link , check your message ;)"));
			//System.out.println(AddCommentS.addComment(UserTools.getKey("Sadio"), "Bon Courage!"));
			//System.out.println(ListFriendsS.listFriends(UserTools.getKey("Ahmed")).toString());
			//System.out.println(ListMessagesS.listMessages(null, 0).toString());
			//FriendTools.insertFriend("crMNeyTtcLQlY7CIMqLJF7EM4TaJh4ij", 4);
			//LikeS.like("zGAM8l4M4MLygLVpqlSPcxookOhXImMc", 65);
			//AddFriendS.addFriend("D7lsYtloEpIiGkcdQtXicnnnhrF5FPyI", 2);
			//System.out.println(LoginS.login("ahmed", "ahhh"));
			//System.out.println(ListFriendsS.listFriends("ZHaX39c2IDHuZppxVL1JOg4BGOfU5SAe", 1).toString());
			//System.out.println(FriendTools.PotentialFriends("ZHaX39c2IDHuZppxVL1JOg4BGOfU5SAe").toString());
			
			System.out.println(ChangeBackgroundS.changeBackground("4Hud8IuDzXKzhHkZdWVYJ7jE1KIIRUzZ", "red"));
			System.out.println(GetBackgroundS.getBackground("4Hud8IuDzXKzhHkZdWVYJ7jE1KIIRUzZ"));
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT * from User";
			res = st.executeQuery(query);
			
			System.out.println("ID_USER NOM PRENOM LOGIN MDP");
			while(res.next()) {
				String id_user = res.getString("id_user");
				String nom = res.getString("nom");
				String prenom = res.getString("prenom");
				String mail = res.getString("mail");
				String login = res.getString("login");
				String mdp = res.getString("mdp");
				
				System.out.println(id_user+" "+nom+" "+prenom+" "+mail+" "+login+" "+mdp);
			}
		} catch (SQLException s) {
			System.out.println("In the exception");
			s.printStackTrace();
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		
	}
	
	
}
>>>>>>> b9891f11d3bd0e233401915b6db3dc6e10af3e15
