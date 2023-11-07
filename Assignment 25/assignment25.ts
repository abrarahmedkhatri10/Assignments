// Version 1: Running the if block (Alien color is 'green'):

let alienColor1: string = "green";

if (alienColor1 === "green") {
    console.log("The player just earned 5 points for shooting the green alien.");
} else {
    console.log("The player just earned 10 points.");
}

// Version 2: Running the else block (Alien color is 'red'):

let alienColor2: string = "red";

if (alienColor2 === "green") {
    console.log("The player just earned 5 points for shooting the green alien.");
} else {
    console.log("The player just earned 10 points for shooting the non-green alien.");
}
