const spinner = function(arr) {
  let time = 0;
  for (let char of arr) {
    time += 600;
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
  }
};
spinner(["\r|    ", "\r/    ", "\r-    ", "\r\\    ", "\r|    ", "\n"]);
