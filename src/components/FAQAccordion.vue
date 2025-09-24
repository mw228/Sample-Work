<script setup>
const faqs = [
  { q: "What services do you offer?", a: "We provide financing solutions, technology, analytics, and compliant client care." },
  { q: "How do I get support?",       a: "Visit the Help Center or contact our support team for assistance." },
  { q: "Is my data secure?",          a: "Yes. We follow industry standards with privacy and compliance at the core." },
  { q: "Do you integrate with other platforms?", a: "We support common integrations and explore custom options for enterprise needs." }
]
</script>

<template>
  <section class="faq section">
    <div class="container">
      <h2 class="section-title">FAQs</h2>

      <div class="accordion" id="faqAccordion">
        <div v-for="(item, idx) in faqs" :key="idx" class="accordion-item faq-item">
          <h2 class="accordion-header" :id="`faq-heading-${idx}`">
            <button
              class="accordion-button faq-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#faq-collapse-${idx}`"
              aria-expanded="false"
              :aria-controls="`faq-collapse-${idx}`"
            >{{ item.q }}</button>
          </h2>
          <div :id="`faq-collapse-${idx}`" class="accordion-collapse collapse"
               :aria-labelledby="`faq-heading-${idx}`" data-bs-parent="#faqAccordion">
            <div class="accordion-body faq-body">{{ item.a }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
