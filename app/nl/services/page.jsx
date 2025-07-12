import Services from '@/components/Sections/Services';
import Footer from '@/components/shared/Footer';
import  nl  from '@/translations/nl.json';

function page() {
  return (
    <>
    <Services t={nl} />
    <Footer t={nl} locale="nl" />
    </>
  )
}

export default page 