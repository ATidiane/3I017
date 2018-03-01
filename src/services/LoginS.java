package services;

import java.util.ArrayList;

import org.json.*;

import tools.*;

public class LoginS {
	
	public static JSONObject login(String log, String mdp) {
		if ((log == null) || (mdp == null)) 
			return ServiceTools.serviceRefused("Wrong Argument", 0);
		
		boolean is_user = UserTools.userExist(log);
		if (!is_user) 
			return ServiceTools.serviceRefused("User does not exists", 1);
		
		boolean pssd_ok = UserTools.checkPassword(log, mdp);
		if (!pssd_ok)
			return ServiceTools.serviceRefused("Wrong password", 2);
		
		int id_user = UserTools.getIdUser(log);
		
		boolean connect_ok = UserTools.userConnect(id_user);
		if (connect_ok)
			return ServiceTools.serviceRefused("Already Connected", 3);	
		
		String key = UserTools.insertConnection(id_user, false);
		ArrayList<Integer> follows = FriendTools.getFollows(id_user);
		ArrayList<Integer> followers = FriendTools.getFollowers(id_user);
		
		return ServiceTools.responseLogin(id_user, log, key, follows, followers);
	}

}
