// variabel untuk menyimpan porsimakan kucing//nilai awal nol(0)
let porsi = 0

// siapkan aset suara di variabel 
let suaramakan = new Audio("makan.mp3")
let suaramain = new Audio("main.mp3")
let suaraReset = new Audio("reset.mp3")

//efek suara makan



function berimakan() {
  suaramakan.currentTime = 0
  suaramakan.play()
  // Tamabah porsi makan +1
  // 1. ambil teks dari input angka kotak teks
  let teksinput = document.getElementById(`input-makanan`).value
  
  // 2. ubah string menjadi angka
  let jumlahmakanan = Number(teksinput)
  // 3. operasi penjumlahan angka
  porsi = porsi + jumlahmakanan
  
  updatetampilan()
  
}
//fungsi mengajak main kucing(porsi di kurangi)
function ajakmain() {
  // mengurangi porsi 1 tapi cegah jangn sampai negatif 
  suaramain.currentTime = 0
  suaramain.play()
  if (porsi > 0) {
    porsi = porsi - 1
    
    
    
  }
  
  
  
  updatetampilan()
}



//fungsi untuk memperbarui tampilan html 
function updatetampilan() {
  // update angka porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 6) {
    // gantu gambar kucing menjadi lucing gemuk
    document.getElementById('foto-kucing').src = "gambar/kucing3.png"
    
    //menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing gemuk💋"
    
  } else if (porsi >= 5) {
    document.getElementById('foto-kucing').src = "gambar/kucing2.png"
    
    //menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing sedang💃"
  } else {
    //gantu gambar kuving menjadi kucing kurus
    document.getElementById('foto-kucing').src = "gambar/kucing1.png"
    
    //menampilkan tulisan kucing kurus
    document.getElementById('status-kucing').innerText = "kucing sedang💃"
  }
  
  
}

function reset() {
  // efek suara reset
  suaraReset.currentTime = 0
  suaraReset.play()
  
  porsi = 0
  
  updatetampilan()
}