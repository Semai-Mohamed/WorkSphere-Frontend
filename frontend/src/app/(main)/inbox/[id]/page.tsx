import ChatContainer from "@/components/inbox/ChatContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Messaging"
};

export default async function Chat({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return <ChatContainer />;
}