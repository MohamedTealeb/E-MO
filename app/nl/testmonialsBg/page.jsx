import TestmonialsBg from '@/components/Sections/TestmonialsBg';
import Footer from '@/components/shared/Footer';
import nl from '@/translations/nl.json';

export default function Page() {
  return (
    <>
      <TestmonialsBg t={nl} />
      <Footer t={nl} locale="nl" />
    </>
  );
} 