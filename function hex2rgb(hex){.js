/**
 * @Author: btg
 * @Date: 2022-03-13 13:47:04
 * @Description: 
 */
function hex2rgb(hex){
    const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
    let color = String(hex).toLowerCase();
    if(reg.test(color)){
        if(color.length === 4){
            let colorTemp='#';
            for(let i=1;i<4;i++){
                const ele = color.slice(i,i+1);
                colorTemp += `${ele}${ele}`
            }
            color = colorTemp;
        }
        let colorRgbArr = [];
        for(let i=1;i<7;i+=2){
            colorRgbArr.push(parseInt(`0x${color.slice(i,i+2)}`))
        }
        return `rgb(${colorRgbArr.join(',')})`
    }else{
        return hex;
    }
}

console.log(hex2rgb('#fff'))
