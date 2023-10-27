function inputFunction(initialString) {
  let lowerString = initialString.toLowerCase();
  let cleanString = lowerString.replace(/[^a-z]/gi, '');
  console.log("This is the cleaned up string" + cleanString);
  console.log("The length of the string is:" + cleanString.length)
  let rowColObj = squareBuilder(cleanString);
  console.log("The square needs rows:" + rowColObj.rows + " and columns: " + rowColObj.columns);
}



function squareBuilder(cleanString) {
  let length = cleanString.length;

  if (length === 0) {
    return "Please enter some text";
  }

  let columns = Math.ceil(Math.sqrt(length));
  console.log(columns);
  let rows = Math.ceil(length / columns);
  console.log(rows);

  return {
    rows: rows,
    columns: columns
  };
}


// function squareBuilder(cleanString) {
//   if (cleanString <= 1) {
//     square of 1
//   } else if (cleanString.length <= 4) {
//     square of 4 2*2
//   } else if (cleanString.length <= 6) {
//     rectangle of 6 2*3
//   } else if (cleanString.length <= 9) {
//     square of 9 3*3
//   } else if (cleanString.length <= 12) {
//     rectangle of 12 3*4
//   } else if (cleanString.length <= 16) {
//     square of 16 4*4
//   } else if (cleanString.length <= 20) {
//     rectangle of 20 4*5
//   } else if (cleanString.length <= 25) {
//     square of 25 5*5
//   } else if (cleanString.length <= 30) {
//     rectangle of 30 5*6
//   } else if (cleanString.length <= 36) {
//     square of 36 6*6
//   } else if (cleanString.length <= 42) {
//     rectangle of 42 6*7
//   } else if (cleanString.length <= 49) {
//     square of 49 7*7
//   } else if (cleanString.length <= 56) {
//     rectangle of 56 7*8
//   } else if (cleanString.length <= 64) {
//     square of 64 8*8
//   } else if (cleanString.length <= 72) {
//     rectangle of 72 7*8
//   } else if (cleanString.length <= 81) {
//     square of 81 9*9
//   } else if (cleanString.length <= 90) {
//     rectangle of 90 9*10
//   } else if (cleanString.length <= 100) {
//     square of 100 10*10
//   } else if (cleanString.length <= 110) {
//     rectangle of 110 10*11
//   } else if (cleanString.length <= 121) {
//     square of 121 11*11
//   } else {
//     return "Too big, c'mon man";
//   }
// }
// Squares: [1:1] [2:4] [3:9] [4:16] [5:25] [6:36] [7:49] [8:64] [9:81] [10:100] [11:121]

// Rectangles: [2*3:6] [3*4:12] [4*5:20] [5*6:30] [6*7:42] [7*8:56] [8*9:72] [9*10:90] [10*11:110]