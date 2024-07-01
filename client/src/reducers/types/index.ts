import { FetchUniqueSubjectsState } from "../fetchUniqueSubjects.ts";
import { TopicsCountState } from "../topicCount.ts";
import { AuthState } from "./Auth.ts";
import { DifficultyLevelState } from "./DifficultyLevel.ts";
import { IEachTopicScoreState } from "./EachTopicScore.ts";
import { IOtherQuestionState} from "./OtherQuestion.ts";
import { OverAllScoreCandidateItemState } from "./OverAllScoreCandidateItem.ts";
import { IProfileState, IProfilesState } from "./Profile.ts";
import { IQuestionState} from "./Question.ts";
import { ScoreCandidateState } from "./ScoreCandidate.ts";
import { ISelectedQuestionsState } from "./SelectedQuestion.ts";
import { SelectedTestState } from "./SelectedTest.ts";
import { SubjectState} from "./Subject.ts";
import { ITestsState } from "./Test.ts";
import { TestsUnmarkedState } from "./TestUnmarked.ts";
import { TopicCountState } from "./TopicCount.ts";
import { TopicsState } from "./TopicState.ts";
import { UserPerformanceState } from "./UserPerformance.ts";
import { FetchUniqueSubject } from "./fetchUniqueSubject.ts";

export type RootState = {
    alert: { msg: string, alertType: string, id: string };
    auth: AuthState;

    profile: IProfileState;
    profiles: IProfilesState;
  
    difficultyLevels: DifficultyLevelState;
  
    question: IQuestionState;

    tests: ITestsState;
  
    subject: SubjectState;

    userPerformance: UserPerformanceState;

    topics: TopicsState;

    otherQuestion: IOtherQuestionState;

    fetchUniqueTopics: {
        fetchUniqueTopics: string[];
        loading: boolean;
        error: null;
    };
    fetchUniqueDifficultyLevels: {
        fetchUniqueDifficultyLevels: string[];
        loading: boolean;
        error: null;
    };

    fetchUniqueSubjects: FetchUniqueSubject[];

    selectedQuestions: ISelectedQuestionsState;
                                     
    userAnsweredQuestions: {
      userAnsweredQuestions: number;
      loading: boolean;
    };

    onePerformance: {
        onePerformance: string | number[];
        loading: boolean;
    };

    postAnswer: {
        postAnswer: string;
        loading: boolean;
    };

    scoreCandidate: ScoreCandidateState;

    overAllScoreCandidate: OverAllScoreCandidateItemState;

    deleteCandidateTests: {
        deleteCandidateTests: string;
    };
    userUpdate: {
        userUpdate: boolean;
        loading: boolean;
    };
    
    eachTopicScore: IEachTopicScoreState;
  
    selectedTest: SelectedTestState;

    testsUnmarked: TestsUnmarkedState;

    topicCount: TopicsCountState;
}
