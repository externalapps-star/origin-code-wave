

const WhyBossWorks = () => {
  const features = [
    {
      icon: <img src="/lovable-uploads/world-on-tip-3d.png" alt="" className="w-full h-full object-contain" />,
      title: "One Platform. Complete Journey.",
      description: "Starting a business shouldn't feel overwhelming. Boss Works simplifies the complex process of launching your business by providing everything you need in one integrated platform—from initial idea exploration to successful launch and beyond."
    },
    {
      icon: <img src="/lovable-uploads/boss-seat-3d.png" alt="" className="w-full h-full object-contain" />,
      title: "Built for Entrepreneurs, By Entrepreneurs",
      description: "Our platform is designed specifically for launching real-world, offline businesses. Whether you're opening a bakery, a salon, or a home-based business, we have the tools and expertise to guide your journey."
    }
  ];

  return (
    <section id="why-boss-works" className="section-padding bg-background border-b border-border/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-2xl sm:text-display font-bold text-foreground mb-6">
            Why <span className="text-gradient">Boss Works?</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Background Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              
              {/* Main Card */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-3 md:p-6 h-full hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2 overflow-hidden">
                
                {/* Icon Container */}
                <div className="relative mb-3 md:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-primary/30 p-2">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 md:space-y-4">
                  <h3 className="text-sm sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm text-justify">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBossWorks;