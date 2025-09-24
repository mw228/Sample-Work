<template>
  <div>
    <SiteHeader />
    <HeroSection />
    <SectionNav />
    <SolutionsGrid />
    <StatsSection />
    <ResourceList />
    <CTASection />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import SectionNav from '@/components/SectionNav.vue'
import SolutionsGrid from '@/components/SolutionsGrid.vue'
import StatsSection from '@/components/StatsSection.vue'
import ResourceList from '@/components/ResourceList.vue'
import CTASection from '@/components/CTASection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'HomeView',
  components: {
    SiteHeader,
    HeroSection,
    SectionNav,
    SolutionsGrid,
    StatsSection,
    ResourceList,
    CTASection,
    SiteFooter
  }
}
</script>
