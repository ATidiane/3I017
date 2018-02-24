package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import services.GetPassS;

public class GetPass extends HttpServlet{

	public void doGet(HttpServletRequest request,HttpServletResponse response) throws IOException {
		
		Map<String,String> pars = request.getParameterMap();
		
		if(pars.containsKey("mail")){
			
			String mail = request.getParameter("mail");
			
			response.setContentType("json");
			PrintWriter out = response.getWriter();
			
			out.println(GetPassS.getPass(mail));
			
		}
		
	}
}
