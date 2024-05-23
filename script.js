document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formSegitiga');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const side1 = parseFloat(document.getElementById('side1').value);
        const side2 = parseFloat(document.getElementById('side2').value);
        const side3 = parseFloat(document.getElementById('side3').value);
        
        if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
            alert('Sisi tidak boleh kosong');
            return;
        }
        
        if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
            alert('Tidak bisa menggunakan bilangan negatif');
            return;
        }
        
        const perimeter = side1 + side2 + side3;
        const s = perimeter / 2; // Semiperimeter for Heron's formula
        const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        
        const resultDiv = document.getElementById('hasil');
        resultDiv.innerHTML = `
            <p>Keliling: ${perimeter} cm</p>
            <p>Luas: ${area.toFixed(2)} cm²</p>
        `;
    });
});
