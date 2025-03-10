package java_bck;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Connection;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class multiple_upload 
{

    public static void main(String[] args)
    {  
    	//variabble decleration
        Connection con = null;
        PreparedStatement ps = null;
        BufferedReader br = null;

        try {
            // Register the driver
            Class.forName("com.mysql.cj.jdbc.Driver"); // Driver name
            // Create connection
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/tmsl_data", "root", ""); // Lines for connectivity

            br = new BufferedReader(new InputStreamReader(System.in));
            String continueInput = "yes"; // Initialize to enter the loop

            while (continueInput.equalsIgnoreCase("yes")) {
                System.out.println("Enter name:");
                String nm = br.readLine();
                System.out.println("Enter email:");
                String em = br.readLine();
                System.out.println("Enter mobile:");
                String mob = br.readLine();
                System.out.println("Enter age:");
                int age = Integer.parseInt(br.readLine());

                String s = "INSERT INTO info(name, email, mobile, age) VALUES (?, ?, ?, ?)"; // ? marks for prepared statement
                ps = con.prepareStatement(s); // Connection between Java and SQL
                ps.setString(1, nm);
                ps.setString(2, em);
                ps.setString(3, mob);
                ps.setInt(4, age);

                int i = ps.executeUpdate();
                if (i > 0) {
                    System.out.println("Data Saved!!");
                } else {
                    System.out.println("Not saved!!");
                }

                // Ask user if they want to continue
                System.out.println("Do you want to enter another record? (yes/no)");
                continueInput = br.readLine();
            }

        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
                if (con != null) {
                    con.close();
                }
                if (br != null) {
                    br.close();
                }
            } catch (Exception e) {
                System.out.println("An error occurred while closing resources: " + e.getMessage());
            }
        }
    }
}
