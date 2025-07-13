export const services = [
  "Fevers, allergies, sore throat, and pinkeye",
  "Well Child Checks age 5+",
  "Vomiting, Diarrhea, Constipation",
  "Reproductive Health counseling including Medication",
  "ADHD evaluation and Medication management",
  "School Stress and Peer challenges",
  "Transition from Middle School to High School OR High School to College",
  "Referral to Specialists when appropriate",
  "Skin rashes, dry skin, itching, eczema and acne",
  "Vaccines available via mobile service",
  "Camp and Sports Physicals when telehealth appropriate",
  "Growth and Weight Optimization including medication",
  "In-depth Mental Health Services 12yr and older",
  "Nutrition and Sleep Support",
  "Follow up after Emergency Department visit",
];

export const servicesList: string[] = Object.values(services);

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
