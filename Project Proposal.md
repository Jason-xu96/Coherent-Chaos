## Vision Statement

Coherent Chaos is a game that will bring excitement back to checkers, reinvigorating it with new confounding rules and ideas that will twist your mind. It will provide entertainment to players of all age groups and an experience to be remembered.

## Motivation

Coherent Chaos is inspired by checkers. With simple bi-directional movement per game piece, it’s one of the first board games many children in North America learn to play. However, its simplicity heavily limits its potential of being played long into players’ lives. This is because players quickly develop strategies and games become monotonous. We want to create a checkers-like game that solves this problem by introducing new gameplay mechanics. To achieve this, we will employ a less common concept of hexagonal checkers, which allows for a larger variety of movement options and therefore more diverse strategies than those in a standard checkers grid. The most unique twist to the game is a battle royale aspect, which creates a fun challenge that’s sure to keep players interested. A built-in message system will also allow for quick social interaction. This hexagonal board coupled with fresh gameplay elements makes Coherent Chaos a more entertaining, and thus superior product to other competing online board games. The game’s movement simplicity coupled with interesting twists will enable continued enjoyment long into the future.

## Success Criteria

Coherent Chaos will be considered a success if the following criteria are met:

*   Within the first 3 months of its release, 80% of games started are played to completion.
*   Its mobile clients receive ratings of 3.5 / 5 or greater in their respective app stores.
*   Monthly app installs are greater than 10 on each mobile platform.
*   The number of games started monthly exceed 20 across all platforms.

## Technologies

### Server: AWS (Amazon Web Services)

Amazon is a massive cloud services provider, and AWS is industry standard. There’s a plethora of support and resources available online. It’s also the default for this course, meaning there will be many other people available to ask for help when required. It also offers a free-tier that spans the length of this course and offers resources that should be sufficient for our needs.

Multiple Amazon accounts will be used to take advantage of this free tier, hosting a Production version of the server along with several Development versions.

### Languages: JavaScript + Node, Dart

JavaScript is an extremely versatile major web language with unbelievable reach as one of the most widely used and demanded languages in the industry. As such, it has countless resources and examples available online (Most popular language, Stack Overflow 2018). Additionally, some team members already know JavaScript and can share knowledge to reduce the learning curve for other team members. It will also be used on the frontend, further reducing learning overhead. Node will be used to run standalone JavaScript, and npm will be used as it offers an immense ecosystem of useful modules.



Dart is a C-like programming language optimized for client-side development for web and mobile. The decision to use this language revolved primarily around the decision to use Flutter, as a mobile client technology for building native apps, which requires the use of Dart. Additionally, we decided to learn a new framework and language. Dart (and Flutter) meet these criteria and while it isn’t the fastest rising in terms of popularity, Google’s Flutter framework and Fuchsia operating system both use Dart, indicating that is here to stay (Google created the Dart language). Tutorials and API reference on the language’s official website serve as a useful resource to get team members up to speed with the language. Previous C language experience amongst team members is also useful.

### Backend Web Framework: Express

Express is a widely used, simple and lightweight web framework. It’s over eight years old, is stable and well supported, has many resources and examples available online, and also has industry relevance beyond school. The lightweight nature of Express also offers excellent flexibility when it comes to backend design.



The Express backend will serve as both the game API and the server for the web client. For example, the app will be accessed at game.com/, and the API will be accessed at game.com/api/. Express makes routing easy, so doing this is very simple.

### Web Client: React

React is written in JavaScript, the same language as the backend. This reduces the amount of technology the team needs to learn in addition to all of the benefits of JavaScript as a language mentioned previously.



React is a powerful library for creating dynamic, interactable page components, and allows for their reuse across the entire app, reducing development time and improving developer quality of life by making component sandboxing for development purposes painless through utilities such as Styleguidist. React is widely used with lots of support, references, and resources available, and has practical application beyond school in a variety of web development oriented positions. Some members on the team also have experience with it, which will reduce the learning curve for everyone else, and reduce project startup time.



React will be coupled with Redux and Redux-Saga for clean application state and async request management, and the React Container Pattern will be used to separate functional components from presentational components. This pattern dictates that container components will manage state, data, and requests, and pass everything down the hierarchy to components that then present the state and data they’re given. Doing this will make development completely modular and will keep responsibility on the frontend under control, keeping code clean and understandable.

### Mobile Clients (iOS + Android): Flutter



Flutter is a framework that uses the C-like Dart programming language, which team members will find familiar. As a new framework, Flutter is valuable to learn as it is widely used in the industry and has lots of support in the form of online resources, tutorials and examples. It is developer friendly with its large quantity of different built-in widgets for developing expressive and beautiful apps. It is also a cross platform framework which decreases the amount of work required for mobile clients, since the same code works on both the iOS and Android platforms. It can be set up easily by installing an editor plugin.

## User Stories

1.  As a player, I want to be able to start a game so that I can play the game.

*   Estimate: 4 days
*   Priority: High



1.  As a player, I want to be able to join a game so that I can play against an opponent.

*   Estimate: 8 days

*   Priority: High



1.  As a player, I want to be able to make moves on the game board so that I can play out my strategies.

*   Estimate: 12 days

*   Priority: High



1.  As a player, I want to be able to take turns with my opponent so that we can develop strategies to win the game.

*   Estimate: 3 days

*   Priority: High



1.  As a player, I want to know when I’ve won or lost the game so that I know when the game is over.

*   Estimate: 1 day

*   Priority: Medium



1.  As a player, I want to save my game progress, so that I can continue the game in the future.

*   Estimate: 1 day

*   Priority: Low

## Links

Repository:

[https://github.com/ZackHJ/comp4350-project](https://www.google.com/url?q=https://github.com/ZackHJ/comp4350-project&sa=D&ust=1549748379891000)



Issue Board (tracking system):

[https://github.com/ZackHJ/comp4350-project/projects](https://www.google.com/url?q=https://github.com/ZackHJ/comp4350-project/projects&sa=D&ust=1549748379891000)

## Group C

*   Chiragkumar Prajapati (Chirag)
*   Connor Lowey
*   Hui Jin (Zack)
*   Huizi Hao
*   Casey Hildebrand
*   Piklu Sutradhar
*   Zhikan Xu (Jason)
*   Tyler Garrow
