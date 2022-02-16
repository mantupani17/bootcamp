function applyMethod(...args){
    console.log(args)
}
var x = 10
var y = 101
var z = 100
var p = 11
applyMethod.apply(this, [x, y, z, p])