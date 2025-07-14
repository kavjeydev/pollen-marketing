"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

export function TestimonialsGridWithCenteredCarousel() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 overflow-hidden h-full bg-white">
      <div className="pb-20">
        <h1 className="pt-4 font-bold text-neutral-dark text-lg md:text-2xl lg:text-3xl font-[var(--font-inter)]">
          Trusted by the next generation of earners
        </h1>
        <p className="text-base text-neutral-600 font-[var(--font-inter)]">
          See why thousands of young professionals choose Pollen for their banking needs.
        </p>
      </div>

      <div className=" relative">
        <TestimonialsSlider />
        <div className="h-full max-h-screen md:max-h-none overflow-hidden w-full bg-neutral-50 opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_99%)]">
          <TestimonialsGrid />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);

  const grid = [first, second, third];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto ">
      {grid.map((testimonialsCol, index) => (
        <div key={`testimonials-col-${index}`} className="grid gap-4">
          {testimonialsCol.map((testimonial) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <Quote>{testimonial.quote}</Quote>
              <div className="flex gap-2 items-center mt-8">
                <Image
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <QuoteDescription>{testimonial.name}</QuoteDescription>
                  <QuoteDescription className="text-[10px]">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-neutral-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xs font-semibold text-neutral-dark py-2 font-[var(--font-inter)]",
        className
      )}
    >
      <span className="text-primary">&ldquo;</span>
      {children}
      <span className="text-primary">&rdquo;</span>
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal text-neutral-600 max-w-sm font-[var(--font-inter)]",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    quote:
      "Pollen made splitting rent with my roommates effortless. No more awkward money conversations!",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Marketing Manager",
  },
  {
    name: "Marcus Rodriguez",
    quote:
      "Finally, a bank that gets how I actually use money. The app is gorgeous and lightning fast.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Software Engineer",
  },
  {
    name: "Jessica Kim",
    quote:
      "Managing client payments and personal expenses in one place has been a game-changer for my business.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Freelance Designer",
  },
  {
    name: "Alex Thompson",
    quote:
      "The budgeting tools help me save for my goals while still enjoying life. Perfect for young professionals.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Sales Representative",
  },
  {
    name: "Maya Patel",
    quote:
      "Pollen's instant notifications keep me on top of my spending. I never overdraft anymore!",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Content Creator",
  },
  {
    name: "Jordan Williams",
    quote:
      "The investment features are perfect for someone just starting out. Simple and educational.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Junior Analyst",
  },
  {
    name: "Taylor Johnson",
    quote:
      "Customer service actually responds quickly and helps solve problems. Revolutionary for banking.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Project Coordinator",
  },
  {
    name: "Cameron Lee",
    quote:
      "The peer-to-peer payments are seamless. Splitting dinner bills has never been easier.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "UX Designer",
  },
  {
    name: "Riley Davis",
    quote:
      "Pollen helps me understand my spending patterns and make better financial decisions.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Research Associate",
  },
];

export const TestimonialsSlider = () => {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const slicedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === slicedTestimonials.length ? 0 : (active) => active + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [active, autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        heightFix();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="absolute inset-0 mt-20 md:mt-60">
      <div className="max-w-3xl mx-auto  relative z-40 h-80">
        <div className="relative pb-12 md:pb-20">
          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-primary/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-white after:m-px before:-z-20 after:-z-20">
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -translate-x-10"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-10"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="absolute inset-0 h-full -z-10">
                      <Image
                        className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                        src={item.src}
                        width={56}
                        height={56}
                        alt={item.name}
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out px-8 sm:px-6">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="text-base text-neutral-dark md:text-xl font-bold font-[var(--font-inter)]">
                      <span className="text-primary text-2xl md:text-3xl">&ldquo;</span>
                      {item.quote}
                      <span className="text-primary text-2xl md:text-3xl">&rdquo;</span>
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
              {slicedTestimonials.map((item, index) => (
                <button
                  className={cn(
                    `px-2 py-1 rounded-full m-1.5 text-xs border transition duration-150 ease-in-out font-[var(--font-inter)] ${
                      active === index
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-neutral-300 text-neutral-600 hover:text-neutral-dark"
                    }`
                  )}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="font-medium">
                      {item.name}
                    </span>{" "}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};