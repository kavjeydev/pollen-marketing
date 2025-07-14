import { ArrowLeftRight, BarChart3, CreditCard } from 'lucide-react'

const features = [
  {
    name: 'Microloans to Build Credit',
    description:
      'Get small loans to pay friends back instantly while building your credit history. Our unique microloan system helps you establish and improve your credit score with every transaction.',
    href: '#',
    icon: CreditCard,
  },
  {
    name: 'Send & Request',
    description:
      'Transfer money instantly to friends and family. Split bills, send payments, or request money with just a few taps - all with zero fees for standard transfers.',
    href: '#',
    icon: ArrowLeftRight,
  },
  {
    name: 'Smart Insights',
    description:
      'Intelligent account management with spending insights, automatic categorization, and personalized budgeting tools to help you make smarter financial decisions.',
    href: '#',
    icon: BarChart3,
  },
]

export default function SimpleThreeColumnWithLargeIcons() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-neutral-dark sm:text-5xl">
            Banking that builds your credit
          </h2>
          <p className="mt-6 text-lg/8 text-muted-foreground">
            From microloans that build credit to instant transfers, Pollen helps you grow your financial future with every transaction.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base/7 font-semibold text-neutral-dark">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon aria-hidden="true" className="size-6 text-primary-foreground" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-muted-foreground">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold text-primary hover:text-primary/80">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}