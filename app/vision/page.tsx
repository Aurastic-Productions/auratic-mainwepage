import VisionSection from '@/components/sections/VisionSection';
import Mission from '@/components/sections/Mission';
import Values from '@/components/sections/Values';
import UnifiedVision from '@/components/sections/UnifiedVision';
import Insight from '@/components/sections/Insight';
import NorthStar from '@/components/sections/NorthStar';
import SectionTransition from '@/components/motion/SectionTransition';
import SectionDivider from '@/components/motion/SectionDivider';

export default function VisionPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <SectionDivider label="Vision" />
      <SectionTransition><VisionSection /></SectionTransition>

      <SectionDivider label="Mission" />
      <SectionTransition><Mission /></SectionTransition>

      <SectionDivider label="Values" />
      <SectionTransition><Values /></SectionTransition>

      <SectionDivider label="Unified Aim" />
      <SectionTransition><UnifiedVision /></SectionTransition>

      <SectionDivider label="Industry Insight" />
      <SectionTransition><Insight /></SectionTransition>

      <SectionDivider label="North Star" />
      <SectionTransition><NorthStar /></SectionTransition>
    </div>
  );
}
