const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Enter your password: ", function(name) {
    // checks if user input has a length of atleast 10 characters
        if([...name].length >= 10) {
            console.log("SUCCESS!! Holy cow that's a strong password!")
            const acsiiArt = String.raw `  
             \ \    / /___ | | __  ___  _ __   ___  |  \/  | _ _    / __|| |_  __ _  _ _ | |__
              \ \/\/ // -_)| |/ _|/ _ \| '  \ / -_) | |\/| || '_|_  \__ \|  _|/ _" || '_|| / /
               \_/\_/ \___||_|\__|\___/|_|_|_|\___| |_|  |_||_| (_) |___/ \__|\__,_||_|  |_\_\)`;
            console.log(`${acsiiArt}`);
//I saw this in Iron Man 2 and always wanted to try it.
         } else {
            console.log('FAILURE!! Make sure your password has at least 10 characters!')
        }
        reader.close()
    });

