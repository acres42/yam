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
          YAM is a pediatric specialty practice serving children and young
          adults ages 5 to 21+ in Nevada with compassionate, evidence-based,
          inclusive care. Visit our Las Vegas office at 9330 West Sahara Ave,
          Suite 230, Las Vegas, NV 89117, or connect anywhere in Nevada via
          telehealth.
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
          accessible, and empowering approach to healthcare: in-person or right
          from home.
        </p>
      </div>

      <p className="text-left text-base text-gray-700">
        Whether you're a parent with questions or a teen looking for a safe
        space to talk, my goal is to provide trusted medical care with empathy,
        clarity, and zero judgment.
      </p>

      <a
        id="disclaimer"
        className="block h-0 scroll-mt-24"
        aria-hidden="true"
      ></a>
      <p className="mx-auto max-w-4xl mt-16 mb-24 px-6 py-6 border-t border-gray-200 text-gray-700 leading-relaxed text-sm">
        <strong>Disclaimer:</strong> Social media content is for general
        educational purposes only and is not a substitute for professional
        medical advice, diagnosis, or treatment. Watching or following does not
        establish a provider-patient relationship. If you have questions about
        your own health, please consult your healthcare provider.
      </p>
    </section>
  );
};
