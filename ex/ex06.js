function repeat(n,f) {
    for (var i=0; i<n; i++) {
        f(i);
    }
}

let logMultiple0f3 = function(i) {
    if(i%3===0) {
        console.log(i);
    }
}
repeat(10,logMultiple0f3);