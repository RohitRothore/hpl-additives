import { Home, Phone, Info, Package, Heart, Globe, Users, Settings, Activity, Shield, FileText, Calendar, Award, BookOpen } from "feather-icons-react";

export const HEADER = {
  LOGO: "/assets/images/logo.png",
  MENU: [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      children: [
        {
          name: "Overview",
          url: "/about-overview",
          icon: Info,
        },
        {
          name: "The Team",
          url: "/about-directors-management",
          icon: Users,
        },
        {
          name: "Manufacturing Units",
          url: "/about-manufacturing-units",
          icon: Settings,
        },
        {
          name: "Sustainable Development",
          url: "/about-sustainable-development",
          icon: Activity,
        },
        {
          name: "Regulatory Affairs",
          url: "/about-regulatory-affairs",
          icon: Shield,
        },
        {
          name: "Policies",
          url: "/about-policies-notice",
          icon: FileText,
        },
        {
          name: "Events",
          url: "/about-events-trade",
          icon: Calendar,
        },
        {
          name: "Awards",
          url: "/about-award-recognition",
          icon: Award,
        },
        {
          name: "News",
          url: "/about-in-the-news",
          icon: BookOpen,
        },
      ],
      name: "About Us",
      url: "",
      icon: Info,
    },
    {
      name: "Products",
      url: "/products",
      icon: Package,
    },
    {
      name: "CSR",
      url: "/csr",
      icon: Heart,
    },
    {
      name: "Network",
      url: "/global",
      icon: Globe,
    },
    {
      name: "Contact Us",
      url: "/contact-us",
      icon: Phone,
    },
  ],
};
