//  Object



// let object={
//     fname:'Vedant',
//     lname:'Rasam',
//     roll_no:'03',
//     age:'21',
//     fullname: function(){return this.fname+' ' +this.lname},
 
    
// }

// console.log(object.fullname())


// console.log(object.age);
// object.age='22';
// console.log(object.age);

// let emp=new Object;

// emp={
//     fname:'',
// }

// emp.fname='Ram';
// console.log(emp)



//promis return as object
var phone;
var email;
var dob;
var fname;
var mname;
var lname;
var loc;
var img;



let mypromise=new Promise((resolve,rejected)=>{
     let i=2;
     if(i>0)
     {
        resolve('Sucess');
     }
     else
     {
        rejected('Failed');
     }

});

mypromise.then((a,b)=>{
    console.log('Task'+a);
    console.log('Task'+b);
}).catch((error)=>{
    console.log(error);
})

fetch('https://randomuser.me/api').then((res)=>{
    
return res.json();
      
}).then((data)=>{
   
      phone= data.results[0].phone ;
      email= data.results[0].email;
      dob= data.results[0].dob.date.split('T')[0];
      fname=data.results[0].name.title+' '+data.results[0].name.first+' '+data.results[0].name.last;
      loc=data.results[0].location.city;
      img=data.results[0].picture.medium;
      document.querySelector('.img').src=img;
      console.log(data)
     
}

)

function setphone(){

    document.querySelector('.output').innerHTML=phone;
}

function setemail(){

    document.querySelector('.output').innerHTML=email;
}
function setdate(){

    document.querySelector('.output').innerHTML=dob;
}
function setfullname(){

    document.querySelector('.output').innerHTML=fname;
}
function setloc(){

    document.querySelector('.output').innerHTML=loc;
}
