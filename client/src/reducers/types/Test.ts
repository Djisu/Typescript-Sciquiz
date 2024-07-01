export interface Test {
    _id: string
    test_name: string
    question: string
    answer: string
    marks: number
    pass_marks: number
    subject_name: string
  }
  
  export interface ITestState {
    test: Test | null
    loading: boolean
    error?: any
  }
  
  export interface ITestsState {
    tests: Test[]
    loading: boolean
    error?: any
  }