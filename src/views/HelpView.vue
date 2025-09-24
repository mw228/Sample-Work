<template>
  <div>
    <SiteHeader />
    <FAQAccordion />
    <ResourceList />
    <CTASection />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'
import ResourceList from '@/components/ResourceList.vue'
import CTASection from '@/components/CTASection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'HelpView',
  components: { SiteHeader, FAQAccordion, ResourceList, CTASection, SiteFooter }
}
</script>
