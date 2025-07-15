"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { PageTitle } from "@/components/ui/page-title";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="bg-black text-black min-h-screen mb-1">
        <div className="container mx-auto px-4 py-12">
          <PageTitle section="Contact Us" heading="Get in Touch with Easplay">
            We would love to hear from you! Fill out the form below, and we'll
            get back to you as soon as possible.
          </PageTitle>

          <div className="flex flex-col items-center w-full bg-white p-5 rounded-2xl mt-4">
            <div className="bg-black text-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
              <div>
                <form className="mt-6 space-y-6">
                  <div>
                    <Input
                      placeholder="Full Name"
                      className="bg-white text-black border-gray-600 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address"
                      className="bg-white text-black border-gray-600 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Message"
                      rows={6}
                      className="bg-white text-black border-gray-600 focus:border-orange-500"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label htmlFor="terms" className="text-white text-sm">
                      I agree to the{" "}
                      <a href="#" className="font-medium hover:text-orange-400">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Additional Contact Information Section */}
          <div className="mt-12 text-center text-white">
            <h5 className="font-bold mb-4 text-xl">Other Ways to Reach Us</h5>
            <p className="text-lg mb-2">
              Email:{" "}
              <a href="mailto:support@easplay.com" className="text-orange-400">
                support@easplay.com
              </a>
            </p>
            <p className="text-lg mb-2">
              Phone:{" "}
              <a href="tel:+15551234567" className="text-orange-400">
                +1 (555) 123-4567
              </a>
            </p>
            <p className="text-lg mb-2">Follow us on social media:</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="#"
                className="flex items-center text-white hover:text-orange-500"
              >
                <Facebook className="mr-1 w-5 h-5" />
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center text-white hover:text-orange-500"
              >
                <Twitter className="mr-1 w-5 h-5" />
                Twitter
              </a>
              <a
                href="#"
                className="flex items-center text-white hover:text-orange-500"
              >
                <Instagram className="mr-1 w-5 h-5" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
