# **Sports Card Investor Next.js Dev Challenge**

The following are bullet points of the process, the roadblocks, and the discoveries made during its development. The instructions to run the app locally are also provided.
---

## **Instructions for running the app **
- Start by cloning the repo on your local machine with:
```git clone https://github.com/giterdun345/SCI-fe-next-js-johnk.git```

- Next enter the root directory, install the dependencies and run the app:
```cd SCI-fe-next-js-johnk && pnpm install && pnpm dev```

This will start the application by first running the linting checks and running the tests. Then upon success, open the project in your browser at 
```http://localhost:3000```
---

## **Process Overview**

This is an outline of the process taken to complete the challenge. The first step before taking on any project is to first assess
the requirements outlined and plan a path of execution. I think planning is key and for this particular project, the path was to:
- get the app running
- check out the existing app, and develop a wireframe to work from 
- start to gather resources for execution
- execute but have to balance priority 

1. **Configuration**:
   - Installed packages that were needed, in this case animata and next themes and  
   - Added more lint config, letting the linters lint in order to focus more on development
   - Once all warnings and errors were displayed, it gave me areas to improve during development 
     - Notes: I knew to be cautious of the linting and testing errors based on the challenge description and once looking at 
   the configuration, I knew adding more would allow me to quickly locate potential issues during development. I would rather 
   focus more on development and let the linters yell at me when I make mistakes

2. **Layout**:
   - started with the layout and particularly the header that included the dark/light mode switch.
   - tried a few different animations but found one with animata that I altered
     - Notes: I tried a few animations from the library. I had originally wanted to make the whole background look like you 
   were traveling through space with stars whizzing by but thought it would be too busy of a background considering the focus are the cards.
   You can click on Darth or Yoda to change dark/light mode.
   
3. **HP selection**:
   - wanted a selection scroll where you could scroll left and right to select the HP
   - this would be cool if you had a light saber instead of a pointer for your cursor
   - learned a lot about App router compared to the Page router I was used to. I wanted the catalog options to be fetched on server
   so the dropdown could be ready when the app was rendered
     - Notes: This could be larger but for the sake of responsiveness I kept it at this size. The single digits aren't as 
   proportional as the double digits and should get changed. The changes in App router through me off, it took multiple reads 
   of the docs to understand the App router.
   
4. **Cards**:
   - was able to get the orientation based on the onLoad method in next Image component, that was a handy feature
   - Z-index specificity gets very complex for absolute values and I would have liked to have the card backs sit on top 
   of all surrounding cards
     - Notes: I used animata components because you were able to copy and paste allowing for more manipulation compared with other
   component libraries. This sped up development time and in this case time was an issue. I like developing my own but when the
   time matters, you have to find ways to be efficient
5. **Card List**:
   - used a simple flex for responsiveness and didn't focus too much on this component
   - I could have cached the response by using react query or SWR
   - This could be broken into smaller parts and a custom hook used for the fetch
     - Notes: a lot of todos are present to show what needs to be done; I noticed too that sorting will fetch again; with caching this
wouldn't be an issue but because the sortKey is in the useEffect dependency array, this should be refactored to not fetch again during sort

 
