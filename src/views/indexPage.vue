<template>
  

  <div class="container-fluid">
    <h2>Home Page</h2>
    <SiteHeader/>
    <HeroSection/>
    <OurSolutions/>
    <SuccessStories/>
    <CareersCultureVue/>
    <NavientHighlightsVue/>
    <industryInsightsVue/>
    <SocialResponsibility/>
    <SiteFooter/>
  </div>
</template>

<script>
// @ is an alias to /src (Vue CLI)

import SocialResponsibility from "@/components/home-components/SocialResponsibility.vue";

import OurSolutions from "@/components/home-components/ourSolutions.vue";
import SuccessStories from "@/components/home-components/successStories.vue";
import CareersCultureVue from "@/components/home-components/careersCulture.vue";
import NavientHighlightsVue from "@/components/home-components/navientHighlights.vue";
import industryInsightsVue from "@/components/home-components/industryInsights.vue";
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "HomeView",
  components: {

    SocialResponsibility,
    OurSolutions,
    SuccessStories,
    CareersCultureVue,
    NavientHighlightsVue,
    industryInsightsVue,
    SiteHeader,
    SiteFooter,
    HeroSection,
  }
}
</script>
