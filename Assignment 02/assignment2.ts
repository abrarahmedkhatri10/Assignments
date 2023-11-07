let personname = "Abrar Ahmed"

console.log("Lowercase: "+ personname.toLowerCase())
console.log("Uppercase: "+ personname.toUpperCase())

// Titlecase conversion function
let toTitleCase = (str) => {
    return str.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
    });
};

console.log("TitleCase: " + toTitleCase(personname))
