function tampilkan(){
    let nama = document.querySelector("#nama");
    let kerja = document.getElementById("kerja");
    let kontak = document.getElementById("kontak");

    let tnama = document.getElementById("tnama");
    let tkerja = document.getElementById("tkerja");
    let tkontak = document.getElementById("tkontak");

    if (nama.value == ""|kerja.value == ""|kontak.value == ""){
        alert("Mohon lengkapi data anda")
    }else{
        tnama.innerHTML = nama.value;
        tkerja.innerHTML = kerja.value;
        tkontak.innerHTML = kontak.value;
    }




}