"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X, Leaf } from 'lucide-react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function WithPhoneMockup() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-neutral-dark">Pollen</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-dark"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-neutral-dark">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-neutral-dark">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-neutral-dark">Pollen</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-neutral-dark"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-dark hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-neutral-dark hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm/6 text-muted-foreground ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-primary">Build Credit Today</span>
                <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                <a href="#" className="flex items-center gap-x-1">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Learn about microloans
                  <span aria-hidden="true" className="-mr-2 text-gray-400">→</span>
                </a>
              </div>
            </div>
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-neutral-dark sm:text-7xl">
              <span>Pay friends back</span> <span className="font-serif italic font-light">and build credit</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              Get microloans to instantly pay friends back while building your credit score. Pollen turns every transaction into an opportunity to improve your financial future.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Download Pollen
              </a>
              <a href="#" className="text-sm/6 font-semibold text-neutral-dark">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            <svg role="img" viewBox="0 0 366 729" className="mx-auto w-91.5 max-w-full drop-shadow-xl">
              <title>Pollen app screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect rx={36} width={316} height={684} />
                </clipPath>
              </defs>
              {/* <path
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                fill="#4B5563"
              /> */}
              <path
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                fill="#1A1A1A"
              />
              <foreignObject
                width={316}
                height={684}
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                transform="translate(24 24)"
              >
                <div className="h-full w-full bg-white p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                      <Leaf className="h-6 w-6 text-primary" />
                      <span className="font-bold text-lg text-gray-900">Pollen</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  </div>

                  <div className="mb-8">
                    <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-2xl p-6 text-white mb-4">
                      <p className="text-sm opacity-90 mb-2">Total Balance</p>
                      <p className="text-3xl font-bold">$12,486.52</p>
                      <div className="flex space-x-4 mt-4">
                        <button className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold">
                          Send
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-semibold">
                          Microloan
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Recent Activity</h3>
                      <a href="#" className="text-primary text-sm">View all</a>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-blue-200">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">ML</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Microloan to Sarah</p>
                            <p className="text-sm text-emerald-600">Credit score +5 pts</p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">$25.00</p>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">S</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Sarah Chen</p>
                            <p className="text-sm text-gray-500">Payment received</p>
                          </div>
                        </div>
                        <p className="font-semibold text-green-600">+$25.00</p>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">C</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Credit Score Update</p>
                            <p className="text-sm text-green-600">Improved to 720</p>
                          </div>
                        </div>
                        <p className="font-semibold text-primary">+15 pts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}