<template>
<section class="row hightLightHome">
  <div class="col-sm-6 SMimgTileLeft ">
    <div>
        <img src="../../img/navientinsight.png">
    </div>
  </div>

  <div class="col-sm-6 LGtextTileRight text-start">
    <div>
      <h2>Optimizing Revenue Cycle Cash Flow and Experiences</h2>
      <p>Just a few years ago, Holy Family Memorial faced numerous revenue cycle issues including low reimbursement and collection rates, staffing challenges, and patient dissatisfaction.<br><br>Since then, through a revenue cycle outsourcing (RCO) partnership with Xtend Healthcare, Holy Family has stabilized its cash flow, dramatically reduced its A/R balance, increased coding quality, streamlined key processes, and nearly eliminated billing complaints.
      </p>
      <a class="btn">Read More</a>
        
     </div>
  </div>
</section>
</template>

<style scoped lang ="scss">
  @import "@/scss/main.scss";
  .hightLightHome{
    
  padding:2em 2em 2em 5em;
  background: rgb(51,186,249);
  background: linear-gradient(90deg, rgba(51,186,249,1) 10%, rgba(0,87,182,1) 100%);
  background-repeat: no-repeat;
  background-size: 100% 75%;
  background-position: bottom;
  @media (max-width: 3000px) {
    background-size: 100% 80%;
  }
    @media (max-width: 2220px) {
      background-size: 100% 78%;
    }
    @media (max-width: 2045px) {
      background-size: 100% 76%;
    }
    @media (max-width: 1750px) {
      background-size: 100% 73%;
    }
    @media (max-width: 1500px) {
      background-size: 100% 70%;
      
    }
    @media only screen and (min-width: 768px) and (max-width: 1048px) {
      padding:2em 2em 2em 1.5em;
      background-size: 100% 80%;
    }
    @media (max-width: 767px) {
      padding:2em 2em 2em 1.5em;
      background-size:100% 36%;
    }
     @media (max-width: 665px) {
     
      background-size:100% 40%;
    }
     @media (max-width: 521px) {
     
      background-size:100% 44%;
    }
     @media (max-width: 470px) {
     
      background-size:100% 47%;
    }
     @media (max-width: 400px) {
     
      background-size:100% 50%;
    }
    @media (max-width: 377px) {
     
      background-size:100% 55%;
    }
    @media (max-width: 300px) {
     
      background-size:100% 59%;
    }
    @media (max-width: 282px) {
     
      background-size:100% 62%;
    }
    @media (max-width: 262px) {
     
      background-size:100% 64%;
    }
    

    .SMimgTileLeft{
      width:20%;
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
    .LGtextTileRight{
      padding-left:4em;
      width:65%;
      padding-bottom:15%;
      @media (max-width: 1500px) {
        width:75%;
      }
      @media (max-width: 1242px) {
        width:75%;
      }
      @media only screen and (min-width: 768px) and (max-width: 1048px) {
        width:62%;
      }
      @media (max-width: 767px) {
        padding-left:0;
        padding-top:5%;
        width:100%;
      }
      h2{
        color: $navient-blue;
        font-weight: 400;
        font-size: 2.75rem;
        line-height: 1.22;
        letter-spacing: 0.96px;
        margin-top: 0.5em;
        margin-bottom: 0.8em;
        @media only screen and (min-width: 768px) and (max-width: 1048px) {
          font-size: 1.211rem;
          margin-bottom: 0.5em;
        }
        @media (max-width: 767px) {
          font-size: 1.211rem;
          padding-bottom:2%;
          // margin-bottom: 1em;
        }
      }
      
    }
  }
  p{
    padding-top: 1%;
    color:$white;
    padding-left:1%;

  }
</style>