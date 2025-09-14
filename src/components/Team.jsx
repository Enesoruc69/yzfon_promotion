import { motion } from "framer-motion";

const team = [
  {
    name: "Doç. Dr. Ömer Faruk Alçin",
    role: "Danışman",
    img: "/src/assets/ömer.jpeg",
    bio: "Yapay zekâ, elektronik ve biyosinyal alanında akademik danışmanlık sağlıyor.",
  },
  {
    name: "Ahmet Aygün",
    role: "Takım Kaptanı - Yazılım Mühendisi",
    img: "/src/assets/ahmet.jpeg",
    bio: "Proje planlama, yazılım geliştirme süreci yönetimi ve sistem optimizasyonundan sorumlu.",
  },
  {
    name: "Enes Oruç",
    role: "Yazılım Mühendisi",
    img: "/src/assets/enes.png",
    bio: "Backend - Mobil geliştirme, IoT entegrasyonu ve sistem optimizasyonu üzerine çalışıyor.",
  },
 
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-gray-50">
      <div className="w-full max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-800 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ekibimiz
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-blue-100 shadow"
              />
              <h3 className="text-lg font-semibold text-blue-700">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
