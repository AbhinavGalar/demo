let data={
    name:"abhinav",
    age:19,
    addres:"bhopal"
}
localStorage.setItem("userdata",JSON.stringify(data))
let finaldata=JSON.parse(localStorage.getItem('userdata'))
console.log(finaldata.age);