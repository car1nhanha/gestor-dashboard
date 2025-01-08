import Api from "./api";
import { Volunteer, VolunteerInput } from "./types/Volunteer";

interface VolunteerListResponse {
  volunteers: Volunteer[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

class VolunteerService extends Api {
  async getVolunteers(
    page: number = 1,
    limit: number = 10
  ): Promise<VolunteerListResponse> {
    return this.get<VolunteerListResponse>(
      `/volunteers?page=${page}&limit=${limit}`
    );
  }

  async getVolunteerById(id: string): Promise<Volunteer> {
    return this.get<Volunteer>(`/volunteers/${id}`);
  }

  async createVolunteer(volunteerData: VolunteerInput): Promise<Volunteer> {
    return this.post<Volunteer>("/volunteers", volunteerData);
  }

  async updateVolunteer(
    id: string,
    volunteerData: Partial<VolunteerInput>
  ): Promise<Volunteer> {
    return this.put<Volunteer>(`/volunteers/${id}`, volunteerData);
  }

  async deleteVolunteer(id: string): Promise<void> {
    return this.delete<void>(`/volunteers/${id}`);
  }

  async getLocations(): Promise<VolunteerListResponse> {
    return this.get<VolunteerListResponse>("/volunteers/get/location");
  }

  async inviteVolunteer(email: string): Promise<void> {
    return this.post<void>("/volunteers/invite/email", { email });
  }
}

export default new VolunteerService();
