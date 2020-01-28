<template>
  <div class="container-fluid section3">
    <div class="container bio_container_parent text-center">
      <h2 class="bio_tittle">
        <a href="biography/">{{title}}</a>
      </h2>

      <div class="row">
        <div class="col-md-12 bio_coll">
          <div class="row">
            <div class="col-md-6 bio_img_col d-flex justify-content-center">
              <div
                class="bio_img wow fadeInLeft"
                data-wow-offset="300"
                style="visibility: visible; animation-name: fadeInLeft;"
              >
                <img src="../../assets/images/3fe46f4d3fe5c7e88054f88d0c36c3f5.jpg" />
              </div>
            </div>

            <div class="col-md-6 bio_info_col">
              <div
                class="bio_container wow fadeInRight"
                data-wow-offset="300"
                style="visibility: visible; animation-name: fadeInRight;"
              >
                <h2>
                  ბიოგრაფია
                  <br />თეოდორ დოსტოევსკი
                </h2>

                <div class="chilhood">
                  <h3>ოჯახის წარმომავლობა</h3>
                  <div class="home_bio_wrapper">
                    <p></p>
                    <p>
                      თედორე დოსტოევსკი დაიბადა 1821 წლის 30 ოქტომბერს
                      (გრიგორიანული კალენდრით 11 ნოემბერს) და მეორე შვილი იყო
                      მიხეილ დოსტოევსკისა და მარია ნეჩაევას ოჯახში. დოსტოევსკები
                      მრავალეთნიკური და მრავალკონფესიური ლიტველი დიდებულები
                      იყვნენ პინსკის რეგიონიდან. მათი ფესვები 16-ე საუკუნიდან
                      იღებს სათავეს. გვარის განშტოებები მოიცავდა მართმადიდებელ
                      და კათოლიკე წევრებს, მაგრამ დოსტოევსკის უშუალო წინაპრები
                      არასამონასტრო სამღვდელოების კლასის წარმომადგენლები იყვნენ.
                      დედის მხრიდან, დოსტოევსკი რუსი ვაჭრების შთამომავალი იყო...
                    </p>

                    <p></p>
                  </div>
                </div>

                <div class="ed_carr">
                  <h3>ადრეული კარიერა</h3>
                  <div class="home_bio_wrapper">
                    <p></p>
                    <p>
                      დოსტოევსკიმ პირველ რომანზე მუშაობა 1844 წელს დაიწყო, იმ
                      იმედით, რომ მკითხველთა ფართო წრეს მოიპოვებდა და ფინანსურ
                      მდგომარეობას გაიუმჯობესებდა. თავის ძმასთან, მიხეილთან
                      მიწერილ წერილში ის წერს: „ეს ის შემთხვევაა, როდესაც
                      ყველაფერი ჩემს რომანზეა დამოკიდებული, თუ თავს ვერ
                      გავართმევ, თავს ჩამოვიხრჩობ“. 1845 წლის მაისში მან
                      დაასრულა „საწყალი ადამიანების“ ხელნაწერი.
                    </p>

                    <p></p>
                  </div>
                </div>

                <a href="biography/" class="btn-6">
                  <span class="btn-62">გაიგეთ მეტი</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$store.state.pagesTitles[2]
    };
  }
};
</script>

<style></style>
