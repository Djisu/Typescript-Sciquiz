export interface IUserPerformance {
    _id: string
    userId: string
    test_name: string;
    score: number;
    date: Date;
    email: string;
    test_details: string;
  }
  
  export interface UserPerformanceState {
    userPerformance: IUserPerformance | null;
    loading: boolean;
    error: any;
  }
  
  export interface UserPerformancesState {
    userPerformances: IUserPerformance[];
    loading: boolean;
    error: any;
  }