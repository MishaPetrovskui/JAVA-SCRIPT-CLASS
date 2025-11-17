//for (let i = 1; i <= 100; i++) { document.querySelector("#taskProgress").value = i; await new Promise(resolve => setTimeout(resolve, 100)); }
function hexToRgb(hex) {
    // Remove the '#' if present
    const cleanHex = hex.startsWith('#') ? hex.slice(1) : hex;

    // Handle shorthand hex codes (e.g., #F00 becomes #FF0000)
    if (cleanHex.length === 3) {
        const r = cleanHex[0];
        const g = cleanHex[1];
        const b = cleanHex[2];
        return {
        r: parseInt(r + r, 16),
        g: parseInt(g + g, 16),
        b: parseInt(b + b, 16)
        };
    }

    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);

    return { r, g, b };
}

document.addEventListener("DOMContentLoaded", function() {
    let hexInput = document.querySelector(".hexInput");
    document.querySelector(".add-color").onclick = function() {
        let section = document.querySelector("section");
        let elements = document.createElement("article");
        elements.innerHTML = `
            <div class="color-display" style="width: 200px; height: 200px; background-color: rgb(${RInput.value},${GInput.value},${BInput.value}); margin-bottom: 20px;"></div>
            <div class="color-info">
                <p>R: <span id="RValue">${RInput.value}</span></p>
                <p>G: <span id="GValue">${GInput.value}</span></p>
                <p>B: <span id="BValue">${BInput.value}</span></p>
            </div>
        `;
        section.appendChild(elements);
        RInput.value = "";
        GInput.value = "";
        BInput.value = "";
    };
    document.querySelector(".add-color").onclick = function() {
        let hexInput = document.querySelector(".hexInput");
        let section = document.querySelector("section");
        let elements = document.createElement("article");
        let rgb = hexToRgb(hexInput.value);
        if (GInput.value == 0 || BInput.value == 0 || RInput.value == 0) {
            elements.innerHTML = `
                <div class="color-display" style="width: 200px; height: 200px; background-color: ${hexInput.value}; margin-bottom: 20px;"></div>
                <div class="color-info">
                    <p>Hex: <span id="hexValue">${hexInput.value}</span></p>
                    <p>R: <span id="RValue">${rgb.r}</span></p>
                    <p>G: <span id="GValue">${rgb.g}</span></p>
                    <p>B: <span id="BValue">${rgb.b}</span></p>
                </div>
            `;
            console.log(hexInput.value);
            section.appendChild(elements);
            hexInput.value = "";
        }
        else if (hexInput.value == "#000000") {
            elements.innerHTML = `
                <div class="color-display" style="width: 200px; height: 200px; background-color: rgb(${RInput.value},${GInput.value},${BInput.value}); margin-bottom: 20px;"></div>
                <div class="color-info">
                    <p>R: <span id="RValue">${RInput.value}</span></p>
                    <p>G: <span id="GValue">${GInput.value}</span></p>
                    <p>B: <span id="BValue">${BInput.value}</span></p>
                </div>
            `;
            section.appendChild(elements);
            RInput.value = "";
            GInput.value = "";
            BInput.value = "";
        }
    };
});