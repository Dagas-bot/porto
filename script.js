document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi form (contoh sederhana)
    if (name && email && message) {
        // Tampilkan pesan sukses
        document.getElementById('form-message').textContent = 'Terima kasih,' +name+'! Pesan Anda telah diterima.';
        document.getElementById('form-message').style.color = 'green';

        // Reset form
        document.getElementById('contact-form').reset();
    } else {
        // Tampilkan pesan error jika ada field yang kosong
        document.getElementById('form-message').textContent = 'Harap isi semua field!';
        document.getElementById('form-message').style.color = 'red';
    }
});