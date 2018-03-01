<<<<<<< HEAD
package tools;

import org.json.*;

import db.Database;

import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

public class FriendTools {
	
	public static JSONObject  insertFriend(String key, int id_friend) {
		Connection co = null;
		Statement st = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "INSERT INTO Friend VALUES('" + id_user + "','" + id_friend + "','" + new Timestamp(System.currentTimeMillis()) + "')";
			st.executeUpdate(query);
			return new JSONObject();
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return ServiceTools.serviceRefused("SQLException", 1000);
	}
	
	public static JSONObject deleteFriend(String key, int id_friend) {
		Connection co = null; 
		Statement st = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "DELETE FROM Friend where from_id =" + id_user
					+ " and to_id = " + id_friend;
			st.executeUpdate(query);
			
			return new JSONObject();
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return ServiceTools.serviceRefused("SQLException", 1000);
	}
	
	public static boolean alreadyFriend(String key, int id_friend) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "SELECT * FROM Friend WHERE from_id = " + id_user + " AND to_id = " + id_friend;
			res = st.executeQuery(query);
			
			if (res.next()) {
				return true;
			}
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return false;
	}
	
	public static JSONObject listFriends(String key, int id_user) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT u.nom, u.prenom FROM User u, Friend f WHERE f.from_id = " + id_user 
					+ " AND f.to_id = u.id_user";
			res = st.executeQuery(query);
			List<String> friends = new ArrayList<String>();
			
			while (res.next()) {
				String nom = res.getString("nom");
				String prenom = res.getString("prenom");
				friends.add(nom + " " + prenom);
			}
			JSONObject obj = new JSONObject();
			obj.put("friends", friends);
			return obj;
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException", 1000);
		} catch (JSONException j) {
			j.printStackTrace();
			return ServiceTools.serviceRefused("JSONException", 100);
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		
	}
	
	public static JSONObject listFollowers(String key, int id_user) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT u.nom, u.prenom FROM User u, Friend f WHERE f.to_id = " + id_user 
					+ " AND f.from_id = u.id_user";
			res = st.executeQuery(query);
			List<String> followers = new ArrayList<String>();
			
			while (res.next()) {
				String nom = res.getString("nom");
				String prenom = res.getString("prenom");
				followers.add(nom + " " + prenom);
			}
			JSONObject obj = new JSONObject();
			obj.put("followers", followers);
			return obj;
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException", 1000);
		} catch (JSONException j) {
			j.printStackTrace();
			return ServiceTools.serviceRefused("JSONException", 100);
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		
	}
	
	public static ArrayList<Integer> getFollowers(int user_id) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		ArrayList<Integer> followers = new ArrayList<Integer>();
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "Select from_id from Friend where to_id = " + user_id;
			res = st.executeQuery(query);
			while (res.next()) {
				followers.add(res.getInt("from_id"));
			}
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return followers;
	}
	
	public static ArrayList<Integer> getFollows(int user_id) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		ArrayList<Integer> follows= new ArrayList<Integer>();
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "Select to_id from Friend where from_id = " + user_id;
			res = st.executeQuery(query);
			while (res.next()) {
				follows.add(res.getInt("to_id"));
			}
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return follows;
	}
	
	public static JSONObject PotentialFriends(String key) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			//First add the people who follows me and not reciprocal
			String query = "Select u.nom, u.prenom FROM User u, Friend f WHERE f.to_id = '" + id_user +
					"' AND f.from_id = u.id_user AND "+ id_user +" NOT IN (Select from_id from Friend where to_id='" +
					id_user+"'";
			res = st.executeQuery(query);
			List<String> followers = new ArrayList<String>();
			
			while (res.next()) {
				String nom = res.getString("nom");
				String prenom = res.getString("prenom");
				followers.add(nom + " " + prenom);
			}
			JSONObject obj = new JSONObject();
			obj.put("followers", followers);
			return obj;
			
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException", 1000);
		} catch (JSONException j) {
			j.printStackTrace();
			return ServiceTools.serviceRefused("JSONException", 100);
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch(SQLException ignore) {}
		}
	}
	
	public static JSONObject addLike(String key, int id_message) {
		Connection co = null;
		Statement st = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "insert into Likes values('"+ id_user+ "','" + id_message + "','" + new Timestamp(System.currentTimeMillis()) + "')";
			
			st.executeUpdate(query);
			return new JSONObject();
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return ServiceTools.serviceRefused("SQLException", 1000);
		
	}
	
	public static JSONObject deleteLike(String key, int id_message) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "DELETE FROM Like where message_id =" + id_message
					+ " and user_id=" + id_user ;
			
			st.executeUpdate(query);
			return new JSONObject();
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return ServiceTools.serviceRefused("SQLException", 1000);
	}

}
||||||| merged common ancestors
=======
package tools;

import org.json.*;

import db.Database;

import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

public class FriendTools {
	
	public static JSONObject  insertFriend(String key, int id_friend) {
		Connection co = null;
		Statement st = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "INSERT INTO Friend VALUES('" + id_user + "','" + id_friend + "','" + new Timestamp(System.currentTimeMillis()) + "')";
			st.executeUpdate(query);
			return new JSONObject();
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return ServiceTools.serviceRefused("SQLException", 1000);
	}
	
