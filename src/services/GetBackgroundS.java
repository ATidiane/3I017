package services;

import org.json.JSONObject;

import tools.ServiceTools;
import tools.UserTools;

public class GetBackgroundS {
	public static JSONObject getBackground(String key) {
		if (key == null)
			return ServiceTools.serviceRefused("Key is null", -1);
		
		return UserTools.getBackground(key);
	}
}
