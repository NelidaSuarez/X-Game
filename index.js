const marioBros = document.querySelector("#mario-bros");


window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY
    marioBros.style.left = scroll * 0.5  + "px";
    marioBros.style.top = scroll * -0.2  + "px";
});
