import Blogs from '@/components/Sections/Blogs';
import fr from '@/translations/fr.json';
import Footer from '@/components/shared/Footer';

export default function Page() {
  return (
    <>
      <Blogs t={fr} />
      <Footer t={fr} />
    </>
  );
}