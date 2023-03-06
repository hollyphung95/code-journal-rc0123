/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var storedDataJSONmodel = localStorage.getItem('data');

if (storedDataJSONmodel !== null) {
  data = JSON.parse(storedDataJSONmodel);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
});
