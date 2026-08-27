import type { ResumePreviewData } from "@/types/resume";

interface ModernAchievementsProps {
  achievements: ResumePreviewData["achievements"];
}

export default function ModernAchievements({
  achievements,
}: ModernAchievementsProps) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-950">
          Key Achievements
        </h2>

        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="space-y-3">
        {achievements.map((achievement) => (
          <article key={achievement.id}>
            <h3 className="text-[9.5px] font-bold leading-snug text-slate-900">
              {achievement.title}
            </h3>

            {(achievement.issuer || achievement.date) && (
              <p className="mt-0.5 text-[8px] text-slate-400">
                {achievement.issuer}
                {achievement.issuer && achievement.date && " · "}
                {achievement.date}
              </p>
            )}

            {achievement.description && (
              <p className="mt-0.5 text-[8.5px] leading-[1.5] text-slate-600">
                {achievement.description}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}