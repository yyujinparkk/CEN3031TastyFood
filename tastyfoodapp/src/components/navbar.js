import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 bg-sky-500 z-10" style={{ height: '60px' }}>
      <div className="flex justify-between items-center px-8 h-full">
        {/* Flex container for left-aligned navigation links */}
        <div className="flex">
          <ul className="flex gap-x-3">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-white font-bold py-2 px-4 rounded">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-white font-bold py-2 px-4 rounded">About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="text-white font-bold py-2 px-4 rounded">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Center-aligned "TastyFood" text */}
        <div className="flex-grow text-center">
          <div className="text-2xl font-bold text-white pr-44">TastyFood</div>
        </div>

        {/* Right-aligned login button */}
        <div className="flex">
          <Link href="/login" legacyBehavior>
            <a className="text-white font-bold py-2 px-4 rounded">Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
