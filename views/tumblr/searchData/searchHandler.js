import POST from "../model/post.js";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * @description To Validate the data for the script to process further with critical usage of variables
 * Current this validated the variabled existance from the other scripts prepared
 * ---------------------------------------------------------------------------------------------------------------------
 * 
 * @param {Function} onSuccessCallback // Call back method to execute when the validation passes
 */
let validateScript = (onSuccessCallback) => {
    if (typeof tumblr_api_read === 'undefined') {
        alert('Invalid Tumblr Name, Redirecting to search page');
        window.location.href = '/tumblr';
    } else {
        onSuccessCallback();
    }
}

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * @description Tumblr Defined POST Types 
 * @note Currently supported posts are regular and photo
 * ---------------------------------------------------------------------------------------------------------------------
 */
let POST_TYPES = {
    REGULAR: 'regular',
    PHOTO: 'photo',
};

/**
 * 
 * 
 * ---------------------------------------------------------------------------------------------------------------------
 * @description To prepare the header and body for the html card view from the post object
 * Currently it handles the post types of PHOTO and REGULAR
 * ---------------------------------------------------------------------------------------------------------------------
 * 
 * 
 * @param {POST} post 
 * @returns {cardBody: String|null, cardHeader: String|null}
 */
let convertPostToCard = (post) => {
    let cardHeader = null;
    let cardBody = null;

    if (post.type === POST_TYPES.PHOTO) {
        cardHeader = post['photo-caption'];
        cardBody = ` <img src="${post['photo-url-500']}" />`;
    } else if (post.type === POST_TYPES.REGULAR) {
        cardHeader = post['regular-title'] || false;
        cardBody = post['regular-body'];
    }

    return { cardBody, cardHeader };
}

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * @description To prepare the html element with data binding from the post object for the passed post data
 * ---------------------------------------------------------------------------------------------------------------------
 * 
 * @param {POST} post 
 * @returns {HTMLElement}
 */
let preparePostCard = (post) => {
    let div = document.createElement('div');
    div.classList.add('col');
    let { cardBody, cardHeader } = convertPostToCard(post)

    div.innerHTML = `
    <div class="card h-100">
        ${cardHeader ? `<div class="card-header"> ${cardHeader} </div>` : ''}
        ${cardBody ? `<div class="card-body"> ${cardBody} </div>` : ''}
        <div class="card-footer"><small class="text-muted">${post['date']}</small></div>
    </div>
`;

    return div;
}


/**
 * ---------------------------------------------------------------------------------------------------------------------
 * @description To perform the initialization of search, 
 * @warn Before initialization check the availablility of the variable `tumblr_api_read` from the scripts executed
 * before current script
 * ---------------------------------------------------------------------------------------------------------------------
 */
let initSearch = () => {

    let tumblrApiRead = tumblr_api_read;

    let postsGallary = document.getElementById('tumblrPosts');

    // preparing and adding card for every post fetched from tumblr
    tumblrApiRead.posts.forEach((post, i) => {
        let postDiv = preparePostCard(post, i);
        postsGallary.appendChild(postDiv);
    })

}


validateScript(initSearch);
