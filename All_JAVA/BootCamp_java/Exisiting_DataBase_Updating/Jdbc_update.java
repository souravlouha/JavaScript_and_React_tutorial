package mypack;
import java.sql.*;
import java.io.*;


public class Jdbc_update {

	public static void main(String[] args)  {
		// TODO Auto-generated method stub
		try {
		BufferedReader br =
				new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Enter rool:");
		int r =Integer.parseInt(br.readLine());
		System.out.println("Enter New_Email:");
		String em=br.readLine();
		// register the driver or provider
		Class.forName("com.mysql.cj.jdbc.Driver");
		//creat connect
		Connection con=
				DriverManager.getConnection( "jdbc:mysql://localhost:3306/test",
						"root", "");
		String s="update student set email= ?where roll=?"; //student name deoya ache sql data badse a , akhane ja name deoya thakbe sql data base ar table a tai dite hobe 
		PreparedStatement ps =con.prepareStatement(s);
   		ps.setString(1,em);
   		ps.setInt(2, r);
   		int i=ps.executeUpdate();
   		if(i>0) {
   		System.out.println("Data updated");
   		}
   		else {
   			System.out.println("Data not updated");
   		}
	}catch(Exception e) {
		System.out.println(e);
	}
	}


		

	}


