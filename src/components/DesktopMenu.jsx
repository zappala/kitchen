const DesktopMenu = (props) => {
  return (
    <MenuBar
      prefix={props.prefix}
      items={props.items}
      currentPath={props.currentPath}
    />
  );
};

const MenuBar = ({ prefix, items, currentPath }) => {
  return (
    <div className="hidden lg:flex flex-col w-[300px] bg-black  h-full min-h-screen">
      <div className="flex justify-center">
        <img className="w-28 mb-5 mt-5" src="/cooking-logo.svg" />
      </div>
      <div className="text-center">
        <div className="px-10 font-merriweather text-2xl text-white">The</div>
        <div className="px-10 mb-1 font-merriweather text-4xl text-white">
          Zappala
        </div>
        <div className="px-10 mb-10 font-merriweather text-2xl text-white">
          Kitchen
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {items.map((item, index) => {
          return (
            <Menu
              prefix={prefix}
              item={item}
              currentPath={currentPath}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

//       <div className=" border-b-white border-b-2 h-2 w-vw ml-[-100px] mr-[-100px]">

const Menu = ({ prefix, item, currentPath }) => {
  if (currentPath === item.url) {
    return (
      <span className="my-4 no-underline font-gothic text-lg mt-0 text-black bg-white ">
        <div className="h-12 flex flex-col justify-center text-center">
          {item.title}
        </div>
      </span>
    );
  } else {
    return (
      <a
        className="my-4 no-underline font-gothic text-lg mt-0 text-white bg-black  hover:bg-sky-300 hover:text-black"
        href={prefix + item.url}
      >
        <div className="h-12 flex flex-col justify-center text-center">
          {item.title}
        </div>
      </a>
    );
  }
};

export default DesktopMenu;
