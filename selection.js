const SeleksiNilai = (nilaiAwal, nilaiAkhir, [...data]) => {
  if (nilaiAwal >= nilaiAkhir)
    return "Nilai akhir harus lebih besar dari nilai awal";
  if (data.length <= 4) return "Jumlah data dalam dataArray harus lebih dari 5";
  const praRes = data.sort(function (a, b) {
    return a - b;
  });
  let result = praRes.filter(function (num) {
    return num >= nilaiAwal && num <= nilaiAkhir;
  });
  return result;
};

console.log(SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));
console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
console.log(SeleksiNilai(4, 17, [2, 25, 4]));
