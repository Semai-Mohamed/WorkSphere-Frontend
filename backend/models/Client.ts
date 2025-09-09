import IUser from "./User";

export default class Client implements IUser {
    needs: Array<number>;
    spendings: number;

    constructor(
        // User attributes
        public readonly id: number,
        public readonly role: "freelancer" | "client",
        public firstName: string,
        public lastName: string,
        public email: string,
        public phoneNumber: number,
        public projects: Array<number>,
        // Client attributes
        needs: Array<number>,
        spendings: number
    ) {
        this.needs = needs;
        this.spendings = spendings;
    }
}
