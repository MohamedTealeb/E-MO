import About from '@/components/Sections/About';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <About t={fr.about} locale="fr" />
      <Footer t={fr} locale="fr" />
    </>
  );
}
