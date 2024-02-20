//Лабораторная работа 4

class Figure{
    #x;
    #y;
    constructor(x,y){
        this.#x = x;
        this.#y = y;
    }
    square(){
        return undefined;
    }
    print(){
        console.log("square of figure: " + this.square());
    }
}

class Circle extends Figure{
    #r;
    constructor(x,y,r){
        super(x,y);
        this.#r = r;
    }
    square(){
        return this.#r ** 2 * Math.PI;
    }
}

class Rectangle extends Figure{
    #h;
    #w;
    constructor(x,y,h,w){
        super(x,y);
        this.#h = h;
        this.#w = w;
    }
    square(){
        return this.#h * this.#w;
    }
}

const f = new Figure(2,2);
f.print();
const c = new Circle(2,2,5);
c.print();
const r = new Rectangle(2,2,5,6);
r.print();