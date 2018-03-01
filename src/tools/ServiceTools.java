package tools;
import java.net.UnknownHostException;
import java.util.ArrayList;

import org.json.*;

import com.mongodb.BasicDBObject;


public class ServiceTools {

	public static JSONObject serviceRefused(String message , int codeErreur) {
		JSONObject obj = new JSONObject();
		try {
			obj.put("Message",message);
			obj.put("ErrorCode", codeErreur);
		} catch (JSONException j) {
			j.printStackTrace();
			return serviceRefused("JSONException", 100);
		} 
		return obj;
	}
	
	public static BasicDBObject serviceRefusedBasic(String message , int codeErreur) {
		BasicDBObject obj = new BasicDBObject();
		obj.put("Message",message);
		obj.put("ErrorCode", codeErreur);

		return obj;
	}
		
	public static JSONObject serviceAccepted() {
		JSONObject obj = new JSONObject();
		try {
			obj.put("Output", new String("OK"));
		} catch (JSONException j) {
			j.printStackTrace();
			return serviceRefused("JSONException", 100);
		} 
		return obj;
	}
	
	public static JSONObject responseLogin(int id_user, String log, String key, ArrayList<Integer> follows, ArrayList<Integer> followers) {
		JSONObject obj = new JSONObject();
		try {
			obj.put("id_user", id_user);
			obj.put("login", log);
			obj.put("key", key);
			obj.put("follows", follows);
			obj.put("followers", followers);
		} catch (JSONException j) {
			j.printStackTrace();
			return serviceRefused("JSONException", 100);
		} 
		return obj;
	}
		
}
