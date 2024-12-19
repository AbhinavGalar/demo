const data=[
    {name:"peter parker" ,location:"new york cities" ,profession:"saver", age:24},
    {name:"shahrukh khan" ,location:"mumbai" ,profession: "actor", age:45},
    {name:"puneet superstar" ,location:"bihar" ,profession:"reeler",age:33},
    {name:"salman bhai" ,location:"new york cities" , profession :"actor",age:60},

];
function display(){
    let table=`

    <table border="20px" width="600px" color="green" bgcolor="blue">
    <tr>
    <th>name</th>
    <th>location</th>
    <th>profession</th>
    <th>age</th>
    `;

    data.map(function(y){
        table +=`
        <tr>
        <td>${y.name}</td>
        <td>${y.location}</td>
        <td>${y.profession}</td>
        <td>${y.age}</td>
        `
    })

    table+="<table>";
    document.getElementById("demo").innerHTML=table;
}