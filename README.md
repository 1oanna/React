# React


Athens, May 2018, SHA class beta


Module : React


Student : Ioanna Talasli


Teachers : George Avgoustis and Stratoula Kalafateli


Task : Assignment provided by the teachers as preparation before beginning with react module in SHA


*Assignment before the React class*

Make a single page website that has a menu with 3 navigation items. The user needs to be able to click to each of these menu items and see each page.


*A) Posts*

A list of posts, only have a title and a body. Use dummy data you create, 3-4 items should be enough.

*B) Times*

This page will display three items named London, Paris , Athens and below each the time for each city is displayed in real time

*C) Profile*

A form with name,surname, email and password


Bonus points: if you’ve done all of these use this API to populate the Home page with real data using https://jsonplaceholder.typicode.com/posts

Feel free to layout things however you want, again, css is secondary here, whats important is the functionality

By the way, by saying website we dont mean you have to set up node to serve it and so on. 
We only want what we described which can be accomplished with a single `index.html` and a single `main.js` file .
Avoid serving the website from a server and all that as its not related to react.
What you mainly need to re-remember is DOM manipulation with javascript which is what the assignment we came up with Stratoula is about.

Deadline : 30/05/2018 ---- Submission Date : 29/05/2018


---- homework week 1 ----

Render a basic static todo list with three items:

Todo List

* Get out of bed, Wed Sep 13 2017
* Brush teeth, Thu Sep 14 2017
* Eat breakfast, Fri Sep 15 2017


For each item render a description and a deadline date. Before you start draw a mockup and identify the components with colours. You have to use more than two components. Think which props the components should take.

Scoring
You will be scored on:

Correct functionality
Code organisation
Cleanliness of code

Deadline : 06/06/2018 ---- Submission Date : 06/06/2018



---- homework week 2 ----


Base your week 2 homework on the result of week 1.



Outline
Extend your todo list app with dynamic rendering of items based on the following JSON list:

[
  {
    "id": 1,
    "description": "Get out of bed",
    "deadline": "2017-09-11",
    "done": true
  },
  {
    "id": 2,
    "description": "Brush teeth",
    "deadline": "2017-09-10",
    "done": false
  },
  {
    "id": 3,
    "description": "Eat breakfast",
    "deadline": "2017-09-09",
    "done": false
  }
]


The JSON list should be in the state of the App component. Create a checkbox in each todo item. When you click the checkbox, the done state of the item should change. When an item is marked as done, it should be rendered with a line-through decoration. A mockup of the end result is the following:

Todo List

* [x] Get-out-of-bed,-Wed-Sep-13-2017
* [ ] Brush teeth, Thu Sep 14 2017
* [ ] Eat breakfast, Fri Sep 15 2017

When there are no items, the todo app should render the text "No items...":

Todo List

No items...


Scoring
You will be scored on:

Correct functionality
Code organisation
Cleanliness of code


Deadline : 13/06/2018 ---- Submission Date : 13/06/2018




------- homework week 3 -------

Extend your todo list app with the ability to add new todo items and remove existing ones.

Create an add button and a text input. When the add button is clicked a new todo item is created with the given description. Create also a remove button, which when clicked it should remove the todo item from the list.

A mockup of the end result is the following:

Todo List

Enter description: [           ] [Add]

* [x] Get out of bed, Wed Sep 13 2017 [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [remove]
All the state should be in the App component. No state should be in the other components. Before you start draw a mockup and identify the components with colours.

As a bonus, have the option to edit the description of a todo item. A mockup of the end result, in this case, should be the following:

Todo List

Enter description: [           ] [Add]

* [x] Get out of bed, Wed Sep 13 2017 [edit] [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [edit] [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [edit] [remove]
And when edit is clicked in one of the components:

Todo List

Enter description: [           ] [Add]

* [x] [Get out of bed    ] [update] [cancel] [remove]
* [ ] Brush teeth, Thu Sep 14 2017 [remove]
* [ ] Eat breakfast, Fri Sep 15 2017 [remove]
Scoring
You will be scored on:

Correct functionality
Code organisation
Cleanliness of code


Deadline : 20/06/2018 ---- Submission Date : 20/06/2018
