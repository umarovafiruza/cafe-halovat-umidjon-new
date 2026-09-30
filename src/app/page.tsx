'use client';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { MenuSection } from '../components/MenuSection';
import { Testimonials } from '../components/Testimonials';
import { AboutSection } from '../components/AboutSection';
import { LocationContact } from '../components/LocationContact';
import { Footer } from '../components/Footer';
import { CartDrawer } from '../components/CartDrawer';
import { FoodModal } from '../components/FoodModal';
import { CheckoutModal } from '../components/CheckoutModal';
import { FloatingActions } from '../components/FloatingActions';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-cafe-50 relative">
      <Navbar />
      <Hero />
      <MenuSection />
      <Testimonials />
      <AboutSection />
      <LocationContact />
      <Footer />

      {/* Interactive Global Modals & Drawers */}
      <CartDrawer />
      <FoodModal />
      <CheckoutModal />
      <FloatingActions />
    </main>
  );
}
