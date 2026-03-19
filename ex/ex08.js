function repeat(n,f) {
    for (var i=0; i<n; i++) {
        f(i);
    }
}

let logStar = function(i) {
        let star = "";
        for(var j = 0; j<=i; j++){
            star += "*";
        }
        console.log(star);
}
repeat(5,logStar);