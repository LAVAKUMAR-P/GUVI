class movie{
    constructor(name,studio,rating){
        this.name=name;
        this.studio=studio;
        this.rating=rating;
    }
    out(){
        console.log("name"+" :"+this.name);
        console.log("studio"+" :"+this.studio);
        console.log("rating"+" :"+this.rating);
    }
}
let x = new movie("Casino Royale","Eon Productions","PG13");
let x1= new movie("NANBAN","GEMINI FLIM CIRCLE","PG13");
x.out();
x1.out();