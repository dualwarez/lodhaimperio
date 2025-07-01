import { Phone, MessageCircle, FileText, Building, CreditCard, Truck, Shield, Award, Users, Star, CheckCircle, Mail, MapPin, Calendar, ExternalLink, X, IndianRupee, Factory, Briefcase, Landmark, Download, Image, Calculator, Globe, UserCheck, Banknote, FileCheck, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showAdsDialog, setShowAdsDialog] = useState(false);

  const services = [
    {
      icon: FileText,
      title: "Income Tax Return",
      description: "Professional ITR filing for individuals and businesses",
      details: "Our expert team helps you file your Income Tax Returns accurately and on time. We handle all types of ITR forms including ITR-1, ITR-2, ITR-3, ITR-4, and more. We ensure maximum refunds and compliance with latest tax laws.",
      whatsappText: "I need to discuss about Income Tax Return"
    },
    {
      icon: IndianRupee,
      title: "GST Registration & Filing",
      description: "Complete GST solutions and compliance",
      details: "We provide end-to-end GST services including registration, monthly/quarterly returns filing, GST reconciliation, and compliance management. Our team ensures timely filing and helps you avoid penalties.",
      whatsappText: "I need to discuss about GST Registration & Filing"
    },
    {
      icon: Building,
      title: "Company Registration",
      description: "Private Limited, LLP, and Partnership registration",
      details: "We assist in registering your business as Private Limited Company, LLP, Partnership, or Proprietorship. Our services include name approval, documentation, ROC filing, and obtaining all necessary certificates.",
      whatsappText: "I need to discuss about Company Registration"
    },
    {
      icon: Landmark,
      title: "MSME Loans",
      description: "Quick and hassle-free MSME loan assistance",
      details: "Get financial support for your small business through MSME loans. We help you with loan application, documentation, and liaise with banks and financial institutions for quick approval.",
      whatsappText: "I need to discuss about MSME Loans"
    },
    {
      icon: FileText,
      title: "TDS Work",
      description: "TDS return filing and compliance services",
      details: "Complete TDS compliance including TDS deduction, monthly TDS returns filing, TDS certificates generation, and annual TDS statements. We ensure accurate TDS calculations and timely compliance.",
      whatsappText: "I need to discuss about TDS Work"
    },
    {
      icon: Truck,
      title: "E-Way Bill Assistance",
      description: "E-way bill generation and management",
      details: "Streamline your goods transportation with our E-Way Bill services. We help generate, modify, and cancel e-way bills as per GST regulations, ensuring smooth movement of goods.",
      whatsappText: "I need to discuss about E-Way Bill Assistance"
    },
    {
      icon: Shield,
      title: "Digital Signature Services",
      description: "DSC for income tax, GST, and MCA filings",
      details: "Get Class 2 and Class 3 Digital Signature Certificates for various government filings. We provide DSC for Income Tax, GST, MCA, and other regulatory compliance requirements.",
      whatsappText: "I need to discuss about Digital Signature Services"
    },
    {
      icon: Award,
      title: "Trade License Assistance",
      description: "Trade license registration and renewal",
      details: "Obtain trade licenses for your business operations. We assist with application preparation, documentation, and follow-up with local authorities for quick license approval and renewal.",
      whatsappText: "I need to discuss about Trade License Assistance"
    },
    {
      icon: Factory,
      title: "Import Export Code (IEC)",
      description: "IEC registration for import/export business",
      details: "Start your import-export business with IEC registration. We handle the complete process including application filing, documentation, and obtaining the 10-digit IEC number from DGFT.",
      whatsappText: "I need to discuss about Import Export Code (IEC)"
    },
    {
      icon: CreditCard,
      title: "PAN Card Services",
      description: "New PAN application and corrections",
      details: "Get new PAN cards, corrections in existing PAN, duplicate PAN cards, and PAN linking services. We ensure quick processing and delivery of PAN cards with accurate information.",
      whatsappText: "I need to discuss about PAN Card Services"
    },
    {
      icon: Briefcase,
      title: "Labour License",
      description: "Labour license registration and compliance",
      details: "Obtain necessary labor licenses for your business including Contract Labour License, Shops & Establishment License, and Factory License. We ensure full compliance with labor laws.",
      whatsappText: "I need to discuss about Labour License"
    },
    {
      icon: Award,
      title: "Trademark Services",
      description: "Trademark registration and protection",
      details: "Protect your brand with trademark registration. Our services include trademark search, application filing, response to objections, and renewal services to safeguard your intellectual property.",
      whatsappText: "I need to discuss about Trademark Services"
    },
    {
      icon: Calculator,
      title: "Accounting Services",
      description: "Complete bookkeeping and accounting solutions",
      details: "Professional accounting services including bookkeeping, financial statements preparation, ledger maintenance, and financial analysis for businesses of all sizes.",
      whatsappText: "I need to discuss about Accounting Services"
    },
    {
      icon: Globe,
      title: "FSSAI Registration",
      description: "Food safety and standards authority license",
      details: "Get FSSAI registration for your food business. We handle the complete process from application to license approval, ensuring compliance with food safety regulations.",
      whatsappText: "I need to discuss about FSSAI Registration"
    },
    {
      icon: UserCheck,
      title: "Auditing Services",
      description: "Internal and statutory audit services",
      details: "Comprehensive auditing services including statutory audits, internal audits, tax audits, and compliance audits to ensure your business meets all regulatory requirements.",
      whatsappText: "I need to discuss about Auditing Services"
    },
    {
      icon: Banknote,
      title: "Investment Advisory",
      description: "Financial planning and investment guidance",
      details: "Expert investment advisory services including mutual funds, tax-saving investments, retirement planning, and wealth management solutions tailored to your financial goals.",
      whatsappText: "I need to discuss about Investment Advisory"
    },
    {
      icon: FileCheck,
      title: "ESI & PF Registration",
      description: "Employee State Insurance and Provident Fund",
      details: "Complete ESI and PF registration services for employers, including monthly compliance, return filing, and employee benefit management for statutory compliance.",
      whatsappText: "I need to discuss about ESI & PF Registration"
    },
    {
      icon: ClipboardList,
      title: "ROC Compliance",
      description: "Registrar of Companies annual compliance",
      details: "Ensure ROC compliance with annual return filing, board meeting compliance, maintaining statutory registers, and other MCA requirements for companies.",
      whatsappText: "I need to discuss about ROC Compliance"
    }
  ];

  const testimonials = [{
    name: "Rajesh Sharma",
    text: "Jiya Siya Associates has been handling our company's GST and income tax for 3 years. Very professional and timely service!",
    rating: 5
  }, {
    name: "Priya Patel",
    text: "Got my ITR filed within 2 days. Excellent service and very reasonable charges. Highly recommended!",
    rating: 5
  }, {
    name: "Amit Industries",
    text: "Thanks to the team for helping us with company registration and MSME loan. Great support throughout!",
    rating: 5
  }];

  const handleEnquireNow = (whatsappText: string) => {
    const phoneNumber = "917208241591";
    const message = encodeURIComponent(whatsappText);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const downloadImage = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateAdImage = (adNumber: number) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // 9:16 aspect ratio (e.g., 1080x1920 for high quality)
    canvas.width = 1080;
    canvas.height = 1920;
    
    if (!ctx) return '';
    
    // Different background designs for each ad
    if (adNumber === 1) {
      // Premium tax-related background with gradient
      const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
      gradient.addColorStop(0, '#1e3a8a'); // blue-900
      gradient.addColorStop(0.5, '#1e40af'); // blue-800
      gradient.addColorStop(1, '#059669'); // green-600
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1080, 1920);
    } else if (adNumber === 2) {
      // Professional white background with blue accents
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, 1080, 1920);
      
      // Blue header
      ctx.fillStyle = '#1e3a8a';
      ctx.fillRect(0, 0, 1080, 300);
      
      // Green footer
      ctx.fillStyle = '#059669';
      ctx.fillRect(0, 1620, 1080, 300);
    } else {
      // Corporate green to blue gradient
      const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
      gradient.addColorStop(0, '#059669'); // green-600
      gradient.addColorStop(0.5, '#0d9488'); // teal-600
      gradient.addColorStop(1, '#1e40af'); // blue-800
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 1080, 1920);
    }
    
    // Professional border for all ads
    ctx.strokeStyle = adNumber === 2 ? '#1e3a8a' : '#ffffff';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, 1040, 1880);
    
    // Logo section - consistent across all ads
    const logoY = adNumber === 2 ? 80 : 100;
    ctx.fillStyle = adNumber === 2 ? '#ffffff' : '#ffffff';
    ctx.beginPath();
    ctx.arc(150, logoY + 50, 60, 0, 2 * Math.PI);
    ctx.fill();
    
    // JSA logo text
    ctx.fillStyle = '#1e40af';
    ctx.font = 'bold 28px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('JSA', 150, logoY + 60);
    
    // Company name
    ctx.fillStyle = adNumber === 2 ? '#1e3a8a' : '#ffffff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Jiya Siya Associates', 240, logoY + 40);
    
    ctx.font = 'italic 32px Arial';
    ctx.fillStyle = adNumber === 2 ? '#6b7280' : '#e5e7eb';
    ctx.fillText('Tax & Finance Consultant', 240, logoY + 80);
    
    // Experience badge
    const badgeColor = adNumber === 1 ? '#059669' : adNumber === 2 ? '#1e40af' : '#0d9488';
    ctx.fillStyle = badgeColor;
    ctx.fillRect(240, logoY + 100, 200, 50);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('15+ Years Experience', 340, logoY + 130);
    
    // Main heading - different for each ad
    const headingY = logoY + 220;
    ctx.fillStyle = adNumber === 2 ? '#1e3a8a' : '#ffffff';
    ctx.font = 'bold 56px Arial';
    ctx.textAlign = 'center';
    
    if (adNumber === 1) {
      ctx.fillText('Expert Tax Solutions', 540, headingY);
      ctx.fillText('For Your Business', 540, headingY + 70);
    } else if (adNumber === 2) {
      ctx.fillText('Complete Financial', 540, headingY);
      ctx.fillText('& Compliance Services', 540, headingY + 70);
    } else {
      ctx.fillText('Trusted by 500+ Clients', 540, headingY);
      ctx.fillText('Across Maharashtra', 540, headingY + 70);
    }
    
    // Services section
    const servicesY = headingY + 160;
    const boxColor = adNumber === 2 ? '#f8fafc' : 'rgba(255, 255, 255, 0.95)';
    ctx.fillStyle = boxColor;
    ctx.fillRect(60, servicesY, 960, 700);
    
    // Services title
    ctx.fillStyle = '#1e40af';
    ctx.font = 'bold 40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Our Premium Services', 540, servicesY + 60);
    
    // Different service lists for each ad
    let servicesList: string[] = [];
    if (adNumber === 1) {
      servicesList = [
        '✓ Income Tax Return Filing',
        '✓ GST Registration & Returns',
        '✓ Company Registration',
        '✓ MSME Loans & Funding',
        '✓ TDS Work & Compliance',
        '✓ Digital Signature Services',
        '✓ Trade License Registration',
        '✓ Import Export Code (IEC)',
        '✓ Accounting & Bookkeeping',
        '✓ Investment Advisory',
        '✓ ESI & PF Registration',
        '✓ FSSAI Registration'
      ];
    } else if (adNumber === 2) {
      servicesList = [
        '✓ Professional Tax Consultation',
        '✓ Business Registration Services',
        '✓ Financial Planning & Advisory',
        '✓ Statutory Compliance',
        '✓ Audit & Assurance Services',
        '✓ License & Permits',
        '✓ ROC Compliance',
        '✓ Trademark Registration',
        '✓ Labour License Services',
        '✓ Custom Duty Consultation',
        '✓ Tax Optimization Strategies',
        '✓ Corporate Legal Services'
      ];
    } else {
      servicesList = [
        '✓ Expert ITR Filing',
        '✓ GST Solutions',
        '✓ Business Setup Services',
        '✓ Loan Assistance',
        '✓ Digital Services',
        '✓ Compliance Management',
        '✓ Financial Consultation',
        '✓ Registration Services',
        '✓ Tax Planning',
        '✓ Legal Documentation',
        '✓ Advisory Services',
        '✓ Business Growth Support'
      ];
    }
    
    // Display services in two columns
    ctx.font = '28px Arial';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#1e40af';
    
    servicesList.forEach((service, index) => {
      if (index < 12) {
        const col = index % 2;
        const row = Math.floor(index / 2);
        const xPos = col === 0 ? 100 : 560;
        const yPos = servicesY + 120 + (row * 45);
        ctx.fillText(service, xPos, yPos);
      }
    });
    
    // Contact section
    const contactY = servicesY + 720;
    ctx.fillStyle = '#1e40af';
    ctx.fillRect(60, contactY, 960, 380);
    
    // Contact header
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Contact Our Experts Today!', 540, contactY + 60);
    
    // Phone numbers with enhanced styling
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'center';
    
    // First phone number
    ctx.fillStyle = '#10b981';
    ctx.fillRect(200, contactY + 100, 680, 60);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('📞 +91 72082 41591', 540, contactY + 140);
    
    // Second phone number
    ctx.fillStyle = '#059669';
    ctx.fillRect(200, contactY + 180, 680, 60);
    ctx.fillStyle = '#ffffff';
    ctx.fillText('📞 +91 97029 77288', 540, contactY + 220);
    
    // WhatsApp message
    ctx.font = '28px Arial';
    ctx.fillText('Message us on WhatsApp for instant consultation', 540, contactY + 280);
    
    // Location
    ctx.font = '24px Arial';
    ctx.fillText('📍 Pune, Maharashtra | Licensed Tax Consultant', 540, contactY + 320);
    
    // Call to action
    ctx.fillStyle = '#10b981';
    ctx.fillRect(140, contactY + 340, 800, 60);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Arial';
    ctx.fillText('Get Professional Tax Solutions Today!', 540, contactY + 380);
    
    return canvas.toDataURL('image/jpeg', 0.9);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed CTA Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <a href="https://wa.me/917208241591" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <MessageCircle className="h-6 w-6" />
        </a>
        <a href="tel:+917208241591" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg overflow-hidden">
                <img src="/lovable-uploads/e5056410-8de6-4fa4-88d2-1ebce0a23f54.png" alt="Jiya Siya Associates Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">Jiya Siya Associates</h1>
                <p className="text-sm text-muted-foreground">Tax & Finance Consultant</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-foreground hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-foreground hover:text-blue-600 transition-colors">About</a>
              <a href="#testimonials" className="text-foreground hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1), rgba(34, 197, 94, 0.1)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 animate-fade-in">
              Expert Tax & Finance Solutions for Individuals & Businesses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Get assistance with Income Tax, GST, Registration, and More!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <a href="https://wa.me/917208241591" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                <MessageCircle className="inline-block mr-2 h-5 w-5" />
                Message on WhatsApp
              </a>
              <a href="tel:+917208241591" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                <Phone className="inline-block mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional tax and finance solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-600 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg mr-4">
                          <service.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-blue-900">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-blue-900">{service.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">{service.details}</p>
                    <div className="flex flex-col gap-2">
                      <Button 
                        onClick={() => handleEnquireNow(service.whatsappText)} 
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp Enquiry
                      </Button>
                      <div className="flex gap-2">
                        <a href="tel:+917208241591" className="flex-1">
                          <Button variant="outline" className="w-full">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Now
                          </Button>
                        </a>
                        <a href="tel:+919702977288" className="flex-1">
                          <Button variant="outline" className="w-full">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Alt
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">About Jiya Siya Associates</h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">15 Years of Excellence</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of dedicated experience in tax consultation and financial services, 
                Jiya Siya Associates has been helping individuals and businesses navigate the complex world of 
                taxation and compliance. Our mission is to provide reliable, efficient, and cost-effective 
                solutions that help our clients focus on what they do best - growing their business.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="bg-green-100 p-4 rounded-lg mb-4 inline-block">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-blue-900">Certified Professional</h4>
                  <p className="text-sm text-muted-foreground">Licensed tax consultant with proper certifications</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-lg mb-4 inline-block">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-blue-900">500+ Happy Clients</h4>
                  <p className="text-sm text-muted-foreground">Trusted by businesses and individuals</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-4 rounded-lg mb-4 inline-block">
                    <Calendar className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-blue-900">Timely Service</h4>
                  <p className="text-sm text-muted-foreground">Always deliver within promised timelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Don't just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-blue-900">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.9), rgba(34, 197, 94, 0.9)), url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Have Questions? Let's Connect!</h2>
          <p className="text-xl mb-8 opacity-90 text-white">Get in touch today for expert tax and finance solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+917208241591" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              <Phone className="inline-block mr-2 h-5 w-5" />
              Call Now
            </a>
            <a href="https://wa.me/917208241591" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              <MessageCircle className="inline-block mr-2 h-5 w-5" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Ads Dialog */}
      <Dialog open={showAdsDialog} onOpenChange={setShowAdsDialog}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-blue-900 text-2xl">Premium Advertisement Images</DialogTitle>
            <p className="text-muted-foreground">Download these professional images for offline advertising and social media sharing (9:16 format)</p>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[1, 2, 3].map((adNum) => (
              <div key={adNum} className="space-y-3">
                <div className="bg-gradient-to-b from-blue-900 via-blue-800 via-green-600 to-green-800 p-6 rounded-lg text-white aspect-[9/16] flex flex-col justify-between text-center relative overflow-hidden border-4 border-white">
                  {/* Premium pattern overlay */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 gap-2 h-full">
                      {Array.from({length: 64}).map((_, i) => (
                        <div key={i} className="bg-white rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Logo with JSA branding */}
                  <div className="relative z-10 flex items-center justify-start mb-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-3 shadow-lg">
                      <img src="/lovable-uploads/994acf8f-19b0-47db-ba8a-5c64ba9d152b.png" alt="JSA Logo" className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-xl">Jiya Siya Associates</h3>
                      <p className="text-sm opacity-90 italic">Premium Tax & Finance Consultant</p>
                      <div className="bg-white text-green-600 px-2 py-1 rounded text-xs font-bold mt-1">
                        15+ Years Experience
                      </div>
                    </div>
                  </div>
                  
                  {/* Main heading */}
                  <div className="relative z-10 flex-1 flex items-center justify-center">
                    <h2 className="text-2xl font-bold leading-tight">
                      {adNum === 1 && "Expert Tax Solutions\nFor Your Business Success"}
                      {adNum === 2 && "Complete Financial\n& Compliance Services"}
                      {adNum === 3 && "Trusted by 500+ Clients\nAcross Maharashtra"}
                    </h2>
                  </div>
                  
                  {/* Services in premium box */}
                  <div className="relative z-10 bg-white/95 text-blue-900 p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-sm mb-2">Our Premium Services:</h4>
                    <div className="text-xs space-y-1 grid grid-cols-2 gap-x-2">
                      <span>✓ Income Tax Return</span>
                      <span>✓ GST Registration</span>
                      <span>✓ Company Registration</span>
                      <span>✓ MSME Loans</span>
                      <span>✓ Digital Signature</span>
                      <span>✓ Accounting Services</span>
                      <span>✓ Investment Advisory</span>
                      <span>✓ ROC Compliance</span>
                    </div>
                  </div>
                  
                  {/* Contact with both numbers */}
                  <div className="relative z-10 bg-blue-900/95 text-white p-4 rounded-lg border-2 border-white">
                    <h4 className="font-bold text-lg mb-3">Contact Our Experts!</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2 text-green-400" />
                        <span className="font-bold text-sm">+91 72082 41591</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2 text-green-400" />
                        <span className="font-bold text-sm">+91 97029 77288</span>
                      </div>
                    </div>
                    <p className="text-xs mt-2 opacity-90">WhatsApp Available | Pune, Maharashtra</p>
                    <div className="bg-green-600 text-white px-3 py-2 rounded mt-3">
                      <span className="text-sm font-semibold">Get Professional Solutions Now!</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => {
                    const imageUrl = generateAdImage(adNum);
                    downloadImage(imageUrl, `JSA-Premium-Ad-${adNum}.jpg`);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Premium Ad {adNum}
                </Button>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact/Footer Section */}
      <footer id="contact" className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-green-400" />
                  <span>+91 72082 41591</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-green-400" />
                  <span>+91 97029 77288</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-green-400" />
                  <span>jiyasiyaassociates@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-green-400" />
                  <a href="https://maps.app.goo.gl/1tJC7A7EHH5MoWq78" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors flex items-center">
                    <span className="mr-2">View Location</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block hover:text-green-400 transition-colors">Our Services</a>
                <a href="#about" className="block hover:text-green-400 transition-colors">About Us</a>
                <a href="#testimonials" className="block hover:text-green-400 transition-colors">Testimonials</a>
                <a href="#contact" className="block hover:text-green-400 transition-colors">Contact</a>
                <button 
                  onClick={() => setShowAdsDialog(true)}
                  className="block hover:text-green-400 transition-colors text-left"
                >
                  <Image className="inline-block mr-2 h-4 w-4" />
                  Ads
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p>&copy; 2024 Jiya Siya Associates - Tax & Finance Consultant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
