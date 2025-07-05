export const downloadPDF = (pdfUrl: string) => {
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = pdfUrl.split("/").pop() || "policy.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
