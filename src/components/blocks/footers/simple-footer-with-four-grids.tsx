import Link from "next/link";
import React from "react";
import { Leaf, Twitter, Instagram, Linkedin } from "lucide-react";

export function SimpleFooterWithFourGrids() {
  const product = [
    {
      title: "Features",
      href: "#",
    },
    {
      title: "Security", 
      href: "#",
    },
    {
      title: "Pricing",
      href: "#",
    },
    {
      title: "Mobile App",
      href: "#",
    },
  ];

  const company = [
    {
      title: "About Us",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Press",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
  ];

  const support = [
    {
      title: "Help Center",
      href: "#",
    },
    {
      title: "Contact Us",
      href: "#",
    },
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Terms of Service",
      href: "#",
    },
  ];

  const legal = [
    {
      title: "FDIC Insurance",
      href: "#",
    },
    {
      title: "Regulatory Info",
      href: "#",
    },
    {
      title: "Compliance",
      href: "#",
    },
    {
      title: "Security",
      href: "#",
    },
  ];

  const socials = [
    {
      title: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      title: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      title: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ];

  return (
    <div className="border-t border-border bg-background px-8 py-20 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-muted-foreground flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div className="mb-10 sm:mb-0">
          <div className="mr-0 md:mr-4 md:flex mb-6">
            <Logo />
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mb-6 ml-2">
            {socials.map((social, idx) => {
              const IconComponent = social.icon;
              return (
                <Link
                  key={`social-${idx}`}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={social.title}
                >
                  <IconComponent className="w-5 h-5" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground ml-2 max-w-sm">
            &copy; 2024 Pollen. All rights reserved.
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start w-full sm:w-auto">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="text-foreground font-semibold font-[var(--font-inter)]">
              Product
            </p>
            <ul className="list-none space-y-3">
              {product.map((item, idx) => (
                <li key={`product-${idx}`} className="list-none">
                  <Link
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-[var(--font-inter)]"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-foreground font-semibold font-[var(--font-inter)]">
              Company
            </p>
            <ul className="list-none space-y-3">
              {company.map((item, idx) => (
                <li key={`company-${idx}`} className="list-none">
                  <Link
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-[var(--font-inter)]"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-foreground font-semibold font-[var(--font-inter)]">
              Support
            </p>
            <ul className="list-none space-y-3">
              {support.map((item, idx) => (
                <li key={`support-${idx}`} className="list-none">
                  <Link
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-[var(--font-inter)]"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-foreground font-semibold font-[var(--font-inter)]">
              Legal
            </p>
            <ul className="list-none space-y-3">
              {legal.map((item, idx) => (
                <li key={`legal-${idx}`} className="list-none">
                  <Link
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 font-[var(--font-inter)]"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Banking Disclaimers */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border">
        <div className="text-xs text-muted-foreground space-y-2 font-[var(--font-inter)] md:px-8">
          <p>
            Pollen is a trademark of Pollen Financial Technologies, Inc. Banking services provided by our partner bank, Member FDIC. Your deposits are FDIC insured up to $250,000.
          </p>
          <p>
            Investment products are not FDIC insured, not bank guaranteed, and may lose value. All investments involve risk, including the potential loss of principal.
          </p>
        </div>
      </div>

      {/* Background Text */}
      <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0 font-[var(--font-inter)]">
        Pollen
      </p>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-foreground px-2 py-1 relative z-20"
    >
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <Leaf className="w-5 h-5 text-primary-foreground" />
      </div>
      <span className="font-semibold text-foreground font-[var(--font-inter)] text-lg">
        Pollen
      </span>
    </Link>
  );
};