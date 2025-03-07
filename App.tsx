import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"

import WorkoutScreen from './components/screens/main/workout/WorkoutScreen';
import BeginnerScreen from './components/screens/main/workout/BeginnerScreen';
import BeginnerRoutineScreen from './components/screens/main/workout/BeginnerRoutineScreen';
import IntermediateScreen from './components/screens/main/workout/IntermediateScreen';
import IntermediateRoutineScreen from './components/screens/main/workout/IntermediateRoutineScreen';
import AdvancedScreen from './components/screens/main/workout/AdvancedScreen';
import AdvancedRoutineScreen from './components/screens/main/workout/AdvancedRoutineScreen';
import CreateYourRoutineScreen from './components/screens/main/workout/CreateYourRoutineScreen';
import YourRoutineScreen from './components/screens/main/workout/YourRoutineScreen';
import YourRoutineDetailsScreen from './components/screens/main/workout/YourRoutineDetailsScreen';
import ProgressTrackingScreen from './components/screens/main/ProgressTrackingScreen';
import NutritionScreen from './components/screens/main/nutrition/NutritionScreen';
import MealPlansMainScreen from './components/screens/main/nutrition/meal-plans/MealPlansMainScreen';
import MealPlansQuestionnaireAScreen from './components/screens/main/nutrition/meal-plans/MealPlansQuestionnaireAScreen';
import MealPlansQuestionnaireBScreen from './components/screens/main/nutrition/meal-plans/MealPlansQuestionnaireBScreen';
import MealPlansResultsScreen from './components/screens/main/nutrition/meal-plans/MealPlansResultsScreen';
import MealPlansLoadingScreen from './components/screens/main/nutrition/meal-plans/MealPlansLoadingScreen';
import MealPlansRecipeScreen from './components/screens/main/nutrition/meal-plans/MealPlansRecipeScreen';
import MealIdeasMainScreen from './components/screens/main/nutrition/meal-ideas/MealIdeasMainScreen';
import MealIdeasScreen from './components/screens/main/nutrition/meal-ideas/MealIdeasScreen';
import MealIdeasDetailsScreen from './components/screens/main/nutrition/meal-ideas/MealIdeasDetailsScreen';
import CommunityMainScreen from './components/screens/main/community/CommunityMainScreen';
import CommunityDiscussionForumScreen from './components/screens/main/community/CommunityDiscussionForumScreen';
import ChallengesMainScreen from './components/screens/main/community/challenges/ChallengesMainScreen';
import WeeklyChallengesScreen from './components/screens/main/community/challenges/WeeklyChallengesScreen';

export default function App() {
  return (
    <>
      <StatusBar/>
      {/* <WorkoutScreen /> */}
      {/* <BeginnerScreen /> */}
      {/* <BeginnerRoutineScreen /> */}
      {/* <IntermediateScreen /> */}
      {/* <IntermediateRoutineScreen /> */}
      {/* <AdvancedScreen /> */}
      {/* <AdvancedRoutineScreen /> */}
      {/* <CreateYourRoutineScreen /> */}
      {/* <YourRoutineScreen /> */}
      {/* <YourRoutineDetailsScreen /> */}
      {/* <ProgressTrackingScreen /> */}
      {/* <NutritionScreen /> */}
      {/* <MealPlansMainScreen /> */}
      {/* <MealPlansQuestionnaireAScreen /> */}
      {/* <MealPlansQuestionnaireBScreen /> */}
      {/* <MealPlansLoadingScreen /> */}
      {/* <MealPlansResultsScreen /> */}
      {/* <MealPlansRecipeScreen /> */}
      {/* <MealIdeasMainScreen /> */}
      {/* <MealIdeasScreen /> */}
      {/* <MealIdeasDetailsScreen /> */}
      {/* <CommunityMainScreen /> */}
      {/* <CommunityDiscussionForumScreen /> */}
      {/* <ChallengesMainScreen /> */}
      <WeeklyChallengesScreen />
    </>
  );
}

