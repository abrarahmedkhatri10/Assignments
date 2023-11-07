function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (const magician of magicians) {
      greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
  }
  
  // Create an array of magician's names
  let magicianNames: string[] = ["Harry Blackstone Jr.", "Ricky Jay", "Teller", "Dorothy Dietrich", "David Devant"];
  
  // Call make_great() with a copy of the array to get a new array with the Great added
  let greatMagicianNames: string[] = make_great([...magicianNames]);
  
  // Call show_magicians() with the original and modified arrays
  console.log("Original Magician Names:");
  show_magicians(magicianNames);
  
  console.log("\nGreat Magician Names:");
  show_magicians(greatMagicianNames);
  