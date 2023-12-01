const create_account = "insert into account(username, phone_number, date_logged, date_joined) values($1, $2, $3, $4)";
const get_user = "select * from account where username = $1";





module.exports = {
    create_account,
    get_user,
}