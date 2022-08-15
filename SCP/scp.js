//door open effect
let smokeLeft=document.getElementById("smoke_left");
let smokeRight=document.getElementById("smoke_right")
let logo=document.getElementById("intro_logo")
let logoBack=document.getElementById("intro_logo_back")
let buildingBack=document.getElementById("building_back")
let buildingFront=document.getElementById("building_front")
let slogan=document.getElementById("slogan")
let button=document.getElementById("btn") 

window.addEventListener("scroll",function()
{   let value=window.scrollY;
    smokeLeft.style.left=-value * 1+"px";
    smokeRight.style.left=value * 1 +"px";
    smokeRight.style.top=value * 0.025+"px";
    buildingBack.style.left=-value * 1+"px";
    buildingFront.style.right=-value * 1 +"px";

    logo.style.top=(value+100) * 0.1+"vh";
    logoBack.style.top=(value+100) * 0.1+"vh";
    
 })
 
 button.addEventListener("mouseover",function()
 {
    button.textContent="Access"
    button.style.color="Green"
 })

 button.addEventListener("mouseleave",function()
 {
    button.textContent="Warning!"
    button.style.color="Red"
 })

//clicked alert
 let locked = document.getElementById("locked");
 locked.addEventListener("click", function () {
   alert("🈲FILE ACCESS CLOSED PERMERNANTLY.");
 });

 window.addEventListener("scroll", reveal);

 function reveal() {
   var reveals = document.querySelectorAll(".reveal");

   for (var i = 0; i < reveal.length; i++) {
     var windowheight = window.innerheight;
     var revealtop = reveal[i].getBoundingClientRect().top;
     var revealpoint = 150;
     if (revealtop < windowheight - revealpoint) {
       reveals[i].classlist.add("active");
     } else {
       reveal[i].classlist.remove("active");
     }
   }
 }

 //mobile menu 
 const toggleButton=document.querySelector(".toggle-button")
 const navbar=document.querySelector("ul")

 toggleButton.addEventListener("click",function()
 {
   navbar.classList.toggle("live")
   console.log("testing")
 })
