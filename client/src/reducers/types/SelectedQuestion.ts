
export interface SelectedQuestion {
    _id: string
    test_name: string
    questionId: string
    question: string
    answer: string
    difficulty_level: string
    subject_name: string
    topic: string
    question_year: Date
    user_answer: string
  }
  
  export interface ISelectedQuestionState {
    selectedQuestion: SelectedQuestion | null
    loading: boolean;
    error?: any;
  }
  
  export interface ISelectedQuestionsState {
    selectedQuestions: SelectedQuestion[]
    loading: boolean;
    error?: any;
  }