import Image from "next/image";

export default function GlobalPresence() {
  return (
    <section className="container py-8">
      <p className="text-3xl lg:text-5xl text-gray-900 font-extrabold mb-10">Our Global Presence</p>
      <Image
        src='/assets/images/homePage/map.jpg'
        alt="Global Presence Map"
        width={1440}
        height={600}
        className="w-full h-auto object-cover"
      />
    </section>
  );
}
