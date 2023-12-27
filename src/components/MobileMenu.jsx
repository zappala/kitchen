import { useState } from "react";

const MobileMenu = (props) => {
  const [open, setOpen] = useState(false);
  const base = "h-[2px] rounded-lg origin-left transition-all bg-white";
  // fixed top-2 left-3 z-20
  return (
    <div>
      <MenuBar
        prefix={props.prefix}
        items={props.items}
        currentPath={props.currentPath}
        open={open}
      />
      <div
        className="flex lg:hidden justify-around flex-nowrap flex-col w-8 h-8 absolute top-5 left-5 z-20"
        onClick={() => setOpen(!open)}
      >
        <div
          className={open ? base + " bg-white rotate-45" : base + " rotate-0"}
        />
        <div
          className={
            open
              ? base + " bg-white translate-x-full opacity-0"
              : base + " translate-x-0 opacity-100"
          }
        />
        <div
          className={open ? base + " bg-white -rotate-45" : base + " rotate-0"}
        />
      </div>
    </div>
  );
};

const MenuBar = ({ prefix, items, currentPath, open }) => {
  let base = "z-20";
  if (!open) {
    base = base + " hidden";
  } else {
    base = base + " transform-none";
  }
  return (
    <div className={base}>
      <div className="bg-sky-300  shadow-2xl w-1/2 flex flex-nowrap flex-col fixed top-14 mt-2 pt-2 left-0 m-0 h-full overflow-y-auto pl-8">
        {items.map((menu, index) => {
          return <Menu prefix={prefix} items={menu} key={index} />;
        })}
      </div>
    </div>
  );
};

const Menu = ({ prefix, items }) => {
  const [dropdown, setDropdown] = useState(false);
  let base = " ";
  return (
    <div className="py-1 pr-10  m-0">
      <div className="flex flex-col justify-center">
        <a
          className="no-underline font-gothic  text-default text-xl m-0 mt-2"
          href={prefix + items.url}
        >
          {items.title}
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
