import { Outlet } from 'umi';
import './index.css';

export default function Layout() {
  return (
    <div className='container mx-auto'>
      <nav className='flex h-20 items-center justify-between'>
        <ul className='flex gap-4'>
          <li>Home</li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <button className='bg-blue-500 hover:bg-blue-600 rounded-full px-10 py-3 text-white font-medium'>Liên hệ</button>
      </nav>
      <Outlet />
    </div>
  );
}
