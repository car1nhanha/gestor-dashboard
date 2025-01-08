import { Calendar, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import volunteerService from "../../../services/VolunteerService";
import { Volunteer } from "../../../types";

export function VolunteerList() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadVolunteers() {
    volunteerService
      .getVolunteers()
      .then((data) => setVolunteers(data.volunteers))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadVolunteers();
  }, []);

  if (loading) {
    return <div className="text-center">Carregando...</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {volunteers.map((volunteer) => (
        <div
          key={volunteer.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">{volunteer.name}</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{volunteer.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>
                  {volunteer.location.lat.toFixed(2)},{" "}
                  {volunteer.location.lng.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>
                  Desde {new Date(volunteer.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  volunteer.role === "admin"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                {volunteer.role === "admin" ? "Administrador" : "Voluntário"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
