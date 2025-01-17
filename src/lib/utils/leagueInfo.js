/*   STEP 1   */
export const leagueID = "844978440166805504"; // your league ID
export const leagueName = "Drunken Delts From Ole' Mizzou - B League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the Drunken Delts From Ole' Mizzou Fantasy Football Leage Home Page!</p>
  <p> Additional Content Coming Soon!</p>
  `;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Biner",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Saint Louis", // (optional)
      "bio": "Big Dick Bine just out here in the B-League, trying to win the A-League",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      //"rival": {
        // name: "Beauchamp", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       //},
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Dream Big, Dream Bine",
      "tradingScale": 3, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      "name": "Geiser",
      "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      "location": "Saint Louis", // (optional)
      "bio": "Started in the A-League now we here",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
     // "rival": {
      //  name: "Himself", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      "favoritePlayer": 425, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      "philosophy": "Always have your Thursday night flyers playing in the Flex",
      "tradingScale": 4, // 1 - 10
      "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    // {
      // "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
      // "name": "Your Name",
      // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
      // "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
       {
       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Sachs",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
	   {
       "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Scooter",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
        },
	    {
       "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Joey D",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
      // "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
        },
	    {
       "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Gentoo",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
      // "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
        },
	    {
       "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Juggernut",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
      // "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
	   {
       "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Father Chris",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
        },
	    {
       "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Mac",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
         },
	     {
       "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Rim Job Rob",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
      // "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
        },
	    {
       "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "DV4",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
      // "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
	   {
       "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Church",
       "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Look at this exponential growth graph..",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
	   {
       "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Weston",
       "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
		 },
	     {
       "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Grant",
       "tookOver": 2021, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
       "bio": "Look at this exponential growth graph..",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
       },
	   {
       "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Spackler",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
      // "bio": "Lorem ipsum...",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
		 },
		 {
       "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
       "name": "Dylan",
       "tookOver": 2022, // (optional) used if a manager took over a team, delete this line or change to null otherwise
      // "location": "Brooklyn", // (optional)
       "bio": "Just passing through... forever",
      // "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
      // "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
      // "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
      // "rival": {
        // name: "Rival", // Can be anything (usually your rival's name)
        // link: 6, // manager array number within this array, or null to link back to all managers page
        // image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      // },
      // "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
      // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
      // "philosophy": "Your fantasy team's philosophy",
      // "tradingScale": 10, // 1 - 10
       "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
		 },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
