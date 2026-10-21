"use client";

import { useEffect, useState } from "react";

const homes = [
  {
    name: "Tipe Asri 36",
    detail: "2 kamar tidur · 1 kamar mandi · 1 carport",
    price: 350_000_000,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    label: "Pilihan keluarga",
  },
  {
    name: "Tipe Harmoni 45",
    detail: "2 kamar tidur · 1 kamar mandi · 1 carport",
    price: 425_000_000,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    label: "Ruang lebih lega",
  },
  {
    name: "Tipe Keluarga 60",
    detail: "3 kamar tidur · 2 kamar mandi · 1 carport",
    price: 560_000_000,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    label: "Siap berkembang",
  },
];

const whatsappNumber = "628558368067";

const whatsappLink = (message: string) =>
  `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

const formatRupiah = (value: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);

export default function Home() {
  const [propertyPrice, setPropertyPrice] = useState(350_000_000);
  const [downPayment, setDownPayment] = useState(20);
  const [term, setTerm] = useState(20);
  const [interestRate, setInterestRate] = useState(8);

  useEffect(() => {
    const animatedElements = document.querySelectorAll<HTMLElement>("[data-aos]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animatedElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      animatedElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    document.documentElement.classList.add("aos-ready");
    animatedElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("aos-ready");
    };
  }, []);

  const loanAmount = propertyPrice * (1 - downPayment / 100);
  const monthlyRate = interestRate / 100 / 12;
  const months = term * 12;
  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / months
      : (loanAmount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -months));

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#beranda" aria-label="PT. Cemerlang Duta Persada, beranda">
          <span className="brand-mark">CDP</span>
          <span className="brand-name">
            <strong>CEMERLANG</strong>
            <small>DUTA PERSADA</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Navigasi utama">
          <a href="#tentang">Tentang</a>
          <a href="#hunian">Pilihan hunian</a>
          <a href="#simulasi">Simulasi KPR</a>
          <a href="#lokasi">Lokasi</a>
        </nav>
        <a
          className="header-cta"
          href={whatsappLink("Saya tertarik dengan unit Intan Residence")}
          target="_blank"
          rel="noreferrer"
        >
          Hubungi kami <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="beranda">
        <div className="hero-photo" role="img" aria-label="Rumah modern dengan taman yang asri" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">PT. CEMERLANG DUTA PERSADA · INTAN RESIDENCE</p>
          <h1>Temukan rumah yang terasa seperti pulang.</h1>
          <p className="hero-copy">
            Pilihan hunian untuk cerita baru Anda, di lingkungan yang tumbuh di
            Susukan, Bojonggede.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#hunian">
              Lihat pilihan rumah <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href="#simulasi">
              Hitung cicilan KPR
            </a>
          </div>
          <div className="hero-note">
            <span className="note-dot" />
            Kantor pemasaran perumahan · Bojonggede, Bogor
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>01</span> / 03
        </div>
      </section>

      <section className="intro section-wrap" id="tentang">
        <div className="intro-label" data-aos="fade-up">
          <span className="eyebrow">TENTANG PT. CEMERLANG DUTA PERSADA</span>
          <span className="section-number">01 — 03</span>
        </div>
        <div className="intro-body" data-aos="fade-up">
          <h2>Lebih dari sekadar memilih rumah.</h2>
          <p>
            Kami mendampingi Anda dari pencarian rumah hingga memahami proses
            pembelian. Dapatkan informasi tipe dan harga, cek ketersediaan unit,
            jadwalkan kunjungan, dan bicarakan pilihan pembiayaan bersama tim kami.
            PT. Cemerlang Duta Persada memasarkan hunian Intan Residence dan
            mendampingi calon pembeli selama proses pencarian hingga pembelian.
          </p>
          <a className="text-link" href="#lokasi">
            Kenali lokasi kami <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="intro-stat" data-aos="fade-up">
          <span className="stat-mark">IR</span>
          <span>Ruang untuk tumbuh,<br />mulai dari rumah.</span>
        </div>
      </section>

      <section className="homes-section" id="hunian">
        <div className="section-wrap">
          <div className="section-heading" data-aos="fade-up">
            <div>
              <span className="eyebrow">PILIHAN HUNIAN</span>
              <h2>Temukan yang paling pas.</h2>
            </div>
            <p>
              Pilih tipe yang sesuai kebutuhan Anda. Tanyakan ketersediaan unit
              terbaru kepada tim pemasaran.
            </p>
          </div>
          <div className="home-grid">
            {homes.map((home, index) => (
              <article className="home-card" key={home.name} data-aos="fade-up">
                <div
                  className="home-image"
                  style={{ backgroundImage: `url("${home.image}")` }}
                  role="img"
                  aria-label={`Ilustrasi ${home.name}`}
                >
                  <span className="home-label">{home.label}</span>
                  <span className="home-index">0{index + 1}</span>
                </div>
                <div className="home-info">
                  <div className="home-title-row">
                    <h3>{home.name}</h3>
                    <span className="home-size">{[36, 45, 60][index]} m²</span>
                  </div>
                  <p>{home.detail}</p>
                  <div className="home-price-row">
                    <span>
                      <small>Harga indikatif mulai</small>
                      <strong>{formatRupiah(home.price)}</strong>
                    </span>
                    <a
                      className="round-link"
                      href={whatsappLink(`Saya tertarik dengan unit Intan Residence, ${home.name}. Mohon info harga dan ketersediaan.`)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Tanyakan ${home.name} melalui WhatsApp`}
                    >
                      ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="price-disclaimer">
            Harga dan ketersediaan bersifat indikatif dan dapat berubah. Hubungi
            tim kami untuk informasi terbaru.
          </p>
        </div>
      </section>

      <section className="calculator-section" id="simulasi">
        <div className="section-wrap calculator-layout">
          <div className="calculator-copy" data-aos="fade-right">
            <span className="eyebrow">LANGKAH BERIKUTNYA</span>
            <h2>Rencanakan cicilan, dengan lebih tenang.</h2>
            <p>
              Atur perkiraan uang muka, tenor, dan bunga untuk melihat estimasi
              cicilan bulanan. Angka ini simulasi awal, bukan penawaran bank.
            </p>
            <div className="calculator-assurance">
              <span aria-hidden="true">↗</span>
              <span>Butuh hitungan yang lebih sesuai? Tim kami siap membantu.</span>
            </div>
            <a
              className="text-link light-link"
              href={whatsappLink("Saya tertarik dengan unit Intan Residence dan ingin konsultasi simulasi KPR.")}
              target="_blank"
              rel="noreferrer"
            >
              Konsultasi via WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="calculator-panel" data-aos="fade-left">
            <div className="calculator-panel-head">
              <span>ESTIMASI PEMBIAYAAN</span>
              <span className="calculator-symbol">⌂</span>
            </div>
            <label className="field-label" htmlFor="property-price">
              Harga rumah
            </label>
            <select
              className="select-field"
              id="property-price"
              value={propertyPrice}
              onChange={(event) => setPropertyPrice(Number(event.target.value))}
            >
              {homes.map((home) => (
                <option key={home.name} value={home.price}>
                  {home.name} · {formatRupiah(home.price)}
                </option>
              ))}
            </select>
            <div className="range-heading">
              <label className="field-label" htmlFor="down-payment">
                Uang muka
              </label>
              <strong>{downPayment}%</strong>
            </div>
            <input
              id="down-payment"
              className="range-field"
              type="range"
              min="10"
              max="50"
              step="5"
              value={downPayment}
              onChange={(event) => setDownPayment(Number(event.target.value))}
            />
            <div className="range-ends">
              <span>10%</span>
              <span>{formatRupiah(propertyPrice * (downPayment / 100))}</span>
              <span>50%</span>
            </div>
            <div className="field-pair">
              <div>
                <label className="field-label" htmlFor="term">
                  Tenor
                </label>
                <select
                  className="select-field"
                  id="term"
                  value={term}
                  onChange={(event) => setTerm(Number(event.target.value))}
                >
                  {[10, 15, 20, 25, 30].map((year) => (
                    <option value={year} key={year}>{year} tahun</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="interest-rate">
                  Bunga / tahun
                </label>
                <div className="input-suffix">
                  <input
                    className="select-field"
                    id="interest-rate"
                    type="number"
                    min="0"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={(event) =>
                      setInterestRate(Math.min(20, Math.max(0, Number(event.target.value))))
                    }
                  />
                  <span>%</span>
                </div>
              </div>
            </div>
            <div className="estimate-result" aria-live="polite">
              <span>Estimasi cicilan per bulan</span>
              <strong>{formatRupiah(monthlyPayment)}</strong>
              <small>Plafon simulasi {formatRupiah(loanAmount)}</small>
            </div>
            <p className="calculator-disclaimer">
              Perhitungan anuitas ini belum termasuk biaya administrasi, asuransi,
              pajak, dan ketentuan bank. Suku bunga dapat berubah.
            </p>
          </div>
        </div>
      </section>

      <section className="visit-section section-wrap" id="lokasi">
        <div className="visit-mark" data-aos="fade-up" aria-hidden="true">IR</div>
        <div className="visit-copy" data-aos="fade-up">
          <span className="eyebrow">KUNJUNGI KAMI</span>
          <h2>Lihat langsung, rasakan suasananya.</h2>
          <p>
            Susukan, Bojonggede, Kabupaten Bogor,<br />
            Jawa Barat 16920
          </p>
        </div>
        <div className="visit-actions" data-aos="fade-up">
          <a
            className="button button-dark"
            href="https://maps.app.goo.gl/1Mqfr7zMdu81b1787"
            target="_blank"
            rel="noreferrer"
          >
            Buka peta <span aria-hidden="true">↗</span>
          </a>
          <a
            className="visit-whatsapp"
            href={whatsappLink("Saya tertarik dengan unit Intan Residence dan ingin menjadwalkan kunjungan.")}
            target="_blank"
            rel="noreferrer"
          >
            Jadwalkan kunjungan
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#beranda">
          <span className="brand-mark">CDP</span>
          <span className="brand-name">
            <strong>CEMERLANG</strong>
            <small>DUTA PERSADA</small>
          </span>
        </a>
        <div className="footer-info">
          <span>PT. Cemerlang Duta Persada · Pemasaran Intan Residence</span>
          <div className="footer-contacts">
            <a href="tel:+628558368067">0855 8368 067</a>
            <a href="mailto:CEMERLANGDUTAPERSA@GMAIL.COM">Email</a>
            <a
              href="https://www.instagram.com/cemerlangdutapersada/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href={whatsappLink("Saya tertarik dengan unit Intan Residence")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <span className="footer-location">Susukan, Bojonggede · Bogor 16920</span>
      </footer>
    </main>
  );
}
