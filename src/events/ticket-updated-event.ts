import { Subjects } from "./subjects";

export interface TicketUpdatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    userId: string;
    id: string;
    title: string;
    price: number;
  };
}
