function repeat(n,f) {
    for (var i=0; i<n; i++) {
        f(i);
    }
}

function logAll(i) {
    console.log(i);
}

repeat(5,logAll);