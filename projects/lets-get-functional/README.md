# lets-get-functional

An exercise in problem solving in the functional idiom.

## Setup

0. If you haven't released your lodown library to `npm` (node package manager), follow the steps in this video to do so (using your GitHub username to create a unique name for your library):
    
    <a href="https://docs.npmjs.com/getting-started/publishing-npm-packages" target="_blank">publishing-npm-packages</a>

1. **FORK** this repository on GitHub to your own GitHub account.

2. From your FORK, use SSH to clone the repository into a Blank Cloud9 workspace.

3. Once the Cloud9 workspace is finished initializing, from the bash terminal, run the command:
    
        npm install

4. Install your lodown library by running the command and replacing `<my-user-name>` :
    
        npm install --save lodown-<my-user-name>

5. Node is smart enough to find installed modules when you `require()` them by name. Open up `index.js` and import your lodown library using the node `require()` method like:

    `const _ = require("lodown-<my-github-user-name>");`

    Be sure to replace `<my-user-name>` with your actual username, duh. ;P

## Solve

Code and test your solutions in `index.js`. Customer data is available to you in the Array, `customers`. Utilizing your lodown library, write functions that take the Array of customers and return the following (`console.log()` the results):

1. Find the number of males.
2. Find the number of females.
3. Find the name and age of the oldest customer. 
4. Find the name and age of the youngest customer.
5. Find the average balance of all the customers.
6. Find how many customers' names begin with an arbitrary letter. Write a function to answer this question, then log an answer.
7. Find how many customers' _friends'_ names begin with an arbitrary letter. Write a function to answer this question, then log an answer.
8. Find the names of all customers who are friends with a given customer (by name). i.e. Which customers have that customer's name in their friends list?
9. Find the top 3 most common tags among the customers.
10. Create a summary of genders, the output should be:
    
```javascript
{
    male: 3,
    female: 4,
    transgender: 1
}
```

You should solve this using `reduce()`.

Remember, in the node.js environment, you can both `console.log()` or use the dubugger to step through your code and inspect your work. Using the dubugger and stepping through your code will help you better understand the relationships and lifecycle of the Functions in your `lodown` library.
