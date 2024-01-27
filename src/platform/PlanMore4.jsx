import React from 'react';
// import Plan2 from "./Plan2";
import PlanIsiData4 from './PlanIsiData4';
import "./Plan.css";
import imagePlan3 from '../asset/mobil14.jpeg';
import Navbar from './Navbar';
import NavbarHome2 from './NavbarHome2';

const PlanMore4 = () => {
  return (
    <div className="Plan">
      {/* <h1>PLAN</h1>
      <p>M-SAVING</p> */}
        <div className='plan1-card'>
            <NavbarHome2/>
            <PlanIsiData4
            className="first-description"
            heading="Toyota Agya G at 1,2 2018 Hitam Ganjil"
            text="Berikut adalah penjelasan lengkap mengenai Toyota Agya G tahun 2018
            warna hitam dengan nomor polisi ganjil yang disewakan di rental
            mobil: Toyota Agya G merupakan varian menengah dari city car Toyota
            Agya. Beberapa fitur Toyota Agya G tahun 2018 antara lain: - Mesin
            bensin 4-silinder 1.2L, tenaga maksimal 87 HP, transmisi manual
            5-percepatan. - Fitur keselamatan: Dual SRS airbag, rem ABS, EBD,
            seatbelt penumpang depan pengunci otomatis. - Exterior: Pelek baja
            dengan wheel cap, lampu utama halogen. - Interior: Single DIN head
            unit, jok kain, AC manual. - Kenyamanan: Power window depan, power
            steering. Untuk tahun 2018, Toyota Agya G tersedia dalam 6 pilihan
            warna salah satunya hitam. Dengan nomor polisi ganjil (contoh: B
            1111 ABC), mobil ini dapat disewakan di rental mobil untuk area
            Jakarta dan sekitarnya dengan tarif sewa per hari mulai dari Rp
            200.000 - Rp 250.000 tergantung durasi sewa. Biaya sudah termasuk
            asuransi, pajak, sopir, dan perawatan rutin. Biasanya minimal sewa 5
            hari. Ada potongan biaya untuk sewa mingguan atau bulanan. Bahan
            bakar menggunakan sistem rembours. Fasilitas lain dari rental mobil
            antara lain layanan antar-jemput, bantuan darurat 24 jam, dan
            penggantian mobil jika mogok. Toyota Agya merupakan mobil sewaan
            murah yang nyaman digunakan untuk keperluan sehari-hari di
            perkotaan."
            img5={imagePlan3}
            />

        </div>
    </div>
  );
}

export default PlanMore4;
