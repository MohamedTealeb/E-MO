import TestmonialsBg from '@/components/Sections/TestmonialsBg';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <TestmonialsBg t={fr} />
      <Footer t={fr} locale="fr" />
    </>
  );
} 