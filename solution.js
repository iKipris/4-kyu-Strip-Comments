function solution(input, markers) {

   return input.split('\n').map((row,index) => {

     markers.map((mark) => {
       let pos = row.indexOf(mark) != -1 ? row.indexOf(mark) : null;
       row = pos ? row.slice(0, pos) : row;
     });
     
     return row.trim();
     
   }).join('\n');

};
