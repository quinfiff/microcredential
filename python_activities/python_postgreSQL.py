"""
Python and PostgreSQL Exercises"
Quincena Fiffee
"""

print("Activity a) create a list with user input")

myList = []
num = int(input("Enter the number of fruits :  "))

for i in range(0,num):
    fruits = input("Enter Fruit %s : " %(i+1))
    myList.append(fruits)

print ("User created a list with", num, "elements:" , myList)



print("Activity b) print numbers between a specific range")


num1 = int(input("Enter a number : "))
while num1<0:
    num1 = int(input("Try again! Enter a number: "))
    
num2 = int(input("Enter another number : "))
while num2<0 or num2==num1:
    num2 = int(input("Try again! Enter a number: "))

for i in range(num1, num2,1):
    print (i)



import math

print("Activity c) design a math function to find the volume of a cylinder")
def volumeCylinder(h,r):
    r = int(input("Enter a radius: "))
    h = int(input("Enter a height: "))
    volume = math.floor(math.pow(r, 2)*math.pi*h)
    print ("The volume with radius %s  and height %s is %s" %(r, h, volume))




import random
def roll_dice():
    rolls = int(input("How many times do you want to roll? : "))
    for i in range(0,rolls):
        rand = print("Roll" , i+1, "=", random.randint(1,6))

                

    
    
                
