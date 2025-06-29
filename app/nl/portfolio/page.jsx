import { Portfolio } from '@/components/Sections/Portfolio';
import PortfolioGallery from '@/components/Sections/PortfolioGallery';
import Footer from '@/components/shared/Footer';
import nl from '@/translations/nl.json';

export default function Page() {
  return (
    <>
      <Portfolio t={nl.portfolio} />
      <PortfolioGallery t={nl} />
      <Footer t={nl} locale="nl" />
    </>
  );
} 