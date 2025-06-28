
import React, { useState } from 'react';
import { QrCode, Gift, Sparkles, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
        throw checkError;
      }

      if (existingEmail) {
        toast.success('You\'re already on our waitlist! 🎉');
        setEmail('');
        onOpenChange(false);
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
      onOpenChange(false);
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md border-0 bg-gradient-to-br from-primary via-accent to-secondary p-0 overflow-hidden">
        <div className="relative">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 bg-accent/20 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/15 rounded-full animate-ping"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            {/* Logo/Icon */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center animate-scale-in">
                  <QrCode className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-pulse">
                  <Gift className="w-4 h-4 text-secondary" />
                </div>
              </div>
            </div>

            <DialogHeader className="space-y-4 mb-6">
              <DialogTitle className="font-syne text-3xl font-bold text-white flex items-center justify-center gap-2">
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                Join Async
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </DialogTitle>
              <p className="text-white/90 text-lg font-space-grotesk">
                Be among the first to discover nearby shops and earn karma points
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 bg-white/95 backdrop-blur-sm border-2 border-white/40 text-secondary placeholder:text-secondary/60 text-lg rounded-2xl shadow-xl focus:bg-white focus:border-accent/70 transition-all duration-300 focus:ring-4 focus:ring-white/30 pl-6 pr-6 font-medium"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-accent/5 rounded-2xl pointer-events-none"></div>
              </div>
              
              <div className="space-y-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 bg-white hover:bg-white/90 text-secondary font-space-grotesk font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl shadow-lg border-2 border-white/30"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin"></div>
                      Joining...
                    </div>
                  ) : (
                    'Join Waitlist'
                  )}
                </Button>
                
                <p className="text-white/70 text-sm">
                  🚀 Early adopters get exclusive perks and bonus karma points
                </p>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
