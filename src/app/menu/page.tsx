import MenuItem from "../components/menuitem";

export default function Menu() {
  return (
    <section className="relative w-full max-w-[1140px] min-h-[200px] bg-white mx-auto border border-[rgba(0,0,0,0.15)] rounded-[0.5rem] p-[20px] flex flex-wrap gap-[20px] justify-center items-center">
      <MenuItem 
        text='Новинки'
        link='/offers'
      />
      <MenuItem 
        text='Premium товары'
        link='/offers'
      />
      <MenuItem 
        text='Скидки'
        link='/offers'
      />
      <MenuItem 
        text='Раздельные купальники'
        link='/offers'
      />
      <MenuItem 
        text='Слитные купальники'
        link='/offers'
      />
      <MenuItem 
        text='Туники'
        link='/offers'
      />      
      <MenuItem 
        text='Шляпы'
        link='/offers'
      />      
      <MenuItem 
        text='Очки'
        link='/offers'
      />     
    </section>
  );
};