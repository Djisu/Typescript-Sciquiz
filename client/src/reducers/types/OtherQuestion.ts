export interface IOtherQuestion {
    question: string
    answer:  string
    difficulty_level:  string
    subject_name:  string
    topic:  string
    question_year:  number
  }
  
  export interface IOtherQuestionState {
    question: IOtherQuestion | null
    loading: boolean;
    error?: any;
  }
  
  export interface IOtherQuestionsState {
    questions: IOtherQuestion[] 
    loading: boolean;
    error?: any;
  }