package Random_JavaFiels;
import java.util.Scanner;

public class SumOfTwoNumbers {
    private int a, b;

    // Constructor to initialize the numbers
    public SumOfTwoNumbers(int num1, int num2) {
        a = num1;
        b = num2;
    }

    // Getter method for 'a'
    public int getA() {
        return a;
    }

    // Getter method for 'b'
    public int getB() {
        return b;
    }

    // Method to calculate the sum of 'a' and 'b'
    public int sum() {
        return a + b;
    }

    public static void main(String[] args)
     {
        // Create a scanner object to read user input
        Scanner scanner = new Scanner(System.in);

        // Prompt user for input
        System.out.print("Enter the first number: ");
        int num1 = scanner.nextInt();

        System.out.print("Enter the second number: ");
        int num2 = scanner.nextInt();

        // Create an object of SumOfTwoNumbers with the user's input
        SumOfTwoNumbers sumObj = new SumOfTwoNumbers(num1, num2);

        // Display the sum using the sum method
        System.out.println("Sum of " + sumObj.getA() + " and " + sumObj.getB() + " is: " + sumObj.sum());

        // Close the scanner
        scanner.close();
    }
}
