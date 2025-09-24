<script setup>
const items = [
  { title: "Education Financing", desc: "Scholarships, transparent loan options, refinancing flows.", to: "/solutions#education" },
  { title: "Client Care",         desc: "Support with secure, compliant processes.",                 to: "/solutions#care" },
  { title: "Technology",          desc: "Reliable platform with privacy and integrations.",          to: "/solutions#tech" },
  { title: "Analytics",           desc: "Dashboards, reporting, & insights.",                        to: "/solutions#analytics" },
  { title: "Compliance",          desc: "Controls & auditing for regulations.",                      to: "/solutions#compliance" },
  { title: "Partnerships",        desc: "Ecosystem support with vetted providers.",                  to: "/solutions#partners" },
]
</script>

<template>
  <section class="our-solutions">
    <div class="container">
      <h2 class="section-title">Solutions</h2>
      <div class="grid">
        <article v-for="card in items" :key="card.title" class="sol-card card">
          <img src="@/img/placeholder-card.svg" class="card-img-top sol-art" alt="" />
          <div class="card-body">
            <h3 class="card-title">{{ card.title }}</h3>
            <p class="card-text">{{ card.desc }}</p>
            <RouterLink :to="card.to" class="card-link">Explore</RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
