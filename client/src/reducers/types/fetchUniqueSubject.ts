export interface FetchUniqueSubject {
  question: string
  answer:  string
  difficulty_level:  string
  subject_name:  string
  topic:  string
  question_year:  number
}

export interface FetchUniqueSubjectsState {
  FetchUniqueSubject: FetchUniqueSubject | null
  loading: boolean;
  error?: any;
}

export interface FetchUniqueSubjectsState {
  FetchUniqueSubjects: FetchUniqueSubject[] 
  loading: boolean;
  error?: any;
}

