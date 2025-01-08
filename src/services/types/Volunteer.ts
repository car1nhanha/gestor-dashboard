export interface Volunteer {
  id: string;
  name: string;
  email: string;
  location: {
    lat: number;
    lng: number;
  };
  role: "volunteer" | "admin";
  created_at: string;
}

export interface VolunteerInput {
  name: string;
  email: string;
  cep: string;
}
