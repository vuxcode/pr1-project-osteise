# Bug List

> Make a list of the things that don't work as expected. Keep a list of things that you have fixed and try to document how you solved them.

1. *SOLVED* How can I output the correct answer in the submit box when the answer is incorrect..
2. *SOLVED* How do I prevent the user from refreshing (on any question) to get a new question?
3. *SOLVED* Can I create a .js that is shared with all the question pages? So that I can update variables depending on how many questions the user guesses correct on. 
4. *SOLVED* How do I make the submit button run the next question?
5. How do I replace the question box with a game over box when the user loses? Do I want to change what I have now?
6. *SOLVED* The options buttons doesn't hover past question 1. Maybe it's because I disable and enable them after the first option is used? (Can I fix it with adding eventlistener to hover?) (solved by controlling the mouseover and mouseout with javascript eventlisteners.)
7. *Solved* Highscore doesn't work as I want, it keeps on adding 1 every time I answer a question, even if I lost. I am thinking about making a "Session Stats" page, and use this variable to store number of "total correct questions", and maybe the three highest scores (perhaps with time counts). 
8. *Solved* I haven't figured out how to store the highest score as the highscore, it keeps updating to the latest score. I want to store an array with highscores on localstorage. But you can only store strings in an local storage. I tried to stringify my array, but I havent gotten it to work yet. (SOLVED it by making a function with an if statement to check if last score is higher than highscore, and if it is it stores it as the new highscore.)
9. When opening the game through "the web dev project" page, the scores doesnt store. I guess it's because it uses the github deployment site. 
10. *SOLVED*When I set some yellow glow to the submit box when you win, the 50/50 button is more visible than the get a hint button. (Fixed it by adding opacity to both buttons in the same function that creates the glow.)
11. Added a canvas do display how much time it's left for this question, but Im struggling to sync it with the timer. 