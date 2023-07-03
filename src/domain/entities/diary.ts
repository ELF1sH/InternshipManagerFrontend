export interface IDiary {
  id: number;
  filename: string;
  uploadDate: string;
  studentId: number;
  review?: string
  status?: IDiaryStatus
}

export enum IDiaryStatus{
  PENDING='PENDING',
  REJECTED='REJECTED',
  ACCEPTED='ACCEPTED'
}
