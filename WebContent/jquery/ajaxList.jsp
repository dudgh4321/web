<%@page import="boardPkg.Board"%>
<%@page import="java.util.List"%>
<%@page import="boardPkg.BoardDAO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
BoardDAO dao = new BoardDAO();
List<Board> list = dao.getBoardList();
//list -> JSON파일 ...
//[{"boardNo":"1","title":"test","content":"test","writer":"user"},
// {"boardNo":"1","title":"test","content":"test","writer":"user"}]
String result = "[";
for (int i = 0; i < list.size(); i++) {
	result += "{\"boardNo\":\"" + list.get(i).getBoardNo() //
	+ "\",\"title\":\"" + list.get(i).getTitle() // 
	+ "\",\"content\":\"" + list.get(i).getContent() //
	+ "\",\"writer\":\"" + list.get(i).getWriter() + "\"}";
	result += (i == list.size() - 1 ? "" : ",");

}
result += "]";
out.print(result);
%>