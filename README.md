# Covid Testing WR Any%
The leaderboard for the ever growing community of Covid Testing speedrunners. 

The website is hosted at: https://enisaras.github.io/CovidTestingWR/

## To submit a run

Due to the nature of the world record every submission needs to be reviewed by myself and at least one other member of the community. Once your run has been verified it will be added to the website. Follow the steps below to submit to your run;

1) Create a fork of this repository by clicking fork on the top right.
2) Once you have your repository you can either edit the file on github desktop or clone the repository locally and run the application. Either way navigate to [src/App.js](https://github.com/enisaras/CovidTestingWR/blob/main/src/App.js)
4) Inside of the App class you will see a variable called ```this.state``` and a list inside of it with the name ```users```, this is the list you will need to append with your information to add your run. An example run(also the current WR):
```name: "Bop", time:  "1:54.87"```

Disclaimer: If you do not format your time the same way it will be changed so it is or your run will be disqualified until you correct it.

4) Create a pull request from the main branch of your fork to the main branch of this repo.

5) Try to include a picture of your stopwatch either in the pull request or on discord.

Alternatively, if you have no idea how to perform the above steps you can message me on [Discord](https://discordapp.com/users/750020267501158502/) and I will add your run.

## Rules
The only rule is to be honest about your run.

## Contributing
Contributions are welcome, the project lacks may things right now so there is a good chance your pull request will be helpful. Check issues or Next Steps right below this, create an issue if you encounter a bug or want something added.

## Next Steps
A better way to add a run the a pull request on GitHub.

Add Linter

Add React CI

Restyle the leaderboard(Maybe more than 1 leaderboard theme?);

Add the repo link and contributor names to the bottom of the page.

Add this README.md to a new tab in the website

Add true dark mode

Add bonobot

