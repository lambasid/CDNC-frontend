import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { RunningBanner } from "@/components/Support/RunningBanner";
import { Button } from "@/components/ui/button";
import { Heart, LifeBuoy, Phone, MapPin, Mail, HelpCircle } from "lucide-react";

const FindSupport = () => {
  const supportServices = [
    {
      title: "Crisis Hotline",
      description: "24/7 support for caregivers in crisis situations",
      icon: <Phone className="h-8 w-8 text-purple-900" />,
      contactInfo: "1-800-555-HELP",
    },
    {
      title: "Counseling Services",
      description: "Professional counseling for emotional support",
      icon: <Heart className="h-8 w-8 text-purple-900" />,
      contactInfo: "counseling@caresupport.org",
    },
    {
      title: "Local Support Groups",
      description: "Connect with other caregivers in your area",
      icon: <MapPin className="h-8 w-8 text-purple-900" />,
      contactInfo: "Find your local group",
    },
    {
      title: "Financial Assistance",
      description: "Resources for financial support and planning",
      icon: <LifeBuoy className="h-8 w-8 text-purple-900" />,
      contactInfo: "finance@caresupport.org",
    },
    {
      title: "Online Resources",
      description: "Educational materials and guides",
      icon: <HelpCircle className="h-8 w-8 text-purple-900" />,
      contactInfo: "resources.caresupport.org",
    },
    {
      title: "Email Support",
      description: "Send us your questions and concerns",
      icon: <Mail className="h-8 w-8 text-purple-900" />,
      contactInfo: "help@caresupport.org",
    },
  ];

  const runningBannerItems = [
    "24/7 Crisis Support Available",
    "Join a Local Support Group Today",
    "Financial Resources for Caregivers",
    "Download Our Free Caregiving Guide",
    "Virtual Support Sessions Every Tuesday",
    "One-on-One Counseling Available",
    "Emergency Respite Care Services",
    "Caregiver Wellness Workshops",
  ];

  return (
    <>
      <Header />
      
      <main className="pt-16">
        {/* Hero Banner */}
        <section className="bg-purple-light/30 py-16 px-8">
          <div className="max-w-screen-xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-900">Find Support</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We're here to help you navigate your caregiving journey with the support and resources you need.
            </p>
            <Button className="bg-white text-purple-900 hover:bg-gray-50 border border-purple/20 font-semibold py-3 px-8 rounded-lg">
              Get Immediate Help
            </Button>
          </div>
        </section>

        {/* Running Banner */}
        <RunningBanner 
          items={runningBannerItems} 
          className="bg-purple/10 text-purple-900 font-semibold py-3 text-lg"
        />

        {/* Support Services */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Support Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {supportServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-purple/5">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-purple-900 font-medium">{service.contactInfo}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Form */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-purple/5 p-8 rounded-lg shadow-sm max-w-2xl mx-auto border border-purple/10">
              <h2 className="text-2xl font-bold mb-6 text-purple-900 text-center">Request Support</h2>
              <p className="text-gray-600 mb-8 text-center">
                Fill out this form and our support team will contact you within 24 hours.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple focus:border-purple"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple focus:border-purple"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple focus:border-purple"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="supportType" className="block text-sm font-medium text-gray-700 mb-1">Type of Support Needed</label>
                  <select
                    id="supportType"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple focus:border-purple"
                  >
                    <option value="">Select type of support</option>
                    <option value="crisis">Crisis Support</option>
                    <option value="counseling">Counseling</option>
                    <option value="financial">Financial Assistance</option>
                    <option value="resources">Resources & Information</option>
                    <option value="groups">Support Groups</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-purple focus:border-purple"
                    placeholder="Please describe your situation and how we can help..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-purple hover:bg-purple-dark text-white font-semibold py-3 px-8 rounded-lg">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <RunningBanner 
          items={[
            "Download Our Free Caregiver's Handbook",
            "Watch Our Stress Management Webinar",
            "Join Our Online Community Forum",
            "Sign Up For Weekly Support Tips",
            "Connect With A Caregiver Mentor",
          ]} 
          className="bg-purple-light text-purple-900 font-semibold py-3 text-lg"
          speed={15}
        />
      </main>

      <Footer />
    </>
  );
};

export default FindSupport;
