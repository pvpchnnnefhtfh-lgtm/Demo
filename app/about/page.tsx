"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Globe, Cpu, Users, Target, MessageSquare } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { label: "เวลาทำงาน", value: "99.9%", icon: Zap },
    { label: "โหนดทั่วโลก", value: "12+", icon: Globe },
    { label: "ลูกค้าใช้งาน", value: "2,500+", icon: Users },
    { label: "ฝ่ายช่วยเหลือ", value: "24/7", icon: MessageSquare },
  ]

  const features = [
    {
      title: "ภารกิจของเรา",
      desc: "FARDARCLOUD มุ่งมั่นจัดหาทรัพยากรโฮสติ้งที่มีประสิทธิภาพสูงสุดสำหรับนักเล่นเกม นักพัฒนา และธุรกิจทุกขนาด เพื่อทำให้โครงสร้างพื้นฐานระดับสูงเข้าถึงได้ง่ายและราคาเหมาะสมโดยไม่ลดคุณภาพ",
      icon: Target,
      color: "blue"
    },
    {
      title: "ฮาร์ดแวร์ระดับมืออาชีพ",
      desc: "เราใช้ฮาร์ดแวร์ระดับองค์กร เช่น CPU AMD EPYC และ SSD NVMe Gen4 เพื่อให้แอปพลิเคชันของคุณทำงานได้เร็วสุดและไม่มีจุดอุปสรรค",
      icon: Cpu,
      color: "purple"
    },
    {
      title: "ป้องกัน DDoS",
      desc: "ความปลอดภัยคือหัวใจหลักของเรา ทุกเซิร์ฟเวอร์มีระบบป้องกัน DDoS หลายชั้นที่สามารถรับมือการโจมตีระดับสูงสุด ทำให้บริการออนไลน์ตลอด 24/7",
      icon: Shield,
      color: "emerald"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-[#228dbd]/30">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 orbitron-font leading-tight">
                เกี่ยวกับ <span className="text-[#228dbd] text-neon-glow-brand">FARDARCLOUD</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                สร้างประสบการณ์ดิจิทัลยุคใหม่ด้วยโครงสร้างพื้นฐานที่เร็ว พร้อม latency ต่ำ และเสถียรที่สุด.
              </p>
              <div className="flex gap-4">
                <div className="bg-[#228dbd]/10 border border-[#228dbd]/20 px-6 py-3 rounded-2xl">
                  <span className="text-[#228dbd] font-bold">ก่อตั้งในปี 2026</span>
                </div>
                <div className="bg-[#228dbd]/5 border border-white/5 px-6 py-3 rounded-2xl">
                  <span className="text-gray-300 font-bold">โครงสร้างพื้นฐานระดับโลก</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-[#228dbd]/10"
            >
              <Image
                src="/about/datacenter.png"
                alt="FARDARCLOUD Data Center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0f] via-transparent to-transparent opacity-60" />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white/[0.02] border-y border-white/5 py-16 mb-24">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-[#228dbd] mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold mb-1 orbitron-font">{stat.value}</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 orbitron-font">ค่านิยมหลักของเรา</h2>
            <div className="w-24 h-1 bg-[#228dbd] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-[#0b0c16]/30 backdrop-blur-md border border-white/10 hover:border-[#228dbd]/30 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-[#228dbd]/10 border border-[#228dbd]/20 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-[#228dbd]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Network Map / Global Presence */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div className="bg-gradient-to-br from-blue-900/10 to-[#228dbd]/10 border border-white/10 rounded-[40px] p-8 md:p-16 overflow-hidden relative">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 orbitron-font">ความครอบคลุมทั่วโลก</h2>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  เครือข่ายของเราถูกออกแบบเพื่อความเร็วแบบสุดขีด ด้วยจุดเชื่อมต่อในศูนย์ข้อมูลสำคัญทั่วโลก ทำให้ผู้ใช้ของคุณได้รับ latency ต่ำสุดไม่ว่าจะอยู่ที่ใดก็ตาม
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {["USA Central", "India West", "Singapore", "Germany", "London", "Tokyo"].map((loc) => (
                    <li key={loc} className="flex items-center gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-[#228dbd] rounded-full shadow-[0_0_8px_rgba(34,141,189,0.5)]" />
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/network.png"
                  alt="Global Network"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-[#228dbd]/10 border border-[#228dbd]/25 rounded-3xl p-12 shadow-[0_0_50px_rgba(34,141,189,0.15)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 orbitron-font text-white">พร้อมร่วมเป็นส่วนหนึ่งของทีมระดับพรีเมียมแล้วหรือยัง?</h2>
            <p className="text-white/60 mb-8 text-lg">สัมผัสประสิทธิภาพโฮสติ้งระดับสูงสุดในยุคนี้ได้ทันที</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#228dbd] text-white hover:bg-[#1a6e94] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,141,189,0.3)]">
                เริ่มใช้งานทันที
              </button>
              <button className="bg-transparent text-white border border-white/20 hover:border-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                ติดต่อฝ่ายขาย
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
