import Service5 from '@/components/Sections/service5';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <Service5 t={fr} />
      <Footer t={fr} locale="fr" />
    </>
  );
} 