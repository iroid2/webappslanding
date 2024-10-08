"use client"

 
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Laptop, Code, Server, Lock, BarChart, LifeBuoy, Star, Users, Zap } from "lucide-react"
import Link from 'next/link'

export default function EnhancedLandingPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <main className="flex-1">
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What Youll Get
            </motion.h2>
            <motion.div 
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: Laptop, title: "Custom Web App", description: "Up to 10 core features tailored to your needs" },
                { icon: Code, title: "User Interface Design", description: "Sleek, modern, and user-friendly design" },
                { icon: Server, title: "Database & API", description: "Robust database and API integration" },
                { icon: Lock, title: "Authentication", description: "Secure user authentication and authorization" },
                { icon: BarChart, title: "Analytics Dashboard", description: "Track key metrics with ease" },
                { icon: LifeBuoy, title: "3 Months Support", description: "Post-launch support and maintenance" },
              ].map((feature, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                        <feature.icon className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "John Doe", company: "Tech Innovators", quote: "WebAppPro transformed our business with a custom app that streamlined our operations." },
                { name: "Jane Smith", company: "E-commerce Giants", quote: "The e-commerce solution provided by WebAppPro increased our online sales by 200%." },
                { name: "Mike Johnson", company: "Data Insights Co.", quote: "The analytics dashboard developed by WebAppPro gives us invaluable insights into our business." },
              ].map((testimonial, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className="bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</blockquote>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Pricing Plans
            </motion.h2>
            <motion.div 
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "Starter", price: "$2,500", features: ["5 core features", "Basic UI design", "Standard support"] },
                { name: "Pro", price: "$5,000", features: ["10 core features", "Advanced UI/UX design", "Priority support", "Analytics dashboard"] },
                { name: "Enterprise", price: "Custom", features: ["Unlimited features", "Bespoke design", "24/7 support", "Advanced analytics", "API integration"] },
              ].map((plan, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <Card className={`bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300 ${index === 1 ? 'border-red-600 shadow-lg' : ''}`}>
                    <CardHeader>
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <CardDescription className="text-3xl font-bold">{plan.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full mt-6 ${index === 1 ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-900 hover:bg-gray-800'} text-white transition-colors`}>
                        Choose Plan
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div 
              className="grid gap-6 lg:grid-cols-2"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Get in Touch</h2>
                <p className="text-gray-400 mb-4">Have questions? Were here to help. Reach out to us and well get back to you as soon as possible.</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-red-500" />
                    <span>24/7 Customer Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-red-500" />
                    <span>Quick Response Time</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="h-5 w-5 text-red-500" />
                    <span>Expert Advice</span>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn}>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-white">Name</Label>
                    <Input id="contact-name" placeholder="Your name" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-white">Email</Label>
                    <Input id="contact-email" placeholder="Your email" type="email" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message" className="text-white">Message</Label>
                    <textarea 
                      id="contact-message" 
                      placeholder="Your message" 
                      className="w-full h-32 px-3 py-2 text-white bg-gray-800 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-red-600 text-white hover:bg-red-700 transition-colors">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-600 to-red-500 text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Limited Time Offer
            </motion.h2>
            <motion.p 
              className="mt-4 text-xl text-red-100 max-w-[600px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Don&apos;t miss out on this incredible opportunity to transform your business
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold">
                <span className="line-through text-red-300">$10,000</span>
                <span className="ml-2 text-white">$5,000</span>
              </div>
              <Button className="bg-white text-red-600 hover:bg-red-100 transition-colors">
                Claim Your 50% Discount Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 border-t border-gray-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold mb-2">About Us</h3>
              <p className="text-sm text-gray-600">WebAppPro is a leading web application development company, dedicated to transforming businesses through innovative digital solutions.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><Link className="text-sm text-gray-600 hover:text-red-600 transition-colors" href="#features">Features</Link></li>
                <li><Link className="text-sm text-gray-600 hover:text-red-600 transition-colors" href="#testimonials">Testimonials</Link></li>
                <li><Link className="text-sm text-gray-600 hover:text-red-600 transition-colors" href="#pricing">Pricing</Link></li>
                <li><Link className="text-sm text-gray-600 hover:text-red-600 transition-colors" href="#contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">123 Web Street, Digital City, 12345</p>
              <p className="text-sm text-gray-600">Email: info@webapppro.com</p>
              <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 WebAppPro. All rights reserved.</p>
            <nav className="flex gap-4 mt-4 sm:mt-0">
              <Link className="text-sm text-gray-600 hover:text-red-600 transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-600 hover:text-red-600 transition-colors" href="#">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}