//package Backend_Connect_to_Database;// atao default package name

package mypack; // besicaly in this stage , package default name is file names. 
//Mane ai package ar name hoy , File ar name anusare .
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Connection;
import java.util.Scanner;//user theke input neoya
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class jdbc_example
{

	public static void main(String[] args) 
	{
		try 
		{
		// register the driver provider
		Class.forName("com.mysql.cj.jdbc.Driver"); //driver name
       //create connect
		Connection con=
				DriverManager.getConnection( "jdbc:mysql://localhost:3306/tmsl_data","root", ""); //lines for connectivity
		
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Enter name:");
		String nm=br.readLine();
		System.out.println("Enter email:");
		String em=br.readLine();
		System.out.println("Enter mobile:");
		String mob=br.readLine();
		System.out.println("Enter age:");
		int age=Integer.parseInt(br.readLine());
		
		String s="insert into student(name,email,mobile,age) values(?,?,?,?)";// ? ai marks gulo diye value pass hobe java theke sql data base a , ? represent prepareStatement Parameter 
		PreparedStatement ps=con.prepareStatement(s);//connection b/w java and sql , ps is the statement , parameter
		ps.setString(1,  nm);
		ps.setString(2,em);
		ps.setString(3, mob);
		ps.setInt(4, age);
		
		int i=ps.executeUpdate();
		if(i>0) {
			System.out.println("Data Saved!!");
		}
		else {
			System.out.println("Not saved!!");
		}
		
		
		}
		catch(Exception e)
		{
			System.out.println(e);
		}
	}
	

}