const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: 'maleiasd',  //Enter here your account login
	password: '02042004CtvmI0larT'		 //Enter your password
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);                 //1 - online, 7 - invisible
	user.gamesPlayed(["AML BOT", 230410, 440, 570, 730]);    //List app IDs
});