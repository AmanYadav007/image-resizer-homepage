import { Image, Lock, Eye } from 'lucide-react'
import { Metrics } from '@/components/metrics'
import { FeatureCard } from '@/components/feature-card'
import { StepCard } from '@/components/step-card'
import { CTAButton } from '@/components/cta-button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <Image className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-bold text-gray-900">Image Resizer</span>
          </div>
          <nav aria-label="Main navigation">
            <ul className="flex space-x-6">
              <li>
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                  How It Works
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Simple Image Resizing in Your Browser
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Resize images instantly with our powerful Chrome extension. 
            Perfect dimensions every time with aspect ratio lock.
          </p>
          
          <Metrics />
          <CTAButton />
        </section>

        <section 
          id="features" 
          className="bg-white py-16"
          aria-labelledby="features-heading"
        >
          <div className="container mx-auto px-4">
            <h2 
              id="features-heading" 
              className="text-3xl font-bold mb-12 text-center text-gray-900"
            >
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Image className="w-12 h-12 text-purple-500" />}
                title="Quick Resize"
                description="Resize any image with just a few clicks directly in your browser."
              />
              <FeatureCard 
                icon={<Lock className="w-12 h-12 text-purple-500" />}
                title="Aspect Ratio Lock"
                description="Keep your images perfectly proportioned with automatic aspect ratio locking."
              />
              <FeatureCard 
                icon={<Eye className="w-12 h-12 text-purple-500" />}
                title="Live Preview"
                description="See your resized image instantly before saving. No guesswork needed."
              />
            </div>
          </div>
        </section>

        <section 
          id="how-it-works" 
          className="py-16 bg-gray-50"
          aria-labelledby="how-it-works-heading"
        >
          <div className="container mx-auto px-4">
            <h2 
              id="how-it-works-heading"
              className="text-3xl font-bold mb-12 text-center text-gray-900"
            >
              How It Works
            </h2>
            <div 
              className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              role="list"
            >
              <StepCard 
                number={1} 
                title="Install" 
                description="Add the extension to Chrome in one click." 
              />
              <StepCard 
                number={2} 
                title="Select & Resize" 
                description="Choose your image and set dimensions." 
              />
              <StepCard 
                number={3} 
                title="Save" 
                description="Download your perfectly resized image." 
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Resizing?</h2>
            <CTAButton />
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Image className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <span className="text-xl font-bold">Image Resizer</span>
              </div>
              <p className="text-gray-400">Simple, fast image resizing for Chrome.</p>
            </div>
            <div className="md:text-right">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Image Resizer. All rights reserved.</p>
              <div className="flex space-x-4 mt-2 md:justify-end">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

