const MenuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#Close-btn");
const Menu = document.querySelector(".nav_item");
//   Open Nav Btn
MenuBtn.addEventListener("click", ()=>{
    Menu.style.display = 'block';
    MenuBtn.style.display = 'none';
    closeBtn.style.display ="inline-block";

})

closeBtn.addEventListener("click", ()=>{
    Menu.style.display = 'none';
    MenuBtn.style.display = 'inline-block';
    closeBtn.style.display ="none";

})

// Show / hide Faqs
const Faqs = document.querySelectorAll('.faq');
  Faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
         faq.classList.toggle('open');
        //  change icon
        const icon = faq.querySelector('.faq__icon i');

        if(icon.className === 'uil uil-plus'){
             icon.className = 'uil uil-minus';
        } else {
             icon.className = 'uil uil-plus';
        }
         
    })
  })

//    Add background style to navbar 
window.addEventListener('scroll' , ()=>{
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY > 0);
    
})