package Random_JavaFiels;
class NumberDetails {

  private int number;

  // Method to set the value of number
  public void setNumber(int number) {
      this.number = number;
  }

  // Method to calculate the sum of the digits (assuming it's a two-digit number)
  public int sum() {
      int tensPlace = number / 10;   // Extract the tens place
      int onesPlace = number % 10;   // Extract the ones place
      return tensPlace + onesPlace;
  }

  // Method to return the binary representation of the number
  public String toBinaryString() {
      return Integer.toBinaryString(number);
  }

}

public class TwoNumber_sumOtherWay {
  public static void main(String[] args) {
      // Create an object of NumberDetails
      NumberDetails numDetails = new NumberDetails();

      // Set the value of number to 99
      numDetails.setNumber(17);

      // Print the sum of the digits
      System.out.println("Sum of digits: " + numDetails.sum());

      // Print the binary representation of the number
      System.out.println("Binary representation: " + numDetails.toBinaryString());
  }
}
