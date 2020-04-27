(function () {
    'use strict';

    //const axios = require('axios');

    const url = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=date`;

    async function getQuotePromise(){
        let response = await fetch(url);
        let promise = await response.json();
        return promise;
    }

    getQuotePromise().then(data => {
        let htmlArr = [];
        
        for(let index in data) {
            const quoteObj = data[index];
            
            let html = `
            <div class="quote-card">
                <div class="quote-card-title">
                    <h1 class="quote-title">Today's Quote # ${quoteObj.id}</h1>
                </div>
                <blockquote class="quote-text">${quoteObj.excerpt.rendered}</blockquote>
                <div class="quote-card-footer">
                    <div class="quote-credits">${quoteObj.title.rendered}</div>
                    <div class="quote-source"> Source : article </div>
                </div>
            </div>`;
            
            htmlArr.push(html);
        }

        let finalString = htmlArr.join('');
        document.getElementsById('root')[0].innerHTML = finalString;
        //getQuoteUsingAxios();
    });

    //axis implementation take it up later.
    // function getQuoteUsingAxios() {
    //     axios.get(url)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     console.log(`DONE`);
    //   });
    // }

}());
