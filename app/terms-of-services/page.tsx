"use client"

import { motion } from "framer-motion"
import { Scale, ShieldCheck, Gavel, Clock, ChevronRight, MessageSquare, AlertTriangle, HelpCircle } from "lucide-react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const terms = [
  {
    title: "1. ข้อตกลงการให้บริการ",
    content: "เมื่อคุณเข้าถึงหรือใช้บริการของ FARDARCLOUD แสดงว่าคุณยอมรับข้อตกลงนี้ หากคุณไม่ยอมรับข้อกำหนดใด ๆ ควรหยุดใช้เว็บไซต์หรือบริการของเรา ข้อกำหนดเหล่านี้ใช้กับผู้เยี่ยมชมและผู้ใช้ทุกคน"
  },
  {
    title: "2. ความรับผิดชอบของผู้ใช้",
    content: "คุณต้องรับผิดชอบในการรักษาความปลอดภัยของบัญชีและกิจกรรมทุกอย่างภายใต้บัญชีของคุณ ต้องให้ข้อมูลที่ถูกต้องและแจ้งให้เราทราบทันทีหากพบการละเมิดความปลอดภัย การเข้าถึงหรือใช้ระบบของเราโดยไม่ได้รับอนุญาตเป็นสิ่งต้องห้ามอย่างสิ้นเชิง"
  },
  {
    title: "3. นโยบายการใช้งานที่ยอมรับได้",
    content: "โครงสร้างพื้นฐานของเราจะต้องไม่ใช้เพื่อกิจกรรมที่ผิดกฎหมาย การกระจายมัลแวร์ การส่งสแปม หรือการโฮสต์เนื้อหาที่มีลิขสิทธิ์โดยไม่ได้รับอนุญาต การฝ่าฝืนนโยบายนี้อาจทำให้บริการถูกระงับทันทีโดยไม่คืนเงิน"
  },
  {
    title: "4. การเรียกเก็บเงินและการชำระเงิน",
    content: "บริการทุกอย่างจะถูกเรียกเก็บล่วงหน้าตามรอบการเรียกเก็บเงิน การชำระเงินจะถูกดำเนินการผ่านช่องทางที่ได้รับอนุญาตอย่างปลอดภัย หากไม่ชำระเงินตามกำหนด ภายใน 7 วัน บริการอาจถูกระงับและข้อมูลอาจสูญหายได้"
  },
  {
    title: "5. การให้บริการและ SLA",
    content: "แม้เราจะพยายามให้บริการออนไลน์ 100% แต่บริการมาตรฐานจะมีการรับประกันเวลาออนไลน์ 99.9% การบำรุงรักษาที่กำหนดไว้จะมีการแจ้งล่วงหน้า เราจะไม่รับผิดชอบต่อความล้มเหลวที่เกิดจากผู้ให้บริการระดับบนหรือลักษณะปัญหาของเครือข่ายภายนอกที่อยู่นอกการควบคุมของเรา"
  },
  {
    title: "6. ข้อจำกัดความรับผิด",
    content: "FARDARCLOUD และพันธมิตรจะไม่รับผิดชอบต่อความเสียหายทางอ้อม โดยบังเอิญ หรือเป็นผลสืบเนื่องจากการใช้หรือไม่สามารถใช้บริการของเรา รวมถึงความสูญเสียข้อมูลหรือผลกำไรทางธุรกิจ"
  }
]

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#08090d] text-white selection:bg-blue-500/30">
      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full border border-blue-500/20 mb-6 tracking-widest uppercase"
          >
            <Gavel className="w-3 h-3" />
            กรอบกฎหมาย
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            ข้อกำหนดการให้บริการ <span className="text-blue-500">ของเรา</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed font-medium"
          >
            ความมุ่งมั่นของเราที่มีต่อความโปร่งใสและความเป็นเลิศ กรุณาอ่านข้อตกลงการให้บริการอย่างละเอียด
          </motion.p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5"><Clock className="w-3 h-3 text-blue-500" /> อัปเดต: มิถุนายน 2026</span>
            <span className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/5"><Scale className="w-3 h-3 text-blue-500" /> เอกสารผูกพัน</span>
          </div>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          <div className="p-6 rounded-[2rem] bg-[#111218] border border-[#1f2129] flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
              <ShieldCheck className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1 uppercase tracking-tight">คำมั่นสัญญาของเรา</h3>
              <p className="text-sm text-gray-500">โครงสร้างพื้นฐานที่มีประสิทธิภาพสูง ความน่าเชื่อถือระดับสูง และทีมสนับสนุนทางเทคนิคตลอด 24/7</p>
            </div>
          </div>
          <div className="p-6 rounded-[2rem] bg-[#111218] border border-[#1f2129] flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-1 uppercase tracking-tight">หน้าที่ของคุณ</h3>
              <p className="text-sm text-gray-500">การใช้งานทรัพยากรอย่างถูกต้อง ความปลอดภัยของบัญชี และการชำระค่าใช้บริการตรงเวลา</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-4 mb-24">
          {terms.map((term, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-[#0c0d12] border border-[#1f2129] hover:border-[#2d303d] rounded-[2rem] p-8 md:p-10 transition-all duration-300"
            >
              <h2 className="text-xl font-bold mb-4 tracking-tight text-white">{term.title}</h2>
              <p className="text-gray-400 leading-relaxed text-base">
                {term.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="w-16 h-16 bg-black/5 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-black tracking-tighter leading-none uppercase">
              ต้องการคำอธิบายเพิ่มเติม?
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto mb-10 text-base font-medium">
              ทีมกฎหมายและทีมปฏิบัติการพร้อมช่วยคุณทำความเข้าใจทุกส่วนของข้อตกลงการให้บริการ
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-900 transition-all flex items-center gap-2 text-sm uppercase tracking-widest"
              >
                ส่งข้อความถึงฝ่ายสนับสนุน
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://discord.vexanode.cloud"
                className="bg-transparent text-black border-2 border-black/10 px-10 py-4 rounded-xl font-bold hover:bg-black/5 transition-all flex items-center gap-2 text-sm uppercase tracking-widest"
              >
                เข้าร่วม Discord
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
