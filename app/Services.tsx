import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Accounting & Financial Management",
    href: "accounting-and-fiancial-management",
    tags: [
      "Bookkeeping",
      "Monthly Management Accounts",
      "Bank Reconciliations",
      "Creditors & Debtors Management",
      "Interim and Annual Financial Statements",
    ],
  },
  {
    id: 2,
    title: "Corporate Tax Compliance",
    href: "corporate-tax-compliance",
    tags: [
      "Tax Registration",
      "Interim & Annual Tax Returns",
      "Value Added Tax (VAT) Returns",
      "Payroll Taxes - PAYE, UIF etc",
      "SARS Audit, Objections & Appeals",
    ],
  },
  {
    id: 3,
    title: "Payroll Services",
    href: "payroll-services",
    tags: [
      "Reconciliations",
      "Payroll processing and payslips",
      "Mid-year & year end submissions",
      "Registration with authorities (PAYE/UIF/SDL)",
    ],
  },
];

const Services = () => {
  return (
    <section className="container py-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">{
        services.map((service) => (
          <Card key={service.id} className="bg-slate-50">
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {service.tags.map((tag) => (
                <CardDescription key={tag}>
                  {tag}
                </CardDescription>
              ))}
            </CardContent>
            <CardFooter>
              <Link href={`/services/${service.href}`}>
                <Button type="button" className="hover:bg-slate-800 bg-black text-white font-bold py-2 px-4 rounded">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))
      }</div>
    </section>
  );
};
export default Services;
