interface BloodType {
    label : string;
    value : string;
}

export interface Person {
    id ?: string;
    name ?: string;
    gender?: string;
    age?: number;
    bloodType?: BloodType;
}