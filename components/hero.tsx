"use client"
import { useEffect, useState } from "react"
import { Phone, MessageCircle } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "+201070752370"
  const displayNumber = "01070752370"

  useEffect(() => { setIsVisible(true) }, [])

  const handleWhatsApp = () => {
    window.open(`https://wa.me/201070752370?text=${encodeURIComponent("مرحباً، أريد الاستفسار عن IL Monte Galala")}`, '_blank')
  }

  return (
    <section className="relative pt-20 min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/WhatsApp-Image-2026-02-08-at-23.59.18.jpeg')" }}>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 min-h-screen grid lg:grid-cols-2 items-center container mx-auto px-4">
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="text-primary block mb-3">Il Monte Galala</span>
            المونت جلالة
          </h1>
          <p className="text-xl text-white/90 max-w-xl">أبراج فندقية فاخرة على البحر مباشرة بجبل الجلالة - استمتع بإطلالة بانورامية ووحدات بتشطيب كامل.</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white/95 p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6 text-center">
            <h3 className="text-2xl font-bold text-gray-900">تواصل معنا الآن</h3>
            <button onClick={handleWhatsApp} className="w-full h-16 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-4 transition-transform hover:scale-105">
              <MessageCircle size={28} /> واتساب {displayNumber}
            </button>
            <a href={`tel:${phoneNumber}`} className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-4 transition-transform hover:scale-105">
              <Phone size={28} /> اتصال مباشر
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
