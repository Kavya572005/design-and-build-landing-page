import random

# Generate a random number between 1 and 100
secret_number = random.randint(1, 100)

print("🎯 Welcome to the Number Guessing Game!")
print("I'm thinking of a number between 1 and 100.")

# Keep asking until the user guesses correctly
while True:
    guess = input("Enter your guess: ")
    
    # Check if the input is a number
    if not guess.isdigit():
        print("Please enter a valid number.")
        continue

    guess = int(guess)

    if guess < secret_number:
        print("Too low! Try again.")
    elif guess > secret_number:
        print("Too high! Try again.")
    else:
        print("🎉 Congratulations! You guessed the number!")
        break