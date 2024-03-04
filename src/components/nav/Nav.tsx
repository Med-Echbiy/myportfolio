import Logo from "./Logo";

function Nav() {
  return (
    <div className='w-[64px] relative'>
      <nav className='w-full h-full bg-background flex py-12 px-1 gap-3'>
        <Logo />
      </nav>
    </div>
  );
}

export default Nav;
