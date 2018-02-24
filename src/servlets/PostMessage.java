package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import services.PostMessageS;

import javax.servlet.http.HttpServletRequest;

public class PostMessage extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		
		if (pars.containsKey("key") && pars.containsKey("text")) {
	
			String key = request.getParameter("key");
			String text =  request.getParameter("text");
			
			response.setContentType("json");
			PrintWriter out = response.getWriter();
			
			out.println(PostMessageS.postMessage(key, text));
		}
	}
	
	
}
