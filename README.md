# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Lance Pagulayan**

Time spent: **18** hours spent in total

Link to project: https://glitch.com/edit/#!/absorbing-sheer-stretch
                 https://absorbing-sheer-stretch.glitch.me

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
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- After each mistake, I reset the whole game back to the beginning level.
- Added a "Hint" button that will replay the current sequence to help a player if stuck.
- Added a score counter

## Video Walkthrough

Here's a walkthrough of implemented user stories:
[winning the game] http://g.recordit.co/sMzH35CRAO.gif
[losing the game(also shows after mistake is made, game starts from the beginning)] http://g.recordit.co/Xw2B1xAEs9.gif
[using the hint button] http://g.recordit.co/h5FA4SnhdA.gif
[all the buttons work] http://g.recordit.co/NMh09p9Uu9.gif
[]


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/tags/tag_img.asp
https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element
https://stackoverflow.com/questions/34937349/javascript-create-empty-array-of-a-given-size
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://stackoverflow.com/questions/13402336/play-sound-file-in-a-web-page-in-the-background
https://www.w3schools.com/tags/av_prop_paused.asp
https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link
https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
https://stackoverflow.com/questions/931872/what-s-the-difference-between-array-and-while-declaring-a-javascript-ar
https://stackoverflow.com/questions/40993396/add-a-score-counter-to-a-game-using-html-and-javascript/47168970
https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[  As it was my first time coding in these languages, this project took a little time to learn some of the concepts. One of the things that 
I had trouble figuring out how to change the button appearance to an image when pressed. I was able to resolve my issue,by searching on stack overflow to see 
what other solutions that other people came up with, one solution I read was to use CSS instead of the <img> tag to add an image. After re-reading the code I wrote in
CSS, I noticed that the second color would appear when a user would press on it, so I thought that it would be a good idea to replace that one line of code
with the url of the image that I wanted to pop up when a user would press on the button. I read other people's comments and I saw that my problem could be solved in different ways,
but I used the solution that involved CSS, since that made sense to me the most.
  The last problem I had while creating this website was that I had trouble getting the sounds to play when opening the game in another tab.
When I first experienced this problem, I tried simply just to reload the page. It would work sometimes, but usually the game would not make any sound
upon opening it the first time. It took me a while to find the problem because I kept looking back and forth from the pre-work documentation given
and my code. However, it seemed that I had followed everything that the document said correctly. There was no website or any outside
source that I could find that would help me solve my problem. So then I decided to look at the console to see if any errors occurred when I opened the page.
After hours of searching, I finally found that the console gave me an error message saying "The AudioContext was not allowed to start. It must be resumed (or created)
after a user gesture on the page." There was a link next to the message, and the link brought me to another page
that stated something about Autoplay Policy Changes. It included some lines of code that I was
able to use in order to solve my problem.]


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[  While working on this web development assignment, I had thoughts of what kinds of career paths one can go into 
while pursuing a career in web development. What kinds of software and languages are necessary for web development?
How can web development assist in the development of artificial intelligence or machine learning? How does the job market look if one were
take a career in web development? Do you need to be a full stack engineer to become a successful web developer? How can web development impact
world? Are there a lot of companies out there that are looking for web developers? Does web development require working in teams or is it something that
can be done individually?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[ If I had a few more hours to work on this project, I would have tried to make the background have some moving objects. I would have liked to try to make this a
public game on some type of server to see who can get the highest score. I also imagined adding transition screens to move on to the next pattern
while rearranging the buttons in order to make the game more challenging. It would also be fun to make the buttons different shapes, or maybe have them
move around the screen. Maybe instead of using the mouse to interact with the buttons, the player would be able to use the keys.]



## License

    Copyright [Lance Pagulayan]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.