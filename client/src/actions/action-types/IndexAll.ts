// actions/index.ts
//import { AuthAction } from './auth';
// import other action types here as needed
import { AuthAction } from "./auth";
import { AlertAction } from "./alert";
import { CountedQuestionAction } from "./countedQuestion";
import { DeleteCandidateAction } from "./deleteCandidateTests";
import { DifficultyLevelAction } from "./difficultyLevel";
import { EachTopicAction } from "./eachTopic";
import { FindQuestionAction } from "./findQuestion";
import { ProfileAction } from "./getProfile";
import { OnePerformanceAction } from "./onePerformance";
import { OverallScoreQuestionAction } from "./overallScoreQuestion";
import { PostQuestionAction } from "./postQuestion";
import { PutTestAction } from "./putTest";
import { QuestionAction } from "./question";
import { ScoreQuestionAction } from "./scoreQuestion";
import { ScoreTestAction } from "./scoreTest";
import { SelectedQuestionAction } from "./selectedQuestion";
import { SelectedTestAction } from "./selectedTest";
import { StuTestsAction } from "./stutests";
import { SubjectAction } from "./subject";
import { TestsAction } from "./tests";
import { TestsUnmarkedAction } from "./testsUnmarked";
import { TopicAction } from "./topic";
import { TopicCountAction } from "./topicCount";
import { UnicDifficultyLevelAction } from "./unicdifficultylevel";
import { UnicSubjectAction } from "./unicSubject";
import { UnicTopicAction } from "./unictopic";
import { UserDetailsAction } from "./userDetails";
import { UserListAction } from "./userList";
import { UserPerformanceAction } from "./userPerformance";

// Combine all action types into a single type
export type AppAction = AlertAction |
    AuthAction |
    CountedQuestionAction |
    DeleteCandidateAction |
    DifficultyLevelAction |
    EachTopicAction |
    FindQuestionAction |
    ProfileAction |
    OnePerformanceAction |
    OverallScoreQuestionAction |
    PostQuestionAction |
    PutTestAction |
    QuestionAction |
    ScoreQuestionAction |
    ScoreTestAction |
    SelectedQuestionAction |
    SelectedTestAction |
    StuTestsAction |
    SubjectAction |
    TestsAction |
    TestsUnmarkedAction |
    TopicAction |
    TopicCountAction |
    UnicDifficultyLevelAction |
    UnicSubjectAction |
    UnicTopicAction |
    UserDetailsAction |
    UserListAction |
    UserPerformanceAction 