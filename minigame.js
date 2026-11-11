// variabel untuk menyimpan porsimakan kucing//nilai awal nol(0)
let porsi = 0

function berimakan() {
  // Tamabah porsi makan +1
  porsi = porsi + 1
  
  updatetampilan()()
  
}
//fungsi mengajak main kucing(porsi di kurangi)
function ajakmain() {
  //mengurangi porsi 1 tapi cegah jangn sampai negatif 
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
function reset(){
  porsi = 0
}