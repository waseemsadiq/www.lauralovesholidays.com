
import { EnquiryForm } from "@/components/EnquiryForm";
import { Button } from "@/components/ui/button";
import { Palmtree, Plane, Map, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="animate-fade-up space-y-6 max-w-3xl">
            <h1 className="font-serif text-5xl md:text-7xl font-semibold">
              Your Perfect Summer Getaway Awaits
            </h1>
            <p className="text-xl md:text-2xl text-neutral-100">
              Let us craft your dream vacation experience
            </p>
            <Button
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100"
            >
              Start Planning
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4">
              Personalized Travel Services
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              From luxurious getaways to adventure-packed journeys, we create unforgettable experiences tailored to you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palmtree,
                title: "Luxury Resorts",
                description: "Hand-picked premium accommodations for your comfort",
              },
              {
                icon: Plane,
                title: "Flight Booking",
                description: "Best deals on flights with premium airlines",
              },
              {
                icon: Map,
                title: "Custom Itineraries",
                description: "Personalized travel plans crafted just for you",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 text-center space-y-4 rounded-lg bg-neutral-50 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="w-12 h-12 mx-auto text-neutral-800" />
                <h3 className="font-serif text-xl text-neutral-800">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="py-24 px-4 bg-neutral-100">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-neutral-800 mb-4">
              Start Your Journey
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Fill out the form below and let's begin planning your perfect getaway
            </p>
          </div>
          <EnquiryForm />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-neutral-800 mb-8">
            Ready to start planning?
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <Phone className="w-5 h-5 text-neutral-800" />
            <a href="tel:07368202536" className="text-lg text-neutral-800 hover:text-neutral-600 transition-colors">
              07368 202 536
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
