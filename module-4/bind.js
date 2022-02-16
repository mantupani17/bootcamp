(function(window, document){
    this.x = 'hello';
    function User(){
        this.getUserDetails = function() {
            // console.log(`Id - ${this.id} | Name - ${this.name}`);
            return {name: this.name, id: this.id};
        }
    }
    function Student(id, name){
        this.name = name;
        this.id = id;
        User.call(this);
    }
    function Employee(id, name){
        this.name = name;
        this.id = id;
        User.call(this);
    }
    Student.prototype = User.prototype;
    Employee.prototype = User.prototype;
    var stu = new Student(1, 'Mantu');
    var emp = new Employee(1, 'Mantu');
    this.student = stu.getUserDetails()
    this.employee = emp.getUserDetails()

    // function mainFunction(cb){
    //     console.log(this.x)
    //     cb()
    // }
    
    // mainFunction(function(){
    //     console.log(this.x)
    // })
    // console.log(this.x)
    window.addEventListener('load', function(e){
        var clickBtn = document.getElementById('click-me');
        clickBtn.addEventListener('click', function(e){
            console.log(this.student)
            console.log(this.employee)
        }.bind(this))
    })

    
})(window, document)


this.x = 10;
function checkBind(){
    console.log(this.x)
}
// console.log(this.x)
// const callCheckBindMethod = checkBind.bind(this)
// callCheckBindMethod();
// checkBind()




