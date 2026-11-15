var student = {id:"12",name:"yogeesh",greet:function(){
    console.log(this.id + "says hi")
}}
console.log(student.name)
student.greet()

function prod(a,b){
    var x=a+b
    console.log(x)
}
prod(10,20)

function param(f,name){
    console.log(name)
    f(10,20)
}

param(function(a,b){
    let c=(a+b)
    console.log("hi" + c);

}, "vishal")


var arr=[10,20,30,40]
var f=arr.splice(0,2,80)
console.log(f)
console.log(arr)