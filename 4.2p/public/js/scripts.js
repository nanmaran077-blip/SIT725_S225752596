const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend = `
      <div class="col s12 m4">
        <div class="card medium">
          <div class="card-image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="card-content">
            <span class="card-title">${item.name}</span>
            <p><strong>${item.category}</strong></p>
            <p>${item.details}</p>
          </div>
        </div>
      </div>
    `;
    $("#card-section").append(itemToAppend);
  });
};

const getActivities = () => {
  $.get("/api/activities", (response) => {
    if (response.statusCode == 200) {
      $("#card-section").empty();
      addCards(response.data);
    }
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal();

  $("#formSubmit").click(() => {
    submitForm();
  });

  getActivities();
});