package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import services.LoginS;
import services.RemoveFriendS;
import services.UserS;

import javax.servlet.http.HttpServletRequest;

public class RemoveFriend extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		
		if (pars.containsKey("key") && pars.containsKey("id_friend")) {
	
			String key = request.getParameter("key");
			String id_friend =  request.getParameter("id_friend");
			
			response.setContentType("json");
			PrintWriter out = response.getWriter();
			
			out.println(RemoveFriendS.removeFriend(key, Integer.parseInt(id_friend)));
		}
	}
}
