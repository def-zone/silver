import { Outlet } from 'umi';
import './index.css';

export default function Layout() {
  return (
    <>
      <header className='container mx-auto'>
        <nav className='flex h-[114px] items-center justify-between mb-8'>
          <ul className='flex gap-6 font-medium'>
            <li className='text-blue-600'>Home</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
          <button className='bg-blue-500 hover:bg-blue-600 rounded-full px-10 py-3 text-white font-medium'>Liên hệ</button>
        </nav>
      </header>
      <Outlet />
      <footer className="container m-auto py-8 md:py-20 px-4 md:px-0">
        <div className="flex justify-between pb-10 border-b">
          <div className="logo">
            <img src="./assets/images/logo-only.svg" alt="" />
          </div>
          <div className="flex gap-8 items-center">
            <div className='text-blue-600 font-medium'>Ready to get started?</div>
            <button className="px-8 py-3 bg-blue-600 font-bold hover:bg-blue-700 hover:text-white text-white rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="py-10 flex flex-wrap">
          <div className="subcribe w-full md:w-2/5 mb-10">
            <div className="text-4xl text-blue-500 mb-5 uppercase font-bold">
              <div>Subscribe</div>
              <div>newsletter</div>
            </div>
            <div className='flex'>
              <input
                type="email"
                className="p-3 rounded border-b hover:border-blue-700 focus:outline-blue-700"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-t hover:bg-blue-700"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="services md:w-1/5 w-1/3">
            <div className="text-2xl text-blue-700 font-medium">Services</div>
            <ul>
              <li className="py-1 hover:text-blue-700">
                <a href="">Website</a>
              </li>
              <li className="py-1 hover:text-blue-700">
                <a href="">Landing Page</a>
              </li>
              <li className="py-1 hover:text-blue-700">
                <a href="">Mobile Application</a>
              </li>
              <li className="py-1 hover:text-blue-700">
                <a href="">Email Marketing</a>
              </li>
            </ul>
          </div>
          <div className="about md:w-1/5 w-1/3">
            <div className="text-2xl text-blue-700 font-medium">About</div>
            <ul>
              <li className="py-1 hover:text-blue-700">
                <a href="">Our Story</a>
              </li>
              <li className="py-1 hover:text-blue-700">
                <a href="">Benefits</a>
              </li>
              <li className="py-1 hover:text-blue-700">
                <a href="">Team</a>
              </li>
              <li className="py-1 hover:text-blue-700">
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div className="helps md:w-1/5 w-1/3">
            <div className="text-2xl text-blue-700 font-medium">Helps</div>
            <ul>
              <li className="py-1 hover:text-blue-700">
                <a href="">Support</a>
              </li>
              <li className="py-1 hover:text-blue-700">
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foo-footer flex justify-between py-4">
          <div className="term-policy space-x-10">
            <a href="">Terms &amp; Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="social-icons space-x-4">
            <a href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="">
              <i className="fab fa-youtube" />
            </a>
            <a href="">
              <i className="fab fa-tiktok" />
            </a>
            <a href="">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
