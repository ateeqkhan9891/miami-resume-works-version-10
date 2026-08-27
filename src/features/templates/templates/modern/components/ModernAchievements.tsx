import type { ResumePreviewData } from "@/types/resume";
import { ModernTemplateIcons } from "../ModernTemplateIcons";

interface ModernAchievementsProps {
  achievements: ResumePreviewData["achievements"];
}

export default function ModernAchievements({
  achievements,
}: ModernAchievementsProps) {
  const AchievementIcon = ModernTemplateIcons.achievements;

  return (
    <section>
      <h2 className="border-b border-cyan-400 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900">
        Key Achievements
      </h2>

      <div className="mt-3 space-y-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="flex items-start gap-2.5"
          >
            <AchievementIcon
              size={13}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-cyan-600"
            />

            <div className="min-w-0 flex-1">
              <h3 className="text-[10.5px] font-bold leading-snug text-slate-900">
                {achievement.title}
              </h3>

              {(achievement.issuer || achievement.date) && (
                <p className="mt-0.5 text-[9.5px] text-slate-500">
                  {achievement.issuer}
                  {achievement.issuer && achievement.date && " · "}
                  {achievement.date}
                </p>
              )}

              {achievement.description && (
                <p className="mt-0.5 text-[9.5px] leading-relaxed text-slate-600">
                  {achievement.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}