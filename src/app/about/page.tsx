import Education from "./Education";
import Experience from "./Experience";
import Techstack from "./Techstack";

export default function page() {
  return (
    <div className="my-10 grid grid-cols-1 gap-5">
      <Experience />
      <Education />
      <Techstack />
    </div>
  );
}
