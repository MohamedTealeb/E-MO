import Service4 from '@/components/Sections/service4';
import Footer from '@/components/shared/Footer';
import nl from '@/translations/nl.json';

export default function Page() {
  return (
    <>
      <Service4 t={nl} />
      <Footer t={nl} locale="nl" />
    </>
  );
} 