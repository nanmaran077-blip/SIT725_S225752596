const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.favourite_book = $('#favourite_book').val();

    console.log("Form Data Submitted: ", formData);
    alert("Form submitted successfully!");
};

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend =
            '<div class="col s12 m6 l4 center-align">' +
                '<div class="card medium">' +
                    '<div class="card-image waves-effect waves-block waves-light">' +
                        '<img class="activator" src="' + item.image + '">' +
                    '</div>' +
                    '<div class="card-content">' +
                        '<span class="card-title activator grey-text text-darken-4">' +
                            item.title +
                            '<i class="material-icons right">more_vert</i>' +
                        '</span>' +
                        '<p><a href="#">' + item.link + '</a></p>' +
                    '</div>' +
                    '<div class="card-reveal">' +
                        '<span class="card-title grey-text text-darken-4">' +
                            item.title +
                            '<i class="material-icons right">close</i>' +
                        '</span>' +
                        '<p class="card-text">' + item.description + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';

        $("#card-section").append(itemToAppend);
    });
};

const getCards = () => {
    fetch('/api/books')
        .then(response => response.json())
        .then(result => {
            if (result.statusCode === 200) {
                addCards(result.data);
            }
        })
        .catch(error => {
            console.error("Error fetching books:", error);
        });
};

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();

    $('#formSubmit').click(() => {
        submitForm();
    });

    getCards();
});