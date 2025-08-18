import Navbar from "@/components/Navbar/Navbar";

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <body>
            <Navbar />
            {children}
        </body>
    );
}