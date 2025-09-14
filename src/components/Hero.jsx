import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section
  id="hero"
  className="flex flex-col items-center justify-center text-center h-screen w-full bg-gradient-to-b from-blue-50 to-white px-6"
>


      <motion.img
        src="/images/logo2.png"
        alt="Bebefon Logo"
        className="w-56 h-48 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-5xl font-bold text-blue-800 mb-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Bebefon
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 max-w-xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Yapay zekâ destekli bebek takip sistemi. İşitme engelli ebeveynler için
        güvenli, erişilebilir ve bağımsız bir çözüm.
      </motion.p>
      <motion.a
        href="#about"
        className="mt-8 px-6 py-3 bg-blue-600 text-white !text-white rounded-xl shadow hover:bg-blue-700 transition"
        style={{ color: 'white' }}
        whileHover={{ scale: 1.05 }}
      >
        Daha Fazla Bilgi
      </motion.a>
    </section>
  );
}
