package servlets;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;

import services.LoginS;
import services.UserS;

import javax.servlet.http.HttpServletRequest;

import org.json.JSONObject;

public class Login extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		
		if (pars.containsKey("login") && pars.containsKey("mdp")) {
	
			String login = request.getParameter("login");
			String mdp =  request.getParameter("mdp");
			
			response.setContentType("json");
			PrintWriter out = response.getWriter();
			JSONObject js = LoginS.login(login, mdp);
			out.println(js);
		}
	}
}
