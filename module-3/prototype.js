// object prototype
// function prototype

const obj = {

}

var arr = [1, 2, 3, 4, 1, 2, 4];
Array.prototype.findOccurances = function(){
    var obj = {};
    for (let i=0;i<this.length; i++) {
        if (obj[this[i]]) {
            obj[this[i]] += 1;
        } else {
            obj[this[i]] = 1;
        }
    }
    return obj;
}

function User(){
    this.showDetails = function(){
        console.log('id: '+this.id+' Name '+ this.name +"")
    }
}

function Student(name, id){
    this.name = name;
    this.id = id;
    User.call(this, name, id)
}

Student.prototype = new User();

const stu1 = new Student('Mantu', '2')
stu1.showDetails();

class UserClass{
    // constructor(name, id)
    showDetails(){
        console.log('id: '+this.id+' Name '+ this.name +"")
    }
}

class StudentClass extends UserClass{
    constructor(name, id){
        super(name, id)
        this.name = name;
        this.id = id;
    }
}

const stu = new StudentClass('Mantu', '1');
stu.showDetails()

// Map
// curry functions/closure

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// console.log(sum(2)(3)(4))
// var x = sum(2)
// var y = x(3)
// var result = y(5);





