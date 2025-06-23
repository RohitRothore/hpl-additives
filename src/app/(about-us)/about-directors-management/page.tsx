import { CompanyManagementSection } from "@/page/about/CompanyManagementSection";
import { ExecutiveDirectorsSection } from "@/page/about/ExecutiveDirectorsSection";
import { FounderSection } from "@/page/about/FounderSection";
import { NonExecutiveSection } from "@/page/about/NonExecutiveSection";

export default function TeamPage() {
  return (
    <>
      <FounderSection />
      <ExecutiveDirectorsSection />
      <CompanyManagementSection />
      <NonExecutiveSection />
    </>
  );
}