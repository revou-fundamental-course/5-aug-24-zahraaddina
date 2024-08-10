//ini javascript
// Fungsi untuk menghitung BMI
function calculateBMI() {
    // Mendapatkan nilai input dari pengguna
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m

    // Validasi input
    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert('Silakan masukkan berat badan dan tinggi badan yang valid');
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);
    displayBMI(bmi);
}

// Fungsi untuk menampilkan hasil BMI
function displayBMI(bmi) {
    const bmiValueElement = document.getElementById('bmiValue');
    const bmiStatusElement = document.getElementById('bmiStatus');

    bmiValueElement.textContent = `BMI Anda: ${bmi.toFixed(1)}`;

    // Menentukan status BMI
    let status;
    if (bmi < 18.5) {
        status = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal (ideal)';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Kelebihan berat badan';
    } else {
        status = 'Kegemukan (Obesitas)';
    }

    bmiStatusElement.textContent = `Status berat badan Anda: ${status}`;
}
