/* When the user clicks on the button,
toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  */

  var checkList = document.getElementById('list1');
  checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList.classList.contains('visible'))
      checkList.classList.remove('visible');
    else
      checkList.classList.add('visible');
  }

  var checkList2 = document.getElementById('list2');
  checkList2.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList2.classList.contains('visible'))
      checkList2.classList.remove('visible');
    else
      checkList2.classList.add('visible');
  }
  var checkList3 = document.getElementById('list3');
  checkList3.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList3.classList.contains('visible'))
      checkList3.classList.remove('visible');
    else
      checkList3.classList.add('visible');
  }
  var checkList4 = document.getElementById('list4');
  checkList4.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList4.classList.contains('visible'))
      checkList4.classList.remove('visible');
    else
      checkList4.classList.add('visible');
  }
  var checkList5 = document.getElementById('list5');
  checkList5.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList5.classList.contains('visible'))
      checkList5.classList.remove('visible');
    else
      checkList5.classList.add('visible');
  }
  var checkList6 = document.getElementById('list6');
  checkList6.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList6.classList.contains('visible'))
      checkList6.classList.remove('visible');
    else
      checkList6.classList.add('visible');
  }

  var checkList7 = document.getElementById('list7');
  checkList7.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList7.classList.contains('visible'))
      checkList7.classList.remove('visible');
    else
      checkList7.classList.add('visible');
  }

  var checkList8 = document.getElementById('list8');
  checkList8.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList8.classList.contains('visible'))
      checkList8.classList.remove('visible');
    else
      checkList8.classList.add('visible');
  }

  var checkList9 = document.getElementById('list9');
  checkList9.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList9.classList.contains('visible'))
      checkList9.classList.remove('visible');
    else
      checkList9.classList.add('visible');
  }

  var checkList10 = document.getElementById('list10');
  checkList10.getElementsByClassName('anchor')[0].onclick = function(evt) {
    if (checkList10.classList.contains('visible'))
      checkList10.classList.remove('visible');
    else
      checkList10.classList.add('visible');
  }


  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";

  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  /* https://codepen.io/aramloosman/pen/eLVxrL */
  function setPrc( progress ) {
    if( progress ) {
      // this is how to set the progress programmatically,
      // the background-position needs the inverted value from 0% to 100% (0% means full bar, 100% means empty)
      document.getElementById('progress').setAttribute( 'style', 'background-position: ' + (100-progress) + '% 0')
    } else {
      document.getElementById('progress').setAttribute( 'style', '')
    }
  }
  function resetImage() {

    document.getElementById("imgClickAndChange").src = "images/page1-crp.png"

}

  function changeImage() {

    document.getElementById("imgClickAndChange").src = "images/page2-crop.png"

}
function changeImage2() {

  document.getElementById("imgClickAndChange").src = "images/page3-crop.png"

} function changeImage3() {

  document.getElementById("imgClickAndChange").src = "images/page4-crp.png"

} function changeImage4() {

  document.getElementById("imgClickAndChange").src = "images/page5-crop.png"

}
