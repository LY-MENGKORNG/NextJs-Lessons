import { invoices } from "@/app/lib/placeholder-data";

export default function Home() {
  return (
    <main>
      <h1 className="mt-5 text-2xl">Hello, Next.js!</h1>
      <div className="flex justify-center items-center gap-5">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="p-3 rounded-lg ring-1 ring-green-400 hover:shadow-sm hover:cursor-pointer">
            <span>{invoice.id}</span>
            <span>{invoice.customer_id}</span>
            <p>{invoice.amount}</p>
            <p>{invoice.date}</p>
            <p>{invoice.status}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
