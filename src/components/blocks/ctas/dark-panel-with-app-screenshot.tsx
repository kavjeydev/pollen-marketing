"use client"

import { Smartphone, CreditCard, Download } from 'lucide-react'

export default function DarkPanelWithAppScreenshot() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary to-emerald-600 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.3" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#007BFF" />
                  <stop offset={1} stopColor="#0056CC" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl font-[var(--font-inter)]">
                Start building credit with every payment
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-emerald-100 font-[var(--font-inter)]">
                Join thousands who are building their financial future with microloans. Every transaction is an opportunity to improve your credit score.
              </p>

              {/* Download Badges */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#"
                  className="flex items-center gap-3 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg transition-colors shadow-lg"
                >
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600 font-[var(--font-inter)]">Download on the</div>
                    <div className="text-sm font-semibold font-[var(--font-inter)]">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg transition-colors shadow-lg"
                >
                  <Download className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600 font-[var(--font-inter)]">Get it on</div>
                    <div className="text-sm font-semibold font-[var(--font-inter)]">Google Play</div>
                  </div>
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-8 py-3 text-sm font-semibold text-primary shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors font-[var(--font-inter)]"
                >
                  Get Microloans Now
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white hover:text-emerald-100 font-[var(--font-inter)]">
                  Learn more
                  <span aria-hidden="true">→</span>
                </a>
              </div>

              {/* Credit Building Trust Badge */}
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-emerald-100">
                <CreditCard className="w-5 h-5" />
                <span className="text-sm font-[var(--font-inter)]">Build Credit • FDIC Insured • Instant Approval</span>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <div className="absolute top-0 left-0 w-228 max-w-none">
                {/* Microloan Flow Mockup */}
                <div className="relative">
                  {/* Main Phone */}
                  <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    <div className="bg-white rounded-[2rem] h-[480px] w-[240px] overflow-hidden">
                      {/* Status Bar */}
                      <div className="bg-gray-50 px-4 py-2 flex justify-between items-center">
                        <span className="text-xs font-semibold font-[var(--font-inter)]">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-4 h-2 bg-primary rounded-sm"></div>
                          <div className="w-1 h-2 bg-gray-300 rounded-sm"></div>
                          <div className="w-1 h-2 bg-gray-300 rounded-sm"></div>
                        </div>
                      </div>

                      {/* App Content */}
                      <div className="p-6">
                        <div className="w-12 h-12 bg-primary rounded-xl mb-4 flex items-center justify-center">
                          <CreditCard className="text-white w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 font-[var(--font-inter)]">Microloan Approved!</h3>
                        <p className="text-gray-600 text-sm mb-6 font-[var(--font-inter)]">$25.00 • Credit building opportunity</p>

                        {/* Credit Score Progress */}
                        <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-900 font-[var(--font-inter)]">Credit Score</span>
                            <span className="text-lg font-bold text-primary font-[var(--font-inter)]">720</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                            <div className="bg-primary h-2 rounded-full" style={{width: '72%'}}></div>
                          </div>
                          <p className="text-xs text-green-600 font-[var(--font-inter)]">+5 points expected from this microloan</p>
                        </div>

                        {/* Continue Button */}
                        <div className="h-12 bg-primary rounded-lg flex items-center justify-center">
                          <span className="text-white font-semibold text-sm font-[var(--font-inter)]">Send $25 to Sarah</span>
                        </div>

                        {/* Auto-repay Info */}
                        <p className="text-xs text-gray-500 text-center mt-3 font-[var(--font-inter)]">
                          Auto-repaid when you receive money
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Second Phone (Success Screen) */}
                  <div className="absolute -right-16 top-20 bg-gray-900 rounded-[2rem] p-2 shadow-xl transform rotate-12 scale-75">
                    <div className="bg-white rounded-[1.5rem] h-[360px] w-[180px] overflow-hidden">
                      <div className="bg-gray-50 px-3 py-1 flex justify-between items-center">
                        <span className="text-xs font-semibold font-[var(--font-inter)]">9:41</span>
                        <div className="flex gap-1">
                          <div className="w-3 h-1 bg-primary rounded-sm"></div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-center mb-4">
                          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-white text-2xl">📈</span>
                          </div>
                          <h4 className="font-bold text-gray-900 font-[var(--font-inter)]">Credit Improved!</h4>
                          <p className="text-lg font-bold text-primary font-[var(--font-inter)]">+5 points</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm font-[var(--font-inter)]">
                            <span className="text-gray-600">New Score:</span>
                            <span className="text-gray-900">725</span>
                          </div>
                          <div className="flex justify-between text-sm font-[var(--font-inter)]">
                            <span className="text-gray-600">Loan:</span>
                            <span className="text-green-600">Repaid ✓</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }