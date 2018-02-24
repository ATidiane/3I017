/**
 * 
 */

function setVirtualMessage() {
	
	localdb = [];
	follows = [];
	var user1 = {"id":  1, "login": "sly"};
	var user2 = {"id": 2, "login": "ivyana"};
	var user3 = {"id": 3, "login": "johara"};
	var user4 = {"id": 4, "login": "mendel"};
	var user5 = {"id": 5, "login": "worldpc"};
	
	follows[1] = new Set();
	follows[1].add(2);
	follows[1].add(4);
	
	follows[2] = new Set();
	follows[2].add(5);
	follows[2].add(3);
	
	follows[3] = new Set();
	follows[3].add(1);
	follows[3].add(2);
	
	follows[4] = new Set();
	follows[4].add(3);
	follows[4].add(4);

	follows[5] = new Set();
	follows[5].add(2);
	follows[5].add(1);
	
	var com1 = new Commentaire(1, user3, "hum", new Date());
	var com2 = new Commentaire(2, user2, "hey", new Date());
	
	localdb[2] = new Message(2, user1, "msg Alea", new Date());
	localdb[4] = new Message(4, user2, "blabla", new Date(), [com1, com2]);
	 
}