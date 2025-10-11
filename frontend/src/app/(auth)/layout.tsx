import AuthLogo from "@/components/auth/AuthLogo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Sign up",
        template: "Sign up - %s",
    },
};

export default function AuthLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <body className="overflow-hidden">
            {children}
            <AuthLogo />
        </body>
    );
}
