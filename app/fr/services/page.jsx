import Services from '@/components/Sections/Services';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <Services t={fr} />
      <Footer t={fr} locale="fr" />
    </>
  );
} 