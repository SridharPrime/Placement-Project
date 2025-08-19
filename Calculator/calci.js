const display=document.getElementById("display");

function insert(value)
{
    display.value+=value
}
function remove()
{
    display.value =display.value.slice(0,-1);
}
function allclear()
{
    display.value="";
}
function calculation()
{
   try{
        display.value =eval(display.value);
   } 
   catch{
        display.value ='ERROR';
   }
}