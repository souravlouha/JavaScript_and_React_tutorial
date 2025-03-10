package java_bck;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class fetch_data 
{

	public static void main(String[] args) 
	 {
		
          try {	
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con= DriverManager.getConnection( "jdbc:mysql://localhost:3306/tmsl_data", "root", "");
		String s="select * from info";
		PreparedStatement ps=con.prepareStatement(s);
		ResultSet rs=ps.executeQuery();
		while(rs.next()) 
		{
			System.out.println("ROll no="+rs.getInt(1));
			System.out.println("Name="+rs.getString(2));
		}
		}
            catch(Exception e) 
         {
			System.out.println(e);
		 }
	}