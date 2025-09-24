<script setup>
const items = [
  { title: "Accessible forms",  summary: "Patterns for labels, errors, and focus states.", to: "/blog/accessible-forms", tag: "Design",   date: "2025-06-01" },
  { title: "Security overview", summary: "Controls & data handling practices.",            to: "/security",              tag: "Security", date: "2025-05-18" },
  { title: "Repayment options", summary: "Plain-language overview for borrowers.",         to: "/resources/repayment",   tag: "Guides",   date: "2025-04-11" }
]
</script>

<template>
  <section class="resources section">
    <div class="container">
      <h2 class="section-title">Resources</h2>
      <ul class="resource-list">
        <li v-for="r in items" :key="r.to" class="resource-item">
          <RouterLink :to="r.to" class="resource-link">
            <div class="resource-top">
              <h3 class="resource-title">{{ r.title }}</h3>
              <span v-if="r.date" class="resource-date">{{ r.date }}</span>
            </div>
            <p class="resource-summary">{{ r.summary }}</p>
            <span v-if="r.tag" class="resource-tag">{{ r.tag }}</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>
