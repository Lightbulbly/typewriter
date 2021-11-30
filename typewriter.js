const sentence = "hello there from lighthouse labs";


const delayedCharAppearance = function(string, ms) {

  let delay = ms;

  for (const char of string) {
    setTimeout(()=>{
      process.stdout.write(char);
    },delay);
    delay += 50;
  }
  // console.log("\n");
  process.stdout.write("\n");

};
delayedCharAppearance(sentence, 0);