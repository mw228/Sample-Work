<template>
  <div>
    <SiteHeader />
    <SectionNav />
    <SolutionsGrid />
    <FAQAccordion />
    <CTASection />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SectionNav from '@/components/SectionNav.vue'
import SolutionsGrid from '@/components/SolutionsGrid.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'
import CTASection from '@/components/CTASection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'SolutionsView',
  components: { SiteHeader, SectionNav, SolutionsGrid, FAQAccordion, CTASection, SiteFooter }
}
</script>
