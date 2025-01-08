import { PageHeader } from "../../components/layout/PageHeader";
import { ProjectsList } from "./components/ProjectsList";

export function Projects() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Projetos"
        description="Acompanhe projetos e iniciativas em andamento"
      />
      <ProjectsList />
    </div>
  );
}
