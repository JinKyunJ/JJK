function Person(name, first, second, third){
    this.name=name;
    this.first=first;
    this.second=second;
    this.third=third;
    this.sum = function(){
        return this.first+this.second+this.third;
    }
}

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

var d1 = new Date('2023-11-07');
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth());

console.log('Date', Date);

function Person(){
    this.name='kim';
    this.first=10;
    this.second=20;
    this.third=30;
    this.sum=function(){
        return this.first+this.second+this.third;
    }
}
console.log('Person()', Person());
// constructor 생성자

console.log('new Person()', new Person());