// 1. forEach
// Fungsi forEach adalah untuk melakukan loopingan / perulangan khusus pada array
// Parameternya ada 2 yaitu :
//   1. callbackfn : adalah fungsi yang menerima hingga 3 argument, forEach akan memanggil fungsi callbackfn satu kali setiap element dalam array
//   2. thisArg : adalah objek yang yang mengisi this dalam fungsi callbackfn, jika thisArg diilangkan, maka akan membuat nilai this menjadi undefined
// Tidak Mutasi
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
number.forEach(function (e) {
  console.log(e);
});

//2. shift
// Fungsi shift adalah untuk menghapus nilai / kalimat tedepan pada array, jika array kosong maka nilai tidak akan di ubah
// Parameternya tidak ditemukan
// Tidak terjadi mutasi
const arr = [1, 2, 3, 4];
arr.shift();
console.log(arr);

//3. unshift
// Fungsi unshift adalah untuk menambahkan nilai / kalimat tedepan pada array, dan menambah kembali nilai panjang array
// Parameternya ada 1 yaitu items yang dimana kalimat / nilai yang ingin ditambah kedalam suatu array
// Tidak terjadi mutasi
const resarr = ["Rizki", "Gandari"];
resarr.unshift("Akshal");
console.log(resarr);

//4. indexOf
// Fungsi indexOf adalah untuk mencari suatu nilai yang akan dicari pada suatu array, atau -1 jika tidak ada
// Parameternya ada 2 yaitu :
//    1. searchElement adalah nilai yang akan ditemukan didalam array
//    2. fromIndex untuk memulai pencarian, jika formIndex dihilangkan, maka pencarian akan dimulai dari indeks 0
// Mutasi tidak ditemukan
const kalimat = ["Akshal", "Rizki", "Gandari"];
console.log(kalimat.indexOf("Gandari"));

//5. pop
// Fungsi pop adalah untuk menghapus nilai / kalimat akhir pada suatu array, jika array tidak ada maka array tidak akan berubah
// Tidak ada parameter
// Tidak ada mutasi
const exPop = ["Akshal", "Rizki", "Gandari"];
exPop.pop();
console.log(exPop);
