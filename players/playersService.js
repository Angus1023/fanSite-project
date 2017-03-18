angular.module('fanSite').service('playersService', function() {
  var players = [
        {
            name: "Claude Giroux",
            id:1 ,
            image: "http://media.philly.com/images/011916_claude-giroux_1200.jpg",
            number: 28,
            pos: "Center",
            stats: {
              ht: "5’ 11\”",
              birth: "Jan 12 1988",
              hometown: 'Hearst, ON, CAN'
            }
        },
        {
            name: "Wayne Simmonds",
            id:2 ,
            image: "http://www.allaboutthehabs.ca/wp-content/uploads/2015/12/wayne-simmonds-injury.jpg",
            number: 17,
            pos: 'Right Wing',
            stats: {
              ht: "6\’ 2\”",
              birth: 'Aug 26 1988',
              hometown: "Scarborough, ON, CAN"
            }

        },
        {
            name: "Michael Raffl",
            id:3 ,
            image: "http://cdn.abclocal.go.com/content/wpvi/images/cms/1222664_1280x720.jpg",
            number: 12,
            pos: 'Left Wing',
            stats: {
              ht: "6\’ 0\”",
              birth: 'Dec 1 1988',
              hometown: "Villach, AUT"
            }

        },
        {
            name: "Shayne Gostisbehere",
            id:4 ,
            image: "http://www.csnphilly.com/sites/csnphilly/files/2016/05/16/ap-shayne-gostisbehere-flyers-celebration.jpg",
            number: 53,
            pos: 'Defence',
            stats: {
              ht: "5\’ 11\”",
              birth: "Apr 20 1993",
              hometown: "Pembroke Pine, FL, USA"
            }

        },
        {
            name: "Michael Del Zotto",
            id:5 ,
            image: "http://www.csnphilly.com/sites/csnphilly/files/2016/05/11/usa-michael-del-zotto-flyers.jpg",
            number: 15,
            pos: 'Defence',
            stats: {
              ht: "6\’ 0\”",
              birth: "Jun 24 1990",
              hometown: "Stouffville, ON, CAN"

            }

        },
        {
            name: "Steve Mason",
            id:6 ,
            image: "http://3951-presscdn-28-25.pagely.netdna-cdn.com/wp-content/uploads/2013/10/Steve-Mason.jpg",
            number: 35,
            pos: 'Goalie',
            stats: {
              ht: "6\' 4\"",
              birth: "May 29 1988",
              hometown: "Oakville, ON, CAN"
            }
        }
    ]
    this.getPlayers = function() {
        console.log(players);
        return players;
    }

    this.getPlayerById = function(id) {
        for (var i = 0; i < players.length; i++) {
            if (players[i].id == id) {
                console.log(players[i]);
                return players[i];
            }
        }
    }

})
