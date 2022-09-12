let arr = [
    {name : '123',age: 10},
    {name : '123',age: -1}
]
// Cach 1 : dung vong lap for
// for (let i = 0; i < arr.length ; i++) {
//     console.log(arr[i])
//     break;
// }

// Cach 2 : dung forEach ( module 1 )
// arr.forEach(function(item){
//     console.log(item)
// })

//Cach 3 : dung forEach ( module 2 )
arr.forEach((item)=>{
    if(item.age > 0){
        console.log(item)
    }
})