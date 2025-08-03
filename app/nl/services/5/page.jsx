import Service5 from '@/components/Sections/service5';
import Footer from '@/components/shared/Footer';
import nl from '@/translations/nl.json';

export default function Page() {
  return (
    <>
      <Service5 t={nl} />
      <Footer t={nl} locale="nl" />
    </>
  );
} 