<script setup>
const stats = [
  { label: "Customers Served", value: "10M+" },
  { label: "Calls / Month",    value: "1.2M" },
  { label: "Uptime",           value: "99.99%" },
  { label: "Coverage",         value: "50 States" },
]
</script>

<template>
  <section class="stats-strip">
    <div class="container stats-inner">
      <div v-for="s in stats" :key="s.label" class="stat">
        <div class="stat-value">{{ s.value }}</div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </div>
  </section>
</template>
