import Image from "next/image";
import Link from "next/link";

export default function AuthLogo() {
    return (
        <>
            <Link
                href={"/freelancer"}
                className="absolute top-7 left-7 flex items-center gap-3"
            >
                <Image
                    src="/logo.svg"
                    width={36}
                    height={30}
                    alt="Logo"
                    priority
                />

                <span className="font-bold font-primary bg-gradient-to-r from-green to-blue bg-clip-text text-transparent text-xl max-sm:hidden">
                    Work
                    <span className="font-black font-primary text-transparent">
                        Wave
                    </span>
                </span>
            </Link>

            <div className="absolute bottom-7 left-7 text-sm opacity-50">
                © WorkWave 2024
            </div>
        </>
    );
}
