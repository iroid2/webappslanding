"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check,   Laptop, Server, Lock, BarChart, LifeBuoy } from "lucide-react"

export default function EnhancedHeroSection() {
  const [activeTab, setActiveTab] = useState("overview")

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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-red-50 via-white to-red-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <motion.div 
        className="absolute top-0 left-0 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <motion.div 
            className="flex flex-col justify-center space-y-4"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="space-y-2" variants={fadeIn}>
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-600">
                Transform Your Business with a Custom Web App
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Unbeatable Offer: Now 50% Off! Get a powerful, custom web application tailored to your business needs.
              </p>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-2 sm:flex-row"
              variants={fadeIn}
            >
              <Button 
                className="bg-red-600 text-white hover:bg-red-700 transition-colors"
                onClick={() => setActiveTab("getStarted")}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button className="border-red-600 text-red-600 hover:bg-red-50 transition-colors">
                Learn More
              </Button>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2 text-sm text-gray-500"
              variants={fadeIn}
            >
              <Check className="text-green-500" />
              <span>Limited Time Offer</span>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 transform rotate-3 rounded-3xl"></div>
            <Card className="relative bg-white shadow-xl rounded-3xl border-0 overflow-hidden">
              <CardContent className="p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="overview" className="data-[state=active]:bg-red-100 data-[state=active]:text-red-600">Overview</TabsTrigger>
                    <TabsTrigger value="getStarted" className="data-[state=active]:bg-red-100 data-[state=active]:text-red-600">Get Started</TabsTrigger>
                  </TabsList>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TabsContent value="overview" className="mt-4">
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-gray-900">Why Choose Us?</h3>
                          <ul className="space-y-2">
                            {[
                              "Custom-tailored solutions",
                              "Expert development team",
                              "Cutting-edge technologies",
                              "Ongoing support and maintenance"
                            ].map((item, index) => (
                              <motion.li 
                                key={index} 
                                className="flex items-center space-x-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <Check className="h-5 w-5 text-green-500" />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </TabsContent>
                      <TabsContent value="getStarted" className="mt-4">
                        <form className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" className="border-red-200 focus:border-red-500 focus:ring-red-500" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Enter your email" type="email" className="border-red-200 focus:border-red-500 focus:ring-red-500" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" placeholder="Enter your company name" className="border-red-200 focus:border-red-500 focus:ring-red-500" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="project-type">Project Type</Label>
                            <div className="border-red-200 focus-within:border-red-500 focus-within:ring-red-500">
                              <Select name="project-type">
                                <option>E-commerce</option>
                                <option>Business Management</option>
                                <option>Customer Portal</option>
                                <option>Other</option>
                              </Select>
                            </div>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white hover:from-red-700 hover:to-purple-700 transition-colors">
                            Claim Your 50% Discount
                          </Button>
                        </form>
                      </TabsContent>
                    </motion.div>
                  </AnimatePresence>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        animate={floatingAnimation}
      >
        <div className="flex space-x-4">
          {[Laptop, Server, Lock, BarChart, LifeBuoy].map((Icon, index) => (
            <motion.div 
              key={index}
              className="bg-white p-2 rounded-full shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="h-6 w-6 text-red-600" />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,0,0,0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  )
}