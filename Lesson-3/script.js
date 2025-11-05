let rectangleShape = {
    LeftTop: {x: 10, y: 10},
    RightBottom: {x: 60, y: 10},
    printCoordinates: function() {
        alert(`Left Top: (${this.LeftTop.x}, ${this.LeftTop.y})`);
        alert(`Right Bottom: (${this.RightBottom.x}, ${this.RightBottom.y})`);
    },
    getArea: function() {
        return (this.RightBottom.x - this.LeftTop.x) * (this.RightBottom.y - this.LeftTop.y);
    },
    getPerimeter: function() {
        return 2 * ((this.RightBottomX.x - this.LeftTopX.x) + (this.RightBottomY.y - this.LeftTopY.y));
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