export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-end">
      <h3 className="text-[13px]">{year} &copy; bikinibomb online showroom</h3>
    </footer>    
  )
};
