/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    var n = graph.length;
    var color = Array(n).fill(0);
    var flag = true;

    var dfs = function(i,c) {
        color[i] = c;
        graph[i].forEach(function(item) {
            if(color[item] === c){
                flag = false;
                return;
            }
            if(color[item] === 0){
                dfs(item,-c)
            }
        })
    }

    for(var i=0;i<n;i++){
        if(color[i] === 0){
            dfs(i,1);
        }
    }
    return flag;
};