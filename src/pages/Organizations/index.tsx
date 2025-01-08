import { PageHeader } from "../../components/layout/PageHeader";
import { OrganizationsList } from "./components/OrganizationsList";

export function Organizations() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Organizações"
        description="Explore ONGs e associações parceiras"
      />
      <OrganizationsList />
    </div>
  );
}
