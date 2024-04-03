import { Search } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Real</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <Search />
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          <Link to='/profile'>
            {currentUser ? (
              <img
                className='w-7 h-7 rounded-full object-cover'
                src={currentUser.profilePicture}
                alt='user image'
                s
              />
            ) : (
              <li className='text-slate-700 hover:underline'>Login</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}