async function fet () {
    let table = document.querySelector('#displaydata')
    let res = await fetch  ("http://localhost:3000/emp")
    let data = await res.json()
    let finaldata = data.map((e)=>`
     

    <tr>
    <td> ${e.id}</td>
    <td> ${e.name}</td>
    <td> ${e.age}</td>
    <td> ${e.contact}</td>
    <td> ${e.city}</td>
    <td><button onclick ="mydelete ('${e.id}')">delete </button></td>
    <td><button onclick ="edit('${e.id}')"> edit  </button></td>
</tr>
    
    `).join("")
    table.innerHTML = finaldata;
}
fet()



//========================================== update=========================
async function edit(id) {
    let res = await fetch (`http://localhost:3000/emp/${id}`)
    let data = await res.json()
    let edit_frm =`
    <input type ="text" value = "${data.id}" readonly id="id1"> <br>
    <input type = "text" value = "${data.name}" id="name1"><br>
    <input type = "text" value = "${data.age}" id="age1"><br>
    <input type = "text" value = "${data.contact}" id="contact1"><br>
    <input type = "text" value = "${data.city}" id="city1"><br>

<input type ="submit" value ="update" onclick="myupdate('${data.id}')">

`
document.querySelector('#editform').innerHTML=edit_frm    
}

function myupdate(id){
    let update ={
        name: document.querySelector('#name1').value,
        id: document.querySelector('#id1').value,
        age: document.querySelector('#age1').value,
        contact: document.querySelector('#contact1').value,
       city: document.querySelector('#city1').value

    }

    fetch(`http://localhost:3000/emp/${id}`,{
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(update)
    })
    .then(res=>alert("update..!!!"))
    
}