function triangleClassification(a, b, c) {
    if (a == b && a == c) {
        return 'Equilateral'
    } else if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)) {
        return 'Isosceles'
    } else {
        return 'Scalene'
    }
}

console.log(triangleClassification(2, 3, 1))