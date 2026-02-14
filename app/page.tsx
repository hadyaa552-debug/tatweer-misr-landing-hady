import Header from "@/components/header"
import Hero from "@/components/hero"
import BloomfieldsOverview from "@/components/bloomfields-overview"
import BloomfieldsLocation from "@/components/bloomfields-location"
import BloomfieldsUnits from "@/components/bloomfields-units"
import BloomfieldsAmenities from "@/components/bloomfields-amenities"
import BloomfieldsPayment from "@/components/bloomfields-payment"
import BloomfieldsGallery from "@/components/bloomfields-gallery"
import ContactButtons from "@/components/contact-buttons"
import AboutDeveloper from "@/components/about-developer"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <BloomfieldsOverview />
      <BloomfieldsLocation />
      <BloomfieldsUnits />
      <BloomfieldsAmenities />
      <BloomfieldsGallery />
      <BloomfieldsPayment />
      
      {/* سيكشن التواصل الأخير المطور */}
      <section 
        id="contact" 
        className="py-20 lg:py-32 relative bg-cover bg-center bg-no-repeat"
        // تم تصحيح المسار ليكون داخل images مباشرة
        style={{ backgroundImage: "url('/images/villa-1.webp')" }}
      >
        <div className="absolute inset-0 bg-black/75" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">هل لديك أي استفسار؟</h2>
            <p className="text-xl text-white/90 mb-10">
              فريق مبيعات مشروع المونت جلالة جاهز للرد على جميع استفساراتكم بخصوص المساحات المتاحة وأحدث الأسعار
            </p>
            <div className="flex justify-center">
              <ContactButtons />
            </div>
          </div>
        </div>
      </section>

      <AboutDeveloper />
      <Footer />
      
      {/* أدوات التواصل العائمة */}
      <WhatsAppWidget />
      <MobileBottomBar />
    </main>
  )
}
