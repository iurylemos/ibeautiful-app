export interface AllServicesSalonApi {
  error: boolean;
  message?: string;
  services: ServicesSalonApi[];
}

export interface ServicesSalonApi {
  _id: string;
  salonId: string;
  title: string;
  price: number;
  commission: number;
  duration: string;
  recurrence: number;
  description: string;
  status: string;
  registerData: string;
  __v: number;
  files: File[];
}

interface File {
  _id: string;
  referenceId: string;
  model: string;
  path: string;
  registerData: string;
  __v: number;
}
