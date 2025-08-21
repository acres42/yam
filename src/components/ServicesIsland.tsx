/** @jsxImportSource preact */
import { useEffect } from "preact/hooks";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesList, nonServicesList } from "@/types/content";
import StethoscopeIcon from "./StethoscopeIcon";
import NoIcon from "./NoIcon";

export default function ServicesIsland() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 400,
      easing: "ease-in",
    });
  }, []);

  const firstColumn: string[] = [];
  const secondColumn: string[] = [];
  servicesList.forEach((service, index) => {
    (index % 2 === 0 ? firstColumn : secondColumn).push(service);
  });

  const notFirstColumn: string[] = [];
  const notSecondColumn: string[] = [];
  nonServicesList.forEach((service, index) => {
    (index % 2 === 0 ? notFirstColumn : notSecondColumn).push(service);
  });

  return (
    <section class="mx-auto max-w-5xl px-4 py-12 text-center">
      <h2 class="text-darkblue mb-12 text-3xl font-bold">What we treat</h2>
      <div class="mx-auto mb-10 grid w-fit grid-cols-1 items-stretch gap-x-20 gap-y-4 text-left sm:grid-cols-2">
        <ul class="h-full space-y-6">
          {firstColumn.map((service, index) => (
            <li
              key={index}
              class="flex items-start gap-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <StethoscopeIcon class="mt-1 h-5 min-h-5 w-5 min-w-5 shrink-0 text-accent" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
        <ul class="h-full space-y-6">
          {secondColumn.map((service, index) => (
            <li
              key={index + firstColumn.length}
              class="flex items-start gap-2"
              data-aos="fade-up"
              data-aos-delay={(index + firstColumn.length) * 100}
            >
              <StethoscopeIcon class="mt-1 h-5 min-h-5 w-5 min-w-5 shrink-0 text-accent" />
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 class="text-darkblue mb-12 text-3xl font-bold">
        What we DO NOT treat
      </h2>
      <div class="mx-auto mb-10 grid w-fit grid-cols-1 items-stretch gap-x-20 gap-y-4 text-left sm:grid-cols-2">
        <ul class="h-full space-y-6">
          {notFirstColumn.map((nonservice, index) => (
            <li
              key={index}
              class="flex items-start gap-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <NoIcon class="mt-1 h-5 min-h-5 w-5 min-w-5 shrink-0 text-red-600" />
              <span>{nonservice}</span>
            </li>
          ))}
        </ul>
        <ul class="h-full space-y-6">
          {notSecondColumn.map((nonservice, index) => (
            <li
              key={index + notFirstColumn.length}
              class="flex items-start gap-2"
              data-aos="fade-up"
              data-aos-delay={(index + notFirstColumn.length) * 100}
            >
              <NoIcon class="mt-1 h-5 min-h-5 w-5 min-w-5 shrink-0 text-red-600" />
              <span>{nonservice}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
