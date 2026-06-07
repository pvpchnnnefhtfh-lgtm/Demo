"use client"

import { motion } from "framer-motion"
import { Users, DollarSign, BarChart3, ArrowRight, CheckCircle2, Gift, PieChart, ShieldCheck } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const features = [
  {
    title: "ค่าคอมมิชชั่นแบบต่อเนื่อง 15%",
    desc: "รับค่าคอมมิชชั่น 15% จากทุกการชำระเงินที่ลูกค้าของคุณทำให้กับเรา ตลอดอายุการใช้งานของลูกค้า",
    icon: DollarSign
  },
  {
    title: "ติดตามแบบเรียลไทม์",
    desc: "ตรวจสอบการคลิก อัตราการแปลง และรายได้ของคุณแบบสดด้วยแดชบอร์ดพันธมิตรที่ทันสมัย",
    icon: BarChart3
  },
  {
    title: "คุกกี้ 60 วัน",
    desc: "เรามีระบบคุกกี้ 60 วัน เพื่อให้คุณยังได้รับเครดิตสำหรับยอดขายแม้จะมีการคลิกไปแล้วหลายสัปดาห์",
    icon: PieChart
  },
  {
    title: "จ่ายเงินทันที",
    desc: "สามารถขอรับรายได้ทันทีเมื่อถึงขั้นต่ำที่กำหนด เรารองรับ PayPal, UPI และคริปโต",
    icon: ShieldCheck
  }
]

const steps = [
  { title: "เข้าร่วมโปรแกรม", desc: "สมัครเป็นพันธมิตรของเราในไม่กี่นาที ไม่มีขั้นตอนรอการอนุมัติ" },
  { title: "โปรโมต", desc: "แชร์ลิงก์อ้างอิงของคุณบนเว็บไซต์ โซเชียลมีเดีย หรือ Discord" },
  { title: "สร้างรายได้", desc: "รับค่าจ่ายอัตโนมัติสำหรับลูกค้าทุกรายที่คุณแนะนำให้กับ FARDARCLOUD" }
]

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-4 py-2 rounded-full mb-8"
            >
              <Gift className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">โปรแกรมพันธมิตร</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 orbitron-font leading-tight">
              เติบโตไปกับ <span className="text-blue-500">FARDARCLOUD</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              ร่วมงานกับผู้ให้บริการโฮสติ้งที่เติบโตเร็วที่สุดในอุตสาหกรรม และรับค่าคอมมิชชั่นแบบต่อเนื่องตลอดชีวิต <span className="text-white font-bold">15%</span> จากทุกยอดขาย
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center gap-2">
                เป็นพันธมิตรทันที <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-xl font-bold transition-all">
                เข้าสู่ระบบพันธมิตร
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { label: "ค่าคอมมิชชั่น", value: "15%", sub: "ต่อเนื่องตลอดชีวิต" },
             { label: "อายุคุกกี้", value: "60 วัน", sub: "ติดตามแบบยาวขึ้น" },
             { label: "ขั้นต่ำถอน", value: "฿500", sub: "ถอนทันที" }
           ].map((stat, idx) => (
             <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center hover:border-blue-500/30 transition-all">
                <div className="text-4xl font-bold text-white mb-2 orbitron-font">{stat.value}</div>
                <div className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 orbitron-font">ทำไมต้องเป็นพันธมิตรกับเรา <span className="text-blue-500">?</span></h2>
            <p className="text-gray-400">ทุกสิ่งที่คุณต้องการเพื่อประสบความสำเร็จในฐานะพันธมิตรของ FARDARCLOUD</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-black border border-white/5 hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 orbitron-font">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold orbitron-font mb-4">3 ขั้นตอนสู่ <span className="text-blue-500">ความสำเร็จ</span></h2>
          </div>
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 border-4 border-[#0a0b0f] flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 orbitron-font">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 orbitron-font">พร้อมเริ่มสร้างรายได้แล้วหรือยัง?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto font-medium">
            เข้าร่วมกับพันธมิตรหลายร้อยรายที่กำลังเพิ่มรายได้ด้วยแพลตฟอร์มโฮสติ้งที่เชื่อถือได้ที่สุดในโลก
          </p>
          <button className="bg-white text-blue-600 px-12 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
            สร้างบัญชีพันธมิตร
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
