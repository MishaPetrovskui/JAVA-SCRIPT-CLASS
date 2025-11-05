let rectangleShape = {
    LeftTop: {x: 10, y: 5},
    RightBottom: {x: 20, y: 15},
    printCoordinates: function() {
        alert(`Left Top: (${this.LeftTop.x}, ${this.LeftTop.y})`);
        alert(`Right Bottom: (${this.RightBottom.x}, ${this.RightBottom.y})`);
    },
    getArea: function() {
        return (this.RightBottom.x - this.LeftTop.x) * (this.RightBottom.y - this.LeftTop.y);
    },
    getPerimeter: function() {
        return 2 * ((this.RightBottom.x - this.LeftTop.x) + (this.RightBottom.y - this.LeftTop.y));
    },
    getSquere: function() {
        return (this.RightBottom.x - this.LeftTop.x) * (this.RightBottom.y - this.LeftTop.y);
    },
    getHeight: function() {
        return this.RightBottom.y - this.LeftTop.y;
    },
    getWidth: function() {
        return this.RightBottom.x - this.LeftTop.x;
    }
};

function randInt(a,b)
{
    return Math.floor(Math.random() * (b - a)) + a;
}

function one(a,b)
{
    let array = new Array()

    for (let i = 0; i < 5;i++)
    {
        if (array.find(((element) => element == a[i])) === undefined)
            array.push(a[i])
    }
    for (let i = 0; i < 5;i++)
    {
        if (array.find(((element) => element == b[i])) === undefined)
            array.push(b[i])
    }

    return (array)
}

function two(a,b)
{
    let array = new Array()
    for (let i = 0; i < 5; i++)
        if (b.find(((element) => element == a[i])) !== undefined && array.find(((element) => element == a[i])) === undefined)
            array.push(a[i])

    return (array)
}

function three(a,b)
{
    let array = new Array()
    for (let i = 0; i < 5; i++)
        if (b.find(((element) => element == a[i])) === undefined)
            array.push(a[i])

    return (array)
}

function docWriteOne(id)
{
    if (id == 0)
    {
        document.write("\n"+array1)
        document.write("\n"+array2)
    }
    else if (id == 1)
        document.write("\n"+one(array1,array2))
    else if (id == 2)
        document.write("\n"+two(array1,array2))
    else if (id == 3)
        document.write("\n"+three(array1,array2))
    else 
        alert("none")

}

let array1 = new Array();
for (let i = 0; i < 5; i++)
    array1.push(randInt(1,10))
let array2 = new Array();
for (let i = 0; i < 5; i++)
    array2.push(randInt(1,10))

console.log(array1)
console.log(array2)
console.log(one(array1,array2))
console.log(two(array1,array2))
console.log(three(array1,array2))
