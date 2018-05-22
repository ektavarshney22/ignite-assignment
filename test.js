const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string ', (answer) => {
  // TODO: Log the answer in a database
  //console.log(`Thank you for your valuable feedback: ${answer}`);
var str = answer; 
 str = str.replace(/[a-z-]+/gi, function(s){return s.split('').reverse().join('')});
console.log(str);

  
  rl.close();
});