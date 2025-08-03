import Service3 from '@/components/Sections/service3';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <Service3 t={fr} />
      <Footer t={fr} locale="fr" />
    </>
  );
} 