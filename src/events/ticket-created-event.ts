import { Subjects } from "./subjects";

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    userId: string;
    id: string;
    title: string;
    price: number;
  };
}
