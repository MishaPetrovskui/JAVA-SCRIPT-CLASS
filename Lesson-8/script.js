document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("div.overSite").style.display = "none"
    document.querySelector("form.task").style.display = "block"
    let user = { login: "", password: "", remember: "" }
    let output = localStorage.getItem("user")
    if (output !== null)
    {
        console.log(output)
        output = JSON.parse(output)
        document.querySelector("form.task").style.display = "none"
        document.querySelector("div.overSite").style.display = "block"
        document.querySelector("p.InSiteP").innerHTML = `Hello, ${output.login}!`
        document.querySelector("button.SignOut").addEventListener("click", ()=>{
            document.querySelector("form.task").style.display = "block"
            document.querySelector("div.overSite").style.display = "none"
            output.remember = false
        })
        if (output.remember)
        {
            document.querySelector("input.IPlogin").value = output.login
            document.querySelector("input.IPpassword").value = output.password
            document.querySelector("input.remember").checked = output.remember
        }
    }
    document.querySelector("form").addEventListener("submit", (event)=>{
        event.preventDefault()
        user.login = document.querySelector("input.IPlogin").value
        user.password = document.querySelector("input.IPpassword").value
        user.remember = document.querySelector("input.remember").checked
        localStorage.setItem("user", JSON.stringify(user))
        console.log(localStorage.getItem("user"))
        event.target.submit()
    })
})