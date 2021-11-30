const sentence = "hello there from lighthouse labs";


const delayedCharAppearance = function(string, ms) {

  let delay = ms;
  let counter=0;

  for (const char of string) {
    setTimeout(()=>{
      process.stdout.write(char);
    },delay);
    delay += 50;
    counter++;
}
    setTimeout(() => {
        process.stdout.write("\n");
    }, 50*(string.length));

};
delayedCharAppearance(sentence, 0);