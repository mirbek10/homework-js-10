 const mir = document.getElementsByClassName("mir")
const input = document.querySelector("input")
const btn1 = document.querySelector('button')
 const btn2 = document.getElementById('btn')
 const p =document.querySelector('p')

    p.textContent="текст";

    btn1.addEventListener('click',()=>{
    p.innerText=input.value});
    
    
    btn1.addEventListener ('click',() => {
        btn2.style.display = 'inline-block'; 
        btn2.click();
    });

// btn2.addEventListener  ('click', ()=> {
//     mir.removeChild(p)
// })
//  btn2.click= () => {
//     mir.removeChild(p)
//  }
btn2.style.backgroundColor = "aqua"