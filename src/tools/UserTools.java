package tools;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.xml.crypto.Data;

import org.json.*;

import db.Database;

import java.sql.Statement;
import java.sql.Timestamp;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserTools {
	
	private static String generatekey() {
		String chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpP"
				+ "qQrRsStTuUvVwWxXyYzZ0123456789";
		String key = "";
		for (int i=0; i<32; i++) {
			int r = new Random().nextInt(chars.length());
			key += chars.charAt(r);
		}
		return key;
	}
	
	public static boolean userExist(String log) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT login from User where login = '"+log+"'";
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
		
	public static boolean checkPassword(String log, String mdp) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT login, mdp from User where login = '" + log + "'"
					+ " and mdp = '" + mdp + "'";
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
	
	public static JSONObject insertUser(String nom, String prenom, String mail, String login, String mdp) {
		Connection co = null;
		Statement st = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "INSERT INTO User VALUES(null,'" + nom + "','" + prenom + "','" 
			+ mail + "','" + login + "','" + mdp + "')";
			st.executeUpdate(query);
			
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException:", 1000);
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException s) {}
		}
		return new JSONObject();
	}
		
	public static boolean userConnect(int id_user) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT * from Connection where user_id = '"+ id_user + "'";
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
	
	public static boolean mailExist(String email) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT * from User where mail = '"+ email+ "'";
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
		
	public static String insertConnection(int id_user, boolean b) {
		Connection co = null;
		Statement st = null;
		String key = generatekey();
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "INSERT INTO Connection VALUES('" + key + "','" + id_user
					+ "','" + new Timestamp(System.currentTimeMillis())
					+ "'," + b +")";
			st.executeUpdate(query);
			
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return key;
	}
	
	public static void removeConnection(String key) {
		Connection co = null;
		Statement st = null;
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "DELETE from Connection where Connection.key = '" + key + "'";
			st.executeUpdate(query);
			
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
	}
	
	public static int getIdUser(String log) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		int id_user = 0;
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT id_user from User where login = '" + log + "'";
			res = st.executeQuery(query);
			if (res.next()) {
				id_user = res.getInt("id_user");
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
		return id_user;
	}
	
	
	public static String getLogin(int id_user) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		String login = "";
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT login from User where id_user = '" + id_user + "'";
			res = st.executeQuery(query);
			if (res.next()) {
				login = res.getString("login");
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
		return login;
	}
	
	
	public static int getIdUserByKey(String key) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		int id_user = 0;
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT Connection.user_id from Connection where Connection.key = '" + key + "'";
			res = st.executeQuery(query);
			if (res.next()) {
				id_user = res.getInt("user_id");
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
		return id_user;
	}
	
	public static String getKey(String log) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		String key = "";
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT Connection.key "
					+ "from Connection, User "
					+ "where User.login = '" + log + "' and User.id_user = Connection.user_id";
			res = st.executeQuery(query);
			if (res.next()) {
				key = res.getString("key");
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
		return key;
	}
	
	public static String getKeyById(int user_id) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		String key = "";
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT Connection.key from Connection "
					+ "where Connection.user_id = " + user_id;
			res = st.executeQuery(query);
			if (res.next()) {
				key = res.getString("key");
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
		return key;
	}
	
	
	public static JSONObject getStats(String key) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		Map<String, Integer> hash = new HashMap<String, Integer>();
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			//String query = "Select count(*) from Friends where "
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				res.close();
				st.close();
				co.close();
			} catch (SQLException ignore) {}
		}
		return new JSONObject();
	}
	
	public static String getpassbyMail(String mail){
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		String mdp = "";
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			String query = "SELECT mdp from User where mail = '" + mail + "'";
			res = st.executeQuery(query);
			if (res.next()) {
				mdp = res.getString("mdp");
				
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
		return mdp;
	}
	
	public static boolean prefeExist(String key) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = getIdUserByKey(key);
			String query = "SELECT * FROM Adapt WHERE id_user='" +id_user+ "'";
			res = st.executeQuery(query);
			if (res.next()) {
				return true;
			}
			return false;
		} catch (SQLException s) {
			s.printStackTrace();
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException s) {}
		}
		return false;
	}
	
	public static JSONObject changeBackground(String key, String color) {
		Connection co = null;
		Statement st = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = getIdUserByKey(key);
			String query = "INSERT INTO Adapt VALUES('" +id_user+ "','" +color+ "')";
			st.executeUpdate(query);
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException:", 1000);
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException s) {}
		}
		return new JSONObject();
	}
	
	public static JSONObject updateBackground(String key, String color) {
		Connection co = null;
		Statement st = null;
		
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = getIdUserByKey(key);
			String query = "UPDATE Adapt set color='"+color+"' where id_user='"+id_user+"'";
			st.executeUpdate(query);
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException:", 1000);
		} finally {
			try {
				st.close();
				co.close();
			} catch (SQLException s) {}
		}
		return new JSONObject();
	}
	
	public static JSONObject getBackground(String key) {
		Connection co = null;
		Statement st = null;
		ResultSet res = null;
		String color = null;
		JSONObject js_color = new JSONObject();
		try {
			co = Database.getMySQLConnection();
			st = co.createStatement();
			int id_user = getIdUserByKey(key);
			String query = "SELECT * FROM Adapt WHERE id_user='" +id_user+ "'";
			res = st.executeQuery(query);
			if (res.next()) {
				color = res.getString("color");
				js_color.put("color", color);
				return js_color;
			}
			return ServiceTools.serviceRefused("Preference does not exist", -3);
		} catch (SQLException s) {
			s.printStackTrace();
			return ServiceTools.serviceRefused("SQLException:", 1000);
		} catch (JSONException j) {
			j.printStackTrace();
			return ServiceTools.serviceRefused("SQLException:", 100);
		}
		finally {
			try {
				st.close();
				co.close();
			} catch (SQLException s) {}
		}
	}
	
}
	
