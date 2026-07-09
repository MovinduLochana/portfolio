import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  title: string;
  organization: string;
  date: string;
  type: "Competition" | "Award" | "Recognition";
  rank?: string;
  description: string;
  teamMembers?: string[];
}

const achievements: Achievement[] = [
  {
    title: "SLIIT Bashaway 2025",
    organization: "SLIIT FOSS Community",
    date: "2025",
    type: "Competition",
    rank: "1st Runners up",
    description: "Sri Lanka's premier scripting and automation competition. Demonstrated excellence in automation solutions and scripting challenges.",
    teamMembers: []
  },
  {
    title: "SLIITXtreame 2025",
    organization: "SLIIT",
    date: "2025",
    type: "Competition",
    rank: "Finalist",
    description: "Qualified as a finalist in one of Sri Lanka's most prestigious tech competitions, showcasing innovation and technical excellence.",
    teamMembers: []
  },
  {
    title: "International Astrophysics Olympiad",
    organization: "International Astrophysics Olympiad",
    date: "2020",
    type: "Award",
    rank: "Silver Medal",
    description: "Achieved international recognition in astrophysics, demonstrating strong analytical and problem-solving skills in space sciences.",
    teamMembers: []
  },
  {
    title: "Dialog IDEAMART",
    organization: "Dialog Axiata",
    date: "2020",
    type: "Competition",
    rank: "Finalist",
    description: "Selected as a finalist in Dialog's innovation competition, showcasing creative technology solutions.",
    teamMembers: []
  },
  {
    title: "All Island Astrophysics Olympiad",
    organization: "Sri Lanka Astronomical Association",
    date: "2018-2022",
    type: "Award",
    rank: "2 Gold, 2 Bronze",
    description: "Consistent excellence in national astrophysics competitions over multiple years, demonstrating sustained academic excellence.",
    teamMembers: []
  },
  {
    title: "Dean's List",
    organization: "SLIIT",
    date: "2024 - Present",
    type: "Recognition",
    description: "Achieved Dean's List recognition for all semesters with a GPA of 3.9, maintaining consistent academic excellence throughout undergraduate studies.",
    teamMembers: []
  },
  {
    title: "A/L Mathematics Excellence",
    organization: "Isipathana College",
    date: "2023",
    type: "Award",
    description: "Achieved outstanding results in G.C.E A/L examination in Physical Science stream with distinction in Mathematics.",
    teamMembers: []
  }
];

export default function Achievements() {

  return (
    <section id="achievements" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">Defining Moments of My Path</p>
          <h2 className="text-4xl md:text-5xl font-bold">Achievements Unveiled</h2>
        </div>

        <div className="grid gap-6 lg:gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="transition-all duration-800"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="p-6 lg:p-8 bg-card/50 backdrop-blur border-border/50 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  {/* Achievement Icon & Type */}
                  <div className="flex items-center lg:items-start lg:flex-col gap-4 lg:w-32 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        {achievement.type === "Competition" && "🏆"}
                        {achievement.type === "Award" && "🥇"}
                        {achievement.type === "Recognition" && "⭐"}
                      </div>
                    </div>
                    <div className="text-center lg:text-center">
                      <Badge variant="secondary" className="mb-2">
                        {achievement.type}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>

                  {/* Achievement Details */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold">
                          {achievement.rank && (
                            <span className="text-primary">{achievement.rank} - </span>
                          )}
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {achievement.organization}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>

                    {achievement.teamMembers && achievement.teamMembers.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-2">Team Members:</p>
                        <div className="flex flex-wrap gap-2">
                          {achievement.teamMembers.map((member, memberIndex) => (
                            <Badge key={memberIndex} variant="outline" className="text-xs">
                              {member}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievement rank badge */}
                    {achievement.rank && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        🏅 {achievement.rank}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Extra Curricular Activities */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Extra Curricular Activities</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    💻
                  </div>
                  <div>
                    <h4 className="font-semibold">Member of Web Development Team</h4>
                    <p className="text-sm text-muted-foreground">SE Student Club, SLIIT</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>📅</span>
                  <span>2024</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    🔧
                  </div>
                  <div>
                    <h4 className="font-semibold">Member of Development Team and Sub committee</h4>
                    <p className="text-sm text-muted-foreground">FOSS, SLIIT</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>📅</span>
                  <span>2024</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur md:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    🌟
                  </div>
                  <div>
                    <h4 className="font-semibold">President of the Astronomical Society</h4>
                    <p className="text-sm text-muted-foreground">Isipathana College</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>📅</span>
                  <span>2020 – 2022</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Led the astronomical society, organizing events and fostering interest in space sciences among students.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 bg-card/50 backdrop-blur">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold text-primary">7+</h3>
                <p className="text-muted-foreground text-sm">Major Achievements</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">4</h3>
                <p className="text-muted-foreground text-sm">Gold & Silver Medals</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">5</h3>
                <p className="text-muted-foreground text-sm">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary">3</h3>
                <p className="text-muted-foreground text-sm">Leadership Roles</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}