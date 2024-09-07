Berikut adalah langkah-langkah lengkap untuk membuat dan menjalankan proyek Laravel + Electron yang telah Anda buat, dari awal instalasi hingga akhir.

1. Instalasi Node.js dan NPM
Jika Anda belum menginstal Node.js, unduh dari nodejs.org dan instal. NPM sudah termasuk di dalamnya.

2. Instalasi Laravel
Jika Laravel belum terinstal di sistem Anda, instal menggunakan Composer. Pastikan Composer sudah terinstal terlebih dahulu. Jika belum, Anda bisa mengunduhnya di getcomposer.org.

Untuk instalasi Laravel, buka terminal dan jalankan:
composer create-project --prefer-dist laravel/laravel laravel-electron-app

3. Instalasi Electron
Pindah ke folder proyek Laravel:
cd laravel-electron-app

Instal Electron sebagai dependensi dev:
npm install electron --save-dev
