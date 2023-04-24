let button = document.querySelector('.menu');;
let menu = document.querySelector('.sub-menu');;
let img=document.querySelector('#myimg')

console.log(button);
console.log(menu.style.display);
button.addEventListener('click', ()=>{
    if(button.classList.contains('movedown'))
{
    button.classList.remove('movedown')
}

if (menu.style.display == '')
{
    menu.style.display ='block';
    console.log('here');
    img.setAttribute("src", "./images/icon-arrow-up.svg");
}
else
{

    menu.style.display='';
    img.setAttribute("src", "./images/icon-arrow-down.svg");
}
if(menu2.style.display=="block")
{
    menu2.style.display=""  
}
if(button2.classList.contains('movedown'))
{
    button2.classList.remove('movedown')
    document.getElementById('li3').classList.remove('movedown');
    document.getElementById('li4').classList.remove('movedown');

}
else
{
    button2.classList.add('movedown')
    document.getElementById('li3').classList.add('movedown');
    document.getElementById('li4').classList.add('movedown');
}

})
// image.setAttribute("src", "image2.jpg");
let button2 = document.querySelector('#menu2');;
let menu2 = document.querySelector('#sub-menu2');;
let img2=document.querySelector('#myimg2')
button2.addEventListener('click', ()=>{
    if(button2.classList.contains('movedown'))
    {
        button2.classList.remove('movedown')
    }
   
if (menu2.style.display == '')
{
    menu2.style.display ='block';
    img2.setAttribute("src", "./images/icon-arrow-up.svg");
}
else
{

    menu2.style.display='';
    img2.setAttribute("src", "./images/icon-arrow-down.svg");
}
if(menu.style.display=="block")
{
    menu.style.display=""  
}
if(    document.getElementById('li3').classList.contains('movedown'))
{
    document.getElementById('li3').classList.remove('movedown');
   document.getElementById('li4').classList.remove('movedown');}

else
{
    document.getElementById('li3').classList.add('movedown');
    document.getElementById('li4').classList.add('movedown');
}}
)
let toggle1=document.getElementById('toggle1');
toggle1.addEventListener('click',()=>
{
    let nav = document.querySelector('nav') ;
    nav.style.display="block";
})
let toggle2=document.getElementById('toggle2');
toggle2.addEventListener('click',()=>
{
    let nav = document.querySelector('nav') ;
    nav.style.display="";
})
