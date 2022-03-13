/**
 * @Author: btg
 * @Date: 2022-03-13 13:50:22
 * @Description: 
 */
let color = '#fff'
let colorTemp='#';
    for(let i=1;i<4;i++){
        const ele = color.slice(i,i+1);
        colorTemp += `${ele}${ele}`
    }
color = colorTemp;
console.log(color)