import Service2 from '@/components/Sections/service2';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <Service2 t={fr} serviceId={2} />
      <Footer t={fr} locale="fr" />
    </>
  );
} 