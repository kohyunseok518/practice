function repeat(n,f) {
    for (var i=0; i<n; i++) {
        f(i);
    }
}

let logDouble = function(i) {
        console.log(i*2);
}
repeat(5,logDouble);