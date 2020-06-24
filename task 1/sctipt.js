let array1 = [1,2,3,4,5,6,7,8,9];
console.log(array1);

let array2 = ['Jazz', 'bluz'];
array2.push('Rock-n-Roll');
console.log(array2);
array2[1]= 'Classic';
console.log(array2);

let array3 = ['Jazz','Bluz', 'Rock-n-roll'];
array3.shift();
console.log(array3);

let array4 = ['Jazz','Bluz', 'Rock-n-roll'];
array4.unshift('Rap', 'Reggae');
console.log(array4);


let array5 = [1,2,3,4,5,6,7,8,9];
function find(arr, value){
    for (let i = 0; i < arr.lenght; i++){
        if(arr[i] == value) return i;
    } return -1;
}
console.log(find(array5,3,6));
