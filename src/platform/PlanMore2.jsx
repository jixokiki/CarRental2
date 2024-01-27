import React from 'react';
// import Plan2 from "./Plan2";
import PlanIsiData2 from './PlanIsiData2';
import "./Plan.css";
import imagePlan1 from '../asset/mobil3.jpg';
import imagePlan2 from '../asset/mobil8.jpg';
import imagePlan3 from '../asset/mobil14.jpeg';
import Navbar from './Navbar';
import NavbarHome2 from './NavbarHome2';

const PlanMore2 = () => {
  return (
    <div className="Plan">
      {/* <h1>PLAN</h1>
      <p>M-SAVING</p> */}
        <div className='plan1-card'>
            <NavbarHome2/>
            <PlanIsiData2
            className="first-description"
            heading="Hyundai Stargezer at type Style 2023 Abu-Abu Genap"
            text="Berikut adalah penjelasan lengkap mengenai mobil Hyundai Stargezer
            tipe Style 2023 warna Abu-Abu dengan nomor polisi genap untuk
            disewakan di rental mobil: Hyundai Stargazer merupakan MPV 7-seater
            yang diproduksi oleh Hyundai Motors sejak tahun 2022. Stargazer tipe
            Style merupakan varian tertinggi dari model ini dengan beberapa
            fitur premium seperti: - Mesin bensin 4-silinder 1.5L dengan tenaga
            maksimal 115 HP dan torsi maksimal 144 Nm, transmisi otomatis
            6-percepatan. - Fitur keselamatan canggih: ABS, EBD, Brake Assist,
            ESC, Hill Start Assist, Vehicle Stability Management, hingga 6
            airbag. - Exterior: Lampu LED, alloy wheel 17 inci, side mirror
            electric foldable, shark fin antenna. - Interior: Jok kulit,
            steering wheel multifungsi, head unit 8 touchscreen, 4 speaker,
            wireless charger. - Kenyamanan: AC dual blower, rear AC vent, power
            window all, smart key entry with push start button. Untuk tahun
            2023, Hyundai Stargazer Style tersedia dalam 7 pilihan warna salah
            satunya Abu-Abu. Dengan nomor polisi genap (contoh: B 1234 ABC),
            mobil ini dapat disewakan di rental mobil untuk area Jakarta dan
            sekitarnya dengan tarif sewa per hari mulai dari Rp 350.000-Rp
            500.000 tergantung durasi sewa. Biaya sewa termasuk asuransi, PPN
            10%, maintenance, dan sopir. Biasanya minimal sewa adalah 5 hari.
            Ada potongan biaya untuk sewa mingguan atau bulanan. Bahan bakar
            menggunakan sistem rembours. Fasilitas lain dari rental mobil yang
            diberikan adalah servis berkala, bantuan darurat 24 jam, dan ganti
            mobil gratis jika terjadi kerusakan saat sewa. Dengan performa baik,
            fitur lengkap, dan kenyamanan tinggi, Hyundai Stargazer 2023
            merupakan pilihan mobil rental keluarga yang cocok untuk perjalanan
            jarak jauh maupun sehari-hari."
            img3={imagePlan1}
            />

        </div>
    </div>
  );
}

export default PlanMore2;
