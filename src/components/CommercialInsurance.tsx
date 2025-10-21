import { commercialInsurancesAccepted } from "@/types/content";

export const CommercialInsurance = () => (
  <section className="mx-auto rounded border border-darkblue bg-yellow-200 p-4 px-4 py-8 text-center text-gray-800 shadow-sm sm:px-6 sm:py-10 md:px-8 lg:px-16">
    <h2 className="mb-6 text-centert text-darkblue text-3xl font-semibold">
      Commercial Insurances Accepted
    </h2>
    <ul className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-darkblue sm:text-base">
      {commercialInsurancesAccepted.map((insurance) => (
        <li
          key={insurance}
          className="flex items-center whitespace-nowrap gap-2 font-medium"
        >
          <span className="text-sm sm:text-base">{insurance}</span>
        </li>
      ))}
    </ul>
  </section>
);
