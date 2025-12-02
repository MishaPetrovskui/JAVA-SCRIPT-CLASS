document.addEventListener("DOMContentLoaded", () => {
    let id = 1
    let firstId = 1
    let interval = setInterval(()=>{
        fetch('https://meowfacts.herokuapp.com/?count=3&lang=rus').then(response => response.json()).then(meowFact => {
            let text = document.createElement("p")
            text.innerText = `${id++}. ${meowFact.data}`
            text.classList.add(`mf${id}`)
            document.querySelector(`.arrayOfFacts`).prepend(text)

        });
        
        while (document.querySelector(".arrayOfFacts").children.length > 5)
        {
            document.querySelector(`.arrayOfFacts`).lastChild.remove()
            console.log(document.querySelector(`.arrayOfFacts`).lastChild)
            console.log(document.querySelector(".arrayOfFacts").children.length)
        }
    }, 1000)

    
})