// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

// scroll sections
let active = document.querySelectorAll("#nav-link")
active.forEach((item)=>{
    item.addEventListener("click" ,(e)=>{
        active.forEach((item)=>{
            item.classList.remove('active')
        })
        item.classList.add("active")
    })
})
// console.log(sections)  
// console.log(navLinks)  
let navLinks = document.querySelectorAll('header nav a'); 
let sections = document.querySelectorAll('section');
window.onscroll = (e) => {
    function RemoveById(id,text){
        return document.getElementById(id).classList.remove(text)
    }
    function AddById(id,text){
        return document.getElementById(id).classList.add(text)
    }
    // scroll to change active
        let top = window.scrollY;
        // console.log(sections)
        navLinks.forEach(links => {
            if(top >= 320&&top<1020){
            // console.log(links)
                links.classList.remove('active');
                RemoveById("home","show-animate")
                AddById("about","show-animate")
                document.querySelector('header nav a[href="#about"]').classList.add('active');
            }else if(top >= 1020 && top<1840){
                links.classList.remove('active');
                // document.getElementById("about").classList.remove("show-animate")
                // document.getElementById("education").classList.add("show-animate")
                RemoveById("about","show-animate")
                AddById("education","show-animate")
                document.querySelector('header nav a[href="#education"]').classList.add('active');
            }
            else if( top>= 1840 && top<2480){
                links.classList.remove('active');
                // document.getElementById("education").classList.remove("show-animate")
                // document.getElementById("skills").classList.add("show-animate")
                RemoveById("education","show-animate")
                AddById("skills","show-animate")
                document.querySelector('header nav a[href="#skills"]').classList.add('active');
            }else if( top>= 2480){
                links.classList.remove('active');
                // document.getElementById("skills").classList.remove("show-animate")
                // document.getElementById("contact").classList.add("show-animate")
                RemoveById("skills","show-animate")
                AddById("contact","show-animate")
                document.querySelector('header nav a[href="#contact"]').classList.add('active');
            }else{
                links.classList.remove('active');
                RemoveById("contact","show-animate")
                AddById("home","show-animate")
                document.querySelector('header nav a[href="#home"]').classList.add('active');

            }
            });
          
    // sticky header
    
    let header = document.querySelector('header');

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // console.log("this is scrol")
    if(window.scrollY < 20){
        header.style="background-color:;"
    }else{
        header.classList.toggle('sticky', window.scorllY > 100);
        header.style="background-color:#081b29;"
    }

    let footer = document.querySelector('footer')
    footer.classList.toggle("show-animate",this.innerHeight+this.scrollY >=document.scrollingElement.scrollHeight)
}