import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import appStoreBadge from '@/assets/app-store-badge.png';
import googlePlayBadge from '@/assets/google-play-badge.png';

const FinalCTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Create hidden iframe if it doesn't exist
    let iframe = document.getElementById('hidden_iframe') as HTMLIFrameElement;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.id = 'hidden_iframe';
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    // Create form element
    const form = document.createElement('form');
    form.action = "https://script.google.com/macros/s/AKfycbxnLACNI4-d7xP5zBFRN1BJeqXxeBEaIC6FikbVeTg7rgh04BqAbscGBgSas72_GzLaDQ/exec";
    form.method = 'POST';
    form.target = 'hidden_iframe';

    // Create email input
    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = email;
    form.appendChild(emailInput);

    // Add to document and submit
    document.body.appendChild(form);
    form.submit();

    // Clean up and show success message
    setTimeout(() => {
      document.body.removeChild(form);
      setIsSubscribed(true);
      setEmail('');
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "Thank you for joining the waitlist.",
      });
    }, 1000);
  };
  return <section id="join-the-waitlist" className="section-padding bg-gradient-to-br from-primary via-accent to-primary-glow text-primary-foreground relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Headline */}
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Ready to Be the <span className="text-accent-light">Boss?</span>
            </h2>
            
            <p className="text-base sm:text-xl md:text-2xl font-medium leading-relaxed opacity-90 max-w-3xl mx-auto">
              Download the app and start your entrepreneurial journey today.
            </p>

            <p className="text-sm sm:text-lg md:text-xl leading-relaxed opacity-85 max-w-3xl mx-auto">
              Join thousands of entrepreneurs worldwide who trust Boss Works to turn their business dreams into reality.
            </p>
          </div>

          {/* App Store Download Buttons - Hidden for now */}
          {/* <div className="mb-6">
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-6">
              <a href="https://play.google.com/store/apps/details?id=com.wealthdoctor" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img src={googlePlayBadge} alt="Get it on Google Play" className="relative h-14 md:h-16 hover:scale-105 transition-transform duration-300 filter drop-shadow-2xl" />
              </a>
              <a href="https://apps.apple.com/in/app/boss-wallah-be-the-boss/id1445018395" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="absolute inset-0 bg-primary-foreground/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img src={appStoreBadge} alt="Download on the App Store" className="relative h-14 md:h-16 hover:scale-105 transition-transform duration-300 filter drop-shadow-2xl" />
              </a>
            </div>
          </div> */}

          {/* Email Subscription Form */}
          <div className="max-w-2xl mx-auto">
            {!isSubscribed ? (
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                    className="flex-1 px-4 py-2.5 md:py-3 h-11 md:h-[47px] rounded-lg md:rounded-xl bg-white border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-gray-900 placeholder:text-gray-500 transition-all duration-300 text-[14px] md:text-base shadow-lg"
                  />
                  <Button 
                    onClick={handleSubscribe}
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex-shrink-0 w-36 md:w-auto mx-auto md:mx-0 h-11 md:h-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Joining..." : "Join the Waitlist"}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 border-2 border-white/30 rounded-2xl bg-white/10 backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                  Thank You!
                </h3>
                <p className="text-lg text-primary-foreground/90 mb-4">
                  🚀 You're officially on the waitlist!
                </p>
                <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto mb-6">
                  You'll be among the first to know when we launch.
                </p>
                <Button 
                  onClick={() => setIsSubscribed(false)}
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Add Another Email
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;