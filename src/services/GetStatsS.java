package services;

import org.json.JSONObject;

import tools.UserTools;

public class GetStatsS {
	public static JSONObject getStats(String key) {
		return UserTools.getStats(key);
	}
}
