<script setup>
const links = [
  { label: "Solutions", to: "/solutions" },
  { label: "Resources", to: "/resources" },
  { label: "About",     to: "/about" },
  { label: "Contact",   to: "/contact" },
  { label: "Blog",      to: "/blog" },
  { label: "Help",      to: "/help" }
]
</script>

<template>
  <nav class="section-nav sticky-top">
    <div class="container">
      <ul class="pills">
        <li v-for="link in links" :key="link.to">
          <RouterLink class="pill" :to="link.to" active-class="active">{{ link.label }}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
