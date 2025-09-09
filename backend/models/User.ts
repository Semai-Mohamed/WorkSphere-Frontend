export default interface IUser {
    // UserID
    readonly id: number;
    // Role
    readonly role: "freelancer" | "client";
    // Infos
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: number;
    // Projects
    projects: Array<number>;
}
