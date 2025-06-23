export function NonExecutiveSection() {
  return (
    <section className="bg-gray-100 py-16" id="non-exec">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Non-Executive &<br />
            Independant Directors
          </h2>

          <div className="pt-6">
            <div className="inline-block bg-[#8ABF45] text-white font-bold text-2xl px-10 py-4 rounded">
              Ms. Alka Bhardwaj
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-gray-800 text-lg leading-relaxed">
            Our Non-Executive and Independent Directors bring valuable external
            perspectives, governance, and strategic oversight. Their unbiased
            guidance ensures transparency, accountability, and sound
            decision-making at every level of the organization.
          </p>
          <div>
            <div className="inline-block bg-[#8ABF45] text-white font-bold text-2xl px-10 py-4 rounded">
              Suresh Kumar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
