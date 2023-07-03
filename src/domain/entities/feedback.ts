import { IStudent } from 'domain/entities/student';

export interface IFeedback {
    student: IStudent
    semester: number
    mark: number
    characteristic: string
}
