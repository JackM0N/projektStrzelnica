import { Service } from "./service";

// Service unavailability model
export interface ServiceUnavailability {
  id?: number;
  service?: Service;
  start_date: Date;
  start_time: string;
  end_date: Date;
  end_time: string;
}
