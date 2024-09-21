import JobDetails from "../job-details";

const list = [
  "Design intuitive, user-friendly interfaces for Cotopia Lite’s web and mobile platforms.",
  "Work closely with developers and project managers to ensure designs align with technical capabilities and user needs.",
  "Create wireframes, prototypes, and mockups to illustrate design ideas.",
  "Conduct user research and gather feedback to continuously improve the platform’s user experience.",
  "Contribute to visual branding, layout improvements, and design guidelines.",
  "Ensure consistency in design across all platform components.",
];

export default function JobResponsibilities() {
  return <JobDetails list={list} title="Jop Responsibilities"/>;
}
