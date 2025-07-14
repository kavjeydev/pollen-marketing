"use client"

import { ArrowRight, CreditCard, TrendingUp, Shield, Zap } from 'lucide-react'

const features = [
  {
    name: 'Instant microloan approval',
    description:
      'Get approved for small loans in seconds to cover friend payments when your balance is low.',
    icon: Zap,
  },
  {
    name: 'Build credit with every payment',
    description: 'Every microloan payment is reported to credit bureaus, helping improve your credit score.',
    icon: TrendingUp,
  },
  {
    name: 'Smart loan amounts',
    description: 'AI determines safe loan amounts based on your payment history and income patterns.',
    icon: Shield,
  },
  {
    name: 'Automatic repayment',
    description: 'Loans are automatically paid back when you receive money, making it effortless.',
    icon: CreditCard,
  },
]

export default function WithProductScreenshot() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">Build Credit</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-neutral-dark sm:text-5xl">
                Turn friend payments into credit building
              </p>
              <p className="mt-6 text-lg/8 text-muted-foreground">
                Don't let a low balance stop you from paying friends back. Get instant microloans and build your credit score with every transaction - it's financial growth made simple.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-muted-foreground lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-neutral-dark">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-primary" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="relative w-full max-w-none">
            {/* Mobile App Interface Mockup */}
            <div className="relative mx-auto w-80 h-[640px] bg-neutral-dark rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 bg-white">
                  <span className="text-sm font-medium text-neutral-dark">9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-primary rounded-sm"></div>
                    <div className="w-4 h-2 bg-primary rounded-sm"></div>
                    <div className="w-4 h-2 bg-primary rounded-sm"></div>
                  </div>
                </div>

                {/* App Content */}
                <div className="px-6 py-4">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-neutral-dark">Microloan</h3>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Credit Score Display */}
                  <div className="bg-gradient-to-r from-primary to-emerald-600 rounded-2xl p-6 mb-6 text-white">
                    <p className="text-sm opacity-90 mb-2">Your Credit Score</p>
                    <div className="flex items-end space-x-2">
                      <p className="text-3xl font-bold">720</p>
                      <p className="text-sm text-green-300 mb-1">+15 this month</p>
                    </div>
                    <div className="mt-3 text-xs opacity-75">
                      Excellent • Keep building with microloans
                    </div>
                  </div>

                  {/* Loan Request */}
                  <div className="bg-emerald-50 border border-primary/20 rounded-xl p-4 mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-sm font-medium text-primary">Sarah Chen requested $25</p>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Pending</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Dinner split • The Porch Restaurant</p>

                    <div className="bg-white rounded-lg p-3 mb-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Your balance:</span>
                        <span className="font-semibold text-gray-900">$12.50</span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-600">Need microloan:</span>
                        <span className="font-semibold text-primary">$12.50</span>
                      </div>
                    </div>

                    <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg text-sm transition-colors">
                      Request Microloan & Send $25
                    </button>
                  </div>

                  {/* Benefits Banner */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-green-700">Credit Building Opportunity</span>
                    </div>
                    <p className="text-xs text-green-600">
                      This microloan will be reported to credit bureaus and could improve your score by 3-5 points
                    </p>
                  </div>
                </div>

                {/* Floating Success Notification */}
                <div className="absolute top-20 right-4 bg-green-500 text-white shadow-lg rounded-lg p-3 animate-bounce">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-xs font-medium">Credit score +5!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}