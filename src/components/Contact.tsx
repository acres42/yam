import family75 from "../assets/marketing/family75.jpg";

interface ContactProps {
  telephone: string;
  fax: string;
  schedulingLink: string;
}

export default function Contact({
  telephone,
  fax,
  schedulingLink,
}: ContactProps): JSX.Element {
  return (
    <div className="mx-auto mt-2.5 max-w-4xl px-4">
      <div className="mx-auto mb-8 flex w-full max-w-[36rem] flex-col items-center sm:flex-row sm:justify-center sm:gap-8">
        <div className="flex w-full flex-col items-center text-center">
          <h2 className="mb-2 text-2xl font-bold text-secondary">
            Get in Touch
          </h2>

          <p className="mb-1">
            Phone:{" "}
            <a
              className="font-semibold text-secondary hover:text-primary hover:no-underline"
              href={`tel:${telephone}`}
            >
              {telephone}
            </a>
          </p>

          <p className="mb-4">
            Fax:{" "}
            <a
              className="font-semibold text-secondary hover:text-primary hover:no-underline"
              href={`fax:${fax}`}
            >
              {fax}
            </a>
          </p>

          <a
            href={schedulingLink}
            className="mb-4 inline-block font-semibold text-secondary hover:text-primary hover:no-underline"
          >
            📅 Book an Appointment
          </a>
        </div>

        <img
          src={family75.src}
          alt="Family"
          className="mx-auto w-[30%] rounded shadow-lg sm:m-0 sm:w-[220px] sm:max-w-[240px]"
        />
      </div>
    </div>
  );
}
