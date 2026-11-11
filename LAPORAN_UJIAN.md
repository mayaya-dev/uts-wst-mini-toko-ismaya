# Laporan UTS Web Software Tools

**Nama:*Ismaya Raswanti*
**Nomor Induk Mahasiswa:*12523028*
**Kelas:*TI A*
**Tanggal:*11/11/2026*

## A. Bukti pemeriksaan masalah
| Masalah | Alat yang digunakan | Bukti pemeriksaan | Perkiraan penyebab | Perbaikan | Hasil setelah perbaikan |
|---|---|---|---|---|---|
| Produk tidak tampil| Browser DevTools (Console dan Network)| Request GET /api/barang menghasilkan HTTP 404. Pesan Gagal mengambil daftar produk muncul pada Console.Setelah diperiksa, server menyediakan endpoint /api/products.|Terdapat ketidaksesuaian URL endpoint antara frontend dan server. |Mengubah URL fetch dari /api/barang menjadi /api/products pada public/app.js. |Produk berhasil ditampilkan dan request /api/products menghasilkan HTTP 200 OK. |
| Tombol keranjang | Browser | Produk berhasil ditambahkan, jumlah produk yang sama bertambah, dan total belanja sesuai| Selector JavaScript .add-to-cart tidak sesuai dengan class tombol .add-button| Mengubah selector dari .add-to-cart menjadi .add-button| Tombol berhasil menambahkan produk ke keranjang|
| Total belanja | Browser dan pengujian otomatis (Node.js Test Runner)| Dua dari tujuh pengujian awal gagal, yaitu skenario satu jenis barang dengan jumlah dua dan dua jenis barang dengan jumlah berbeda.| Fungsi calculateTotal() hanya menjumlahkan harga satuan tanpa memperhitungkan jumlah barang.| Mengubah perhitungan total menjadi harga satuan dikalikan jumlah barang.| Tujuh dari tujuh pengujian berhasil setelah perbaikan.|

## B. Hasil pengujian
- Jumlah pengujian sebelum perbaikan:7 pengujian (5 berhasil dan 2 gagal).
- Jumlah pengujian berhasil setelah perbaikan:7 pengujian (7 berhasil, 0 gagal).
- Catatan perubahan pada fungsi yang diperiksa:
1. Pengujian awal menunjukkan kesalahan perhitungan total belanja pada skenario satu jenis barang dengan jumlah dua dan dua jenis barang dengan jumlah berbeda.
2. Memperbaiki fungsi calculateTotal() pada file src/cart.js dengan mengalikan harga satuan barang dengan jumlah barang. Sebelumnya, fungsi hanya menjumlahkan harga satuan sehingga total belanja tidak sesuai ketika jumlah barang lebih dari satu.

## C. Kualitas kode
- Temuan sebelum perbaikan: Pemeriksaan lint tidak menemukan masalah. Namun, pemeriksaan format menemukan ketidaksesuaian format penulisan kode pada file public/app.js dan src/cart.js.
- Perbaikan yang dilakukan: Melakukan pemformatan kode menggunakan Biome melalui perintah npx biome format --write public/app.js src/cart.js.
- Hasil pemeriksaan ulang: Pemeriksaan npm run lint, npm run format:check, dan npm run quality:check berhasil dijalankan tanpa menemukan masalah.

## D. Git
- Branch (jika membuat):master
- Ringkasan commit:   
1. 3151c11 chore: initial exam
2. 01337ce fix: correct cart total calculation
3. 4d81223 fix: correct product API endpoint
- Hasil pemeriksaan `git status`: nothing to commit, working tree clean.

## E. Pemakaian kecerdasan buatan (jika digunakan)
- Nama alat: ChatGPT
- Pertanyaan/instruksi yang diberikan: Meminta bantuan untuk menganalisis masalah pada project, memahami hasil pemeriksaan browser dan pengujian otomatis, serta mengidentifikasi penyebab kesalahan pada kode.
- Bagian jawaban yang diterapkan: Saran perbaikan fungsi calculateTotal(), penyesuaian URL endpoint API, dan perbaikan selector tombol tambah ke keranjang.
- Cara memeriksa apakah saran tersebut benar: Menjalankan kembali pengujian otomatis menggunakan npm run test:once dan memeriksa request API melalui Browser DevTools pada tab Network.

## F. Refleksi singkat
- Satu pelajaran paling penting dari ujian ini: Proses debugging perlu dilakukan secara bertahap dengan memeriksa bukti terlebih dahulu sebelum mengubah kode. Setelah perbaikan dilakukan, hasilnya perlu diuji kembali agar dapat dipastikan bahwa masalah benar-benar terselesaikan.
