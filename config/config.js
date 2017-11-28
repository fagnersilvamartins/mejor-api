const in_client_id = 'df289f976a6f49e2b16d562eebdeff0c',
    in_client_secret = '7c960064d74647e3bf6ae2130b782780',
    in_redirect_uri = 'http://localhost:5000/auth',
    in_auth_url = 'https://api.instagram.com/oauth/authorize/?client_id='
        + in_client_id + '&redirect_uri='
        + in_redirect_uri + '&response_type=code';

const db_user = '<mejor>',
    db_password = '<ch4v31r0>',
    db_uri = 'mongodb://'
        + db_user + ':'
        + db_password + '@ds119406.mlab.com:19406/mejor_db';

module.exports = {
    port: process.env.PORT || 5000,
    db: {
        uri: db_uri
    },
    instagram: {
        client_id: in_client_id,
        client_secret: in_client_secret,
        auth_url: in_auth_url
    }
};