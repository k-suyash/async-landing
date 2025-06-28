import { useState } from 'react';
import { QrCode, Zap, Gift, Users, Store, Target, ChevronRight, Mail, Instagram, Twitter, MapPin, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaitlistModal from '@/components/WaitlistModal';

const Index = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  return (
    <div className="min-h-screen bg-neutral font-general-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Mobile/Tablet Layout - QR on top */}
          <div className="lg:hidden flex flex-col items-center text-center animate-fade-in py-12 md:py-16">
            {/* QR Code for mobile/tablet */}
            <div className="mb-8 md:mb-10 animate-scale-in">
              <div className="relative">
                <div className="w-52 h-52 md:w-72 md:h-72 bg-white/10 rounded-3xl backdrop-blur-lg border border-white/20 flex items-center justify-center">
                  <QrCode className="w-20 h-20 md:w-28 md:h-28 text-white/80" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-14 h-14 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center animate-pulse">
                  <Gift className="w-5 h-5 md:w-7 md:h-7 text-secondary" />
                </div>
              </div>
            </div>

            {/* Content below QR for mobile/tablet */}
            <div className="mb-6 md:mb-8">
              <h1 className="font-syne text-4xl md:text-5xl font-bold text-white mb-4">
                Async
              </h1>
              <p className="font-space-grotesk text-xl md:text-2xl text-white/90 font-medium">
                Scan. Earn. Redeem.
              </p>
            </div>

            <h2 className="font-space-grotesk text-2xl md:text-3xl font-bold text-white mb-6 leading-tight px-4">
              Discover Nearby Shops & Earn Karma Points
            </h2>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg px-4">
              Find local shops, scan QR codes, complete tasks, and earn karma points for free branded samples.
            </p>

            <div className="mb-6">
              <Button
                onClick={() => setShowWaitlistModal(true)}
                className="h-12 px-8 bg-accent hover:bg-accent/90 text-secondary font-space-grotesk font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-2xl shadow-lg border-2 border-accent/20"
              >
                Join Waitlist
              </Button>
            </div>

            <p className="text-white/60 text-sm">
              🚀 Be among the first 1,000 early adopters
            </p>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-8">
            <div className="text-left animate-fade-in">
              <div className="mb-8">
                <h1 className="font-syne text-6xl font-bold text-white mb-4">
                  Async
                </h1>
                <p className="font-space-grotesk text-2xl text-white/90 font-medium">
                  Scan. Earn. Redeem.
                </p>
              </div>

              <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6 leading-tight">
                Discover Nearby Shops & Earn Karma Points
              </h2>

              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Find local shops, scan QR codes, complete tasks, and earn karma points for free branded samples.
              </p>

              <div className="mb-6">
                <Button
                  onClick={() => setShowWaitlistModal(true)}
                  className="h-14 px-8 bg-accent hover:bg-accent/90 text-secondary font-space-grotesk font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-2xl shadow-lg border-2 border-accent/20"
                >
                  Join Waitlist
                </Button>
              </div>

              <p className="text-white/60 text-sm">
                🚀 Be among the first 1,000 early adopters
              </p>
            </div>

            {/* Centered QR for desktop with proper spacing and padding */}
            <div className="flex items-center justify-center h-full animate-scale-in pl-8 pr-16">
              <div className="relative">
                <div className="w-80 h-80 bg-white/10 rounded-3xl backdrop-blur-lg border border-white/20 flex items-center justify-center">
                  <QrCode className="w-28 h-28 text-white/80" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-pulse">
                  <Gift className="w-7 h-7 text-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-secondary mb-4">
              How Async Works
            </h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Simple steps to discover local shops and start earning karma points
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-3">
                1. Discover Shops
              </h3>
              <p className="text-secondary/70">
                Browse nearby shops and see available rewards and offers in your area
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <QrCode className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-3">
                2. Visit & Scan
              </h3>
              <p className="text-secondary/70">
                Visit the shop and scan the QR code to unlock rewards and tasks
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-destructive rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-3">
                3. Complete Tasks
              </h3>
              <p className="text-secondary/70">
                Complete quick surveys or view ads to earn rewards and karma points
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-3">
                4. Use Karma Points
              </h3>
              <p className="text-secondary/70">
                Redeem karma points for branded free samples and earn even more points
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Karma Points System */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-secondary mb-4">
              The Karma Points System
            </h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              A circular reward ecosystem that benefits everyone
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-space-grotesk text-lg font-semibold text-secondary mb-2">
                    Earn Karma Points
                  </h3>
                  <p className="text-secondary/70">
                    Complete surveys and tasks to earn karma points alongside immediate rewards
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-space-grotesk text-lg font-semibold text-secondary mb-2">
                    Redeem for Samples
                  </h3>
                  <p className="text-secondary/70">
                    Use karma points to get branded free samples from nearby stores and brands
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-space-grotesk text-lg font-semibold text-secondary mb-2">
                    Earn More Points
                  </h3>
                  <p className="text-secondary/70">
                    Complete brand surveys after receiving samples to earn additional karma points
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="relative inline-block">
                <div className="w-64 h-64 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                  <div className="text-white text-center">
                    <Heart className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="font-space-grotesk text-2xl font-bold mb-2">Karma Points</h3>
                    <p className="text-sm opacity-90">The currency of good deeds</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">♻️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Async */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-secondary mb-4">
              Why Choose Async?
            </h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              A win-win-win platform that benefits everyone in the ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-4">
                For Users
              </h3>
              <ul className="space-y-3 text-secondary/70">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Discover nearby shops and exclusive offers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Earn immediate rewards and karma points</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Get branded free samples with karma points</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Store className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-4">
                For Local Shops
              </h3>
              <ul className="space-y-3 text-secondary/70">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Increased foot traffic and visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Cost-effective customer acquisition</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Build customer loyalty through rewards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-4">
                For Brands
              </h3>
              <ul className="space-y-3 text-secondary/70">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Direct consumer engagement and feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Product sampling and market research</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Measurable campaign results and ROI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-white mb-4">
            Be the First to Try Async
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our exclusive waitlist and get early access to discover nearby shops, earn karma points, and get free branded samples. Spots are limited!
          </p>

          <div className="mb-8">
            <Button
              onClick={() => setShowWaitlistModal(true)}
              className="h-14 px-8 bg-accent hover:bg-accent/90 text-secondary font-space-grotesk font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-2xl shadow-lg border-2 border-accent/20"
            >
              Join Waitlist
            </Button>
          </div>

          <p className="text-white/60">
            🎯 Early adopters get exclusive perks and bonus karma points
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-syne text-2xl font-bold text-white mb-4">Async</h3>
              <p className="text-white/70 mb-6 max-w-md">
                Connecting people, local shops, and brands through innovative karma-based rewards and community building.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/1.suyashk" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="mailto:1.suyashk@gmail.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-space-grotesk font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-space-grotesk font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="mailto:1.suyashk@gmail.com" className="text-white/70 hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2025 Async. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Waitlist Modal */}
      <WaitlistModal 
        open={showWaitlistModal} 
        onOpenChange={setShowWaitlistModal} 
      />
    </div>
  );
};

export default Index;
