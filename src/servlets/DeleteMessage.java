package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.DeleteMessageS;

public class DeleteMessage extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		String key, id_message;
		if (pars.containsKey("key")) {
			 key = request.getParameter("key");
		} else {
			key = null;
		}
		
		if (pars.containsKey("id_message")) {
			id_message =  request.getParameter("id_message");
		} else {
			id_message = "-1";
		}
			
		response.setContentType("json");
		PrintWriter out = response.getWriter();
			
		out.println(DeleteMessageS.deleteMessage(key, Integer.parseInt(id_message)));
	}
}
