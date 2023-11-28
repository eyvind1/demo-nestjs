export class CreatePersonDTO {
    name: string;
    address: string;
    role: string;
    age: number
}

export class UpdatePersonDTO {
    name?: string;
    address?: string;
    role?: string;
    age?: number
}