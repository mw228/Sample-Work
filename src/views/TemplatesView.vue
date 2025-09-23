<template>
  <div class="templates">
    <h1>Templates Page</h1>
  </div>
  <div class ="container-fluid">
    <AboutSuccessStories/>
    <OurAwards/>
  </div>




</template>
<script>
// @ is an alias to /src

import AboutSuccessStories from '@/components/page-templates/aboutSuccessStories.vue'
import OurAwards from '@/components/about-components/ourAwards.vue'

export default {
  name: 'TemplatesView',
  components: {
    AboutSuccessStories,
    OurAwards
}
}
</script>