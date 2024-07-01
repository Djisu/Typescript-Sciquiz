  export interface SelectedTest {
    test_name: string,
    question: string,
    answer: string,
    difficulty_level: string,
    subject_name: string,
    topic: string,
    answer_flag: string,
    questionId: string
  }
  
  export interface SelectedTestState {
    selectedTest: SelectedTest | null
    loading: boolean
    error?: any
  }
  
  export interface SelectedTestsState {
    selectedTests: SelectedTest[]
    loading: boolean
    error?: any
  }