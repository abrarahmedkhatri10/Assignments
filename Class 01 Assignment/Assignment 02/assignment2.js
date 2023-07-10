var personname = "Abrar Ahmed";
console.log("Lowercase: " + personname.toLowerCase());
console.log("Uppercase: " + personname.toUpperCase());
// Titlecase conversion function
var toTitleCase = function (str) {
    return str.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
    });
};
console.log("TitleCase: " + toTitleCase(personname));
