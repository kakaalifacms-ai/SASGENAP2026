let dataSiswa = [];
let indexEdit = -1;

function hitungStatus(rata) {
    return rata > 65 ? "Lulus" : "Remedial";
}

function tambahData() {
    const nama = document.getElementById("nama").value;
    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const sas = Number(document.getElementById("sas").value);
    
    if (
        nama === "" ||
        isNaN(tugas) ||
        isNaN(uts) ||
        isNaN(sas)
    ) {
        alert("Semua data harus diisi!");
        return;
    }
    
    const rata = (tugas + uts + sas) / 3;
    const status = hitungStatus(rata);
    
    dataSiswa.push({
        nama,
        tugas,
        uts,
        sas,
        rata: rata.toFixed(2),
        status
    });
    
    tampilkanData();
    resetForm();
}

function tampilkanData() {

    let html = "";

    dataSiswa.forEach((item, index) => {

        html += `
        <tr>
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>${item.tugas}</td>
            <td>${item.uts}</td>
            <td>${item.sas}</td>
            <td>${item.rata}</td>
            <td class="${
                item.status === "Lulus"
                ? "status-lulus"
                : "status-remedial"
            }">
                ${item.status}
            </td>
            <td>
                <button class="btn-edit"
                    onclick="editData(${index})">
                    Edit
                </button>

                <button class="btn-hapus"
                    onclick="hapusData(${index})">
                    Hapus
                </button>
            </td>
        </tr>
        `;
    });

    document.getElementById("hasil").innerHTML = html;

    // tampil/sembunyi tabel otomatis
    document.getElementById("cardHasil").style.display =
        dataSiswa.length > 0 ? "block" : "none";
}
function updateData() {
    if (indexEdit === -1) {
        alert("Pilih data yang akan diedit!");
        return;
    }
    
    const nama =
        document.getElementById("nama").value;
    
    const tugas =
        Number(document.getElementById("tugas").value);
    
    const uts =
        Number(document.getElementById("uts").value);
    
    const sas =
        Number(document.getElementById("sas").value);
    
    const rata = (tugas + uts + sas) / 3;
    const status = hitungStatus(rata);
    
    dataSiswa[indexEdit] = {
        nama,
        tugas,
        uts,
        sas,
        rata: rata.toFixed(2),
        status
    };
    
    tampilkanData();
    resetForm();
}

function hapusData(index) {
    if (confirm("Yakin ingin menghapus data ini?")) {
        dataSiswa.splice(index, 1);
        tampilkanData();
    }
}

function resetForm() {
    document.getElementById("nama").value = "";
    document.getElementById("tugas").value = "";
    document.getElementById("uts").value = "";
    document.getElementById("sas").value = "";
    
    indexEdit = -1;
    
    document
        .querySelector(".btn-update")
        .classList.remove("edit-mode");
}

function resetData() {
    dataSiswa = [];
    tampilkanData();
    resetForm();

    document.getElementById("cardHasil").style.display = "none";
}

function tambahData() {
    const nama = document.getElementById("nama").value;
    const tugas = Number(document.getElementById("tugas").value);
    const uts = Number(document.getElementById("uts").value);
    const sas = Number(document.getElementById("sas").value);
    
    if (
        nama === "" ||
        isNaN(tugas) ||
        isNaN(uts) ||
        isNaN(sas)
    ) {
        alert("Semua data harus diisi!");
        return;
    }
    
    const rata = (tugas + uts + sas) / 3;
    const status = hitungStatus(rata);
    
    dataSiswa.push({
        nama,
        tugas,
        uts,
        sas,
        rata: rata.toFixed(2),
        status
    });
    
    document.getElementById("cardHasil").style.display = "block";
    
    tampilkanData();
    resetForm();
}