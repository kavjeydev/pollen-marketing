import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Zap,
  TrendingUp,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  CreditCard,
  HandCoins,
  Target
} from 'lucide-react';

export default function MicroloanSpotlight() {
  const benefits = [
    {
      icon: Zap,
      title: "Instant Microloans",
      description: "Get small loans instantly, from $5 to $500"
    },
    {
      icon: TrendingUp,
      title: "Build Credit Score",
      description: "Every payment helps improve your credit history"
    },
    {
      icon: HandCoins,
      title: "Pay Friends Back",
      description: "Split bills and pay back friends easily"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Bank-level security for all transactions"
    }
  ];

  const stats = [
    { number: "500k+", label: "Active Users" },
    { number: "98%", label: "Approval Rate" },
    { number: "4.9", label: "App Rating" }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Microloan Spotlight
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6 leading-tight">
            Build Credit with
            <span className="block text-emerald-600 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Smart Microloans
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Turn everyday expenses into credit-building opportunities. Get instant microloans
            and watch your credit score grow with every payment.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-neutral-dark mb-6">
                Why Choose Pollen Microloans?
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="p-6 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors duration-300">
                        <benefit.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-neutral-dark mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <Card className="p-8 border-0 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">How It Works</h3>
                  <div className="space-y-2 text-emerald-50">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm">Apply in seconds with no hard credit check</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm">Get approved instantly for $5-$500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm">Use funds immediately for any expense</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm">Build credit with every on-time payment</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - CTA Section */}
          <div className="lg:pl-8">
            <Card className="p-8 border-2 border-blue-200 bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-50"></div>
              <div className="relative">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-dark">
                    Start Building Credit Today
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Join thousands of users who are already building their credit
                    with Pollen's smart microloan system.
                  </p>

                  <div className="space-y-4 pt-4">
                    <Button
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
                    >
                      Get Your First Microloan
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>

                    <p className="text-xs text-gray-500">
                      No hidden fees • Instant approval • Build credit fast
                    </p>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4" />
                      <span>Bank-Level Security</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>500k+ Users</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Additional Info */}
            <div className="mt-6 p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-neutral-dark mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                Credit Building Impact
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Users see an average credit score increase of
                <span className="font-semibold text-emerald-600"> 40+ points </span>
                within 6 months of consistent microloan payments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}