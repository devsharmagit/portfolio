import { Calendar, GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "IILM University",
    location: "Greater Noida, India",
    period: "2024 - 2028",
  },
  {
    degree: "Senior Secondary Education",
    school: "School of Excellence",
    location: "Delhi, India",
    period: "Completed 2023",
  },
];

const Education = () => {
  return (
    <section id="education" className="px-6 py-16 md:py-20">
      <div className="container max-w-4xl">
        <p className="section-eyebrow">EDUCATION</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Academic Background</h2>

        <div className="mt-6 space-y-4">
          {education.map((item) => (
            <article key={item.school} className="surface-card p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-white/70">{item.school}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-white/60">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
