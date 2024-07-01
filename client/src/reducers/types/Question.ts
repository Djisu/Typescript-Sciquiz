export interface IQuestion {
    _id: string
    question: string
    answer:  string
    difficulty_level:  string
    subject_name:  string
    topic:  string
    question_year:  number
  }
  
  export interface IQuestionState {
    question: IQuestion | null
    loading: boolean;
    error?: any;
  }
  
  export interface IQuestionsState {
    questions: IQuestion[] 
    loading: boolean;
    error?: any;
  }