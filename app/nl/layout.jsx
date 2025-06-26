import translations from '@/translations/nl.json';
import Navbar from '@/components/shared/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar labels={translations} />
      {children}
    </>
  );
}
