import About from '@/components/sections/About';
import Story from '@/components/sections/Story';
import Why from '@/components/sections/Why';
import Promise from '@/components/sections/Promise';
import SectionTransition from '@/components/motion/SectionTransition';
import SectionDivider from '@/components/motion/SectionDivider';

export default function AboutPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <SectionDivider label="Our Philosophy" />
      <SectionTransition><About /></SectionTransition>

      <SectionDivider label="The Story" />
      <SectionTransition><Story /></SectionTransition>

      <SectionDivider label="Why Aurastic" />
      <SectionTransition><Why /></SectionTransition>

      <SectionDivider label="The Promise" />
      <SectionTransition><Promise /></SectionTransition>
    </div>
  );
}
