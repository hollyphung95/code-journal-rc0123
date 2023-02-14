var $entryForm = document.querySelector('#entry-form');
var $entryImg = $entryForm.querySelector('img');

var $photoUrl = document.querySelector('#photoUrl');
$photoUrl.addEventListener('input', function (event) {
  $entryImg.setAttribute('src', event.target.value);
});

var $saveEntry = document.querySelector('#save-entry');
$saveEntry.addEventListener('submit', saveBtnClick);

function saveBtnClick(event) {
  event.preventDefault();
  var entry = {
    title: $entryForm.elements.title.value,
    photoUrl: $entryForm.elements.photoUrl.value,
    notes: $entryForm.elements.notes.value
  };
  entry.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(entry);
  $entryImg.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();
}
