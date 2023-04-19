let btnFirst = document.getElementById('first-button')
let btnSecond = document.getElementById('second-button')
let menuOne = document.getElementById('menu-one')
let sideMenuOne = document.getElementById('side-menu-one')
let sideMenuTwo = document.getElementById('side-menu-two')
let menuTwo = document.getElementById('menu-two')
let burgerIcon = document.getElementById('burgerIcon')
let sideMenu = document.getElementById('side-menu')
let closeMenu = document.getElementById('close-menu')
let sideBtnOne = document.getElementById('side-button1')
let sideBtnTwo = document.getElementById('side-button2')


function showBtnFirst (){

 menuOne.classList.add("show")
 menuTwo.classList.remove("show")
}

btnFirst.addEventListener('mouseover', showBtnFirst)


function showBtnSecond (){
   
    menuTwo.classList.add("show")
    menuOne.classList.remove("show")
   }
   
btnSecond.addEventListener('mouseover', showBtnSecond)


function hide(){
    menuOne.classList.remove("show")
    menuTwo.classList.remove("show")
}

menuOne.addEventListener('mouseleave', hide)   
menuTwo.addEventListener('mouseleave', hide)


function showSideMenu(){
    sideMenu.classList.add('show-menu')
}

burgerIcon.addEventListener('click', showSideMenu)


function closeSideMenu(){
       sideMenu.classList.remove('show-menu')

}

closeMenu.addEventListener('click', closeSideMenu)


function showSideBtnOne(){

    sideMenuOne.classList.add("show")
    sideMenuTwo.classList.remove("show")
   
   }
   
   sideBtnOne.addEventListener('mouseover', showSideBtnOne)
   
   
   function showSideBtnTwo (){
      
       sideMenuTwo.classList.add("show")
       sideMenuOne.classList.remove("show")
      }
      
  sideBtnTwo.addEventListener('mouseover', showSideBtnTwo)
   
   
   function hideSideMenu(){
    sideMenuOne.classList.remove("show")
    sideMenuTwo.classList.remove("show")
   }
   
   sideMenuOne.addEventListener('mouseleave', hideSideMenu)   
   sideMenuTwo.addEventListener('mouseleave', hideSideMenu)


   


   let  Buildings =document.getElementById(' Buildings')
   let Residentail =document.getElementById('Residentail')
   let  Retail =document.getElementById('Retail')


   function openPages1(){
    let url = 'project-highrise.html '
    window.open(url)  
    
}
Buildings.addEventListener('click',  openPages1)

   function openPages2(){
    let url = 'project-residential.html'
    window.open(url)  
}
Residentail.addEventListener('click',  openPages2)


function openPages3(){
    let url = 'project-Retail.html '
    window.open(url)  
}

Retail.addEventListener('click',  openPages3)