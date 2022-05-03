let adwin=document.querySelectorAll(".ads-window div");
let adwim=document.querySelectorAll(".ads-window div img");
let form2=document.querySelectorAll(".d-flex")[0];
let search=document.querySelectorAll(".form-control")[0]
let sugbox=document.querySelectorAll(".sugul")[0]

let n=1;
let m=0;
let i=0;
// console.log(adwim)
let tieminterval;
starttint();
window.addEventListener('focus', function(){endinterval();starttint()});    
window.addEventListener('blur', function(){
    endinterval()
});



// let a=['laptop','mobile','personal mob','television','microwave','keyboard','table','keyframe','tattweer'];
// search.addEventListener('keyup',function(){
//       // console.log(search.value);
     
//     let searched=search.value;
//     let srhsrr=searchitem(a,searched);
//     insersuggestion(srhsrr)
//     // console.log(text);


// })


// form2.addEventListener('click',function(){
//     setTimeout(function(){
//         let searched=search.value;
//         let srhsrr=searchitem(a,searched);
//         insersuggestion(srhsrr)
//     },100)
    
// })


// search.onchange= function() { 
// console.log('e')
//  };













 

/*************************************************************************************** */
function starttint(){
    tieminterval=setInterval(function(){
        [n,m]=[m,n]
        i++;
        i>5?i=1:i=i;
        // adwin[n].style.display='block';
        
        adwin[n].style.left='10px';
    adwin[m].style.left='-555px';
    ;
    setTimeout(function(){
        // adwin[m].style.visibility='hidden';
    // adwin[m].style.zIndex='-5'
    adwin[m].style.display='none'
    setTimeout(function(){
        adwin[m].style.left='570px';
        
        setTimeout(function(){
            // adwin[m].style.visibility='visible';
            // adwin[m].style.zIndex='10';
            adwin[m].style.display='block';
            // console.log(i)
            adwim[m].src=`./images/img${i}.jpg`
        },800)
    },1000)
    },2000)
    },4000)}


    function endinterval(){
        window.clearInterval(tieminterval)

    }





function searchitem(arr,searchit){
    searchit.trim();
    try{

    if(searchit.trim()!=''&&searchit.trim()!="."){
    var re = new RegExp(`\\b${searchit}`,"ig");
    //   let re=/\b+searched/ig;
    // arr.forEach(function(ele,index){if(re.test(ele)){if(searchit.trim()!=''){return arr[index]}}})
   let result= arr.filter(function(ele,index){return (re.test(ele))})
   return result}}
   catch(e){
    //    console.log(e)

   }

}

function insersuggestion(srhsrr){
    let text='';
    if(srhsrr){
    for(let item of srhsrr){
        text+=`<li>${item}</li>`;
    }}
    else{text=''}
    sugbox.innerHTML=text;

}