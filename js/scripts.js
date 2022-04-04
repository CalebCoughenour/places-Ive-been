function Place(location, activity, date, landmarks, notes) {
  this.location = location;
  this.activity = activity;
  this.date = date;
  this.landmarks = landmarks;
  this.notes = notes;
}

function toggleVisible() {
  $(this).next().toggleClass("hidden");
}

function createList(place) {
  let list = $("<ul></ul>");
  let div = $("<div class='hidden'></div>");

  for (const property in place) {
    if (property === "location") {
      let location = $("<li>" + place[property] + "</li>");
      location.click(toggleVisible);
      list.append(location);
    } else {
      div.append($("<li>" + place[property] + "</li>"));
    }
  }
  return list.append(div);
}

$(document).ready(function() {
  $("#places-form").submit(function(e) {
    e.preventDefault();
    const location = $("#location").val();
    const activity = $("#activity").val();
    const date = $("#date").val();
    const landmarks = $("#landmarks").val();
    const notes = $("#notes").val();

    let newPlace = new Place(location, activity, date, landmarks, notes);
    const listedPlace = createList(newPlace);
    $(".places-display").append(listedPlace);
  });
});