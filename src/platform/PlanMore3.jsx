import React from 'react';
// import Plan2 from "./Plan2";
import PlanIsiData3 from './PlanIsiData3';
import "./Plan.css";
import imagePlan2 from '../asset/mobil8.jpg';
import imagePlan3 from '../asset/mobil14.jpeg';
import Navbar from './Navbar';
import NavbarHome2 from './NavbarHome2';

const PlanMore3 = () => {
  return (
    <div className="Plan">
      {/* <h1>PLAN</h1>
      <p>M-SAVING</p> */}
        <div className='plan1-card'>
            <NavbarHome2/>
            <PlanIsiData3
            className="first-description"
            heading="Mitsubishi Xpander Ultimate at 2023 Hitam Genap"
            text="Berikut adalah penjelasan lengkap mengenai Mitsubishi Xpander
            Ultimate tahun 2023 warna hitam dengan nomor polisi genap yang
            disewakan di rental mobil: Mitsubishi Xpander Ultimate merupakan
            varian tertinggi dari MPV 7-seater Mitsubishi Xpander. Beberapa
            fitur premium yang dimiliki Xpander Ultimate 2023 antara lain: Mesin
            bensin 4-silinder 1.5L MIVEC, tenaga maksimal 105 HP, transmisi
            otomatis 4-percepatan. - Fitur keselamatan: Dual SRS airbag, ABS,
            EBD, brake assist system, stability control, hill start assist. -
            Exterior: LED headlamp, fog lamp, 17 inch alloy wheel, electric
            foldable side mirror. - Interior: Jok kulit, multi-information
            display, 8 speaker Rockford Fosgate. - Kenyamanan: Push start
            button, auto AC dual zone, keyless entry, power window all. Untuk
            tahun 2023, Xpander Ultimate tersedia dalam 5 pilihan warna salah
            satunya hitam. Dengan nomor polisi genap (contoh: B 2345 CDE), mobil
            ini dapat disewakan di rental mobil untuk area Jakarta dan
            sekitarnya dengan tarif sewa per hari mulai dari Rp 300.000 - Rp
            450.000 tergantung durasi sewa. Biaya sudah termasuk asuransi,
            pajak, sopir, dan maintenance. Biasanya minimal sewa 5 hari.
            Potongan biaya berlaku untuk sewa mingguan atau bulanan. Bahan bakar
            menggunakan sistem rembours. Fasilitas lain dari rental mobil
            meliputi layanan antar-jemput, bantuan darurat 24 jam, dan ganti
            mobil jika mogok. Mitsubishi Xpander Ultimate merupakan pilihan MPV
            mewah dan nyaman yang cocok untuk keperluan bisnis atau pun liburan
            keluarga."
            img4={imagePlan2}
            />

        </div>
    </div>
  );
}

export default PlanMore3;
