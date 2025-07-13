const TelehealthService = {
  Fevers: "Fevers, allergies, sore throat, and pinkeye",
  WellChecks: "Well Child Checks age 5+",
  Vomiting: "Vomiting, Diarrhea, Constipation",
  ReproHealth: "Reproductive Health counseling including Medication",
  ADHD: "ADHD evaluation and Medication management",
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

const servicesList: string[] = Object.values(TelehealthService);

export default servicesList;

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
