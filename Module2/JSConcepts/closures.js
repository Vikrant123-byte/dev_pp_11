var name = "steve";

function fun(){
    console.log(name);
}

fun()
//closure -a function bundled along with its lexical scope
// lexical scope  prev me next ka data ho
fuction fun(){
    var b = 20;
    console.log(name);
    function y(){
        console.log(b);
    }
    y();

}
x();


//fuction ka ander fuction  ha to nested ha nasted ha to clasures ha 
