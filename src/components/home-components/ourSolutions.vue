<template>
        <section class="row navientHome03">
          <div class = "col-one">
            <div class="col-xs-12 col-sm-12  left-text left-al">
              
              <h4 class="sctn-ctgry">Our Solutions</h4>
              <h2><span>Expertise -</span> Where You Need It</h2>
              <p>We provide technology-enabled education finance and business processing
                solutions that simplify complex programs and help millions of people achieve
                success.
              </p>
            </div>
            <div class = "row">
              <div class="col-xs-12 col-sm-12 bull-left">
                <h3>Education Financing</h3>
                <ul class="bull-blue">
                  <li><p>Student Loans</p></li>
                  <li><p>Student Loan Refinancing</p></li>
                  <li><p>Scholarships</p></li>
                    

                </ul>
                <a type="button" class="btn" target="_blank" href="/learn-more">Learn More</a>

              </div>

              <div class="col-xs-12 col-sm-12 bull-mid">
                <h3>Business Processing</h3>
                <ul class="bull-blue">
                  <li><p>Customer Care</p></li>
                  <li><p>Healthcare</p></li>
                  <li><p>Transportation</p></li>
                  <li><p>Asset Recovery</p></li>
                  <li><p>Payment Processing</p></li>
                </ul>
                <a type="button" class="btn" target="_blank" href="/learn-more">Learn More</a>
              </div>
            </div>
          </div>  
          <div class="col-two">
            <div class="col-xs-12 col-sm-12  right-img">
              <img src="../../img/our-solutions-fpo.png">

            </div>
          </div>


        

        </section>

</template>

<style scoped lang="scss">

.col-one{
  width:60%;
   @media(max-width: 1024px) {
    width:100%;
  }

  
}
.col-two{
  width:40%;
  @media(max-width: 1024px) {
    width:100%;
  }  
  
}
  .left-text{
    margin-top:5%;
    width:100%;
    h2{
      font-size:2.875rem;
      
    }
    &.left-al{
      text-align: left;
      margin-left:15%;
      padding-right: 40%;
      @media (max-width: 767px) {
        margin-left:3%;
        padding-right:11%;
        padding-left:0;
        // margin-right:90%;
      }
    }
    p{
      margin-top:4%;
      font-size:1.125rem;
      line-height:1.44;

    }
    // @media (max-width: 767px) {
    //     margin-left:3%;
        
    //   }
  }
  .right-img{
    width:100%;
    margin-left:5%;
    margin-right:0;
    padding-right:0;
    margin-top:7%;
    
  }

  .bull-left{
    margin-left:15%;
    text-align:left;
    width: 35%;
    h3{
      font-size:1.5625rem;
    }
    p{
      font-size:1.1875rem;
      font-weight:500;
    }
     @media (max-width: 767px) {
        width: 100%;
        margin-left:3%;
      }
  }
  .bull-mid{
    text-align:left;
    // margin-left:10%;
    width:35%;
    h3{
      font-size:1.5625rem;
    }
    p{
      font-size:1.1875rem;
      font-weight:500;
    }
    @media (max-width: 767px) {
        width: 100%;
        margin-left:3%;
        
      }
  }


</style>