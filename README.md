# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Ronit Chawla**

Time spent: **15** hours spent in total

Link to project: https://glitch.com/edit/#!/aerial-fanatical-truffle
## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Game tracks current score and the highest score yet
- [x] Game buttons are circular instead of square (trivial)

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![ezgif com-gif-maker](https://user-images.githubusercontent.com/63046023/164872853-17b61e33-c06e-4c4f-b92a-01a7558694bb.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I was compelled to use Stack Overflow and similar websites for reference on JavaScript and also used w3schools.com often to beautify html elements. I also googled how to add functionalities like score, volume and time (about which, I will elaborate further in the next question)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Although the overall project was simple and straightforward, the count-down timer was certainly the biggest hurdle in my project.
I was unfamiliar with how to add the element of time to my project and had to use w3school and StackOverflow for reference. 
In particular, I used these links to guide me: https://www.w3schools.com/howto/howto_js_countdown.asp, https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer,
https://www.tutorialrepublic.com/javascript-tutorial/javascript-timers.php. 
Here, I learned how to use the setInterval() and clearInterval() functions to measure the time elapsed and display it on my webpage.
It was particularly tedious to inject the time-based logic of these functions into a finished logic circuit as I often ran into infinite loops and had to debug them using breakpoints and console.log() statements. 
For the infinite loops, I tried back-tracking my code using breakpoints and realized that my error arose from a mistake I made while placing the timestamps (setInterval() and clearInterval()) as I had slightly twisted the chronology.
I ran into a couple of bugs because of which I was stuck for long periods of time. To resolve these, I used forums such as StackOverflow. Thankfully, I was able to convey my logic and explain my error to my peers, which helped me obtain a working solution to the bug.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

From the little experience I have with web development, I have seen significantly larger codes and numerous files being compiled into simple web pages. I was surprised to see a webpage is made with such high functionality and such simple code. Moreover, I am curious how larger codes need to be constructed and black-boxed. I am also curious how websites like Meta store large databases and process them quickly. I imagine the answer is related to cloud storage and I look forward to learning that during my SITE experience.
While implementing the optional functions, I also wondered what the tradeoff is like between a software engineer's time and the time complexity of a code. This led to a similar, but equally relevant question, what is the tradeoff between the time complexity and the space complexity of a fully functioning website? How do multi-billion dollar companies optimize their apps and websites where even trivial differences in space complexity mean heavy expenditure on servers? 
I was also eager to learn to test my code automatically like professional Web Devs, instead of wasting time manually testing the product.  

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would like to add an online multiplayer mode to the game. Not only will that make users share the website with their friends, but it'll also teach me how to code dynamic programs with network access and real-time inputs. This would also be a great way for me to learn more about cloud computing and storage, as well as give me a hands-on experience in the industry. Building on this, we can also add a site-wide leaderboard, which could track and display all users' high scores
A difficulty setting could also be added, in terms of increasing the number of buttons, increasing speed, or decreasing the time limit. Moreover, instead of increasing the difficulty of the game, we can add an "unlimited mode" to it. As with other video games, the classic "unlimited mode" would allow the user to play the game till they lose, their score would then be recorded and sent to the leaderboard.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1Y5I1CrFZW8yVyfUaMFzRajJzS2NxEkmd/view?usp=sharing)


## License

    Copyright Ronit Chawla

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
