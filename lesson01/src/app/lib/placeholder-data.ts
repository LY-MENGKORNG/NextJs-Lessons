import { randomUUID, UUID } from "node:crypto";
import { Invoice } from "./definitions";

export const invoices: Invoice[] = [
    {
        id: randomUUID(),
        customer_id: '1',
        amount: 15795,
        status: 'pending',
        date: '2022-12-06',
    },
    {
        id: randomUUID(),
        customer_id: '2',
        amount: 20348,
        status: 'pending',
        date: '2022-11-14',
    },
];