import Service1 from '@/components/Sections/service1';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <Service1 t={fr} />
      <Footer t={fr} locale="fr" />
    </>
  );
}