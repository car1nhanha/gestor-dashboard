import { useEffect, useState } from "react";
import { PageHeader } from "../../components/layout/PageHeader";
import { MapView } from "../../components/map/Map";
import volunteerService from "../../services/VolunteerService";
import { Organization, Volunteer } from "../../types";

export function MapPage() {
  const [members, setMembers] = useState<Volunteer[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    volunteerService
      .getLocations()
      .then((response) => {
        console.log(response.volunteers);
        setMembers(response.volunteers);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center">Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Mapa"
        description="Visualize a distribuição geográfica dos membros e organizações"
      />
      <MapView volunteers={members} organizations={organizations} />
    </div>
  );
}
