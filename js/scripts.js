function Place(location, activity, date, notes, landmarks) {
  this.location = location;
  this.activity = activity;
  this.date = date;
  this.landmarks = landmarks;
  this.notes = notes;
}

$(document).ready(function() {
  $("#places-form").submit(function(e) {
    e.preventDefault();
    const location = $("#location").val();
    const activity = $("#activity").val();
    const date = $("#date").val();
    const landmarks = $("#landmarks").val();
    const notes = $("#notes").val();
  })
});

 



/*
$(document).ready(function() {
    $("form").submit(function(event) {
      event.preventDefault();
      const valueOne = $("#thing1").val();
      const valueTwo = $("#thing2").val();
      const valueThree = $("#thing3").val();

      const newArray = [valueOne, valueTwo, valueThree];
      const newArray2 = [];
      newArray2.push(newArray[1]);
      newArray2.push(newArray[0]);
      newArray2.push(newArray[2]);
      
      let list = $("<ul></ul>");
      list.append($("<li>" + newArray2[0] + "</li>"));
      list.append($("<li>" + newArray2[1] + "</li>"));
      list.append($("<li>" + newArray2[2] + "</li>"));
      
      //$("#fav-list").text("");
      $("#fav-list").append(list);
    });
  });
*/