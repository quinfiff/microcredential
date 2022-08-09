"""
Quincena Fiffee Activity 18
8/3/2022
"""
print ("\n\n-------------------For Loop----------------")



print ("Example 15)")

number1 = int(input("Enter a number betwen 0 and 10: "))
while number1<0 or number1>10:
    number1 = int(input("Try again! Enter a number between 0 and 10: "))
    
number2 = int(input("Enter a number betwen 0 and 10: "))
while number2<0 or number2>10:
    number2 = int(input("Try again! Enter a number between 0 and 10: "))

while number1<=20 and number2 <=20:
    addition = number1 + number2
    if addition>30:
        break

    print("%s + %s = %s" %(number1, number2, addition))
    number1 += 2
    number2 += 2

print("Example 14) While loop that checsk if entered number is between 0 and 10 ")
number = int(input("Enter a number betwen 0 and 10: "))
while number<0 or number>10:
    number = int(input("Try again! Enter a number between 0 and 10."))
    print("Entered number = ", number)

print("Example 13) user enters two numbers between 0 and 10. Use while loop")
num1 = int(input("Enter a number betwen 0 and 10: "))
num2 = int(input("Enter a 2nd number betwen 0 and 10: "))
while num1<=20 and num2 <=20:
    print("number 1 = %s and number 2 = %s" %(num1, num2))
    num1 += 2
    num2 += 2

print("Example 12) while loop basics")
i = 0
while i<6:
    print("i= ", i)
    i += 1
print ("\n\n-------------------For Loop----------------")

print ("Example 11) for else statement")
for n in range (7):
    print(n)
else:
    print ("Done")
    

print ("Example 10) use for loop to print num from 1- to -5 and skip multiples of 4")
for num in range (10, -5, -1):
    if num%4 == 0:
        continue
    print (num)

print ("Example 9) nesting for loop and if statement")
for counter in range(10):
    print("Now counting: ", counter)
    if counter == 5:
        break
    print("=*=*=*=*=*=*=*=*=*=")

print ("Example 8) for loop in a string")
msg = "Hello  world!"
for m in msg:
    print("charater =  ", m)

print ("Example 7 for loop in a list")
colors = ['yellow', 'red', 'blue', 'green', 'white', 'black']
for c in colors:
    print("color =  ", c)
    
print ("Example 6 for loop decrement counting")
for z in range(20,-10,-5):
    print("z = ", z)

print ("Example 5 for loop with three arguments")
for y in range(2,30,3):
    print("y = ", y)


print ("Example 4) for loop basics")
for x in range(1,5):
    print("Counting: ", x)


print ("\n\n-------------Conditional statement---------")

#example 3) and, or opertors
age = int(input("Enter an age: "))
gender = input("Type M for nale and F fir female")
if age ==5 and gender == "Male":
    print ("5 year old boy")
elif age == 5 and gender == "female":
    print (" 5 year old girl")
else: print ("Any other age")

#if-elif-else statement example 2)
age = int(input("Enter an age: "))
if age == 5:
    print("Age = 5. Height should be around 102 m and weigh 14.8 lbs")
elif age == 6:
    print("Age = 6. Height should be around 108 m and weigh 16.3 lbs")
elif age == 7:
    print("Age = 7. Height should be around 113 m and weigh 18.0 lbs")
else : print("Unable to print height and weight.")

    
# if stateent example 1) chick if an age is an adult using if-else

age = int(input("Enter an age: "))
if age>=21:
    print("You are an adult")
else : print("You are underage")
print ("Welcome to the club!")

