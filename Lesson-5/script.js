let days = new Array(); days = [ "MON", "TUE", "WED", "THU", "FRI", "SUT", "SUN"]
document.addEventListener("DOMContentLoaded", ()=>
{
    let table = document.querySelector("table")
    let curentRow = 0
    let curentCol = 0
    let row = null
    curentCol = 0
    curentRow = 0;
    for (let j = 0;j<35;j++)
    {
        if (curentCol == 0)
        {
            row = document.createElement("tr")
            table.append(row)
        }
        row.append(document.createElement("td"))
        curentCol++;
        if (curentCol >= 7)
        {
            curentCol = 0
            curentRow++;
        }
    }
})
