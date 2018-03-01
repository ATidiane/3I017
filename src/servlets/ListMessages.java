package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.ListMessagesS;

public class ListMessages extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		PrintWriter out = response.getWriter();
		if (pars.containsKey("key")) {
			String key = request.getParameter("key");
			String id_user;
			if (pars.containsKey("user_id")) {
				id_user = request.getParameter("user_id");
			} else {
				id_user = "0";
			}
			
			out.println(ListMessagesS.listMessages(key, Integer.parseInt(id_user)).toString());
		} else {
			out.println(ListMessagesS.listMessages(null, 0).toString());
		}
	}
}
