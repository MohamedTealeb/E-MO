import Service4 from '@/components/Sections/service4';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <Service4 t={fr} />
      <Footer t={fr} locale="fr" />
    </>
  );
} 