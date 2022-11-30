# Time Report

> Write about what you have done and how long you have worked on each part of the project.

For example: 

- 2022-10-21 12:00 Worked for 4 hours.
  - Made script
  - Designed the buttons
- 2022-10-24 18:00 Worked for 1 hour.
  - Created elements to control what the different boxes will say
- 2022-10-26 16:00 Worked for 4 hours.
  - Fixed a submit button, and controlled when it's disabled and when it's enabled
  - Fixed option buttons so that they are disabled when one is clicked. 
  - Made everything bigger
  - Fixed a random function picker function
  - Added another question within question one, to see that it all works.
-2022-10-27 15:00 Worked for 3 hours.
  - Added color change to the option button if the answer is wrong.
  - Added so that the correct option button turns green if the answer is wrong (used the same function to turn the option button green if the answer is correct.)
  - Created more questions, so now there are 10 different questions that gets chosen by random on question 1.
  - Started with question 2 page
  - Created questionTwo.js 
-2022-10-30 19:00 worked for 3 hours. 
  - Started working with how to keep all the questions on one "page".
  - Created an element so the question level number changes when the next question is loaded
  - Created a function with an if statement to run the next question
  - Created a variable that keeps track of the score
  - Created the structure of all the questions, so that all 10 loads on the same page.
  - Created random question generator for all questions
  - Started creating other questions for question number two
-2022-11-09 22:00 worked for 2 hours.
  - Tried a lot of different things to fix my problem with the buttons not hovering after I disable and enable them. I solved it by controlling mouseover and mouseout with javascript addEventListeners.
  - Spent some time reading up on different addEventListeners.  
-2022-11-16 10:30 worked for 1 hour.
  - Started working with saving highscores.
2022-11-16 14:30 worked for 3 hours
  - Switched from linking font to importing it
  - Started a "Your Session Stats" page, to display scores from local storage
  - Added a "total" score stat, that displays the number of correct answers in total this serssion.
  - Continued to work with storing highscores (see number 8 in bug-list).
2022-11-17 13:00 worked for 1 hour.
  - Switched my attempt to store the highscore into last score on the session stats page
  - Created a function with an if statement to check if the last score is higher than the highscore, if it is it stores it as the new highscore.
  - Started designing the session stats page.
2022-11-20 21:30 worked for 3 hours.
  - Started working with a 50/50 button that removes two of the wrong options. It will be available to use once per game.
  - Changed some things in style.css: added width to the main element to better be able to place the 50/50 button on the left side
  - Created functions and if and switch statements to check which option is the correct one and to by random remove two of the options.
  - Created a Hint button to be second type of lifeline (they will only be able to be used once each) these hints will be placed in each question functions to be able to be displayed. 
  - Wrote the code needed to disable and enable the hint buttons in between the questions, I don't want the users to burn the lifeline while "in between" questions is they press them by accident.
2022-11-27 19:30 worked for 2 hours
  - Created questions and hints for question two, three and four.
2022-11-29 20:00 worked for 2 hours
  - Started working with what happens when you answer question number 10 correct.
  - Wrote the code needed so the program knows when you answer the last question correct.
  - Changed so that the submit button is yellow and glows when you answer the last question correct.
  - Added yellow glow to the correct option button when you win, and changed the opacity on the incorrect ones. 
2022-11-30 19:00 worked for 3 hours
  - Added a 20 second timer to the questions.
  - Gonna start working on how to display the timer to the user. 
  - Added a canvas to simulate a timer, I need to make it sync with the timer.
