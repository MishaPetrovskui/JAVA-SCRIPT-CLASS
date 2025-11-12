let active = 1;
document.querySelector("button").addEventListener("click", ()=>{
    let activeted = document.querySelector("#traffic").getElementsByClassName("circle")[active-1]
    let remove = document.querySelector("#traffic").getElementsByClassName("circle")[active-2]
    active++
    if (active == 1)
    {
        activeted.classList.add("active")
        remove.classList.remove("active")
    }
    else if (active == 2)
    {
        activeted.classList.add("active")
        remove.classList.remove("active")
    }
    else if (active == 3)
    {
        activeted.classList.add("active")
        remove.classList.remove("active")
    }
    else if (active == 4) 
    {
        activeted.classList.add("active")
        remove.classList.remove("active")
    }
    else
    {
        remove.classList.remove("active")
        active = 1
    }
})