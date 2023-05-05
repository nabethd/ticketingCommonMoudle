import { Subjects } from "./subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    userId: string;
    id: string;
    title: string;
    price: number;
  };
}
