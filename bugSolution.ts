function printName(name: string | null | undefined): void {
  if (name !== null && name !== undefined) {
    console.log(name.toUpperCase());
  } else {
    console.log('No name provided');
  }
}

printName(null); // Output: No name provided
printName('John'); // Output: JOHN
printName(undefined); // Output: No name provided