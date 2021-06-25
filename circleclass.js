class circle{
    constructor(r){
        this.r=r;
    }
    circumference(){
        console.log("circumference"+" :"+(this.r*3.14*2).toFixed(2));
    }
}
let x=new circle(10);
let x1=new circle(12);
x.circumference();
x1.circumference();