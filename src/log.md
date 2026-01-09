# Day 1 - 29/12/25

- Getting started with project repository and setup (ESLint + Prettier + TailWind)
- Reading pre-internship and kinoverse
- enabled some extra linting `eslint-plugin-react-x` and `eslint-plugin-react-dom`

# Day 2 - 30/12/25

- Linked the API key of TMDB to code
- Successfully fetched data from TMDB (Need to segregate code though)
- Updated Prettier file to also use tailwind plugin

# Day 3 - 02/01/26

- Moved code into `pages` (Frontend), `hooks` (Sets data obtained from api), `api` (Gets data from API and formats it), and `types` (For typescript declaration) folder
- Basic home page layout made ready
- Need to figure out how to display images correctly from the given path
- Maybe an issue with storing the keys safely

# Day 4 - 04/01/26

- MainScreen display Finished
- Prototype MovieDisplay Screen
- MUI components used for the cards and Text
- Probably need to make new component for the suggestion movies
- Need to figure out a good approach for making loading states look good
- 45+45+45+15+15

# Day 5 - 06/01/26

- Movie Suggestion Card
- Emotional Filter Component
- Movie suggestions done
- Loading states right now are low prio rather get important features done
- Future need to decrease size of the movie description box, too horizontally long
- Maybe add a back arrow button (Low Prio)
- Need to do functionality for the filter with local storage
- 45+45+45+20

# Day 6 - 07/01/26

- Figure out how localstorage works
- Like a database for the system ig thats stored on the frontend?
- Each user has unique one

# Day 7 - 09/01/26

- Localstorage seems like a global variable that is basically functions as a dictionary
- you can `setItem({key})` and then call it using `getItem({key})`
- That means i'm going to create a template data type:
- localStorage --> MovieRecord<Movie, MovieEmotionDataRecord> --> MovieEmotionDataRecord<Emotion, count>
