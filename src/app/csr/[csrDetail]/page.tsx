import Banner from "@/components/Banner";
import { notFound } from "next/navigation";
import { csrProgramDetail } from "@/constants/csr/CSR_LIST";
import Gallery from "@/page/csr/Gallery";

interface PageProps {
  params: Promise<{ csrDetail: string }>;
}

export default async function CsrDetailPage({ params }: PageProps) {
  const { csrDetail } = await params;
  const csr = csrProgramDetail[csrDetail as keyof typeof csrProgramDetail];
  if (!csr) {
    notFound();
  }

  return (
    <main className="bg-gray-100 pb-8 lg:pb-16">
      <Banner title={csr.title} />
      <div className="container mt-8 lg:mt-16">
        <section className="pb-12 pt-3 bg-white rounded-lg px-4 lg:px-8">
          <div className="mb-12">
            {csr.text.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 lg:text-lg text-justify mt-4"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
          <Gallery csr={csr} />
        </section>
      </div>
    </main>
  );
}
