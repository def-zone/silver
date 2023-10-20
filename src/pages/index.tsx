import { Feature, Jumbotron, Pricing, Service, Testimonial } from "@/components";

export default function HomePage() {
  return (
    <main>
      <Jumbotron />
      <Service />
      <Feature />
      <Testimonial />
      <Pricing />
    </main>
  );
}
