var $entryForm = document.querySelector('#entry-form');
var $entryImg = $entryForm.querySelector('img');

var $photoUrl = document.querySelector('#photoUrl');

const entries = JSON.parse(localStorage.getItem('entries'));
if (entries) {
  entries.forEach(entry => renderEntry(entry));
}

$photoUrl.addEventListener('input', function (event) {
  $entryImg.setAttribute('src', event.target.value);
});

var $saveEntry = document.querySelector('.save-entry');
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

var ul = document.querySelector('ul');

function renderEntry(entry) {
  var li = document.createElement('li');
  ul.appendChild(li);

  var container = document.createElement('div');
  container.classList.add('container');
  li.appendChild(container);

  var row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);

  var column = document.createElement('div');
  column.classList.add('column-half');
  row.appendChild(column);

  var $img = document.createElement('img');
  $img.setAttribute('src', entry.getAttribute('photoUrl'));
  column.appendChild($img);

  column = document.createElement('div');
  column.classList.add('column-half');
  row.appendChild(column);

  var $title = document.createElement('h3');
  $title.setAttribute('class', entry.getAttribute('name'));
  column.appendChild($title);

  var $notes = document.createElement('p');
  $notes.setAttribute('class', entry.getAttribute('notes'));
  column.appendChild($notes);

  ul.appendChild(li);
}
