//assignment 1
function type(num1) {
    // if (num1 > 0) {
    //     console.log("The number is positive");
    // } else {
    //     console.log("The number is negative");
    // }
    return (num1 > 0) ? "The number is positive" : "The number is negative";

}
console.log(type(4));

//assignment 2
let larNumber = (num2) => {
    lar = num2[0];
    for (i = 0; i < num2.length; i++) {
        if (num2[i] > lar) {
            lar = num2[i]
        }
    }
    return lar;
}
console.log(larNumber([2, 4, 6, 5, 9]))

//assignment 3
let obj3 = {
    radius: 3,
    height: 23,
    area: function() {
        return 3.14 * (obj3.radius ^ 2) * obj3.height
    }
}
console.log(obj3.area());

//assignment 4
let rectangle = {
    length: 3,
    breadth: 4,
    area1: area
}
let square = {
    length: 4,
    breadth: 2,
    area2: area
}

function area() {
    return this.length * this.breadth;
}
console.log(rectangle.area1())
console.log(square.area2())