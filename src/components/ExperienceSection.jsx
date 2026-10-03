import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem 
          period="2024"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up IT coursework focusing on mobile apps, databases, and software development."
        />
        <TimelineItem
          period="2025"
          title="TO BE ADDED! (No exprience yet)"
          place="Place Area (placeholder rani)"
          description="Description Area (placeholder rasad ni)"
        />
        <TimelineItem
          period="2026"
          title="TO BE ADDED! (No exprience yet)"
          place="Place Area (placeholder rani)"
          description="Description Area (placeholder rasad ni)"
        />
      </ol>
    </section>
  );
}