package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.ListFriendsS;

public class ListFriends extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		
		String key = null;
		String id_user;
		if (pars.containsKey("key"))
			key = request.getParameter("key");

		if (pars.containsKey("id_user")) {
			id_user = request.getParameter("id_user");
		} else {
			id_user = "-1";
		}
		
		response.setContentType("json");
		PrintWriter out = response.getWriter();
		
		out.println(ListFriendsS.listFriends(key, Integer.parseInt(id_user)));
	}

}
