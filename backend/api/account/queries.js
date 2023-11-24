const create_account = "insert into users(username, phone_number) values($1, $2)";
const get_user = "select username, phone_number from users where username = $1";





module.exports = {
    create_account,
    get_user,
}