package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.ChangeBackgroundS;
import services.DeleteMessageS;

public class ChangeBackground extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		String key, color;
		if (pars.containsKey("key")) {
			 key = request.getParameter("key");
		} else {
			key = null;
		}
		
		if (pars.containsKey("color")) {
			color=  request.getParameter("color");
		} else {
			color = null;
		}
			
		response.setContentType("json");
		PrintWriter out = response.getWriter();
			
		out.println(ChangeBackgroundS.changeBackground(key, color));
	}
}
