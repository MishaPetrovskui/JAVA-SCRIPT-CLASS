function sleap(ms)
{
    return new Promise(resolve => setTimeout(resolve,ms))
}

document.addEventListener("DOMContentLoaded", (event)=>{
    fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
    .then(response => response.json())
    .then(async json => {
        console.log(json)
        document.querySelector(".currenciesOne").disabled = true
        document.querySelector(".currenciesTwo").disabled = true
        for (code in json)
        {
            let a = document.createElement('option')
            let b = document.createElement('option')
            a.textContent = json[code]
            a.value = code
            b.textContent = json[code]
            b.value = code
            document.querySelector(".currenciesOne").append(a)
            document.querySelector(".currenciesTwo").append(b)
        }
        document.querySelector(".currenciesOne").disabled = false
        document.querySelector(".currenciesTwo").disabled = false
        await sleap(2000)
        //while (true)
        {
            //setInterval(() =>{console.log(document.querySelector(".currenciesOne").value)},2000)
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${document.querySelector(".currenciesOne").value}.json`).then(response => response.json())
            .then(async data => { 
                let valueOne = document.querySelector(".currenciesOne").value
                console.log(data)
            })
        }
    })
})