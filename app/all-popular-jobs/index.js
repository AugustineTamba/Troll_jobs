import {View, ScrollView, SafeAreaView } from 'react-native'
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../../components'
import AllPJobs from '../../components/home/popular/AllPJobs';

const AllPopularJobs = () => {
    const router = useRouter()
    const [ searchTerm, setSearchTerm ] = useState("")
  
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.dark },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            ),
            headerTitle: "",
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View 
            style={{ flex: 1, padding: SIZES.medium }}
          >
            <Welcome 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handleClick={() => {
                if(searchTerm) {
                  router.push(`/search/${searchTerm}`);
                }
              }}
            />
            <AllPJobs />

          </View>
        </ScrollView>

      </SafeAreaView>
    );
  };

export default AllPopularJobs;