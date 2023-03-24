const btn = document.querySelector('button');
const space =`<div class="space">ここに移動</div>`;
const old = '<li class="old"></li>';

document.addEventListener("dragstart", e => {
    dragged = e.target;
})
let id=0;
document.addEventListener("dragover", e => {
    e.preventDefault();
    console.log(e.target.tagName);
    if(e.target.id != id && e.target.tagName == "LI") {
        id = e.target.id;
        e.target.insertAdjacentHTML("afterend", space);
    } 
} ,once=true)

document.addEventListener("dragleave", ()=> {
    document.querySelectorAll(".space").forEach(elm => {
        elm.remove();
    })
})


document.addEventListener("drop", e => {
    e.preventDefault();
    if(e.target == dragged){
        e.target.style.opacity = "1";
    }
    else {
        dragged.parentNode.removeChild(dragged);
        e.target.after(dragged);
        dragged.style.opacity="1";
    }
    document.querySelectorAll(".space").forEach(elm => {
        elm.remove();
    })
    // e.dataTransfer.getData();

})

document.addEventListener("click", ()=> {
    document.addEventListener("mousemove", e=> {
        btn.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    })
})
