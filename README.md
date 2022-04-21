# early-years-foundation-recovery
A research prototype for the Early Years Recovery

## Requirements 
node.js - version 16.x.x

## Getting started
1. Clone the repository
2. Make sure you have the correct version of node.js installed
3. Run ```npm install ``` to install dependencies
4. Run ```npm start``` to start the project

More detailed guidance is available on the prototype docs

## File structure
Every view file used is listed in the 'extends' folder. These are then called, as necessary, in a folder corresponding to each sprint milestone, with the following:
```
{% extends "../[PREVIOUS MILESTONE]/[FILE NAME]" %}
```
To create a new page:
1. add it to the 'extends' folder
2. add its corresponding file to the correct sprint milestone folder
3. add the extends line above
4. You can then override the code, as appropriate.