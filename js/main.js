var $entryForm = document.querySelector('#entry-form');
var $entryImg = $entryForm.querySelector('img');

var $photoUrl = document.querySelector('#photoUrl');
$photoUrl.addEventListener('change', function (event) {
  $entryImg.setAttribute('src', event.target.value);
});
