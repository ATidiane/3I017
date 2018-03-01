package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.LoginS;
import services.PostCommentS;

public class PostComment extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		
		if (pars.containsKey("key") && pars.containsKey("id_message") && pars.containsKey("text")) {
	
			String key = request.getParameter("key");
			String id_message =  request.getParameter("id_message");
			String text = request.getParameter("text");
			
			response.setContentType("text/plain");
			PrintWriter out = response.getWriter();
			
			out.println(PostCommentS.postComment(key, Integer.parseInt(id_message), text).toString());
		}
	}
}
