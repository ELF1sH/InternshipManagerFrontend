export interface IVacancy {
  id: number;
  name: string;
  techStack: string;
  minimumQuantity: number;
  maximumQuantity: number;
  company: {
    id: number;
    name: string;
  }
}
