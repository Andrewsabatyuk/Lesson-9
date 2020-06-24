let e = [];
for(i = 0; i < 20; i++){
    e.push(i);
}function filterRange(array, a, b){
    let newArr = array.slice(a,b);
    return newArr;
}
console.log(filterRange(e,3,10));
