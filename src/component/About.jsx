// File: About.js

import React from 'react';
import './About.css'; // Pastikan Anda memiliki file CSS yang terhubung
import Navbar from '../platform/Navbar';

const About = () => {
  return (
    <div className="about-container">
      <Navbar/>
      <h2 className="about-title">Tentang Kami</h2>
      <p className="about-description">
      TANAMS RENT: <p></p>- "Sewa Mobil Untuk Setiap Perjalanan Anda" Menekankan
            posisi TANAMS RENT sebagai jasa sewa mobil yang dapat memenuhi
            kebutuhan transportasi pelanggan untuk berbagai perjalanan, baik
            bisnis maupun liburan. - "Sewa Mobil Terbaik dan Terpercaya"
            Mengusung citra TANAMS RENT sebagai perusahaan penyewaan mobil
            dengan armada dan layanan berkualitas terbaik serta dapat dipercaya.
            - "Nikmati Perjalanan, Kami Siap Antar" Mencerminkan positioning
            TANAMS RENT sebagai mitra perjalanan pelanggan dengan menyediakan
            armada dan supir profesional. - "Rent Car for Your Trip" Tagline
            bernuansa internasional yang memposisikan TANAMS RENT sebagai jasa
            penyewaan mobil modern dan profesional.<p></p>Positioning: <p></p>- Penyedia jasa
            sewa mobil terbesar di area bandara untuk memudahkan perjalanan
            bisnis atau liburan pelanggan. - Pelayanan sewa mobil eksekutif
            terbaik di area bandara dengan armada mewah dan supir profesional. -
            Solusi transportasi bandara terlengkap dengan jenis armada mobil
            yang beragam. - Mitra penyewaan mobil bandara dengan proses cepat,
            aman, dan layanan antar-jemput gratis.
      </p>
      <div className="about-team">
        <h3>Kerja Sama</h3>
        <ul>
          <li>DesainerIam</li>
          {/* <li>Dimas Arvianto - CTO</li>
          <li>Dimas Arvianto - Lead Developer</li> */}
        </ul>
      </div>
    </div>
  );
};

export default About;
