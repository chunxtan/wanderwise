# [wanderwise](https://wanderwise-psi.vercel.app/)
## Introduction
Travel cost calculator for a quick overview of trip costs & save potential itineraries 🏖️
### Getting Started
* Input your travel plans & hit search!
* Click on one itinerary each from the flights and accommodation categories
* See the total cost of your proposed trip
* Save your potential trip itinerary for later

Made with React, TypeScript, MobX & Express.js 
Styled by Material UI

## Process
### 1. Figma Prototyping
![Screenshot 2023-11-25 at 00 03 42](https://github.com/chunxtan/wanderwise/assets/99042026/04229bf8-aac3-4823-b3c1-a418844343c2)

Initial UI inspiration from Airbnb -- search bar & map interface

### 2. Fetching Data from APIs
For this project, (apart from Airtable) I chose to use two other APIs -- [SkyScanner API](https://developers.skyscanner.net/docs/intro) & [Hotels.com API](https://rapidapi.com/apidojo/api/hotels4/) for flight itineraries and accommodation listings respectively. 

I had tested the endpoints on Bruno & used the return values as dummy data (to not incur additional rates!).
![Screenshot 2023-11-25 at 00 08 15](https://github.com/chunxtan/wanderwise/assets/99042026/53f76c8f-a83e-4c12-b70f-821baa660590)

While it was working fine in Bruno, I kept encountering a [CORS error](https://www.telerik.com/blogs/all-you-need-to-know-cors-errors#:~:text=CORS%20errors%20happen%20when%20a,by%20the%20server's%20CORS%20configuration) in my dev environment. 😫😫😫
![image](https://github.com/chunxtan/wanderwise/assets/99042026/49db7f26-5140-44d4-9c7b-ba9e5088f0a8)

Solution (suggested by Waihon): Implement a simple backend proxy server in Express.js to circumvent the "same origin" issue.
![Screenshot 2023-11-25 at 00 15 05](https://github.com/chunxtan/wanderwise/assets/99042026/271397e0-d9b3-41b5-8d7b-752b7d37af3e)

This issue was the most challenging part of entire project but also where I learnt the most:
* Understanding CORS error
* Setting up the correct type of backend (ventured into SSR)
* CommonJS vs ESM syntax
But Express.js turned out to be quite palatable at this level of implementation.

Overall, working with third-party private APIs can be quite a pain. 

### 3. TypeScript
* TS adds static typing to JS (i.e. types cannot change at runtime!)
* Varying data types and data structures to handle

![Screenshot 2023-11-25 at 00 22 40](https://github.com/chunxtan/wanderwise/assets/99042026/e6c6563e-4d5a-4545-8516-1a2df792dfc4)

* TS helps to keep track of how the data should be handled (e.g. applicable methods) & helps to catch errors during development
![Screenshot 2023-11-25 at 00 21 05](https://github.com/chunxtan/wanderwise/assets/99042026/65fd7c29-2d0e-4f71-b906-ad3251428e48)

* But was also not entirely conducive for development at times...

![Screenshot 2023-11-25 at 00 26 10](https://github.com/chunxtan/wanderwise/assets/99042026/73949046-96ad-4815-846c-353fc01ce46c)

### 4. MobX 
* State management library for JS, commonly used with React apps. End outcome similar to local states & react hooks functionality, but cleaner handling in my opinion 
* How it helped me:
  * Store state for use in fetching subsequent API calls
    ![image](https://github.com/chunxtan/wanderwise/assets/99042026/40297716-c041-4617-96ea-828cee318d79)
  * Keep track of state for (re)rendering purposes
  * Pass states between components without prop-lifting

## Future Development
* Clean up UI
  * More aligned with envisioned UI
  * Parse time for flights
* Addition of map to allow users to see locations of accommodation options
* Error catching & making it known to users (e.g. when input origin/destination is invalid)
* Separation of concerns between business logic & UI changes
