const gridTraveller = (m, n, memo = {}) => {
    if (m === 0 || n === 0) return 0;
    if (m ===1 && n === 1) return 1;

    return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);


}

console.log(gridTraveller(1,1));
console.log(gridTraveller(2,3));
console.log(gridTraveller(3,2));
console.log(gridTraveller(3,3));
console.log(gridTraveller(18, 18));