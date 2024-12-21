a = input("Enter the first number: ") 
b= input("Enter the second number: ")
c = input("Enter the third number: ")
if( a>b and a>c ): 
    print(a,"is greater")
elif( b>a and b>c ):
    print(b,"is greater")
elif(c>a and c>b):
    print(c, "is greater")
else:
    print("All three number are same") 