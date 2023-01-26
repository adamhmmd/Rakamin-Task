// Start pembuatan array besar 

var array = Array.from({ length: 100}, () => Math.floor(Math.random () *50) + 1)
console.log(array);

// start pembuatan array ganjil genap 

array_ganjil = []
array_genap = []

for (var i=0;i<array.length;i++){
  if ((i+2)%2==0) {
    array_genap.push(array[i]);

  }
  else {
    array_ganjil.push(array[i]);
  }
}

console.log(array_ganjil);
console.log(array_genap);

// start pencarian nilai max pada masing masing array

function find_maximum(array) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= max){
      max = array[i]
    }
  }
  return max
}

let maximal_ganjil = find_maximum(array_ganjil)
let maximal_genap = find_maximum(array_genap)

console.log("nilai maximum pada array index ganjil adalah " + maximal_ganjil);
console.log("nilai maximum pada array index genap adalah " + maximal_genap);

// start pencarian nilain min pada masing masing array

function find_minimal(array) {
  let min = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= min){
      min = array[i]
    }
  }
  return min
}

let minimal_ganjil = find_minimal(array_ganjil)
let minimal_genap = find_minimal(array_genap)

console.log("nilai minimal pada array index ganjil adalah " + minimal_ganjil);
console.log("nilai minimal pada array index genap adalah " + minimal_genap);

// start perhitungan nilai total pada masing masing array

function find_sum(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++){
    let numbers = array[i]
    sum += numbers
  }
  return sum
}

let total_ganjil = find_sum(array_ganjil)
let total_genap = find_sum(array_genap)

console.log("nilai total pada array ganjil adalah " + total_ganjil);
console.log("nilai total pada array genap adalah " + total_genap);

// start perhitungan nilai rata rata pada masing masing array

function find_average(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++){
    let current_number = array[i]
    average += current_number
  }
  average = average / array.length
  return average
}

let rata_rata_ganjil = find_average(array_ganjil)
let rata_rata_genap = find_average(array_genap)

console.log("nilai rata rata pada array index ganjil adalah " + rata_rata_ganjil);
console.log("nilai rata rata pada array index genap  adalah " + rata_rata_genap);

// perbandingan nilai max

if (maximal_ganjil > maximal_genap)
  console.log("nilai maximal pada index ganjil lebih besar dari nilai maximal pada index genap");
else if (maximal_genap > maximal_ganjil)
  console.log("nilai maximal pada index genap lebih besar dari nilai maximal pada index ganjil");
else
  console.log("nilai maxmial pada kedua array sama");

// perbandingan nilai min

if (minimal_ganjil > minimal_genap)
  console.log("nilai minimal pada index ganjil lebih besar dari nilai minimal pada index genap");
else if (minimal_genap > minimal_ganjil)
  console.log("nilai minimal pada index genap lebih besar dari nilai minimal pada index ganjil");
else
  console.log("nilai minimal pada kedua array sama");

// perbandingan nilai total

if (total_ganjil > total_genap)
  console.log("nilai total pada index ganjil lebih besar dari nilai total pada index genap");
else if (total_genap > total_ganjil)
  console.log("nilai total pada index genap lebih besar dari nilai total pada index ganjil");
else
  console.log("nilai total pada kedua array sama");

// perbandingan nilai rata rata

if (rata_rata_ganjil > rata_rata_genap)
  console.log("nilai rata-rata pada index ganjil lebih besar dari nilai rata-rata pada index genap");
else if (rata_rata_genap > rata_rata_ganjil)
  console.log("nilai rata-rata pada index genap lebih besar dari nilai rata-rata pada index ganjil");
else
  console.log("nilai rata-rata pada kedua array sama");
