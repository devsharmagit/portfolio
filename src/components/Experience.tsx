import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-16 md:py-20">
      <div className="container max-w-4xl">
        <p className="section-eyebrow">EXPERIENCE</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Growth99.com</h2>

        <article className="surface-card mt-6 p-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/65">
            <span className="inline-flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Frontend Developer
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Utah, USA
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Jul 2023 - Aug 2024
            </span>
          </div>

          <ul className="mt-5 space-y-3 text-sm text-white/75 md:text-base">
            <li>Built and shipped 250+ healthcare landing pages.</li>
            <li>Reduced development effort by 50% using reusable templates.</li>
            <li>Built KPI dashboards with Next.js and REST APIs.</li>
            <li>Improved onboarding flow retention by 30%.</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
