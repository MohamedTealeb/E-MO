import translations from '@/translations/fr.json';
import Navbar from '@/components/shared/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar labels={translations} />
      {children}
    </>
  );
}
