let tumblrConstants = {
    tumblrAPIPaths: {
        GET_POST: tumblrName => `http://${tumblrName}.tumblr.com/api/read/json`,
    },

    POST_TYPES: {
        REGULAR: 'regular',
        PHOTO: 'photo',
    }

};

module.exports = tumblrConstants;