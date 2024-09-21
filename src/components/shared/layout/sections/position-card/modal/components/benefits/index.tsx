import JobDetails from "../job-details";

const list = [
  "Flexible working hours that accommodate your schedule.",
  "Proficiency in design tools such as Figma, Sketch, Adobe XD, or similar.",
  "Opportunity to work with a global team on a meaningful open-source project.",
  "Enhance your skills in UI/UX design while building your portfolio.",
  "Collaborate on a growing platform that impacts real users.",
];

export default function Benefits() {
  return <JobDetails list={list} title="Benefits" />;
}
