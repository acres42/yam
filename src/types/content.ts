const TelehealthService = {
  Fevers: "Fevers, allergies, sore throat, and pinkeye",
  WellChecks: "Well Child Checks age 5+",
  Vomiting: "Vomiting, Diarrhea, Constipation",
  ReproHealth: "Reproductive Health counseling including Medication",
  ADHD: "ADHD evaluation and medication management",
  AnxietyDepressionMoodDisorders:
    "Anxiety, Depression, and Mood Disorders evaluation and medication management",
  SchoolStress: "School Stress and Peer challenges",
  Transitions:
    "Transition from Middle School to High School OR High School to College",
  SpecialistReferral: "Referral to Specialists when appropriate",
  Rashes: "Skin rashes, dry skin, itching, eczema and acne",
  Vaccines: "Vaccines available via mobile service",
  Physicals: "Camp and Sports Physicals when telehealth appropriate",
  Growth: "Growth and Weight Optimization including medication",
  MentalHealth: "In-depth Mental Health Services 12yr and older",
  Nutrition: "Nutrition and Sleep Support",
  EmergencyFollowup: "Follow up after Emergency Department visit",
} as const;

export const servicesList: string[] = Object.values(TelehealthService);

const NonOfferedService = {
  Complex:
    "Complex cognitive issues like nonverbal and/or multiple developmental regressions",
  Seizures: "Any Seizure disorders",
  Diabetes: "Any Diabetes",
  ComplexEndicronology:
    "Complex endicrinology concerns like thyroid and juvenile arthritis",
  UTI: "UTIs in children under 5",
  Fevers: "Any fever in children under 2 months",
  Breathing:
    "Any breathing disorders like asthma, croup, RSV as the correct procedure to diagnose is in-person",
  Bones: "Complex bone disorders such as scoliosis",
  AcuteAbdominial: "Acute onset abdominal pain in both lower and upper stomach",
} as const;

export const nonServicesList: string[] = Object.values(NonOfferedService);

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
