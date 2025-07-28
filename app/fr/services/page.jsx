import ServicesPage from '@/components/Sections/ServicesPage';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <ServicesPage t={fr} />
      <Footer t={fr} locale="fr" />
    </>
  );
} 