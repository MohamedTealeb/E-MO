import About from '@/components/Sections/About';
import Footer from '@/components/shared/Footer';
import nl from '@/translations/nl.json';

export default function Page() {
  return (
    <>
      <About t={nl.about} />
      <Footer t={nl} locale="nl" />
    </>
  );
}