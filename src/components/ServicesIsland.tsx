/** @jsxImportSource preact */
import { useEffect } from "preact/hooks";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesList } from "@/types/content";
import StethoscopeIcon from "./StethoscopeIcon.tsx";
export default function ServicesIsland() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
    });
  }, []);

  const firstColumn: string[] = [];
  const secondColumn: string[] = [];
  servicesList.forEach((service, index) => {
    if (index % 2 === 0) {
      firstColumn.push(service);
    } else {
      secondColumn.push(service);
    }
  });

  return (
    <section class="mx-auto max-w-5xl px-4 py-12 text-center">
      <h2 class="text-darkblue mb-12 text-3xl font-bold">
        Telehealth Services
      </h2>

      <div class="mx-auto grid w-fit grid-cols-1 items-stretch gap-x-20 gap-y-4 text-left sm:grid-cols-2">
        <ul class="space-y-6 h-full">
          {firstColumn.map((service, index) => (
            <li
              key={index}
              class="flex items-start gap-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <StethoscopeIcon class="mt-1 h-5 w-5 text-accent" />
              <span>{service}</span>
            </li>
          ))}
        </ul>

        <ul class="space-y-6 h-full">
          {secondColumn.map((service, index) => (
            <li
              key={index + firstColumn.length}
              class="flex items-start gap-2"
              data-aos="fade-up"
              data-aos-delay={(index + firstColumn.length) * 100}
            >
              <StethoscopeIcon class="mt-1 h-5 w-5 text-accent" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
