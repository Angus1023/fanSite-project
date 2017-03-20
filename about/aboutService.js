angular.module('fanSite').service('aboutService', function() {
  var captains = [
          {
              name: "Lou Angotti",
              id:1 ,
              image: "https://nhl.bamcontent.com/images/photos/286103570/568x320/cut.jpg",
              number: "7",
              years: "1967-68"

          },{
              name: "Ed Van Impe",
              id:2 ,
              image: "https://nhl.bamcontent.com/images/photos/286103600/568x320/cut.jpg",
              number: "2",
              years: "1968-73"

          },{
              name: "Bob Clarke",
              id:3 ,
              image: "https://nhl.bamcontent.com/images/photos/286105984/568x320/cut.jpg",
              number: "16",
              years:"1972-79, 1982-84"

          },{
              name: "Mel Bridgman",
              id:4 ,
              image: "https://nhl.bamcontent.com/images/photos/286109734/568x320/cut.jpg",
              number: "10",
              years: "1979-81"

          },{
              name: "Bill Barber",
              id:5 ,
              image: "https://nhl.bamcontent.com/images/photos/286263258/2568x1444/cut.jpg",
              number: "7",
              years: "1981-83"

          },{
              name: "Dave Poulin",
              id:6 ,
              image: "https://nhl.bamcontent.com/images/photos/286264054/2568x1444/cut.jpg",
              number: "20",
              years: "1984-90"

          },{
              name: "Ron Sutter",
              id:7 ,
              image: "https://nhl.bamcontent.com/images/photos/286264860/2568x1444/cut.jpg",
              number: "14",
              years: "1989-91"

          },{
              name: "Rick Tocchet",
              id:8 ,
              image: "https://nhl.bamcontent.com/images/photos/286265168/2568x1444/cut.jpg",
              number: "22",
              years: "1991-92"

          },{
              name: "Kevin Dineen",
              id:9 ,
              image: "https://nhl.bamcontent.com/images/photos/286265832/2568x1444/cut.jpg",
              number: "11",
              years: "1993-94"

          },{
              name: "Eric Lindros",
              id:10 ,
              image: "https://nhl.bamcontent.com/images/photos/286339678/568x320/cut.jpg",
              number: "88",
              years: "1994-2000"

          },{
              name: "Eric Desjardins",
              id:11 ,
              image: "https://nhl.bamcontent.com/images/photos/286339700/568x320/cut.jpg",
              number: "37",
              years: "1999-2002"

          },{
              name: "Keith Primeau",
              id:12 ,
              image: "https://nhl.bamcontent.com/images/photos/286339840/568x320/cut.jpg",
              number: "25",
              years: "2001-06"

          },{
              name: "Derian Hatcher",
              id:13,
              image: "https://nhl.bamcontent.com/images/photos/286339968/568x320/cut.jpg",
              number: "2",
              years: "2005-06"

          }, {
              name: "Peter Forsberg",
              id:14 ,
              image: "https://nhl.bamcontent.com/images/photos/286340186/568x320/cut.jpg",
              number: "21" ,
              years: "2006-07"


          },{
              name: "Jason Smith",
              id:15 ,
              image: "https://nhl.bamcontent.com/images/photos/286340304/568x320/cut.jpg",
              number: "21" ,
              years: "2007-08"


          },{
              name: "Mike Richards",
              id:16 ,
              image: "https://nhl.bamcontent.com/images/photos/286340416/568x320/cut.jpg",
              number: "18",
              years: "2008-11"


          },{
              name: "Chris Pronger",
              id:17 ,
              image: "https://nhl.bamcontent.com/images/photos/286340850/568x320/cut.jpg",
              number: "20",
              years: "2011-12"

          },{
              name: "Claude Giroux",
              id:18 ,
              image: "https://nhl.bamcontent.com/images/photos/286340864/568x320/cut.jpg",
              number: "28",
              years: "2013-Present"

          }

    ]
    this.getCaptains = function() {
        console.log(captains);
        return captains;
    }

    this.getCaptainById = function(id) {
        for (var i = 0; i < captains.length; i++) {
            if (captains[i].id == id) {
                console.log(captains[i]);
                return captains[i];
            }
        }
    }

})
