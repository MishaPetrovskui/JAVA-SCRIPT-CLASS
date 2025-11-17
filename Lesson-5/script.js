document.getElementById("generate").addEventListener("click", function() {
    const year = document.getElementById("year").value;
    const month = document.getElementById("month").value;
    generateCalendar(year, month);
});

function generateCalendar(year, month) {
    const table = document.querySelector("table");
    table.innerHTML = "";
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    let date = 1;
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                cell.textContent = "";
            } else if (date > daysInMonth) {
                cell.textContent = "";
            } else {
                cell.textContent = date++;
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

