import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
    //onboarding
    Onboarding1: undefined;
    Onboarding2: undefined;
    Onboarding3: undefined;
    Onboarding4: undefined;

    //auth
    Login: undefined;
    SignUp: undefined;
    SetPassword: undefined;
    SetFingerprint: undefined;
    ForgotPassword: undefined;
    
    //setup
    SetUpMain: undefined;
    SetGender: undefined;
    SetAge: undefined;
    SetWeight: undefined;
    SetHeight: undefined;
    SetGoal: undefined;
    SetActivityLevel: undefined;
    SetProfile: undefined;

    //dashboard
    HomeMain: undefined;
    Search: undefined;
    Notifications: undefined;

    ProfileMenu: undefined;
    Profile: undefined;
    Favorites: undefined;
    Settings: undefined;
    NotificationSettings: undefined;
    PasswordSettings: undefined;
    Help: undefined;
    SupportChat: undefined;

    Workout: undefined;
    WorkoutBeginnerMain: undefined;
    WorkoutBeginnerRoutine: undefined;
    WorkoutIntermediateMain: undefined;
    WorkoutIntermediateRoutine: undefined;
    WorkoutAdvancedMain: undefined;
    WorkoutAdvancedRoutine: undefined;
    WorkoutCreateYourRoutine: undefined;
    WorkoutYourRoutine: undefined;
    WorkoutYourRoutineDetails: undefined;
    
    ProgressTracking: undefined;

    Nutrition: undefined;
    MealPlansMain: undefined;
    MealPlansQuestionnaireA: undefined;
    MealPlansQuestionnaireB: undefined;
    MealPlansLoading: undefined;
    MealPlansResults: undefined;
    MealPlansRecipe: undefined;
    MealIdeasMain: undefined;
    MealIdeasList: undefined;
    MealIdeasDetails: undefined;

    Community: undefined;
    CommunityDiscussion: undefined;
    ChallengesMain: undefined;
    WeeklyChallenges: undefined;
    WeeklyChallengeDetails: undefined;
    WeeklyChallengeSuccess: undefined;

    RecommendationsMain: undefined;
    RecommendationsDetails: undefined;

    ResourcesMain: undefined;
    ResourcesDetails: undefined;

    //resources tab
    ResourcesTabMain: undefined;
    ResourcesTabWorkoutVideosList: undefined;
    ResourcesTabWorkoutVideosDetails: undefined;
    ResourcesTabArticlesDetails: undefined;

    //favorites tab
    FavoritesTabMain: undefined;

    //help tab
    HelpTabMain: undefined;
    HelpTabDetails: undefined;
    HelpTabSupport: undefined;

    //tabs
    HomeTab: undefined;
    ResourcesTab: undefined;
    FavoritesTab: undefined;
    HelpTab: undefined;

    
};

export type NestedParamList = {
    //nested navigators
    AuthenticatedScreens: NavigatorScreenParams<RootStackParamList>;
    Auth: NavigatorScreenParams<RootStackParamList>;
    Onboarding: NavigatorScreenParams<RootStackParamList>;
    SetUp: NavigatorScreenParams<RootStackParamList>;
}