const getColor=()=>{
    const randomNumber= Math.floor(Math.random()*16777215);
    //to hexcode
    const randomcode="#"+ randomNumber.toString(16);
    document.body.style.backgroundColor=randomcode;
    document.getElementById("color-code").innerText=randomcode;
}
document.getElementById("btn").addEventListener(
    "click",getColor
)
getColor()