Counter App with Angular and NgRx

This project is a simple counter application built using Angular and NgRx. It serves as a learning project to understand the basics of state management with NgRx in Angular.

-Features

    Increment the counter

    Decrement the counter

    Showing a double counter

    State management using NgRx

    Storing counter value in local storage.

-Prerequisites

-To run this project locally, you need to have the following installed:

    Node.js (v14 or above is recommended)

    Angular CLI (v12 or above is recommended)

-Getting Started

1. Clone the Repository

    git clone <repository-url>
    cd <repository-folder>

2. Install Dependencies

    Install the required dependencies by running:

    npm install

3. Run the Application

    Start the development server:

    ng serve

    The app will be available at http://localhost:4200.

-Folder Structure

Here’s an overview of the project’s NgRx related folder structure:

src/
├── app/
│   ├── counter/
│   │   ├── counter.actions.ts
│   │   ├── counter.reducer.ts
│   │   ├── counter.selectors.ts
│   │   ├── counter.state.ts
│   │   ├── counter.effects.ts
│   ├──
│   ├──

-Key NgRx Files:

    counter.actions.ts: Defines the actions for the counter (increment, decrement).

    counter.reducer.ts: Implements the reducer logic to handle state changes.

    counter.selectors.ts: Provides selectors to retrieve counter state.

    counter.state.ts: Defines the counter state interface and initial state.

    counter.effects.ts: Defines the effects logic.    

-Usage

    Open the application in your browser.

    Use the buttons to increment or decrement the counter.

    Observe how the state is managed via NgRx.

-Learning Objectives

    This project demonstrates:

    Setting up NgRx in an Angular application.

    Creating and using actions, reducers, selectors and effects.


-Resources

    Angular Documentation

    NgRx Documentation