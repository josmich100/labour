import type { Metadata } from "next";
import ManifestoPageClient from "./ManifestoClient";

export const metadata: Metadata = {
  title: "Manifesto 2026",
  description:
    "Explore the Labour Party of Kenya Manifesto 2026 — six bold policy pillars covering Workers' Rights, Healthcare, Education, Housing, Agriculture, and Technology.",
};

export default function ManifestoPage() {
  return <ManifestoPageClient />;
}
