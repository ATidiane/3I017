package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.ChangeBackgroundS;
import services.GetBackgroundS;

public class GetBackground extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		String key, color;
		if (pars.containsKey("key")) {
			 key = request.getParameter("key");
		} else {
			key = null;
		}
			
		response.setContentType("json");
		PrintWriter out = response.getWriter();
			
		out.println(GetBackgroundS.getBackground(key));
	}
}
