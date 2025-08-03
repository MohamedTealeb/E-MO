import Service1 from '@/components/Sections/service1';
import Footer from '@/components/shared/Footer';
import nl from '@/translations/nl.json';

export default function Page() {
  return (
    <>
      <Service1 t={nl} />
      <Footer t={nl} locale="nl" />
    </>
  );
} 