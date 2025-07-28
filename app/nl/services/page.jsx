import ServicesPage from '@/components/Sections/ServicesPage';
import Footer from '@/components/shared/Footer';
import  nl  from '@/translations/nl.json';

function page() {
  return (
    <>
    <ServicesPage t={nl} />
    <Footer t={nl} locale="nl" />
    </>
  )
}

export default page 