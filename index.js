function isPalindrome(word) {
  for (let i=0; 1 < word.length / 2; i++) {
    const j=word.lenght-1-i
    const startChar = word[i]
    const endChar = word[j]
    if (startChar!== endChar) return false
  }
  return true
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
