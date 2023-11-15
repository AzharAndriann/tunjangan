// Function untuk menghitung gaji
function menghitungGaji(menikah, punyaAnak) {
    const gajiPokok = 3500000;
    const tunjanganMenikah = menikah ? 500000 : 0;
    const tunjanganPunyaAnak = punyaAnak ? 500000 : 0;

    const totalTunjangan = gajiPokok + tunjanganMenikah + tunjanganPunyaAnak;

    // Menyesuaikan pajak untuk karyawan yang belum menikah
    const nilaiPajak = menikah ? 0.05 : 0;
    const pajak = totalTunjangan * nilaiPajak;

    const gajiBersih = totalTunjangan - pajak;
    return gajiBersih;
}

// Details
const karyawan1 = menghitungGaji(true, false); // menikah
const karyawan2 = menghitungGaji(true, true); // menikah dan punya anak
const karyawan3 = menghitungGaji(false, false); // Sendiri

// Hasil
console.log("Karyawan 1 (sudah menikah):", karyawan1);
console.log("Karyawan 2 (sudah menikah):", karyawan1);
console.log("Karyawan 3 (sudah menikah dan punya anak):", karyawan2);
console.log("Karyawan 4 (sudah menikah dan punya anak):", karyawan2);
console.log("Karyawan 5 (single):", karyawan3);