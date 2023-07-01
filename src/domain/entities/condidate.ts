import { IVacancy } from 'domain/entities/vacancy';
import { ISelection } from 'domain/entities/selection';
import { IStudent } from 'domain/entities/student';

export interface ICandidate {
    student: IStudent
    vacancy: IVacancy
    selection: Omit<ISelection, 'company'>
}
