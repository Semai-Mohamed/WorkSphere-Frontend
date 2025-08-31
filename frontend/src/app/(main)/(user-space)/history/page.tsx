import ProjectsContainer from "@/components/user-space/history/ProjectsContainer";
import {ProjectsType} from "@/utils/types";
import NumberCard from "@/components/user-space/NumberCard";
import CardWrapper from "@/components/user-space/CardWrapper";

export default function HistoryPage() {
    const projects: ProjectsType = [
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Pending",
            type: "Service",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 120,
            client: "string"
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Done",
            type: "Service",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 1000,
            client: "string"
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Done",
            type: "Need",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 200,
            client: "string"
        },
        {
            name: "Lorem ipsum dolor sit amet, elit elit elit elit elit elit",
            status: "Done",
            type: "Service",
            date: "Apr 14 2024",
            deadline: "Apr 14 2024",
            cost: 500,
            client: "string"
        },
    ];
    const projectsByMonth = {
        max: 6,
        latestMonths: [
            {
                month: "Mar",
                projects: 4
            },
            {
                month: "Apr",
                projects: 3
            },
            {
                month: "May",
                projects: 6
            },
            {
                month: "Jun",
                projects: 2
            },
            {
                month: "Jul",
                projects: 4
            },
            {
                month: "Aug",
                projects: 5
            },
        ]
    };
    const skills = [
        {'Graphic design': 12},
        {'Graphic design': 12},
        {'Graphic design': 12}
    ];
    const colors = ['green', 'alternative-red', 'blue'];
    const skillsAsNumber = skills.map(skill => Object.values(skill)[0] as number);
    const total = skillsAsNumber.reduce((a, b) => a + b, 0);

    return (
        <>
            <NumberCard
                header="Projects"
                value={214}
                margin="-21%"
            />
            <CardWrapper header="Projects by month">
                <div className={"flex-1 flex justify-between"}>
                    {
                        projectsByMonth.latestMonths.map((monthlyProjects, i) =>
                            <div
                                key={i}
                                className={"max-sm:h-30 flex flex-col items-center gap-2 font-primary text-[11px] text-[oklch(from_var(--color-black)_l_c_h_/_.4)]"}
                            >
                                <div
                                    className={"flex-1 flex items-end w-3.5 bg-[oklch(from_var(--color-primary)_l_c_h_/_.15)] rounded-full"}
                                >
                            <span
                                className={"bg-primary rounded-full flex-1"}
                                style={{
                                    height: `${monthlyProjects.projects / projectsByMonth.max * 100}%`
                                }}
                            />
                                </div>
                                {monthlyProjects.month}
                            </div>)
                    }
                </div>
            </CardWrapper>
            <CardWrapper
                header={"Skills/Projects Ratio"}
                className={"sm:max-lg:hidden"}
            >
                <div className="flex flex-col justify-between max-lg:gap-3 flex-1 mt-1">
                    <div className="flex gap-1.5">
                        {
                            skillsAsNumber.map((skill, i) =>
                                <span key={i}
                                      className="h-2 rounded-full"
                                      style={{
                                          width: `${skill / total * 100}%`,
                                          backgroundColor: `var(--color-${colors[i]})`
                                      }}
                                />)
                        }
                    </div>
                    <div className="flex flex-col gap-2.5">
                        {
                            skills.map((skill, i) => {
                                const [name, value] = Object.entries(skill)[0];
                                return <div key={i} className="flex justify-between">
                                    <span className="flex items-center gap-2 font-primary text-xs">
                                        <div
                                            className="w-2.5 aspect-square rounded-full"
                                            style={{
                                                backgroundColor: `var(--color-${colors[i]})`
                                            }}
                                        />
                                        {name}
                                    </span>
                                    <span className="font-primary text-xs">
                                        {value}
                                    </span>
                                </div>
                            })
                        }
                    </div>
                </div>
            </CardWrapper>
            <ProjectsContainer projects={projects}/>
        </>
    );
}