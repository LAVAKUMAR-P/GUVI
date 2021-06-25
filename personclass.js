class person{
    constructor(name,age,education,hobby){
        this.name=name;
        this.age=age;
        this.education=education;
        this.hobby=hobby;
    }
    person(){
        console.log("name"+" :"+this.name);
        console.log("Age"+" :"+this.age);
        console.log("Education"+" :"+this.education);
        console.log("hobby"+" :"+this.hobby);
    }
}
let x=new person ("KUMAR",21,"B.E","FOODBALL");
x.person();