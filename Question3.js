let printNumbers = (from, to) => {
    let fromTem = from;
    let myInterval = setInterval(() => {
      console.log(fromTem);
      if (fromTem == to) clearInterval(myInterval);
      fromTem++;
    }, 1000);
}

console.log(printNumbers(1, 10));