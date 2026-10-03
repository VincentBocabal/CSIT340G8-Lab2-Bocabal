import SectionHeading from './SectionHeading';
import ContactLink from './ContactLink';

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink 
          label="Email"
          href="mailto:vincentbocabal3@gmail.com"
          text="vincentbocabal3@gmail.com"
        />
        <ContactLink 
          label="GitHub"
          href="https://github.com/VincentBocabal"
          text="github.com/VincentBocabal"
        />
        <ContactLink 
          label="LinkedIn"
          href="https://linkedin.com/in/vincentbocabal"
          text="linkedin.com/in/vincentbocabal"
        />
      </ul>
    </section>
  );
}