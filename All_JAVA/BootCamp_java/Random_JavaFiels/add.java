//Design a java class to store a integer and display the sum of digits and binary of that no

class no
{
	private int a;

	public void get(int b)
	{
		a=b;
	}

	public int sod()
	{
		int b=a, s=0;
		while(b>0)
		{
			s = s + b%10;
			b = b/10;
		}
		return s;
	}

	public String toBinary()
	{
		int j,b=a,arr[]=new int[15],i=0;
		while(b>0)
		{
			arr[i++]=b%2;
			b=b/2;
		}
		String r="";
		for(j=i-1;j>-1;j--)
		{
			r=r+arr[j];
		}
		return r;
	}
}

class num
{
	public static void main(String aq[])
	{
		no n1 = new no();
		n1.get(123);
		System.out.println(n1.sod());	
		System.out.println(n1.toBinary());
	}
}