var form=document.getElementById('my-form');
var userlist=document.getElementById('items');

form.addEventListener('submit',setToLocalStorage);

function setToLocalStorage(e){
    e.preventDefault();
    console.log("1");

    var amount=e.target.amount.value;
    var desc=e.target.desc.value;
    var categ=e.target.categ.value;

    const obj={ amount,desc,categ}

    localStorage.setItem(amount,JSON.stringify(obj));

    //Adding newly input userdetails onto li

    var newuser=' '+'Amount :' +obj.amount+' | '+'Description :' +obj.desc+' | '+'Category :' +obj.categ;

    var li=document.createElement('li');

    li.className="items1";
    li.id=obj.amount;
    li.name=obj.desc;
    li.for=obj.categ;

    console.log(li);
    
    li.appendChild(document.createTextNode((newuser)));
    li.style.margin= '25px';

    userlist.appendChild(li);


    //Adding Edit Button to each userdetail

    var editButton=document.createElement('button');
    
    editButton.className='editbutton';

    editButton.id='edit';

    editButton.style.backgroundColor='light gray';
    editButton.style.padding= '2px 2px';
    editButton.style.color= 'black';
    editButton.style.margin= '0 10px';
    editButton.style.borderRadius= '5px';
    editButton.style.width='15%';
    

    editButton.appendChild(document.createTextNode('Edit Expense'));

    li.appendChild(editButton);


    //Adding delButton to each userdetail

    var delButton=document.createElement('button');
    
    delButton.className='deletebutton';

    delButton.id='delete';

    delButton.style.backgroundColor='#eb4343';
    delButton.style.padding= '2px 2px';
    delButton.style.color= 'white';
    delButton.style.borderRadius= '5px';
    delButton.style.width='20%';
    
    console.log(delButton);
    

    delButton.appendChild(document.createTextNode('Delete Expense'));

    li.appendChild(delButton);


}
    //to add event to delete button
    userlist.addEventListener('click',removeUser);

//function to remove item
function removeUser(a){
    
      if(a.target.textContent==='Delete Expense'){
        
        if(confirm('Do you want to delete ?')){
            var li=a.target.parentElement;
            userlist.removeChild(li);

            var email=li.id;
            localStorage.removeItem(email);

        }
   }
}


//to add event to edit button
userlist.addEventListener('click',editUser);

//function to edit item
 function editUser(e){

 if(e.target.textContent==='Edit Expense'){
    
    if(confirm('Do you want to edit ?')){
         var li=e.target.parentElement;
         
         
         userlist.removeChild(li);

        
         var email=li.id;
         localStorage.removeItem(email);

         document.getElementById('amount').value=li.id;
         document.getElementById('desc').value=li.name;
         document.getElementById('categ').value=li.for;         
         }
     }
}
