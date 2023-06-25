import { ISelection } from 'domain/entities/selection';
import { IVacancy } from 'domain/entities/vacancy';

export interface IVacancyRepository {
  getList: () => Promise<IGetVacancyListResponse>;
  createVacancy: (payload: ICreateOrEditVacancyPayload) => Promise<IVacancy>
  editVacancy: (payload: ICreateOrEditVacancyPayload) => Promise<IVacancy>
  deleteVacancy: (payload: number) => Promise<void>

  getSelectionsList:() => Promise<IGetSelectionsListResponse>
}

export type IGetVacancyListResponse = IVacancy[];

export type IGetSelectionsListResponse = ISelection[];

export type ICreateOrEditVacancyPayload = {
  id?: number
  name: string
  techStack: string
  minimumQuantity: number
  maximumQuantity: number
}