	public static JSONObject deleteFriend(String key, int id_friend) {
		Connection co = null; 
		Statement st = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "DELETE FROM Friend where from_id =" + id_user
					+ " and to_id = " + id_friend;
			st.executeUpdate(query);
			
			return new JSONObject();
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return ServiceTools.serviceRefused("SQLException", 1000);
	}
	
	public static boolean alreadyFriend(String key, int id_friend) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "SELECT * FROM Friend WHERE from_id = " + id_user + " AND to_id = " + id_friend;
			res = st.executeQuery(query);
			
			if (res.next()) {
				return true;
			}
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return false;
	}
	
	public static JSONObject listFriends(String key, int id_user) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT u.nom, u.prenom FROM User u, Friend f WHERE f.from_id = " + id_user 
					+ " AND f.to_id = u.id_user";
			res = st.executeQuery(query);
			List<String> friends = new ArrayList<String>();
			
			while (res.next()) {
				String nom = res.getString("nom");
				String prenom = res.getString("prenom");
				friends.add(nom + " " + prenom);
			}
			JSONObject obj = new JSONObject();
			obj.put("friends", friends);
			return obj;
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException", 1000);
		} catch (JSONException j) {
			j.printStackTrace();
			return ServiceTools.serviceRefused("JSONException", 100);
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		
	}
	
	public static JSONObject listFollowers(String key, int id_user) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT u.nom, u.prenom FROM User u, Friend f WHERE f.to_id = " + id_user 
					+ " AND f.from_id = u.id_user";
			res = st.executeQuery(query);
			List<String> followers = new ArrayList<String>();
			
			while (res.next()) {
				String nom = res.getString("nom");
				String prenom = res.getString("prenom");
				followers.add(nom + " " + prenom);
			}
			JSONObject obj = new JSONObject();
			obj.put("followers", followers);
			return obj;
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException", 1000);
		} catch (JSONException j) {
			j.printStackTrace();
			return ServiceTools.serviceRefused("JSONException", 100);
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		
	}
	
	public static ArrayList<Integer> getFollowers(int user_id) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		ArrayList<Integer> followers = new ArrayList<Integer>();
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "Select from_id from Friend where to_id = " + user_id;
			res = st.executeQuery(query);
			while (res.next()) {
				followers.add(res.getInt("from_id"));
			}
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return followers;
	}
	
	public static ArrayList<Integer> getFollows(int user_id) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		ArrayList<Integer> follows= new ArrayList<Integer>();
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "Select to_id from Friend where from_id = " + user_id;
			res = st.executeQuery(query);
			while (res.next()) {
				follows.add(res.getInt("to_id"));
			}
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return follows;
	}
	
	public static JSONObject PotentialFriends(String key) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			//First add the people who follows me and not reciprocal
			String query = "Select u.nom, u.prenom FROM User u, Friend f WHERE f.to_id = '" + id_user +
					"' AND f.from_id = u.id_user AND "+ id_user +" NOT IN (Select from_id from Friend where to_id='" +
					id_user+"'";
			res = st.executeQuery(query);
			List<String> followers = new ArrayList<String>();
			
			while (res.next()) {
				String nom = res.getString("nom");
				String prenom = res.getString("prenom");
				followers.add(nom + " " + prenom);
			}
			JSONObject obj = new JSONObject();
			obj.put("followers", followers);
			return obj;
			
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException", 1000);
		} catch (JSONException j) {
			j.printStackTrace();
			return ServiceTools.serviceRefused("JSONException", 100);
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch(SQLException ignore) {}
		}
	}
	
	public static JSONObject addLike(String key, int id_message) {
		Connection co = null;
		Statement st = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "insert into Likes values('"+ id_user+ "','" + id_message + "','" + new Timestamp(System.currentTimeMillis()) + "')";
			
			st.executeUpdate(query);
			//int nb_likes = getNblikes(id_message);
			JSONObject obj = new JSONObject();
			//obj.put("nb_likes", nb_likes);
			return obj;
		} catch (SQLException s) {
			s.printStackTrace();
		} /*catch (JSONException j) {
			j.printStackTrace();
		} */finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return ServiceTools.serviceRefused("SQLException", 1000);
		
	}
	
	public static JSONObject deleteLike(String key, int id_message) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = UserTools.getIdUserByKey(key);
			String query = "DELETE FROM Likes where id_user="+id_user+" and id_msg="+id_message;
			st.executeUpdate(query);
			JSONObject like = getNblikes(id_message);
			JSONObject obj = new JSONObject();
			return obj;
		} catch (SQLException s) {
			s.printStackTrace();
		}
		finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return ServiceTools.serviceRefused("SQLException", 1000);
	}
	

	public static JSONObject getNblikes(int id_message){
		Connection  co = null;
		Statement st = null;
		ResultSet res = null;
		int likes = 0;
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			
			String query = "Select count(*) as nb From Likes where id_msg="+id_message;
			res = st.executeQuery(query);
			
			while(res.next()){
				likes = res.getInt("nb");
			}
			JSONObject obj = new JSONObject();
			obj.put("nb_likes",likes);
			return obj;
		} catch (SQLException s){
			s.printStackTrace();
		}catch(JSONException j){
			j.printStackTrace();
		}	finally {
			try {
				co.close();
				st.close();
			} catch (SQLException e) {
			}
			
		 }
		return ServiceTools.serviceRefused("SQLException", 1000);
		//return likes;
	}


}
>>>>>>> b9891f11d3bd0e233401915b6db3dc6e10af3e15
