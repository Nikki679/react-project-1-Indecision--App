const user={
    name:'Nikki',
    cities:['bangalore','jaipur','bokaro'],
    getCityname(){
        return this.cities.map((city)=>this.name +' lived in '+ city);
    }
}
console.log(user.getCityname());

const multiplier={
    numbers:[3,5,7,'9'],
    multiplyBy:2,
    multiply()
    {
       return this.numbers.map((num) => num * this.multiplyBy);
    }
}
console.log(multiplier.multiply());
