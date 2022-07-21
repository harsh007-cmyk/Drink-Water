// const remained=document.getElementById('remained');
// const Liters=document.getElementById("1liters");
// const percentage=document.getElementById("percentage");
// console.log(percentage);
// const cups=document.querySelectorAll(".cup-small");
// cups.forEach(element => {
//    element.addEventListener('click',(e)=>{
//    if(e.target.classList.contains("full")){
//     e.target.classList.remove("full");
//     fills();
//    }else{
//     e.target.classList.add("full");
//     fills();
//    }
    
//    }) 

// });

// function fills(){
//     let filled=document.querySelectorAll(".full");
//     console.log(filled);
    
//     let x=(filled.length/8)*100;
//     if(x===0){
//         percentage.innerHTML="";
//     }
//     else if(x>0)
//     percentage.style.height=`${x}%`
//     percentage.innerHTML=(filled.length/8)*100;
   
// }

const smallCups = document.querySelectorAll(".cup-small");
const litres = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => hightlightCups(index));

})

updateBigCup();

function updateBigCup(){
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;
  if(fullCups ===0){
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  }
  else{
    percentage.style.visibility = 'visible';
    percentage.innerText = `${fullCups/totalCups * 100}%`;
    percentage.style.height = `${fullCups/totalCups * 330}px`
  }
  if(fullCups === totalCups){
    remained.style.visibility = "hidden";
    remained.style.height = 0
  }
  else{
    remained.style.visibility = "visible";
    litres.innerText = `${2- (250*fullCups/1000)}L`
  }
}

function hightlightCups(index){
  if(index ===(smallCups.length-1) && smallCups[index].classList.contains("full"))
    index--;
  else if(smallCups[index].classList.contains("full") && !smallCups[index].nextElementSibling.classList.contains("full")){
  console.log(index);
  index--;
}

smallCups.forEach((cup, localIndex) => {
  if(localIndex<=index){
    cup.classList.add("full")
  }else{
    cup.classList.remove("full");
  }
})
  updateBigCup();
}