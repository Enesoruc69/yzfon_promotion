import { motion } from "framer-motion";

const features = [
  {
    title: "Yapay Zekâ Algılama",
    desc: "CNN + MFCC modeli ile %96 doğruluk oranıyla bebek ağlamalarını algılar.",
  },
  {
    title: "Çoklu Bildirim",
    desc: "Mobil uygulama, akıllı saat ve ışıklı uyarılarla erişilebilirlik sağlar.",
  },
  {
    title: "Güvenli ve Yerli",
    desc: "Veriler yerelde işlenir, yerli donanım ve yazılım ile geliştirilmiştir.",
  },
  {
    title: "Taşınabilir Yapı",
    desc: "Hafif, enerji verimli ve günlük yaşama kolayca entegre edilebilir.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 w-full bg-white">
      <div className="w-full max-w-6xl mx-auto text-center px-6">
        <motion.h2
          className="text-3xl font-bold text-blue-800 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Öne Çıkan Özellikler
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
