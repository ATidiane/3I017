package servlets;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import services.LoginS;
import services.LogoutS;

import javax.servlet.http.HttpServletRequest;


public class Logout extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		
		if (pars.containsKey("key")) {
	
			String key = request.getParameter("key");
			
			response.setContentType("json");
			PrintWriter out = response.getWriter();
			out.println(LogoutS.logout(key));
		}
	}
}
