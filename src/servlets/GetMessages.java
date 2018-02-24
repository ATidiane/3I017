package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.GetMessagesS;
import services.ListMessagesS;

public class GetMessages extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		response.setContentType("text/plain");
		PrintWriter out = response.getWriter();
		if (pars.containsKey("key")) {
			String key = request.getParameter("key");
			String from, id_min, id_max, nb, query;
			if (pars.containsKey("from")) {
				from = request.getParameter("from");
			} else {
				from = "-1";
			}
			if (pars.containsKey("id_max")) {
				id_max = request.getParameter("id_max");
			} else {
				id_max = "-1";
			}
			if (pars.containsKey("id_min")) {
				id_min = request.getParameter("id_min");
			} else {
				id_min = "-1";
			}
			if (pars.containsKey("nb"))  {
				nb = request.getParameter("nb");
			} else {
				nb = "-1";
			}
			out.println(GetMessagesS.getMessages(key, Integer.parseInt(from), Integer.parseInt(id_max), 
					Integer.parseInt(id_min), Integer.parseInt(nb), null).toString());
		} else {
			out.println("Can not print messages because the key of connection was not found");
		}
	}
}
