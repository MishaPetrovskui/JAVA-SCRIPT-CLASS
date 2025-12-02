document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault()
        fetch(`https://api.mcsrvstat.us/3/${document.querySelector(".IpServer").value}`).then(response => response.json()).then(server => {
            console.log(document.querySelector(".IpServer").value)
            console.log(server)
            let template = document.querySelector("section.Servers>template")
            let serverBlock = template.content.cloneNode(true)
            serverBlock.querySelector("img").src = server.icon
            serverBlock.querySelector("h3").innerText = server.ip
            serverBlock.querySelector("span").innerHTML = server.motd.html

            document.querySelector("section.Servers").prepend(serverBlock)

        });

        
        
    })
})