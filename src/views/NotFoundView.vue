<template>
  <div>
    <SiteHeader />
    <div class="container section text-center">
      <h1 class="display-6 text-secondary fw-bold">Page not found</h1>
      <p class="text-muted">The page you’re looking for doesn’t exist or has moved.</p>
      <RouterLink to="/" class="btn btn-primary mt-2">Go home</RouterLink>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
export default { name: 'NotFoundView', components: { SiteHeader, SiteFooter } }
</script>
