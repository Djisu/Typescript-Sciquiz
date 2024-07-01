export interface ISubject {
    subject_name: string;
  }
  
  export interface SubjectState {
    subject: ISubject | null;
    loading: boolean;
    error?: any;
  }
  
  export interface SubjectsState {
    subjects: ISubject[];
    loading: boolean;
    error?: any;
  }

  