import { commercialInsurancesAccepted } from "@/types/content";

export const CommercialInsurance = () => (
  <section className="mx-auto rounded border border-darkblue bg-yellow-200 text-center text-gray-800 shadow-sm px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
    <h2 className="mb-6 text-center text-darkblue text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
      Commercial Insurances Accepted
    </h2>
    <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-3 text-darkblue text-xs sm:text-sm md:text-base">
      {commercialInsurancesAccepted.map((insurance) => (
        <li
          key={insurance}
          className="flex items-center whitespace-nowrap gap-2 font-medium"
        >
          <span className="text-xs sm:text-sm md:text-base">{insurance}</span>
        </li>
      ))}
    </ul>
  </section>
);
