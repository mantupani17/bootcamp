function callMethod(...args){
    console.log(args)
}
var x = 10
var y = 101
var z = 100
var p = 11
callMethod.call(this, x, y, z, p)