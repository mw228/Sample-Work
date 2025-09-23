<template>
 
  <section class="row home-careers-culture">
    <div class="col-xs-12 col-sm-12 col-md-4 text-start left-text ">
      <div>
        <h4 class=" text-start sctn-ctgry ">Careers & Culture</h4>
        <h2><span>Let’s Change</span> How Business is Delivered</h2>
      
      
        <p>Join our team and experience a performance-driven culture that delivers exceptional results.</p>

      
        <a type="button" class="btn" target="_blank" href="/contact-us">Join Our Team</a>
      </div>
    </div>

    <div class="col-xs-12 col-sm-12 col-md-8 right-img">
      <div>
        <img src="../../img/letschange.png">

      </div>
    </div>
  </section>
  
</template>
<style scoped lang = 'scss'>
@import "@/scss/main.scss";
  .home-careers-culture{
  background: linear-gradient(135deg, rgba(208,208,208,1) 0%, rgba(251,251,251,0.49205619747899154) 67%);
  z-index:-1;

  // }
  &::before{
    content: '';
    position: absolute;
    // top: 50%;
    // left: 24%;
    // width: 100%;
    // height: 100%;
    // transform: translate(-50%, -50%) rotate(4deg) skew(360deg);
    
    width: 0; height: 0;
    border-left: 100vw solid transparent;
    border-right: 0px solid transparent;
    border-top: 12vw solid $white;
    z-index:0;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      border-top:25vw solid $white;
    }
  }


}

</style>