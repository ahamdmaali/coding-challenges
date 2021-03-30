'use strict'
const form=document.getElementById('form')

form.addEventListener('submit',formhandler)

function formhandler(event){
    const n1=event.target.n1.value
    const n2=event.target.n2.value
    const n3=event.target.n3.value
    const n4=event.target.n4.value
    const n5=event.target.n5.value
    if(n1>n2 &&n1>n3 &&n1>n4 &&n1>n5 && n2<n1 && n2<n3 && n2<n4 & n2<n5){
        alert(n1+'is the max and '+n1+" is the min")

    }

}