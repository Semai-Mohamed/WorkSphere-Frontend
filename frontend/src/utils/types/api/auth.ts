export interface SignIndto {
 email: string;
 password: string;   
}
enum UserRole {
    ADMIN = "admin",
    FREELANCER = "freelancer",
    CLIENT = "client"
}
export interface SignUpdto{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role : UserRole;
}