package Random_JavaFiels;
class abc // defining the class
{
	private int a, b; // variable

	 public void get(int c, int d) // function
	{
		a=c;
		b=d;
	}

	public int sum() //function
	{
		return a+b;
	}

	public String toString() //function of Overwritting
	{
    return "welcome" ;
  }
}

class a // defining the class 
{
	public static void main(String 	aq[])// function
	{
		//abc ob1 = new abc();
		abc ob1;
		ob1=new abc();
		ob1.get(2,3);
    int d = ob1.sum();
    System.out.println(d);
		System.out.println(ob1.hashCode());// pusudo code
		System.out.println(ob1); // by default is string
		System.out.println(ob1.toString());// ob1 converted to string 
	}
}