package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.LikeS;
import services.UnLikeS;

public class UnLike extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		
		if (pars.containsKey("key") && pars.containsKey("message_id")) {
	
			String key = request.getParameter("key");
			String message_id =  request.getParameter("message_id");
			
			response.setContentType("json");
			PrintWriter out = response.getWriter();
			
			out.println(UnLikeS.unlike(key, Integer.parseInt(message_id)));
		}
	}
}
