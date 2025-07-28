import { Portfolio } from '@/components/Sections/Portfolio';
import PortfolioGallery from '@/components/Sections/PortfolioGallery';
import Footer from '@/components/shared/Footer';
import fr from '@/translations/fr.json';

export default function Page() {
  return (
    <>
      <Portfolio t={fr} />  <Footer t={fr} locale="fr" />
    </>
  );
} 