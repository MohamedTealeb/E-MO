import Blogs from '@/components/Sections/Blogs';
import nl from '@/translations/nl.json';

export default function Page() {
  return (
    <>
      <Blogs t={nl} />
      <Footer t={nl} />
    </>
  );
}