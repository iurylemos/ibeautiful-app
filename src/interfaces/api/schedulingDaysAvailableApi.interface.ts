export interface SchedulingDaysAvailableApi {
  error: boolean;
  schedule: any[];
  collaborators: SchedulingDaysAvailableApiCollaborator[];
  message?: string;
}

export interface SchedulingDaysAvailableApiCollaborator {
  _id: string;
  name: string;
  photo: string;
}
