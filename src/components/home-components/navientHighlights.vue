<template>
  
          <div class ="bground">
            <section class="row hightLightHome">
              <div class="col-sm-6 imgTileLeft">
                <div>
                  <img src="../../img/navientinsight.png">
                </div>
              </div>
    
              <div class="col-sm-6 textTileRight text-start">
                <div>
                  <h2>Navient Highlights</h2>
                  <h3>Navient Earns High Marks for LGBTQ+ Equality in the Workplace</h3>
                  <a class="btn">Read Story</a>
                  <p>View All</p>
                </div>
              </div>
            </section>
          </div>
  
</template>

<style scoped lang = "scss">
@import "@/scss/main.scss";
.bground{
  background: linear-gradient(135deg, rgba(208,208,208,1) 0%, rgba(251,251,251,0.49205619747899154) 67%);
}
  .hightLightHome{
    
  padding:2em 2em 2em 5em;
  background: rgb(51,186,249);
  background: linear-gradient(90deg, rgba(51,186,249,1) 10%, rgba(0,87,182,1) 100%);
  background-repeat: no-repeat;
  background-size: 100% 81%;
  background-position: bottom;
    @media (max-width: 2220px) {
      background-size: 100% 78%;
    }
    @media (max-width: 2000px) {
      background-size: 100% 76%;
    }
    @media (max-width: 1750px) {
      background-size: 100% 73%;
    }
    @media (max-width: 1242px) {
      background-size: 100% 73%;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding:2em 2em 2em 1.5em;
      background-size: 100% 75%;
    }
    @media (max-width: 767px) {
      padding:2em 2em 2em 1.5em;
      background-size:100% 30%;
    }
     @media (max-width: 605px) {
     
      background-size:100% 34%;
    }
     @media (max-width: 515px) {
     
      background-size:100% 38%;
    }
     @media (max-width: 440px) {
     
      background-size:100% 42%;
    }
     @media (max-width: 329px) {
     
      background-size:100% 44%;
    }
    .imgTileLeft{
      width:40%;
       @media (max-width: 1047px) {
        width:38%;
      }
      // &::after{
      //   content: "";
      //   // background: -webkit-linear-gradient(left, #00aeef 0%, #00aeef 12%, #00aeef 47%, transparent 100%);
      //   display: block;
      //   height: 5px;
      //   width: 96.7%;
      //   position: absolute;
      //   bottom: 0;
      //   @media (max-width: 2060px) {
      //     width: 96.2%;
      //   }
      // }
      @media (max-width: 767px) {
        width:100%;
        padding:0;
      }
      img{
        width:100%;
      }
    }
    .textTileRight{
      padding-left:4em;
      @media (max-width: 1242px) {
        width:60%;
      }
      @media only screen and (min-width: 768px) and (max-width: 1048px) {
        width:62%;
      }
      @media (max-width: 767px) {
        padding-left:0;
        padding-top:1em;
      }
      h2{
        color: $navient-blue;
        font-weight: 400;
        font-size: 60px;
        line-height: 1.22;
        letter-spacing: 0.96px;
        margin-top: 0.5em;
        margin-bottom: 0.8em;
        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          font-size: 1.211rem;
          margin-bottom: 0.5em;
        }
        @media (max-width: 767px) {
          font-size: 1.211rem;
          margin-bottom: 0.5em;
        }
      }
      h3{
        color: $white;
        font-size: 45px;
        font-weight: 400;
        line-height: 1.22;
        letter-spacing: 0.96px;
        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          font-size: 1.211rem;
        }
        @media (max-width: 767px) {
          padding-top:5%;
          font-size: 1.211rem;
        }
      }
      
    }
  }
  p{
    padding-top: 3%;
    color:$white;
    padding-left:1%;

  }



</style>