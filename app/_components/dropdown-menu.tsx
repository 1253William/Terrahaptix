const DropdownMenu = ({ menu }: { menu: boolean }) => {
  return (
    <nav
      className={`absolute right-8 h-fit px-3 py-4 display z-[70] mt-[70px] bg-[#1b1b1b] text-[#8B8C8A] rounded-xl ${
        menu && "appear"
      }`}>
      <h3 className='text-xl mb-2'>Quick links</h3>
      <ul className='quick-link list-inside'>
        <li className='cursor-pointer'>Twitter</li>
        <li className='cursor-pointer'>LinkedIn</li>
        <li className='cursor-pointer'>Terra - Home</li>
        <li className='cursor-pointer'>Products</li>
      </ul>
    </nav>
  );
};

export default DropdownMenu;
