import MenuItems from '../components/menuItems';
import Header from '../components/header';

export default function Menu() {
  return (
    <div className="grid grid-rows-[65px_1fr_100px] min-h-screen mx-auto w-[98%] max-w-[1024px] font-[family-name:var(--font-exo2)]">
      <Header/>
      <MenuItems/>             
    </div>
  );
}