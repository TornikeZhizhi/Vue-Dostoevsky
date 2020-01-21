<template>
  <div class="container-fluid contact_fluid page-section">
    <!--Contact Popup-->
    <div class="contact_popup_fluid" id="pop1">
      <!--<div class="succes_box">-->
      <!--    <span>თქვენი მეილი წარმატებით გაიგზავნა</span>-->
      <!--</div>-->

      <!--<div class="decline_box">-->
      <!--       <span>გთხოვს შეავსოყ ყველა სავალდებულო ველი</span>-->

      <!--</div>-->
    </div>

    <div id="footer_pegion">
      <img src="../assets/images/Asset 2deco.png" />
    </div>

    <div class="container cont_cont">
      <h2>კონტაქტი</h2>
      <div class="row">
        <div
          class="col-md-6 wow fadeInLeft"
          data-wow-offset="300"
          style="visibility: visible; animation-name: fadeInLeft;"
        >
          <div class="form_box">
            <form class="forms" action method="post">
              <input type="text" name="name" placeholder="სახელი..." id="name" />
              <input type="email" name="email" placeholder="მაილი..." id="email" />
              <input type="text" name="subject" placeholder="სათაური..." id="subject" />
              <textarea placeholder="დაწერე წერილი..." id="message"></textarea>
              <input type="submit" value="გაგზავნა" id="sendm" />
            </form>
          </div>
        </div>

        <div
          class="col-md-6 wow fadeInRight"
          data-wow-offset="300"
          style="visibility: visible; animation-name: fadeInRight;"
        >
          <div class="info_right">
            <div class="contact_info_box">
              <p></p>
              <p>ნებისმიერი შეკითხვის შემთხვევაში, დაგვიკავშირდით ჩვენს Facebook გვერდზე ან მოგვწერეთ საიტზე საკონტაქტო განაცხადის შევსების შემთხვევაში. ჩვენ შევეცდებით ამომწურავი პასუხის გაცემას უმოკლეს დროში.&nbsp;</p>

              <p></p>
            </div>

            <div class="fa_icons">
              <span>
                <i class="fab fa-facebook"></i>www.facebook.com/DostoevskyGeo
              </span>
              <span>
                <i class="fas fa-envelope"></i>info@dostoevsky.ge
              </span>
              <span>
                <i class="fas fa-map-marker"></i>თბილისი, საქართველო
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>