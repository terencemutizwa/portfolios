# JavaScript Coding Challenge

## Goal
* Create a web API to retrieve data from a mock database and structure it in a hierarchy before returning to the caller.

## Time
* You can spend as long or short as you desire though **under an hour is expected**.  It does not have to be complete but show you know the main ideas of modern development.  Its up to you.

## Tasks
* In the data positions belong to portfolios.  There are many positions for each portfolio.  Take a look at /database/data.
* Create an endpoint, /portfolios or similar, with the ability to retrieve a JSON list of all portfolios and positions from the mock database module in the starter template.  The data returned should be correctly structured so each portfolio has a property with the collection of positions related to each.
* Add the ability to retrieve only those portfolios which have the currency specified in the query.  The data should be structured as above with positions as a property on each portfolio.
* Add whatever features you think necessary to make this a production ready application but you don't need a complete implementation as long as samples of each of the key ideas that should be implemented are included.
* Feel free to add tests

## Notes
* You do not need to access a real database.  There is a mock database implementation in the "database" directory.  Like any database, you first use the client to ```connect```.  This returns a connection which you can use to ```load``` data.
* There is no right or wrong solution to this problem, it is designed to see how you approach the task along with your understanding and explanation of your code and decisions made.
* It is complete open book so google and stackoverflow until your hearts content.  After all that is how everyone codes today.
* Feel free to ask us questions at any time.  You will not be punished for this and in fact may get rewarded for it.  Do whatever you would do when designing and building a real world system.
* You can add any libraries or configuration you choose.
* There are no "intentional" bugs, we are not trying to catch you out, it probably really is a bug so please let us know and give us the fix.
