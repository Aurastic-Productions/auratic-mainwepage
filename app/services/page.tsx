import DetailedServices from '@/components/sections/DetailedServices';
import Audience from '@/components/sections/Audience';
import Process from '@/components/sections/Process';
import SectionTransition from '@/components/motion/SectionTransition';
import SectionDivider from '@/components/motion/SectionDivider';

export default function ServicesPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <SectionDivider label="What We Do" />
      <SectionTransition><DetailedServices /></SectionTransition>

      <SectionDivider label="Who We Serve" />
      <SectionTransition><Audience /></SectionTransition>

      <SectionDivider label="The Framework" />
      <SectionTransition><Process /></SectionTransition>
    </div>
  );
}
