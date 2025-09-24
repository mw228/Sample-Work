<template>
  <div>
    <SiteHeader />
    <HeroSection />
    <StatsSection />
    <FAQAccordion />
    <CTASection />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'
import CTASection from '@/components/CTASection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'SecurityView',
  components: { SiteHeader, HeroSection, StatsSection, FAQAccordion, CTASection, SiteFooter }
}
</script>
