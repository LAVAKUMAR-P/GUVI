class price{
    constructor(km){
        this.km=km;
        this.rs=20;
    }
    price(){
        console.log("price"+" :"+(this.km*this.rs).toFixed(2));
    }
}
let x=new price(10);
x.price();
let x1=new price(0.5);
x1.price();