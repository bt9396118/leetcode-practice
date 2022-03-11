function generateOptionsLayoutMatrix(options,columns) {
    const optionsCopy = ['s',...options];
    if(columns==0)return optionsCopy;
    const length = optionsCopy.length;
    const m = length % columns > 0 ? Math.ceil(length / columns) : Math.floor(length / columns);
    const matrix = new Array(m).fill(0).map(() => new Array(columns).fill(0))
    let optionsIndex = 0;
    for(let i=0;i<m;i++){
        for(let j=0;j<columns;j++){
            matrix[i][j] = optionsCopy[optionsIndex]
            optionsIndex++;
        }
    }
    for(let i=0;i<optionsIndex;i++){
        if(matrix[i % m][Math.floor(i / m)]){
            const option = optionsCopy.shift();
            matrix[i % m][Math.floor(i / m)] = option
        }else continue;
    }
    return matrix;
}

console.log(generateOptionsLayoutMatrix(['a','b','c','d','e','f'],2))
