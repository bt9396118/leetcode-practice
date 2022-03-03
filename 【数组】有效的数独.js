/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    //设置三个字段分别对应三个规则
    let row={};//每行
    let col={};//每列
    let box={};//大九宫格分成九个小九宫格，每个小九宫格是三行三列
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            const c = board[i][j];
            if(c!='.'){
                //小九宫格的索引
                let boxIndex = Math.floor(i/3)*3 + Math.floor(j/3);
                //如果当前行列小九宫格中任意一个为true，说明有重复的数字
                if(row[i+''+c] || col[j+''+c] || box[boxIndex+''+c]){
                    return false
                }
                row[i+''+c]=true;
                col[j+''+c]=true;
                box[boxIndex+''+c]=true;
            }
        }
    };
    return true;
};