import React from 'react';

export function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#fafafa] dark:bg-[#050505] border-t border-black/5 dark:border-white/5 pt-16 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 text-black dark:text-white">
          <div className="col-span-1 md:col-span-1">
            <div className="font-semibold tracking-wide text-lg mb-4">
              huguenin.dev
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">
              Back End Developer with a passion for building robust and scalable digital systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 font-light">
              <li><a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a></li>
              <li><a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a></li>
              <li><a href="#education" className="hover:text-black dark:hover:text-white transition-colors">Education</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 font-light">
              <li><a href="mailto:hugueninpedro@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">hugueninpedro@gmail.com</a></li>
              <li><a href="https://wa.me/5524998770906" className="hover:text-black dark:hover:text-white transition-colors">WhatsApp</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium mb-6">Social</h4>
            <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 font-light">
              <li><a href="https://www.linkedin.com/in/pedro-huguenin" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/Hugueninfer" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs font-light">
            © {new Date().getFullYear()} huguenin.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
