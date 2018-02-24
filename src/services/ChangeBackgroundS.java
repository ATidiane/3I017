package services;

import org.json.JSONObject;

import tools.ServiceTools;
import tools.UserTools;

public class ChangeBackgroundS {
	public static JSONObject changeBackground(String key, String color) {
		if (key == null)
			return ServiceTools.serviceRefused("Key is null", -1);
		if (color == null)
			return UserTools.changeBackground(key, "GhostWhite");
		
		boolean prefe_exist = UserTools.prefeExist(key);
		
		if (prefe_exist) {
			return UserTools.updateBackground(key, color);
		}
		return UserTools.changeBackground(key, color);
	}
}
