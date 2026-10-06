import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript/PrelineScript";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackTrix | IEEE SRM",
  description: "Hacking makes you lose CTRL;",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Assets/apple-touch-icon.png" />

        <title>HackTrix | IEEE SRM</title>
        <meta name="description" content="Hacking makes you lose CTRL;" />
        <meta name="keywords" content="Hackathon, Tech Challenge, Coding Competition, Innovation Contest, Hactrix-24, ByteBurst, Igniting Innovation, Digital Era Tech Event, Coding, Programming, Software Development, Tech Trends, Innovation Showcase, IEEE SRM Student Branch, Student Collaboration, Student Tech Enthusiasts, Student Innovation Network, Inclusivity in Tech, Diversity in Innovation, Women in Technology, Tech for All, Tech Networking, Collaboration Opportunities, Team Building, Industry Connections, Technical Skills, Learning and Growth, Skill Enhancement, Professional Development, Register for Hactrix-24, Tech Event Registration, ByteBurst Registration, Hackathon Signup, Mentorship Program, Tech Mentors, Guidance and Support, Learn from Experts, Project Awards, Recognition in Tech, Certificates for Innovation, Outstanding Projects" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/Logo/apple-touch-icon.png" />
        <meta property="og:title" content="HackTrix | IEEE SRM" />
        <meta property="og:description" content="Hacking makes you lose CTRL;" />
        <meta property="og:image" content="/Images/Event_Images/Banner1.png" />
        <meta property="og:url" content="" />
      </head>
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  );
}
