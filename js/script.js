document.getElementById('hitungBMI').addEventListener('click', hitungBMI);

function hitungBMI() {
    const beratBadan = parseFloat(document.getElementById('beratBadan').value);
    const tinggiBadan = parseFloat(document.getElementById('tinggiBadan').value) / 100; // Convert cm to meters
    const usia = parseInt(document.getElementById('usia').value);

    if (!beratBadan || !tinggiBadan || isNaN(usia)) {
        alert('Mohon masukkan berat badan, tinggi badan, dan usia yang valid');
        return;
    }

    const bmi = beratBadan / (tinggiBadan * tinggiBadan);
    let statusBeratBadan = '';
    let keterangan = '';

    if (bmi < 18.5) {
        statusBeratBadan = 'Kekurangan berat badan';
        keterangan = `
            Anda berada dalam kategori underweight atau kekurangan berat badan.<br><br>
            <strong>Bahaya dari Kekurangan Berat Badan:</strong>
            <ul>
                <li>Sistem Kekebalan Tubuh Lemah: Orang dengan berat badan kurang mungkin memiliki sistem kekebalan tubuh yang lemah, sehingga lebih rentan terhadap infeksi.</li>
                <li>Kekurangan Nutrisi: Kurangnya lemak tubuh dapat menyebabkan kekurangan vitamin dan mineral esensial.</li>
                <li>Masalah Kesehatan: Risiko mengalami anemia, osteoporosis, gangguan kesuburan, dan gangguan pertumbuhan pada anak-anak.</li>
                <li>Masalah Fisik dan Mental: Rasa lelah berlebihan, lemah otot, dan penurunan fungsi kognitif.</li>
            </ul><br>
            <strong>Cara Mengatasi Underweight:</strong>
            <ul>
                <li>Pola Makan Sehat: Konsumsi makanan padat nutrisi yang kaya akan vitamin, mineral, protein, dan kalori. Contohnya, kacang-kacangan, biji-bijian, alpukat, susu penuh lemak, dan daging.</li>
                <li>Sering Makan: Makan dalam porsi kecil tapi sering sepanjang hari.</li>
                <li>Makanan Tinggi Kalori: Tambahkan makanan tinggi kalori ke dalam makanan seperti keju, selai kacang, dan minyak zaitun.</li>
                <li>Latihan Kekuatan: Latihan kekuatan dapat membantu membangun otot dan meningkatkan nafsu makan.</li>
                <li>Konsultasi dengan Dokter: Jika perlu, konsultasikan dengan ahli gizi atau dokter untuk rencana peningkatan berat badan yang tepat.</li>
            </ul>
        `;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        statusBeratBadan = 'Normal (ideal)';
        keterangan = `
            Anda berada dalam kategori Ideal. Tetap pertahankan berat badan anda!<br><br>
            <strong>Tips Mempertahankan Berat Badan Ideal:</strong>
            <ul>
                <li>Pola Makan Seimbang: Konsumsi makanan yang kaya akan buah-buahan, sayuran, protein tanpa lemak, dan biji-bijian utuh.</li>
                <li>Aktivitas Fisik Rutin: Pertahankan gaya hidup aktif dengan olahraga setidaknya 150 menit per minggu.</li>
                <li>Hindari Makanan Olahan: Batasi asupan makanan olahan, gula, dan lemak jenuh.</li>
                <li>Minum Air yang Cukup: Minum air yang cukup untuk menjaga tubuh tetap terhidrasi.</li>
                <li>Pantau Berat Badan: Cek berat badan secara rutin untuk memastikan tetap dalam rentang ideal.</li>
            </ul>
        `;
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        statusBeratBadan = 'Kelebihan berat badan';
        keterangan = `
            Anda berada dalam kategori overweight atau kelebihan berat badan.<br><br>
            <strong>Cara Diet yang Baik:</strong>
            <ul>
                <li>Makanan Rendah Kalori: Fokus pada makanan rendah kalori tetapi tinggi nutrisi, seperti sayuran, buah-buahan, dan protein rendah lemak.</li>
                <li>Porsi yang Terkontrol: Perhatikan porsi makan dan hindari makanan berlebih.</li>
                <li>Makanan Berserat Tinggi: Konsumsi makanan yang tinggi serat untuk membantu rasa kenyang lebih lama.</li>
                <li>Aktivitas Fisik: Tingkatkan aktivitas fisik, termasuk kombinasi antara latihan kardio dan kekuatan.</li>
                <li>Hindari Minuman Manis: Ganti minuman manis dengan air, teh, atau kopi tanpa gula.</li>
                <li>Konsultasi Profesional: Jika perlu, konsultasikan dengan ahli gizi atau dokter untuk panduan diet yang tepat.</li>
            </ul>
        `;
    } else {
        statusBeratBadan = 'Kegemukan (Obesitas)';
        keterangan = `
            Anda berada dalam kategori Obesitas.<br><br>
            Kondisi ini dapat meningkatkan risiko masalah kesehatan, seperti penyakit jantung, diabetes, dan tekanan darah tinggi. <br><br>
            <strong>Untuk mencapai berat badan yang lebih sehat, disarankan untuk mempertimbangkan langkah-langkah berikut:</strong>
            <ul>
                <li>Diet Sehat: Konsumsi makanan rendah kalori dan kaya akan nutrisi.</li>
                <li>Olahraga Rutin: Mulailah dengan aktivitas fisik ringan hingga sedang dan tingkatkan secara bertahap.</li>
                <li>Pendekatan Holistik: Fokus pada perubahan gaya hidup jangka panjang daripada diet jangka pendek.</li>
                <li>Dukungan Sosial: Minta dukungan dari teman, keluarga, atau kelompok penurunan berat badan.</li>
                <li>Pengawasan Medis: Dalam kasus obesitas yang parah, pengawasan dan intervensi medis mungkin diperlukan.</li>
                <li>Terapi atau Konseling: Terapis atau konselor dapat membantu mengatasi perilaku makan yang tidak sehat.</li>
            </ul>
        `;
    }

    // Menampilkan hasil BMI
document.getElementById('statusBeratBadan').innerHTML = statusBeratBadan;
document.getElementById('hasil').innerHTML = bmi.toFixed(1);
document.getElementById('keterangan').innerHTML = keterangan;

// Removing the hidden class from the result container
document.getElementById('hasilBMI').classList.remove('hidden');

// Scroll ke bagian hasil
document.getElementById('hasilBMI').scrollIntoView({ behavior: 'smooth' });
}