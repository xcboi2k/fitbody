import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/types/navigation';
import HomeScreen from '../screens/main/HomeScreen';
import SearchScreen from '../screens/main/SearchScreen';
import NotificationsScreen from '../screens/main/NotificationsScreen';
import ProfileMenuScreen from '../screens/main/profile/ProfileMenuScreen';
import ProfileScreen from '../screens/main/profile/ProfileScreen';
import FavoritesScreen from '../screens/main/profile/FavoritesScreen';
import SettingsScreen from '../screens/main/profile/SettingsScreen';
import PasswordSettingsScreen from '../screens/main/profile/PasswordSettingsScreen';
import HelpScreen from '../screens/main/profile/HelpScreen';
import SupportChatScreen from '../screens/main/profile/SupportChatScreen';
import WorkoutScreen from '../screens/main/workout/WorkoutScreen';
import BeginnerScreen from '../screens/main/workout/BeginnerScreen';
import BeginnerRoutineScreen from '../screens/main/workout/BeginnerRoutineScreen';
import IntermediateScreen from '../screens/main/workout/IntermediateScreen';
import IntermediateRoutineScreen from '../screens/main/workout/IntermediateRoutineScreen';
import AdvancedScreen from '../screens/main/workout/AdvancedScreen';
import AdvancedRoutineScreen from '../screens/main/workout/AdvancedRoutineScreen';
import CreateYourRoutineScreen from '../screens/main/workout/CreateYourRoutineScreen';
import YourRoutineScreen from '../screens/main/workout/YourRoutineScreen';
import YourRoutineDetailsScreen from '../screens/main/workout/YourRoutineDetailsScreen';
import ProgressTrackingScreen from '../screens/main/ProgressTrackingScreen';
import MealPlansMainScreen from '../screens/main/nutrition/meal-plans/MealPlansMainScreen';
import MealPlansQuestionnaireAScreen from '../screens/main/nutrition/meal-plans/MealPlansQuestionnaireAScreen';
import MealPlansQuestionnaireBScreen from '../screens/main/nutrition/meal-plans/MealPlansQuestionnaireBScreen';
import MealPlansLoadingScreen from '../screens/main/nutrition/meal-plans/MealPlansLoadingScreen';
import MealPlansResultsScreen from '../screens/main/nutrition/meal-plans/MealPlansResultsScreen';
import MealPlansRecipeScreen from '../screens/main/nutrition/meal-plans/MealPlansRecipeScreen';
import MealIdeasMainScreen from '../screens/main/nutrition/meal-ideas/MealIdeasMainScreen';
import MealIdeasListScreen from '../screens/main/nutrition/meal-ideas/MealIdeasListScreen';
import MealIdeasDetailsScreen from '../screens/main/nutrition/meal-ideas/MealIdeasDetailsScreen';
import NutritionScreen from '../screens/main/nutrition/NutritionScreen';
import CommunityMainScreen from '../screens/main/community/CommunityMainScreen';
import CommunityDiscussionForumScreen from '../screens/main/community/CommunityDiscussionForumScreen';
import ChallengesMainScreen from '../screens/main/community/challenges/ChallengesMainScreen';
import WeeklyChallengesScreen from '../screens/main/community/challenges/WeeklyChallengesScreen';
import WeeklyChallengeDetailScreen from '../screens/main/community/challenges/WeeklyChallengeDetailScreen';
import WeeklyChallengeSuccessScreen from '../screens/main/community/challenges/WeeklyChallengeSuccessScreen';
import RecommendationsMainScreen from '../screens/main/recommendations/RecommendationsMainScreen';
import RecommendationDetailScreen from '../screens/main/recommendations/RecommendationDetailScreen';
import ResourcesMainScreen from '../screens/main/resources/ResourcesMainScreen';
import ResourcesDetailsScreen from '../screens/main/resources/ResourcesDetailsScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const DashboardNavigator = () => {
    return (
        <Stack.Navigator
                screenOptions={{
                    headerShown: false, animation: 'none'
                }}
                initialRouteName='HomeMain'
            >

                <Stack.Screen name="HomeMain" component={HomeScreen}/>
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Notifications" component={NotificationsScreen}/>

                <Stack.Screen name="ProfileMenu" component={ProfileMenuScreen}/>
                <Stack.Screen name="Profile" component={ProfileScreen}/>
                <Stack.Screen name="Favorites" component={FavoritesScreen}/>

                <Stack.Screen name="Settings" component={SettingsScreen}/>
                <Stack.Screen name="NotificationSettings" component={NotificationsScreen}/>
                <Stack.Screen name="PasswordSettings" component={PasswordSettingsScreen}/>
                <Stack.Screen name="Help" component={HelpScreen}/>
                <Stack.Screen name="SupportChat" component={SupportChatScreen}/>

                <Stack.Screen name="Workout" component={WorkoutScreen}/>
                <Stack.Screen name="WorkoutBeginnerMain" component={BeginnerScreen}/>
                <Stack.Screen name="WorkoutBeginnerRoutine" component={BeginnerRoutineScreen}/>
                <Stack.Screen name="WorkoutIntermediateMain" component={IntermediateScreen}/>
                <Stack.Screen name="WorkoutIntermediateRoutine" component={IntermediateRoutineScreen}/>
                <Stack.Screen name="WorkoutAdvancedMain" component={AdvancedScreen}/>
                <Stack.Screen name="WorkoutAdvancedRoutine" component={AdvancedRoutineScreen}/>
                <Stack.Screen name="WorkoutCreateYourRoutine" component={CreateYourRoutineScreen}/>
                <Stack.Screen name="WorkoutYourRoutine" component={YourRoutineScreen}/>
                <Stack.Screen name="WorkoutYourRoutineDetails" component={YourRoutineDetailsScreen}/>

                <Stack.Screen name="ProgressTracking" component={ProgressTrackingScreen}/>

                <Stack.Screen name="Nutrition" component={NutritionScreen}/>
                <Stack.Screen name="MealPlansMain" component={MealPlansMainScreen}/>
                <Stack.Screen name="MealPlansQuestionnaireA" component={MealPlansQuestionnaireAScreen}/>
                <Stack.Screen name="MealPlansQuestionnaireB" component={MealPlansQuestionnaireBScreen}/>
                <Stack.Screen name="MealPlansLoading" component={MealPlansLoadingScreen}/>
                <Stack.Screen name="MealPlansResults" component={MealPlansResultsScreen}/>
                <Stack.Screen name="MealPlansRecipe" component={MealPlansRecipeScreen}/>
                <Stack.Screen name="MealIdeasMain" component={MealIdeasMainScreen}/>
                <Stack.Screen name="MealIdeasList" component={MealIdeasListScreen}/>
                <Stack.Screen name="MealIdeasDetails" component={MealIdeasDetailsScreen}/>

                <Stack.Screen name="Community" component={CommunityMainScreen}/>
                <Stack.Screen name="CommunityDiscussion" component={CommunityDiscussionForumScreen}/>
                <Stack.Screen name="ChallengesMain" component={ChallengesMainScreen}/>
                <Stack.Screen name="WeeklyChallenges" component={WeeklyChallengesScreen}/>
                <Stack.Screen name="WeeklyChallengeDetails" component={WeeklyChallengeDetailScreen}/>
                <Stack.Screen name="WeeklyChallengeSuccess" component={WeeklyChallengeSuccessScreen}/>

                <Stack.Screen name="RecommendationsMain" component={RecommendationsMainScreen}/>
                <Stack.Screen name="RecommendationsDetails" component={RecommendationDetailScreen}/>

                <Stack.Screen name="ResourcesMain" component={ResourcesMainScreen}/>
                <Stack.Screen name="ResourcesDetails" component={ResourcesDetailsScreen}/>
            </Stack.Navigator>
    )
}

export default DashboardNavigator