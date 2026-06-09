import { initializeApp }
  from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
}
  from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_1XwbW-9zcNkRJXIQr4N1GgAyzQr6O2g",
  authDomain: "uasgenap2026-549f7.firebaseapp.com",
  projectId: "uasgenap2026-549f7",
  storageBucket: "uasgenap2026-549f7.firebasestorage.app",
  messagingSenderId: "560108074909",
  appId: "1:560108074909:web:50c7719780334c88bee174",
  measurementId: "G-E2WG6980GN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fungsi simpan data ke Firebase
async function simpanFirebase(data) {
  try {
    await addDoc(collection(db, "NilaiSiswa"), data);
    console.log("Data berhasil disimpan ke Firebase");
  } catch (error) {
    console.log(error);
  }
}

// Fungsi tampilkan data collection ke console
async function tampilkanData() {
  try {
    const querySnapshot = await getDocs(collection(db, "NilaiSiswa"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  } catch (error) {
    console.log(error);
  }
}

// Simpan contoh data siswa
await simpanFirebase({
  NamaSiswa: "Budi",
  NilaiTugas: 85,
  NilaiUTS: 78,
  NilaiSAS: 80,
  RataRataNilai: "81",
  Status: "Lulus"
});

// Tampilkan semua data ke console
await tampilkanData();