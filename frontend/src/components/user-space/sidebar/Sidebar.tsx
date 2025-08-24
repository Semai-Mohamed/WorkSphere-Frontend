"use client";
import { SideButtonProps } from "@/utils/types";
import SideButton from "./SideButton";
import { DashboardIcon, HistoryIcon, InboxIcon, LogOutIcon, MovementsIcon, MyAccountIcon, MyFinancesIcon, MyProjectsIcon, MyServicesIcon, WithdrawIcon, WorkingOnIcon } from "./sidebar-icons/Icons";
import { useState } from "react";

export default function Sidebar() {
    const [subMenuShown, setSubMenuShown] = useState<[
        boolean,
        boolean,
        boolean
    ]>([
        false,
        false,
        false
    ]);

    const mainSideButtons: SideButtonProps[] = [
        {
            icon: <DashboardIcon />,
            name: "Dashboard",
            href: '/dashboard'
        },
        {
            icon: <MyProjectsIcon />,
            name: "My Projects",
            index: 0,
            subMenuShown: subMenuShown,
            setSubMenuShown: setSubMenuShown,
            hasChildren: true,
            childrenButtons: [
                {
                    icon: <WorkingOnIcon />,
                    name: "Working On",
                    href: "/working-on"
                },
                {
                    icon: <HistoryIcon />,
                    name: "History",
                    href: "/history"
                }
            ]
        },
        {
            icon: <MyServicesIcon />,
            name: "My Services",
            href: '/my-services'
        },
        {
            icon: <MyFinancesIcon />,
            name: "My Finances",
            hasChildren: true,
            index: 1,
            subMenuShown: subMenuShown,
            setSubMenuShown: setSubMenuShown,
            childrenButtons: [
                {
                    icon: <WithdrawIcon />,
                    name: "Withdraw",
                    href: "/withdraw"
                },
                {
                    icon: <MovementsIcon />,
                    name: "Movements",
                    href: "/movements"
                }
            ]
        },
        {
            icon: <MyAccountIcon />,
            name: "My Account"
        }
    ];

    const insightsSideButtons: SideButtonProps[] = [
        {
            icon: <InboxIcon />,
            name: "Inbox",
            customColor: "var(--color-blue)"
        },
        {
            icon: <LogOutIcon />,
            name: "Log Out",
            customColor: "var(--color-red)"
        }
    ];

    return (
        <div className="flex-1 flex flex-col justify-between pb-5">
            <div>
                <h4 className="font-primary text-xs opacity-20 ml-5 mb-1">Main</h4>
                <nav className="flex flex-col gap-2.5">
                    {mainSideButtons.map((sideButton, i) => <SideButton key={`main-${i}`} {...sideButton} />)}
                </nav>
            </div>
            <div>
                <h4 className="font-primary text-xs opacity-20 ml-5 mb-1">Insights</h4>
                <nav className="flex flex-col gap-2.5">
                    {insightsSideButtons.map((insightsSideButton, i) => <SideButton key={`insights-${i}`} {...insightsSideButton} />)}
                </nav>
            </div>
        </div>
    )
}