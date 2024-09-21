import JobDetails from "../job-details";


const list = ["Proven experience as a UI/UX Designer or similar role." , "Proficiency in design tools such as Figma, Sketch, Adobe XD, or similar." , "Strong understanding of user-centered design principles and usability testing." , "Conduct user research and gather feedback to continuously improve the platform’s user experience." , "Ability to create wireframes, prototypes, and high-fidelity mockups." , "Excellent communication and teamwork skills." , "Ability to work independently and manage time effectively."];


export default function Requirements() {
  return <JobDetails list={list} title="Requirements"/>;
}
