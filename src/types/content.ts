const TelehealthService = {
  MentalHealth: "In-depth Mental Health Services 12yr and older",
  ADHD: "ADHD evaluation and medication management",
  Nutrition: "Nutrition and Sleep Support",
  AnxietyDepressionMoodDisorders:
    "Anxiety, Depression, and Mood Disorders evaluation and medication management",
  SchoolStress: "School Stress and Peer challenges",
  Transitions:
    "Transition from Middle School to High School OR High School to College",
  ReproHealth: "Reproductive Health counseling including Medication",
  Physicals: "Camp and Sports Physicals when telehealth appropriate",
  Growth: "Growth and Weight Optimization including medication",
  Fevers: "Fevers, allergies, sore throat, and pinkeye",
  WellChecks: "Well Child Checks age 11+",
  Vomiting: "Vomiting, Diarrhea, Constipation",
  SpecialistReferral: "Referral to Specialists when appropriate",
  Rashes: "Skin rashes, dry skin, itching, eczema and acne",
  Vaccines: "Vaccines available via mobile service",
  EmergencyFollowup: "Follow up after Emergency Department visit",
} as const;

export const servicesList: string[] = Object.values(TelehealthService);

const NonOfferedService = {
  Complex:
    "Complex cognitive issues like nonverbal and/or multiple developmental regressions",
  Seizures: "Any Seizure disorders",
  Diabetes: "Any Diabetes",
  ComplexEndicronology:
    "Complex endocrinology concerns like thyroid and juvenile arthritis",
  UTI: "UTIs in children under 5",
  Fevers: "Any fever in children under 2 months",
  Breathing:
    "Any breathing disorders like asthma, croup, RSV as the correct procedure to diagnose is in-person",
  Bones: "Complex bone disorders such as scoliosis",
  AcuteAbdominial: "Acute onset abdominal pain in both lower and upper stomach",
} as const;

export const nonServicesList: string[] = Object.values(NonOfferedService);

const Forms = [
  { label: "Referral Form", file: "YAM_Referral.pdf" },
  { label: "HIPAA Notice", file: "YAM_HIPAA_Privacy_Practices.pdf" },
  { label: "Privacy Policy", file: "YAM_Privacy_Policy.pdf" },
  { label: "Terms and Conditions", file: "YAM_Terms_and_Conditions.pdf" },
];

export const formsData: { label: string; file: string }[] = Forms;
export type ContactInfo = {
  name: string;
  email: string;
  message: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  url: string;
  icon?: string;
};

export type TebraWidgetProps = {
  embedId: string;
};
