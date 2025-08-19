import carey_headshot from "@/assets/headshots/carey_headshot.jpg";
import family72 from "@/assets/marketing/family72.jpg";
import type { FunctionalComponent } from "preact";

interface AboutProps {
  className?: string;
}

export const About: FunctionalComponent<AboutProps> = ({
  className,
}): JSX.Element => {
  return (
    <section
      id="about"
      className={`mx-auto max-w-4xl space-y-6 px-4 py-16 ${className ?? ""}`}
      aria-labelledby="about-heading"
    >
      <h1 id="about-heading" className="mb-4 text-3xl font-bold text-tertiary">
        All About YAM
      </h1>

      <div className="text-left text-base text-gray-700">
        <img
          src={family72.src}
          alt="Family enjoying telehealth services"
          className="float-right mb-2 ml-4 h-auto w-52 rounded shadow-md"
          loading="lazy"
          decoding="async"
        />
        <p>
          YAM is a telehealth-first practice serving young adults in Nevada with
          evidence-based, inclusive care.
        </p>
      </div>

      <div className="text-left text-base text-gray-700">
        <img
          src={carey_headshot.src}
          alt="Carey Roselee, Pediatric NP"
          className="float-left mb-2 mr-4 h-auto w-32 rounded shadow-md"
          loading="lazy"
          decoding="async"
        />
        <p>
          Hello! I'm Carey, a board-certified Pediatric Nurse Practitioner with
          over a decade of experience caring for children and teens in emergency
          medicine. I created this practice to offer a more personal,
          accessible, and empowering approach to healthcare—right from home.
        </p>
      </div>

      <p className="text-left text-base text-gray-700">
        Whether you're a parent with questions or a teen looking for a safe
        space to talk, my goal is to provide trusted medical care with empathy,
        clarity, and zero judgment.
      </p>
    </section>
  );
};
