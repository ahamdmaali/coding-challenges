
let arr=[]
function randomnumber(min,max){
    for (let i=0;i<arr.length;i++){
        arr.push(Math.floor(Math.random()*(max-min+1)+min))
        console.log(arr[i]^0.5)
    }
}