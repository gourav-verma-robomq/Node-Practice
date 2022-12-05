/**
 * 
 * @type {Object}
 * @property {String} id
 * @param {String} post.type // Type of the post 
 * @param {String|null} post.photo-caption // Caption of post for photo type post
 * @param {String|null} post.photo-url-500 // Url of post photo with 500 px resolution for photo type post
 * @param {String|null} post.regular-title // Title of post for the regular type of post
 * @param {String|null} post.regular-body // HTML Body of post for the regular type of post
 * 
 */
let POST = {
    id: '',
    type: '', // PHOTO, REGULAR
    'photo-caption': '',
    'photo-url-500': '',
    'regular-title': '',
    'regular-body': '',
}


export default POST;
