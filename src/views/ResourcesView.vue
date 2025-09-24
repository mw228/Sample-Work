<template>
  <div class="container-fluid">
    <h2>Resources</h2>
    <SiteHeader/>
    <!-- Swap in your resources list component here if you have one -->
    <SiteFooter/>
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "ResourcesView",
  components: { SiteHeader, SiteFooter }
}
</script>