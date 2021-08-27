/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = 'What is Git?: Git is a version control system that makes it easy to track and change files.'
console.log(gitDefinition);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = 'What is Github?: Github is a web applicatio that allows for version control and collaboration on code.'
console.log(gitHubDefinition);

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

let init = {
    description: 'Description: Init creates a new git repository',
    code: ' Code: git init'
}

console.log(init.description + init.code)

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

let clone = {
    description: 'Description: Clone points to a specific repo and clones that repo in a new directory',
    code: ' Code: git clone https://github/link/goes/here'
}
console.log(clone.description + clone.code)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

let status = {
    description: 'Description: Status displays information about the state of the directory',
    code: ' Code: git status'
}
console.log(status.description + status.code)

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

let add = {
    description: 'Description: Git add will update any changes made to your file on github ',
    code: ' Code: git add .'
}
console.log(add.description + add.code)

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

let commit = {
    description: 'Description: Commit will save all changes made to your file.',
    code: ' Code: git commit'
}
console.log(commit.description + commit.code)


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = {
    description: 'Description: Push uploads local repository content to a remote repository',
    code: ' Code: git push'
}
console.log(push.description + push.code)
