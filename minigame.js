// variabel untuk menyimpan porsimakan kucing//nilai awal nol(0)
let porsi = 0

function berimakan() {
  // Tamabah porsi makan +1
  porsi = porsi + 1
  // update angka porsi makan
  document.getElementById('teks-porsi').innerText = porsi
  
  if (porsi >= 6) {
    // gantu gambar kucing menjadi lucing gemuk
    document.getElementById('foto-kucing').src = "gambar/kucing3.png"
    
    //menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing gemuk💋"
    
  } else if(porsi >= 5){
    document.getElementById('foto-kucing').src = "gambar/kucing2.png"
    
    //menampilkan tulisan kucing gemuk
    document.getElementById('status-kucing').innerText = "kucing sedang💃"
    
    
  }
}