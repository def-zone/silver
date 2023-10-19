import { Jumbotron, Service, Testimonial } from "@/components";

export default function HomePage() {
  return (
    <main>
      <Jumbotron />
      <Service />
      <>
        <section className="bg-gray-100 text-center about my-10">
          <div className="container m-auto md:flex justify-between items-center py-5">
            <div className="about-img w-full md:w-3/5">
              <img src="./assets/images/about.svg" alt="" />
            </div>
            <div className="slogan w-full md:w-2/5">
              <h2 className="text-heading text-4xl font-semibold">
                Chúng tôi luôn hoàn thành công việc đúng cách
              </h2>
              <p className="text-description my-8">
                A messaging app platform is a great way to keep in touch with your
                customers. They create a sense of personal intimacy and experience. At
                the same time, messaging app platforms can make money through
                subscriptions or apps.
              </p>
              <div className="follow-buttons flex space-x-4">
                <div className="about-customers">
                  <div className="customer-count text-2xl font-semibold">1000+</div>
                  <div className="text-description">Khách hàng vui vẻ</div>
                </div>
                <div className="about-projects">
                  <div className="project-count text-2xl font-semibold">300+</div>
                  <div className="text-description">Dự án hoàn thành</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Testimonial />
        <section className="pricing bg-gray-100 text-center p-5">
          <div className="section-header mb-10">
            <span className="text-blue-700">Bảng giá dịch vụ</span>
            <h2 className="text-heading text-4xl font-semibold">
              Started today. We're ready!
            </h2>
          </div>
          <div className="pricing-list flex justify-center items-center m-auto">
            <div className="pricing-item lg:w-1/5 w-1/3 h-1/2 bg-white p-8 border rounded-l-3xl">
              <div className="item-header border-b pb-5">
                <h3>Silver</h3>
                <div className="price">
                  <span className="amount">$50</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="item-features my-3">
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 01
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 02
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 03
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 04
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 05
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 06
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 07
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 08
                </li>
              </ul>
              <div className="item-footer text-center">
                <button
                  type="button"
                  className="px-8 py-2 md:px-12 md:py-4 bg-gray-200 text-blue-700 font-semibold rounded"
                >
                  Chọn
                </button>
              </div>
            </div>
            <div className="pricing-item lg:w-1/5 w-1/3 h-full flex flex-col bg-blue-700 text-white p-8 border rounded-3xl relative">
              <div className="highlight-button w-[80%] absolute top-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                <button className="px-3 py-2 bg-lime-400 border-4 border-white rounded-full">
                  MOST POPULAR
                </button>
              </div>
              <div className="item-header border-b pb-5 mt-10">
                <h3>Gold</h3>
                <div className="price">
                  <span className="amount">$50</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="item-features my-3">
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 01
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 02
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 03
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 04
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 05
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 06
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 07
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 08
                </li>
              </ul>
              <div className="item-footer text-center">
                <button
                  type="button"
                  className="px-8 py-2 md:px-12 md:py-4 bg-gray-200 text-blue-700 font-semibold rounded"
                >
                  Chọn
                </button>
              </div>
            </div>
            <div className="pricing-item lg:w-1/5 w-1/3 h-1/2 bg-white flex flex-col p-8 border rounded-r-3xl">
              <div className="item-header border-b pb-5">
                <h3>Diamond</h3>
                <div className="price">
                  <span className="amount">$50</span>
                  <span className="period">/month</span>
                </div>
              </div>
              <ul className="item-features my-3">
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 01
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 02
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 03
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 04
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 05
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 06
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 07
                </li>
                <li className="feature-item py-3">
                  <i className="fa-solid fa-circle-check text-green-500" />
                  Service 08
                </li>
              </ul>
              <div className="item-footer text-center">
                <button
                  type="button"
                  className="px-8 py-2 md:px-12 md:py-4 bg-gray-200 text-blue-700 font-semibold rounded"
                >
                  Chọn
                </button>
              </div>
            </div>
          </div>
        </section>
        <footer className="container m-auto py-8">
          <div className="foo-header flex justify-between py-5 border-b">
            <div className="logo">
              <img src="./assets/images/logo-only.svg" alt="" />
            </div>
            <div className="let-start">
              <span>Ready to get started?</span>
              <button className="px-4 py-2 bg-blue-700 text-white rounded">
                Get Started
              </button>
            </div>
          </div>
          <div className="foo-body my-5 flex flex-wrap">
            <div className="subcribe w-full md:w-2/5 mb-3">
              <p className="text-4xl text-blue-700 mb-3">Subscribe newsletter</p>
              <form action="">
                <input
                  type="email"
                  className="p-2 rounded border hover:border-blue-700 focus:outline-blue-700"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-700 text-white rounded"
                >
                  <i className="fa-solid fa-envelope" />
                </button>
              </form>
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
          <div className="foo-footer flex justify-between border-t py-3">
            <div className="term-policy space-x-4">
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

    </main>
  );
}
