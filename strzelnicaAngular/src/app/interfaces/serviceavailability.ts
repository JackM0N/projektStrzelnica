import { Service } from "./service";

// Service availability model
export interface ServiceAvailability {
  id?: number;
  service?: Service;
  start_date: Date;
  end_date: Date;
  service_day: Date;
  service_time_start: string;
  service_time_end: string;
}
