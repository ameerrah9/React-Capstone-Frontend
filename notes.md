rails g scaffold users firstname:stringlastname:string location:string username:string email:string img_src:string --no-test-framework

rails g scaffold teams img_src:string cit:string name:string wins:integer losses:integer likes:integer conference_rank:integer --no-test-framework

Models
-User Model
-Has_many teams
-Team attributes

AwayLosses: 5
AwayWins: 3
City: "Philadelphia"
Conference: "Eastern"
ConferenceLosses: 4
ConferenceRank: 1
ConferenceWins: 12
Division: "Atlantic"
DivisionLosses: 1
DivisionRank: 1
DivisionWins: 4
GamesBack: 0
GlobalTeamID: 20000007
HomeLosses: 1
HomeWins: 9
Key: "PHI"
LastTenLosses: 5
LastTenWins: 5
Losses: 6
Name: "76ers"
Percentage: 0.667
PointsPerGameAgainst: 110.72
PointsPerGameFor: 113.72
Season: 2021
SeasonType: 1
Streak: -1
StreakDescription: "L1"
TeamID: 7
Wins: 12

# Parent Container common owner component is

# Children Container

# keep an array of the teams around

# keep an array of the favorite teams around

# Pieces of data in my application. We have:

The original list of teams
The search text the user has entered
The filtered list of a users teams

Which component needs to filter the team list based on state

SearchBar needs to display the search text and checked state.

# Routing our Client-Side app is going to have these routes

/favorites/new

/favorties

/teams

/about

/login

home page, about page, team page, users favorites page

# Nested Routes

single team show page
