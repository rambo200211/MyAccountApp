MyAccountApp - Mobile Application Development Practical 04
Project Overview
This project is a React Native application built using Expo. It was developed as part of Practical 04 to demonstrate Data Transfer Between Screens and Form Handling. The app allows users to register by entering their details, review the information on a separate screen, and confirm their submission to see a personalized success message.

Features Implemented
Form Handling: Captured user input (Username, Email, Phone Number, Year of Birth, Password, Confirm Password) using the TextInput component and useState.

Form Validation: Implemented validation to ensure all fields are filled and that the "Password" and "Confirm Password" fields match before navigation.

Data Transfer: Used expo-router to pass parameters (Name, Email, Phone, and calculated Age) between screens using router.push.

Parameter Retrieval: Used useLocalSearchParams on the Review and Success screens to extract and display the passed data.

Navigation Stack: Utilized router.back() on the Review screen to allow users to edit their information, preserving the previous screen's state.

Additional Task 1 (Age Calculation): Added a "Year of Birth" input on the Registration screen and calculated the user's age dynamically based on the current year.

Additional Task 2 (Conditional Navigation): Implemented a check on the Review screen that displays an Alert warning and prevents users under 18 from proceeding to the success screen.

Project Structure
app/index.js - The Registration Screen (captures input and validates).

app/review.js - The Review Screen (displays data, allows editing or confirmation, checks age).

app/success.js - The Success Screen (displays a customized greeting).

Output_Screens/ - Contains the screenshots of the working application.

How to Run the App
Clone this repository to your local machine.

Open a terminal and navigate to the project folder.

Run npm install to install dependencies.

Run npx expo start to start the development server.

Scan the QR code with the Expo Go app on your physical device or run it on an Android/iOS emulator.

