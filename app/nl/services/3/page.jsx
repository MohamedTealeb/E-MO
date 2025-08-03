import Service3 from '@/components/Sections/service3';
import Footer from '@/components/shared/Footer';
import nl from '@/translations/nl.json';

export default function Page() {
  return (
    <>
      <Service3 t={nl} />
      <Footer t={nl} locale="nl" />
    </>
  );
} 