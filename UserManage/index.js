console.log("run");





let users = [];

const saveUser = () =>{

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;

    if(fname == '' ||  lname=='' || age=='' || address==''){
        alert("Error");
    }else{
        users.push({
            f_name: fname,
            l_name: lname,
            age:age,
            address:address
        });
    
        //console.log(fname , lname , age, address);
        console.log(users);
    
        clearData();
        lordUsers();
    }



   
}


const lordUsers = () =>{
    var data = '';
    for(let i =0; i<users.length; i++){
        data += `
        <div class="card p-2 m-2" style="width: 18rem">
        
            <h6 class="card-subtitle m-1 mb-2 text-body-secondary">First Name : ${users[i].f_name}</h6>
            <h6 class="card-subtitle m-1 mb-2 text-body-secondary">First Name : ${users[i].l_name}</h6>
            <h6 class="card-subtitle m-1 mb-2 text-body-secondary">Age : ${users[i].age}</h6>
            <h6 class="card-subtitle m-1 mb-2 text-body-secondary">Address : ${users[i].address}</h6>
            <button id="btn${i}" onclick="deleteUser(${i})" type="button" class="btn btn-primary">Delete</button>
            <button id="" onclick="getUser(${i})" type="button" class="btn btn-primary">Delete</button>

        </div>`

 
    }
    document.getElementById("display").innerHTML = data;
}


const clearData = () =>{
    document.getElementById("fname").value = '';
    document.getElementById("lname").value = '';
    document.getElementById("age").value = '';
    document.getElementById("address").value = '';
}


const getUser = (i) =>{
    
    document.getElementById("fname").value = users[i].f_name;
    document.getElementById("lname").value = users[i].l_name;
    document.getElementById("age").value = users[i].age;
    document.getElementById("address").value = users[i].address;
    
    //var btn = document.getElementById("btn2");
    //btn.disabled = true;
}


const deleteUser = (val) =>{
    users.splice(val,1);
    lordUsers();
    
}

/*  
 we can create a object like this

 var user = {
                f_name: fname,
                l_name: lname,
                age:age,
                address:address
            };

 // then push...

 users.push(user);

*/