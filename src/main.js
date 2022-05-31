/* Header Scroll - Toggling Navbar class "colored" */
// var navbar = $(".navbar");
// var header = $("#header");

// $("#header").scroll(function () {
//     console.log("Header Scrolled");
// });

var n = 8;
// var a = [5, 3, 10, 30, 26, 13];
var a = [1, 5, 2, 10, 4, 7, 3, 20];
console.log("Hi");

var odd = [];
var even = [];
var even5 = [];

for (let i = 0; i < n; i++) {
    if (a[i] % 2 == 0) {
        if (a[i] % 5 == 0) even5.push(a[i]);
        else even.push(a[i]);
    } else odd.push(a[i]);
}

function compare(a, b) {
    return b - a;
}
 
function compareEven(a1, b1) {
    return a.indexOf(b1)-a.indexOf(a1);
}

even.sort(compareEven);
even5.sort(compare);

even5.concat(even, odd);

