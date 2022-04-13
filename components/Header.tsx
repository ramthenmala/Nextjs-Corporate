import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-6 px-2 box-content flex justify-between items-center container mx-auto max-w-5xl fixed top-0 left-0 right-0 h-10">
      <Link href="/" passHref>
        <a className="font-bold tracking-widest text-2xl">AGENCY</a>
      </Link>

      <div className="w-5 cursor-pointer">
        <span className="w-5 h-[3px] mb-1 bg-black block"></span>
        <span className="w-5 h-[3px] mb-1 bg-black block"></span>
      </div>
    </header>
  );
};

export default Header;
