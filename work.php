<?php include("header.php") ; ?>

<style>

.row-fluid .offset6:first-child {
  margin-left: 5.0%;
}
.row-fluid .span5 {
  width: 46.171%;
}
.row-fluid .span6 {
  width: 80.0%;
}
.rightbar {
  width:10%;
  position:fixed;
  right:0;
  bottom:0;
  top:0;
  padding-top:7%;
  /*z-index:-1;*/
  background:rgba(0, 0, 0, 0.667);
}
.rightbar ul {
  list-style:none;
  display:block;
  height:100%;
  margin:auto;
  padding:auto;
}
.rightbar ul li {
  display:block;
  height:25%;
  margin:auto;
  padding:auto;
}
.home_box {
  margin: 5.0%;
}
.skills {
  width:100%;
  margin:0;
}
.skills li {
  margin:1%;
  display: block;
  float: left;
  width: 30%;
}
.skills li div {
}
.blue {
  background:none repeat scroll 0 0 steelblue;
}
.red {
  background:none repeat scroll 0 0 firebrick;
}
</style>


<!-- header-->
<div class="home_container" style="height: 592px;">
  <div class="row-fluid">
    <div class="span6 span5 offset6">
      <div id="myCarousel" class="carousel slide">
    <div class="row-fluid">
      <div class="span8 offset2">
        <div class="mac_box"> 
                 <!-- Carousel items -->
          <div class="carousel-inner">
            <div class="item"> <img src="./work_files/Ravi_Suhag_inspark.png"> </div>
            <div class="item"> <img src="./work_files/royal.png"> </div>
            <div class="item"> <img src="./work_files/personal.png"> </div>
            <div class="item active left"> <img src="./work_files/sd.png"> </div>
            <div class="item next left"> <img src="./work_files/ecamp.png"> </div>
            <div class="item"> <img src="./work_files/clizmasizba.png"> </div>
          </div>
        </div>
      </div>
      
      <!-- Carousel nav --> 
      <a class="carousel-control left" href="http://ravisuhag.herokuapp.com/work#myCarousel" data-slide="prev">‹</a>
      <a class="carousel-control right" href="http://ravisuhag.herokuapp.com/work#myCarousel" data-slide="next">›</a>
    </div>
  </div>
    </div>




    <!--footer -->
<?php include("footer.php") ; ?>
<script type="text/javascript">
   document.title="About Akarsh";
</script>


