// let a = prompt("You name: ", "NN")
        // alert(`Welcome back, ${a}`)
        // console.log(`Welcome back, ${a}`)
        // console.warn(`Welcome back, ${a}`)
        // console.error(`Welcome back, ${a}`)
        // let a = prompt("Ведіть рівність").split("+")
        // alert(`${a[0]} + ${a[1]} = ${Number(a[0])+Number(a[1])}`)

function one(a){ return a*a }
function two(a){ return (Number(a[0])+Number(a[1]))/2 }
function three(a){ return a*a }
function four(a){ return a*0.621371 }
function five(a){ 
        let sum = Number(a[0])+Number(a[1]); 
        let minus = Number(a[0])-Number(a[1]);
        let division = Number(a[0])/Number(a[1]);
        let multiplication = Number(a[0])*Number(a[1]);
        return alert(a[0]+"+"+a[1]+"="+sum+";\n"+
                a[0]+"-"+a[1]+"="+minus+";\n"+
                a[0]+"*"+a[1]+"="+multiplication+";\n"+
                a[0]+"/"+a[1]+"="+division+";\n"
) }
function six(a)
{
        let minus = 0-Number(a[1]);
        alert(Number(a[0])+"*x+"+Number(a[1])+"=0\n"+
                Number(a[0])+"*x="+minus+"\n"+"x="+minus+"/"+Number(a[0])+"\nx="+
                Number(0-Number(a[1])) / Number(a[0])+"\nAnswer: "+Number(0-Number(a[1])) / Number(a[0])
        )
}
function seven(a)
{
        let hour = 24 - Number(a[0]);
        let minutes = 60 - Number(a[1]);
        let seconds = 60 - Number(a[2]);
        if (seconds > 0) minutes--;
        if (minutes > 0) hour--;
        if (seconds == 60) { minutes++; seconds = 0 }
        if (minutes == 60) { hour++; minutes = 0 }
        alert("YOUR TIME: "+a[0]+":"+a[1]+":"+a[2]+"\nFOR NEW DAY: "+hour+":"+minutes+":"+seconds)
}
function eight(a)
{
        alert(Math.trunc((a % 100) / 10))
}
