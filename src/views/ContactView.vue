<template>
  <div>
    <SiteHeader />
    <div class="container section">
      <h2 class="h3 text-secondary fw-bold">Contact</h2>
      <form class="mt-3" @submit.prevent>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input class="form-control" type="text" />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input class="form-control" type="email" />
        </div>
        <div class="mb-3">
          <label class="form-label">Message</label>
          <textarea class="form-control" rows="4"></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Send</button>
      </form>
    </div>
    <FAQAccordion />
    <CTASection />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'
import CTASection from '@/components/CTASection.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'ContactView',
  components: { SiteHeader, FAQAccordion, CTASection, SiteFooter }
}
</script>
