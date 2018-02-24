package servlets;

import services.UserS;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;


public class User extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map<String, String[]> pars = request.getParameterMap();
		
		if (pars.containsKey("nom") && pars.containsKey("prenom") && pars.containsKey("mail")
				&& pars.containsKey("login") && pars.containsKey("mdp") ) {
	
			String nom = request.getParameter("nom");
			String prenom =  request.getParameter("prenom");
			String mail = request.getParameter("mail");
			String login =  request.getParameter("login");
			String mdp = request.getParameter("mdp");
			
			response.setContentType("json");
			PrintWriter out = response.getWriter();
			
			out.println(UserS.createUser(nom, prenom, mail, login, mdp));
		}
	}
}

