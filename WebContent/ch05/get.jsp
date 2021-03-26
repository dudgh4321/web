<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Get방식 전송</title>
</head>
<body>
	<%
	String name = request.getParameter("name");
	String major = request.getParameter("major");
	String password = request.getParameter("passwd");
	%>
	<h2> 이름 ㅣ <%=name %></h2>
	<h2> 전공 ㅣ <%=major %></h2>
	<h2> 비번 ㅣ <%=password %></h2>
</body>
</html>