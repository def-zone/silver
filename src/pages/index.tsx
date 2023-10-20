import { Jumbotron, Pricing, Service, Testimonial } from "@/components";

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
        <Pricing />
        
      </>

    </main>
  );
}
