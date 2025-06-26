
import { useState } from 'react';
import { QrCode, Zap, Gift, Users, Store, Target, ChevronRight, Mail, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Check if email already exists
      const { data: existingEmail, error: checkError } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        // PGRST116 is "not found" error, which is expected for new emails
        throw checkError;
      }

      if (existingEmail) {
        toast.success('You\'re already on our waitlist! 🎉');
        setEmail('');
        return;
      }

      // Insert new email
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (insertError) {
        throw insertError;
      }

      toast.success('Welcome to the Async waitlist! 🎉');
      setEmail('');
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral font-general-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Mobile/Tablet Layout - QR on top */}
          <div className="lg:hidden flex flex-col items-center text-center animate-fade-in">
            {/* QR Code for mobile/tablet */}
            <div className="mb-8 animate-scale-in">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white/10 rounded-3xl backdrop-blur-lg border border-white/20 flex items-center justify-center">
                  <QrCode className="w-20 h-20 md:w-24 md:h-24 text-white/80" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full flex items-center justify-center animate-pulse">
                  <Gift className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
              </div>
            </div>
            
            {/* Content below QR for mobile/tablet */}
            <div className="mb-8">
              <h1 className="font-syne text-4xl md:text-5xl font-bold text-white mb-4">
                Async
              </h1>
              <p className="font-space-grotesk text-xl md:text-2xl text-white/90 font-medium">
                Scan. Earn. Connect.
              </p>
            </div>
            
            <h2 className="font-space-grotesk text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Turn Every QR Code Into Instant Rewards
            </h2>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Scan QR codes anywhere, complete quick branded tasks, and earn rewards you can use at local shops or online. It's that simple.
            </p>
            
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-white/90 border-0 text-secondary placeholder:text-secondary/60"
              />
              <Button 
                type="submit" 
                disabled={isLoading}
                className="h-12 px-8 bg-accent hover:bg-accent/90 text-secondary font-space-grotesk font-semibold transition-all duration-300 hover:scale-105"
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
            
            <p className="text-white/60 text-sm mt-4">
              🚀 Be among the first 1,000 early adopters
            </p>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <div className="mb-8">
                <h1 className="font-syne text-6xl font-bold text-white mb-4">
                  Async
                </h1>
                <p className="font-space-grotesk text-2xl text-white/90 font-medium">
                  Scan. Earn. Connect.
                </p>
              </div>
              
              <h2 className="font-space-grotesk text-4xl font-bold text-white mb-6 leading-tight">
                Turn Every QR Code Into Instant Rewards
              </h2>
              
              <p className="text-xl text-white/80 mb-8 max-w-lg">
                Scan QR codes anywhere, complete quick branded tasks, and earn rewards you can use at local shops or online. It's that simple.
              </p>
              
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-white/90 border-0 text-secondary placeholder:text-secondary/60"
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="h-12 px-8 bg-accent hover:bg-accent/90 text-secondary font-space-grotesk font-semibold transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </form>
              
              <p className="text-white/60 text-sm mt-4">
                🚀 Be among the first 1,000 early adopters
              </p>
            </div>
            
            {/* Centered QR for desktop */}
            <div className="flex items-center justify-center h-full animate-scale-in">
              <div className="relative">
                <div className="w-96 h-96 bg-white/10 rounded-3xl backdrop-blur-lg border border-white/20 flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-white/80" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-pulse">
                  <Gift className="w-8 h-8 text-secondary" />
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
              Three simple steps to start earning rewards from everyday interactions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <QrCode className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-3">
                1. Scan a QR
              </h3>
              <p className="text-secondary/70">
                Find QR codes on products, posters, or anywhere in public spaces
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-3">
                2. Complete a Task
              </h3>
              <p className="text-secondary/70">
                Quick branded activities like surveys, ads, or social interactions
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-destructive rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-space-grotesk text-xl font-semibold text-secondary mb-3">
                3. Earn Rewards
              </h3>
              <p className="text-secondary/70">
                Instant rewards redeemable at local shops or online stores
              </p>
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
                  <span>Earn rewards from everyday activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Discover local businesses and deals</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Simple, instant gratification</span>
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
                  <span>Increased foot traffic and customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Cost-effective marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Build customer loyalty</span>
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
                  <span>Direct consumer engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Real-world interaction data</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Measurable campaign results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots/Demo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space-grotesk text-3xl lg:text-4xl font-bold text-secondary mb-4">
              See Async in Action
            </h2>
            <p className="text-lg text-secondary/70 max-w-2xl mx-auto">
              Experience the seamless flow from scan to reward
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-8 text-center">
              <div className="w-48 h-96 bg-white rounded-2xl mx-auto shadow-lg border-8 border-secondary/10 flex items-center justify-center mb-4">
                <QrCode className="w-16 h-16 text-primary" />
              </div>
              <p className="font-space-grotesk font-medium text-secondary">Scan Interface</p>
            </div>
            
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-lg p-8 text-center">
              <div className="w-48 h-96 bg-white rounded-2xl mx-auto shadow-lg border-8 border-secondary/10 flex items-center justify-center mb-4">
                <Zap className="w-16 h-16 text-accent" />
              </div>
              <p className="font-space-grotesk font-medium text-secondary">Task Completion</p>
            </div>
            
            <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-lg p-8 text-center">
              <div className="w-48 h-96 bg-white rounded-2xl mx-auto shadow-lg border-8 border-secondary/10 flex items-center justify-center mb-4">
                <Gift className="w-16 h-16 text-destructive" />
              </div>
              <p className="font-space-grotesk font-medium text-secondary">Reward Redemption</p>
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
            Join our exclusive waitlist and get early access to the future of reward-based interactions. Spots are limited!
          </p>
          
          <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 bg-white border-0 text-secondary placeholder:text-secondary/60 text-lg"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="h-14 px-8 bg-accent hover:bg-accent/90 text-secondary font-space-grotesk font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              {isLoading ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>
          
          <p className="text-white/60">
            🎯 Early adopters get exclusive perks and bonus rewards
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
                Connecting people, local shops, and brands through innovative QR-based rewards.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-space-grotesk font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">About</a></li>
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-space-grotesk font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-white/70 hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60">
              © 2024 Async. All rights reserved. Scan. Earn. Connect.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
