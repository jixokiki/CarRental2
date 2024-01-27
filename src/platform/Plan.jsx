import React from 'react';
// import Plan2 from "./Plan2";
import PlanData from "./PlanData";
import "./Plan.css";
import imagePlan1 from '../asset/mobil3.jpg';
import imagePlan2 from '../asset/mobil8.jpg';
import imagePlan3 from '../asset/mobil14.jpeg';

const Plan = () => {
  return (
    <div className="Plan">
      <h1>PLAN</h1>
      <p>TANAMS RENT</p>
        <div className='plan1-card'>
            <PlanData
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
            satunya Abu-Abu."
            img1={imagePlan1}
            />

            <PlanData
            className="first-description-reverse"
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
            satunya hitam."
            img1={imagePlan2}
            />

            <PlanData
            className="first-description-reverse"
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
            warna salah satunya hitam."
            img1={imagePlan3}
            />

        </div>
    </div>
  );
}

export default Plan;
