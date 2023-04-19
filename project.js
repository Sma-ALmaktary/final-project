let highBuildings = document.getElementById('high-buildings')
let resident = document.getElementById('resid')
let reil = document.getElementById('re-il')

function openHighBuildings(){
    let url = 'project-highrise.html'
    window.open(url)
}

highBuildings.addEventListener('click', openHighBuildings)




resident.onclick = function(){
    let url = 'project-residential.html'
    window.open(url)
}


reil.onclick = function(){
    let url = 'project-retail.html'
    window.open(url)
}




let btn = document.getElementById('btn')

window.onscroll = function(){
    if(scrollY >= 400){
        btn.style.display = "block";
    } 
    else{
        btn.style.display = 'none';
    }
}


 btn.onclick = function () {
    scroll({
        top: 0,

        behaviour: "smooth",
    })
}
