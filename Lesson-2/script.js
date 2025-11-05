// let a = prompt("You name: ", "NN")
        // alert(`Welcome back, ${a}`)
        // console.log(`Welcome back, ${a}`)
        // console.warn(`Welcome back, ${a}`)
        // console.error(`Welcome back, ${a}`)
        // let a = prompt("Ведіть рівність").split("+")
        // alert(`${a[0]} + ${a[1]} = ${Number(a[0])+Number(a[1])}`)

function one(a)
{
    let ind = 0;
    let array = new Int32Array(100);
    for (let i = 2; i < a; i++)
    {
        if (a % i == 0)
            array[ind++] = Number(i)
    }
    let newarray = new Int32Array(ind);
    for(let i = 0; i < ind; i++)
    {
        newarray[i] = array[i]
    }
    return newarray
}

function two(a)
{
    let max = 0
    if (a[0] > a[1])
    {
        for (let i = 2; i < a[0]; i++)
        {
            if (a[0] % i == 0 && a[1] % i == 0)
                max = Number(i)
        }
    }
    else 
        for (let i = 2; i < a[1]; i++)
        {
            if (a[0] % i == 0 && a[1] % i == 0)
                max = Number(i)
        }
    
    
    alert(max)
}

function three(a)
{
    let dodatni = 0
    let vidjemni = 0
    let nuls = 0
    let parni = 0
    let neparni = 0
    for(let i = 0; i < 10; i++)
    {
        if (a[i] > 0)
            dodatni++
        if (a[i] < 0)
            vidjemni++
        if (a[i] == 0)
            nuls++
        if (a[i] % 2 == 0)
            parni++
        else if (a[i] % 1 == 0)
            neparni++
    }
    alert(`Доданні: ${dodatni}\nВід'ємні: ${vidjemni}\nНулі: ${nuls}\nПарні: ${parni}\nНепарні: ${neparni}`)
}
function four()
{
    let rand = Number(50)
    let answer
    let bottom = Number(0)
    let top = Number(100)
    while (true)
    {
        answer = prompt("Число: "+Number(rand)+"; Введіть вашу відповідь (>'<', '<', '='):");
        if (answer === ">")
        {
            bottom = Number(rand);
            rand = Number(Math.floor(Math.random() * (top - bottom + 1)) + bottom);
        }
        else if (answer === "<")
        {
            top = Number(rand);
            rand = Number(Math.floor(Math.random() * (top - bottom + 1)) + bottom);
        }
        else if (answer === "=")
        {
            alert(`Я вгадав ваше число: ${Number(rand)}`);
            break;
        }
        else
        {
            alert("Невірний ввід. Спробуйте ще раз.");
        }
    }
}
