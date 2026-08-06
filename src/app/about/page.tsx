import type { Metadata } from "next";
import { CheckCircle2, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | TextTools - Free Online Text Utilities",
  description: "Learn more about TextTools, our mission to provide lightning-fast, privacy-first, and 100% free online text utilities for writers and developers.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(240,248,255,1)_100%)] dark:bg-[linear-gradient(to_bottom,rgba(20,20,25,1)_0%,rgba(10,10,15,1)_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[100%] bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-pink-500/10 blur-[120px] -z-10 opacity-80" />

        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">TextTools</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We are building the internet's fastest, most secure, and completely free text processing ecosystem. No ads, no tracking, just pure productivity.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>The Story Behind TextTools</h2>
            <p>
              In a digital world that is increasingly cluttered with paywalls, aggressive advertising, and complex user interfaces, <strong>TextTools</strong> was born out of a very simple, yet profound necessity: the fundamental need for fast, reliable, and straightforward text manipulation utilities that anyone can use without friction. We noticed a frustrating trend across the internet where simple tools like word counters, case converters, and formatting utilities were either hidden behind expensive premium subscriptions or plagued by intrusive pop-up ads that ruined the user experience.
            </p>
            <p>
              We decided to build a platform that strips away all of the unnecessary noise. A place where writers, students, developers, and digital professionals can come to process their text instantly, without having to navigate through a maze of marketing banners or email sign-up forms. The vision was clear from day one: to create a comprehensive suite of utilities that respects the user's time, privacy, and digital sanity.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 my-12 not-prose">
              <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-lg shadow-blue-500/5 hover:-translate-y-1 transition-transform">
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">Everything runs directly in your browser. Zero server latency.</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-lg shadow-blue-500/5 hover:-translate-y-1 transition-transform">
                <div className="mx-auto w-12 h-12 bg-violet-500/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">100% Private</h3>
                <p className="text-sm text-muted-foreground">Your data never leaves your device. We don't store your text.</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-lg shadow-blue-500/5 hover:-translate-y-1 transition-transform">
                <div className="mx-auto w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Always Free</h3>
                <p className="text-sm text-muted-foreground">No premium tiers, no hidden fees, and absolutely no sign-ups.</p>
              </div>
            </div>

            <h2>Why Client-Side Architecture Matters</h2>
            <p>
              Privacy is not just a feature; it is a fundamental human right. When you paste confidential business emails, proprietary source code, or sensitive legal documents into an online tool, you need an absolute guarantee that your data is safe and secure. Most traditional web utilities send your text to a remote server for processing, which introduces significant security risks. If that server is compromised, your sensitive information could be exposed to malicious actors.
            </p>
            <p>
              Because TextTools is built with modern, cutting-edge Web APIs and advanced JavaScript frameworks, every single calculation—from complex word counting algorithms to intensive duplicate line removal—happens locally right on your own machine. Your web browser handles all the heavy lifting. This means your text data never leaves your device, it is never transmitted over the internet, and it is never saved to any database. Once you close your browser tab, the data is completely and permanently gone.
            </p>
            <p>
              This architectural decision not only guarantees your absolute privacy but also provides a snappy, frictionless user experience that traditional server-based tools simply cannot match. There are no loading spinners, no waiting for a server to respond, and no network bottlenecks. The moment you paste your text, the results are calculated and displayed instantaneously.
            </p>

            <h2>A Tool for Every Professional</h2>
            <p>
              Text processing is a universal requirement across countless professions and academic disciplines. A student writing a university dissertation needs an accurate word and character counter to ensure they meet strict assignment guidelines. A software engineer writing code often needs to quickly convert variable names between camelCase, snake_case, and PascalCase without leaving their browser. A data analyst dealing with massive CSV files or scraped data lists relies heavily on tools that can instantly remove duplicate lines and strip out unnecessary whitespace.
            </p>
            <p>
              TextTools brings all of these incredibly useful utilities under one beautiful, cohesive, and easy-to-use digital roof. By centralizing these tools, we save you the hassle of jumping between dozens of different, poorly designed websites. Our platform is continuously evolving, and we are constantly developing new features based on the feedback we receive from our global community of users. We believe that empowering individuals with the right tools can significantly boost their digital productivity and streamline their daily workflows.
            </p>

            <h2>Our Commitment to Accessibility and Design</h2>
            <p>
              Great software should not only function flawlessly, but it should also be a joy to use. We have invested heavily in creating a user interface that is intuitive, accessible, and visually stunning. From the carefully selected color palettes to the smooth micro-animations that respond to your interactions, every single pixel on TextTools has been meticulously crafted to provide a premium user experience. We firmly believe that free tools do not have to look cheap or outdated.
            </p>
            <p>
              Furthermore, our platform is fully responsive. Whether you are accessing TextTools from a powerful desktop workstation with a 4K monitor, a lightweight laptop at a coffee shop, or a smartphone while commuting on a train, the interface will automatically adapt to provide you with the optimal viewing and interactive experience. Accessibility is woven into the very fabric of our design philosophy, ensuring that everyone, regardless of their device or physical ability, can leverage the power of our utilities.
            </p>
            
            <h2>Looking to the Future</h2>
            <p>
              We are incredibly proud of what TextTools has become, but our journey is just beginning. The landscape of digital communication and text processing is constantly shifting, and we are committed to staying at the forefront of this evolution. We are actively researching and developing new, innovative tools that leverage the latest advancements in web technology. Our ultimate goal is to build the most comprehensive, reliable, and user-centric suite of text utilities available on the internet. We invite you to join us on this exciting journey, explore our tools, and experience the future of digital productivity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
