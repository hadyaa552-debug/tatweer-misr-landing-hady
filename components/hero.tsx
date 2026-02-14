"use client"

import { useEffect, useState } from "react"
import { Phone, MessageCircle } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  // تم تعديل الرقم ليقبل الاتصال الدولي والمحلي فوراً
  const phoneNumber = "+201070752370"
  const displayNumber = "01070752370"

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsApp = () => {
    const message = encodeURIComponent("مرحباً، أريد الاستفسار عن IL Monte Galala")
    window.open(`https://wa.me/201070752370?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <section 
      className="relative pt-20 min-h-screen bg-cover bg-center bg-no-repeat"
      // تم تعديل المسار ليكون مباشر داخل images كما في ملفاتك
      style={{ backgroundImage: "url('/images/WhatsApp-Image-2026-02-08-at-23.59.18.jpeg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 min-h-screen grid lg:grid-cols-2">
        {/* Left Column - Text Content */}
        <div className="flex items-center">
          <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div
              className={`space-y-6 lg:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="space-y-4 text-center lg:text-right">
                <h1 className="text-4xl font-medium text-white leading-tight text-balance lg:text-5xl">
                  <span className="text-primary block text-5xl lg:text-6xl mb-3">Il Monte Galala</span>
                  المونت جلالة
                </h1>

                <p className="text-lg lg:text-xl font-normal text-white/90 mb-3">
                  أبراج فندقية فاخرة - تطوير مصر
                </p>

                <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  لأول مرة على البحر الأحمر: أبراج سكنية على البحر مباشرة بارتفاع يصل لـ 22 دور على جبل الجلالة، العين السخنة. وحدات بتشطيب كامل وإطلالة بانورامية على البحر
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 max-w-2xl mx-auto lg:mx-0">
                {[
                  { value: "10", label: "أبراج" },
                  { value: "2028", label: "التسليم" },
                  { value: "5%", label: "مقدم" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center lg:text-right space-y-1 transition-all duration-700 ${isVisible ? `opacity-100 translate-y-0` : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="text-3xl lg:text-4xl font-semibold text-primary">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Buttons */}
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 w-full max-w-lg mx-auto px-4 lg:px-8 py-12 lg:py-20">
            <div
              className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">تواصل معنا الآن</h3>
                  <p className="text-gray-600">احجز وحدتك بأفضل سعر اليوم</p>
                </div>

                {/* زر واتساب */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full h-16 bg-green-500 hover:bg-green-600 text-white font-bold text-xl rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-4"
                >
                  <MessageCircle className="w-7 h-7" />
                  <div className="text-right">
                    <div className="text-lg">واتساب</div>
                    <div className="text-sm font-normal opacity-90">{displayNumber}</div>
                  </div>
                </button>

                {/* زر اتصال */}
                <button
                  onClick={handleCall}
                  className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-4"
                >
                  <Phone className="w-7 h-7" />
                  <div className="text-right">
                    <div className="text-lg">اتصال مباشر</div>
                    <div className="text-sm font-normal opacity-90">{displayNumber}</div>
                  </div>
                </button>

                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">
                    📍 جبل الجلالة - العين السخنة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
