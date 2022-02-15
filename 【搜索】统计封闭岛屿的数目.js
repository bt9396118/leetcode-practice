/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    var n = grid.length;
    var m = grid[0].length;
    var visit = new Set();
    var dx = [-1,0,1,0];
    var dy = [0,1,0,-1];
    var flag = false;

    var dfs = (i,j) => {
        if(i === -1 || i===n || j===-1 || j===m){
            flag = true;
            return;
        }
        if(visit.has(`${i},${j}`))return;
        if(grid[i][j] === 0){
            visit.add(`${i},${j}`);
            for(var t=0;t<4;t++){
                dfs(i+dx[t],j+dy[t]);
            }
        }
    }

    var ans = 0;
    for(var i=0;i<n;i++){
        for(var j=0;j<m;j++){
            if(visit.has(`${i},${j}`))continue;
            if(grid[i][j] === 0){
                flag = false;
                dfs(i,j);
                if(!flag){
                    ans+=1;
                }
            }
        }
    }
    return ans;
};