function soma(a, b) {
    if (a == typeof int || b == typeof int) {
        console.log(a);
    }
    return a + b
}

console.log(soma(1, 2))
console.log(soma(1, 3)) // dava NaN porque não tinha na função a parte do b
console.log(soma(1, 5)) // dava NaN porque não tinha a nem b

function concat(a, b) {
    if (a == undefined || b == undefined) {
        return 0;
    }
    return a + b
}
console.log(concat("Hello ", "World"))
console.log(concat(""))
console.log(concat())

function odd_demo2(a, b) {
    if (a == "" || b == "") {
        console.log("A space was detected");
    } else if (a == undefined && b == undefined) {
        console.log("Empty");
    } else if (b == undefined) {
        console.log(a);
    } else {
        console.log("Both variables undefined");
    }
}
odd_demo2(1)
odd_demo2("hello", 3)
odd_demo2(2)

function element(index) {
    var arr = [1, 2, 3]
    return arr[index]
}
console.log(element(1));

function sample(c) {
    console.log("sample");
}
sample()