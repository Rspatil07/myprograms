def area_square():
    side = float(input("Enter the side ofthe square in cm : ")) 
    area = side * side 
    print("areaof the square in cm sq. is :", area) 
    return area

def area_rec():
    len = float(input("enter the length of the rectangle in cm : "))
    width = float(input("Enter the width of fthe rectangle in cm : ")) 
    height= float(input("enter the hight of the rectangle in cm : ")) 
    area= len * width * height 
    print("area of therectangle in cm sq. is : ", area) 
    return area

def area_circle():
    radius = float(input("Enter the raadius of the circle in cm : "))
    area = 3.14*(radius*radius)
    print("Area of the circle in cm sq. is: ", area) 
    return area

def area_trapazoid():
    side1 = float(input("Enter the value of side 1 in cm : "))
    side2 = float(input("Enter the value of side in cm 2 : "))
    height = float(input("Enter the value of height in cm : ")) 
    area= ((side1+side2)/2)*height 
    print("area of trapazoidin cm sq. is : ", area) 
    return area

def area_triangle():
    base = float(input("Enter the value of base in cm : "))
    height = float(input("enter the value of height in cm: ")) 
    area= 0.5 * (base*height) 
    print("Area of the triangle in cm sq. is : ", area)
    return area 

area_square() 
area_rec()
area_circle() 
area_trapazoid() 
area_triangle() 