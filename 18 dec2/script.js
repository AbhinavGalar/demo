const students =[
    {name:"abhinav",course :"commerce",city:"itarsi"},
    {name:"rajiv",course :"arts",city:"itarsi"},
    {name:"abhinav",course :"maths science", city:"itarsi"},
    {name:"chetan",course :"commerce",city:"itarsi"},

];
function display(){
    let table=`
    <table border :"10px, color="red", bgcolor="yellow", margin ="5px">
    <tr>
    <th>name</th>
    <th>course</th>
    <th>city</th>
    </tr>
`;

students.map(function (y){
    table+=`
    <tr>
    <td>${y.name}</td>
    <td>${y.course}</td>
    <td>${y.city}</td>
</tr>
`
})
table+="</table>";
document.getElementById("demo").innerHTML=table;
}