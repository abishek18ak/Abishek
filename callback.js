function func(name,callback){
    console.log("Hi "+name);
    callback()
}

function greet()
{
    console.log("Good Morning");
}
func("Allen",greet)