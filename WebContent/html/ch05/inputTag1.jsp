<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
	<%
	String name = request.getParameter("name");
	String sex = request.getParameter("sex");
	String year = request.getParameter("year");
	%>

	<h2>
		이름 :<%=name %></h2>
	<h2>
		성별 :<%=sex %></h2>
	<h2>
		학년 :<%=year %></h2>

	<ul>
	
	<%  String[] subjects=request.getParameterValues("subject");
		for(String sub : subjects){%>
	
		<li> 관심 : <%=sub %> </li>
		
		<%
		}
		%>
	</ul>
	
	<ul>
	
	<% String[] hobbys=request.getParameterValues("hobby");
	for(String hob : hobbys){%>
	 
		<li> 취미 :<%=hob %> </li>
		
		<%
		}
		%>
	</ul>
	
</body>
</html>