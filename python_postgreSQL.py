"""
Python and PostgreSQL Exercises"
Quincena Fiffee
"""

myList = []
num = int(input("Enter the number of fruits :  "))

for i in range(0,num):
    fruits = input(print("Enter Fruit" , i+1, ":"))
    myList.append(fruits)

print (myList)

