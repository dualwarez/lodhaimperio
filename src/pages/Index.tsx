
import { Phone, MessageCircle, FileText, Building, CreditCard, Truck, Shield, Award, Users, Star, CheckCircle, Mail, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const services = [
    { icon: FileText, title: "Income Tax Return", description: "Professional ITR filing for individuals and businesses" },
    { icon: Building, title: "GST Registration & Filing", description: "Complete GST solutions and compliance" },
    { icon: Award, title: "Company Registration", description: "Private Limited, LLP, and Partnership registration" },
    { icon: CreditCard, title: "MSME Loans", description: "Quick and hassle-free MSME loan assistance" },
    { icon: FileText, title: "TDS Work", description: "TDS return filing and compliance services" },
    { icon: Truck, title: "E-Way Bill Assistance", description: "E-way bill generation and management" },
    { icon: Shield, title: "Digital Signature Services", description: "DSC for income tax, GST, and MCA filings" },
    { icon: Building, title: "Trade License Assistance", description: "Trade license registration and renewal" },
    { icon: FileText, title: "Import Export Code (IEC)", description: "IEC registration for import/export business" },
    { icon: CreditCard, title: "PAN Card Services", description: "New PAN application and corrections" },
    { icon: Users, title: "Labour License", description: "Labour license registration and compliance" },
    { icon: Award, title: "Trademark Services", description: "Trademark registration and protection" }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      text: "Pravin sir has been handling our company's GST and income tax for 3 years. Very professional and timely service!",
      rating: 5
    },
    {
      name: "Priya Patel",
      text: "Got my ITR filed within 2 days. Excellent service and very reasonable charges. Highly recommended!",
      rating: 5
    },
    {
      name: "Amit Industries",
      text: "Thanks to Pravin sir for helping us with company registration and MSME loan. Great support throughout!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed CTA Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        <a
          href="https://wa.me/918080629113"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="tel:+918080629113"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">Pravin Rawool</h1>
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
      <section id="home" className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6 animate-fade-in">
              Expert Tax & Finance Solutions for Individuals & Businesses
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Get assistance with Income Tax, GST, Registration, and More!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <a
                href="https://wa.me/918080629113"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="inline-block mr-2 h-5 w-5" />
                Message on WhatsApp
              </a>
              <a
                href="tel:+918080629113"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="inline-block mr-2 h-5 w-5" />
                Call Pravin Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tax and finance solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-blue-600">
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
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">About Pravin Rawool</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">15 Years of Excellence</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of dedicated experience in tax consultation and financial services, 
                Pravin Rawool has been helping individuals and businesses navigate the complex world of 
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
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions? Let's Connect!</h2>
          <p className="text-xl mb-8 opacity-90">Get in touch today for expert tax and finance solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918080629113"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Phone className="inline-block mr-2 h-5 w-5" />
              Call Pravin Now
            </a>
            <a
              href="https://wa.me/918080629113"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="inline-block mr-2 h-5 w-5" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-green-400" />
                  <span>+91 80806 29113</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-green-400" />
                  <span>pravin.rawool@email.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-green-400" />
                  <span>Maharashtra, India</span>
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
            <p>&copy; 2024 Pravin Rawool - Tax & Finance Consultant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
