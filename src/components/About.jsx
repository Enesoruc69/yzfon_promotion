import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-gray-100">
      <motion.div
        className="w-full max-w-6xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Proje Hakkında</h2>
        <p className="text-gray-700 leading-relaxed">
          Bebefon, özellikle işitme engelli ebeveynler için geliştirilmiş yapay
          zekâ destekli bir akıllı takip sistemidir. Bebek ağlamaları Raspberry Pi
          tabanlı donanım ve CNN + MFCC ses analizi modeli ile tespit edilir.
          Algılanan ağlamalar; mobil uygulama, akıllı saatler ve akıllı ev
          aletleri aracılığıyla titreşimli ve görsel bildirimler şeklinde kullanıcıya
          iletilir.
        </p>
      </motion.div>
    </section>
  );
}
