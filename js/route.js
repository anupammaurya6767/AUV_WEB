let arr = document.querySelectorAll(".menu-container ul");
let sectBtn = arr[0].children;
let prev = sectBtn[0];
for(let i = 0 ; i < sectBtn.length ; i++)
{
    console.log(i);
    sectBtn[i].addEventListener("click",function(e){
        prev.classList.remove("active");
        this.classList.add("active");
        prev = this;
    })
}
