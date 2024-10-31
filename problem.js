/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/


/* Thought process:  
- set userInput as a constant to ensure that it is the correct password 
- if user input === password exactly then log out "Access Granted"
- if user input !== password exactly then log out "Access Denied!"
- if user input = "forgot", log out "Here is a hint"
- if user input = "reset", log out "Let's reset your account"
  - "forgot" and "reset" should be parameters 
Challenge:
- userInput.length < 5 then console.log("your password is too short")
*/


const userInput = "mdia1620";

function passwordCheck(password){
    if (userInput === password){
       console.log("Access Granted"); 
    } else if (userInput !== password){
        console.log("Access Denied!");
    } 
}
passwordCheck();

// enter password at "passwordCheck()" to see if it matches  
/* // Here I need to add in 2 more parameters where the userInput is forgot or reset. However, it needs to be defined.// 

    } else if (forgot) {
        console.log ("Here is a hint");
    } else if (reset) {
        console.log("Let's reset your account");
    }
}

*/ 
