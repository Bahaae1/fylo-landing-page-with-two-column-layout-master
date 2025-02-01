const form = document.querySelectorAll('form')[0];
const email = document.querySelectorAll('input[type = "email"]')[0];
const span = document.querySelectorAll('.email span')[0];

console.log(form , email , span)
form.addEventListener('submit' , (e) => {
    e.preventDefault()
    
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if( email.value === ''  ){
        span.style.display = 'block';
        email.style.border =' 1px solid hsl(354, 100%, 66%)';

}   else if(!email.value.match(valid)){
        span.style.display = 'block';
        email.style.border =' 2px solid hsl(354, 100%, 66%)';

    }else{
        form.submit()
    }
})
const form2 = document.querySelectorAll('form')[1];
const email2 = document.querySelectorAll('input[type = "email"]')[1];
const span2 = document.querySelectorAll('.email span')[1];

console.log(form2 , email2 , span2)
form2.addEventListener('submit' , (el) => {
    el.preventDefault()
    
    let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if( email2.value === ''  ){
        span2.style.display = 'block';

}   else if(!email2.value.match(valid)){
        span2.style.display = 'block';

    }else{
        form2.submit()
    }
})




