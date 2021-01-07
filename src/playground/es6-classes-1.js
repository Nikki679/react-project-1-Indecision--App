class Person{
    constructor(name='Anonymous',age=0)
    {
        this.name=name;
        this.age=age;
    }
    getGreeting()
    {
        return `Hi this is ${this.name}. `
    }
    getDescription()
    {
        return `${this.name} is ${this.age} years old!`
    }
}
class traveller extends Person{
    constructor(name,age,nameLocation)
    {
        super(name,age);
        this.nameLocation=nameLocation;
    }
    hasNameLocation()
    {
        return !!this.nameLocation;
    }
    getGreeting(){
        let greeting=super.getGreeting();
        if(this.hasNameLocation())
        {
            greeting += `I'm visiting from ${this.nameLocation}`
        }
        return greeting;
    }
    
}
const inst1=new traveller('nikki',25,'Bokaro');
const inst2=new traveller();
console.log(inst1.getGreeting());
console.log(inst2.getGreeting());