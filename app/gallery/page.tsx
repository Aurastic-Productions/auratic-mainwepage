import Gallery from '@/components/sections/Gallery';
import SectionTransition from '@/components/motion/SectionTransition';

export default function GalleryPage() {
  return (
    <div className="pt-24 lg:pt-32">
      <SectionTransition><Gallery /></SectionTransition>
    </div>
  );
}
