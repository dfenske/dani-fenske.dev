import Card from "../card";

export default function WorkHistoryLayout(props: {
  title: string;
  subtitle: string;
  description: string;
  projectContent: React.ReactNode;
  technologies: string[];
  skills: string[];
}) {
  const {
    title,
    subtitle,
    description,
    projectContent: content,
    technologies,
    skills,
  } = props;
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-3 sm:mr-3">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{description}</h3>
        <h3>Projects</h3>
        {content}
      </div>
      <div className="flex flex-col sm:p-3 sm:border-l-[1px] sm:border-slate-200">
        <Card header="Technologies" className="sm:p-4">
          <ul className="list-disc ml-4 mt-1">
            {technologies.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </Card>
        <Card header="Skills" className="sm:p-4">
          <ul className="list-disc ml-4 mt-1">
            {skills.map((skill: string) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}