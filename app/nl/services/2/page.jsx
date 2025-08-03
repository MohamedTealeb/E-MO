import Service2 from '@/components/Sections/service2';
import Footer from '@/components/shared/Footer';
import nl from '@/translations/nl.json';

export default function Page() {
  return (
    <>
      <Service2 t={nl} serviceId={2} />
      <Footer t={nl} locale="nl" />
    </>
  );
} 