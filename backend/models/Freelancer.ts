import IUser from "./User";

export default class Freelancer implements IUser {
    services: Array<number>;
    profit: number;

    constructor(
        // User attributes
        public readonly id: number,
        public readonly role: "freelancer" | "client",
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: number,
        public projects: Array<number>,
        // Freelancer attributes
        services: Array<number>,
        profit: number
    ) {
        this.services = services;
        this.profit = profit;
    }
}
