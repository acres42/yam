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

export const medicationManagementFAQs = [
  {
    q: "What is medication management?",
    a: "Medication management is a service where our providers evaluate your health needs and prescribe medications as necessary to help manage your condition.",
  },
  {
    q: "How do I schedule a medication management appointment?",
    a: "You can schedule an appointment through our website or by contacting our office directly.",
  },
  {
    q: "What should I expect during my first appointment?",
    a: "During your first appointment, we will discuss your medical history, current medications, and any concerns you may have. This helps us create a personalized treatment plan.",
  },
] as const;
export const sportsPhysicalFAQs = [
  {
    q: "What is a sports physical?",
    a: "A sports physical is an examination to ensure that you are healthy enough to participate in sports activities. It assesses your overall health and identifies any potential risks.",
  },
  {
    q: "How do I prepare for my sports physical?",
    a: "You should bring any necessary medical records, a list of current medications, and be ready to discuss your medical history, family medical history, and any concerns you may have.",
  },
  {
    q: "Do I need a sports physical every year?",
    a: "Yes, most schools require an annual sports physical to ensure that you remain healthy and fit for participation in sports.",
  },
] as const;
export const reproductiveHealthFAQs = [
  {
    q: "What reproductive health services do you offer?",
    a: "We provide a range of reproductive health services including contraception counseling, STI testing, and menstrual health management.",
  },
  {
    q: "How can I access reproductive health services?",
    a: "You can access our reproductive health services by scheduling an appointment through our website or by calling our office.",
  },
  {
    q: "Are your reproductive health services confidential?",
    a: "Yes, all our reproductive health services are confidential to ensure your privacy and comfort.",
  },
] as const;
export const mentalHealthEvaluationFAQs = [
  {
    q: "What is a mental health evaluation?",
    a: "A mental health evaluation is a comprehensive assessment conducted by a licensed professional to understand your mental health needs and develop an appropriate treatment plan.",
  },
  {
    q: "How do I prepare for my mental health evaluation?",
    a: "You should prepare by gathering any relevant medical history, current medications, and being ready to discuss your symptoms and concerns openly.",
  },
  {
    q: "What can I expect during the evaluation?",
    a: "During the evaluation, you will answer questions about your mental health history, current symptoms, and lifestyle. This helps us understand your situation better.",
  },
] as const;

export const transCareFAQs = [
  {
    q: "What services do you offer?",
    a: "We offer a range of services including hormone therapy, mental health support, and general healthcare tailored for the gender-diverse community.",
  },
  {
    q: "How do I schedule an appointment?",
    a: "You can schedule an appointment through our website or by contacting our office directly.",
  },
  {
    q: "Are your services confidential?",
    a: "Yes, we prioritize confidentiality and ensure that all services are provided in a safe and supportive environment.",
  },
] as const;
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
