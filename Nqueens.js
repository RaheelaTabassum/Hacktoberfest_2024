  function nQueen(boolArrBoard,row){
       if(row === boolArrBoard.length){
           display(boolArrBoard)
           return 1 *//count*
       }
   
       let count = 0
       *//placing the queen and checking every row and column*
       for(let col = 0; col < boolArrBoard.length; col++){
           *//place the queen if it is safe *
           if(isSafe(boolArrBoard,row,col)){
               boolArrBoard[row][col] = true
               count += nQueen(boolArrBoard,row+1)
               boolArrBoard[row][col] = false
           }
       }
       return count
   }
   
   function isSafe(boolArrBoard,row,col){
       *//vertical*
       for(let i = 0; i < row; i++){
          if(boolArrBoard[i][col]){
           return false
          }
       }
   
       *//left diagonal*
       let maxLeft = Math.min(row,col)
       for(let i = 1; i <= maxLeft; i++){
           if(boolArrBoard[row - i][col - i]){
               return false
              }
       }
   
       *//right diagonal*
       let maxRight = Math.min(row, boolArrBoard.length - col - 1)
       for(let i = 1; i <= maxRight; i++){
           if(boolArrBoard[row - i][col + i]){
               return false
              }
       }
   
       return true
   }
   
   function display(boolArrBoard){
       for( let row in boolArrBoard){
           for(let column in boolArrBoard[row]){
               if(boolArrBoard[row][column]){
                   process.stdout.write('Q')
               }
               else{
                   process.stdout.write('X')
               }
           }
           console.log()
       }
   }
   
   let n = 4
   let boolArrBoard = Array.from({length: n}, () => {
       new Array(n).fill(false)
   })
   nQueen(boolArrBoard,0)
