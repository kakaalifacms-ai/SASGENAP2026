let tabungan = [];

function tambahSetoran() {
  const nominal =
    Number(document.getElementById("setoran").value);
  
  if (nominal <= 0 || isNaN(nominal)) {
    alert("Masukkan setoran yang valid!");
    return;
  }
  
  tabungan.push({
    setoran: nominal
  });
  
  tampilkanRiwayat();
  
  document.getElementById("setoran").value = "";
}

function tampilkanRiwayat() {
  const riwayat =
    document.getElementById("riwayat");
  
  if (!riwayat) return;
  
  let html = "";
  
  tabungan.forEach((item, index) => {
    html += `
        <tr>
            <td>${index + 1}</td>
            <td>Rp ${item.setoran.toLocaleString("id-ID")}</td>
        </tr>
        `;
  });
  
  riwayat.innerHTML = html;
}

function hapusSetoran() {
  if (tabungan.length === 0) {
    alert("Data setoran kosong!");
    return;
  }
  
  tabungan.pop();
  
  tampilkanRiwayat();
}

function resetTabungan() {
  tabungan = [];
  
  tampilkanRiwayat();
  
  document.getElementById("hasilSaldo").innerHTML = "";
}

function cetakSaldo() {
  let totalSaldo = 0;
  
  tabungan.forEach(item => {
    totalSaldo += item.setoran;
  });
  
  let bonus = 0;
  
  if (totalSaldo > 1000000) {
    bonus = totalSaldo * 0.07;
  }
  
  let saldoAkhir = totalSaldo + bonus;
  
  document.getElementById("hasilSaldo").innerHTML = `
        <p>Total Saldo : Rp ${totalSaldo.toLocaleString("id-ID")}</p>
        <p>Bonus : Rp ${bonus.toLocaleString("id-ID")}</p>
        <p>Saldo Akhir : Rp ${saldoAkhir.toLocaleString("id-ID")}</p>
    `;
}