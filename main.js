$(document).ready(() => {
    let promise = new Promise((resolve,reject) => {
        let form = document.getElementById("form");
            $("form").submit((event) => {
                event.preventDefault();
                let url = "https://api.unsplash.com/search/photos?";    
                let query = 'query=' + form.search.value;
                let id = '&client_id=LnUM8AJakhvSHHSalhBe6I5-Su-9Abk97WihfM7q3KQ';
                url += query + id;
                const returnedObject = $.getJSON(url);
                resolve (returnedObject)
            });
        });
    promise.then(function (result) {
        for(let i=0;i<2;i++) {
            document.getElementById("image"+(i+1)).src = result.results[i].urls.raw;
        };
    });
});
