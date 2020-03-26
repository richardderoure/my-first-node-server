$(document).ready(() => {

    let promise = new Promise((resolve, reject) => {
        let form = document.getElementById("form");
        $("form").submit((event) => {
            event.preventDefault();
            console.log(form.search.value);
            let url1 = 'https://api.unsplash.com/search/photos?query=' + form.search.value + '&client_id=LnUM8AJakhvSHHSalhBe6I5-Su-9Abk97WihfM7q3KQ';
            const urlObject = $.get(url1);
            console.log('About to fetch image...');
            resolve(urlObject);
        });
    });
    promise.then(function (url) {
        let image1 = url.results[0].urls.regular;
        let image2 = url.results[1].urls.regular;
        catchImage()
            .then(response => {
                console.log('Success!');
                console.log(response);
            })
            .catch(error => {
                console.log('Error!');
                console.log(error);
            });
            
        async function catchImage() {
            const response1 = await fetch(image1);
            const blob1 = await response1.blob();
            document.getElementById('image1').src = URL.createObjectURL(blob1);
            const response2 = await fetch(image2);
            const blob2 = await response2.blob();
            document.getElementById('image2').src = URL.createObjectURL(blob2);
        }
    });
});
/* above replaces this
fetch(url).then(response => {
    console.log(response);
    return response.blob();
}).then(blob =>{
    console.log(blob);
    document.getElementById('image1').src = URL.createObjectURL(blob);
}).catch(error => {
    console.log('error!');
    console.log(error)
});
*/


/*

$(document).ready(() => {


            let url1 = "";
            let url2 = "";


            function getSearch() {

                let form = document.getElementById("form");

                $("form").submit((event) => {
                    event.preventDefault();
                    console.log(form.search.value);
                });

    
                let id = '&client_id=LnUM8AJakhvSHHSalhBe6I5-Su-9Abk97WihfM7q3KQ';
                let url = 'https://api.unsplash.com/search/photos?query='+ form.search.value + id;
                console.log(url);
                return url

            }
           
            console.log(url);

            getSearch().then(function (result) {
                
                    let query = 'query=' + result;
                    let id = '&client_id=LnUM8AJakhvSHHSalhBe6I5-Su-9Abk97WihfM7q3KQ';
                    url += query + id;

                    const returnedObject = $.get(url);
                    console.log(returnedObject);
                })




            });




*/