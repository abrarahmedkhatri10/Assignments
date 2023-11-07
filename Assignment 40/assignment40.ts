function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  // Create an array of magician's names
  let magicianNames: string[] = ["Harry Blackstone Jr.", "Ricky Jay", "Teller", "Dorothy Dietrich", "David Devant"];
  
  // Call the function to show the magician's names
  show_magicians(magicianNames);