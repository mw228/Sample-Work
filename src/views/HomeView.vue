<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  <div class = "container-fluid">
    <h2>Home Page</h2>
    <HomeHero/>
    <OurSolutions/>
    <SuccessStories/>
    <CareersCultureVue/>
    <NavientHighlightsVue/>
    <industryInsightsVue/>
    <SocialResponsibility/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import SocialResponsibility from "@/components/home-components/SocialResponsibility.vue";
import HomeHero from "@/components/home-components/homeHero.vue";
import OurSolutions from "@/components/home-components/ourSolutions.vue";
import SuccessStories from "@/components/home-components/successStories.vue";
import CareersCultureVue from "@/components/home-components/careersCulture.vue";
import NavientHighlightsVue from "@/components/home-components/navientHighlights.vue";
import industryInsightsVue from "@/components/home-components/industryInsights.vue";

export default {
  name: 'HomeView',
  components: {
    SocialResponsibility,
    HomeHero,
    OurSolutions,
    SuccessStories,
    CareersCultureVue,
    NavientHighlightsVue,
    industryInsightsVue
}
}
</script>
