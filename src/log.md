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

# Day 8 - 09/01/26

- Localstorage seems like a global variable that is basically functions as a dictionary
- you can `setItem({key})` and then call it using `getItem({key})`
- That means i'm going to create a template data type:
- localStorage --> MovieRecord<Movie, MovieEmotionDataRecord> --> MovieEmotionDataRecord<Emotion, count>
- Successfully implemented the function rate a movie and also show the counter
- Need to seperate the filter function and the rate function, right now it uses the exact same component
- The component itself has the same UI but a different functionality, so not sure how to divide the component
- 45 + 45 + 20

# Day 9 - 10/01/26

- Currently working on the filter function to update the movies when the user clicks on the toggle
- Ive separated the types of button for rating and filtering movies, a bit confusing at first but i think its pretty modular
- I think how itll work is that it gets the selected Emotion[] and similar to how rating works, instead of getting the whole record of movie emotions and updating the count of an emotion for a particular movie, it returns movieId of the highest rated emotion and only movies with those emotion ratings.
- Not sure how to handle multiple emotion filters on Ex. Happy and Cozy selected; will it select the highest happy and cozy movie? What happens in certain cases

- Case 1: More happy
- Happy: 12
- Cozy: 5

- Case 2: More Cozy + 1
- Happy: 5
- Cozy: 13

- Maybe `sum up` the emotion and whichever highest gets the priority
- So when getting the emotions that were filtered, sum it all up and display highest to lowest

# Day 10 - 11/01/26

- Implemented filter function to a certain degree
- Havent implemented way to filter it based on most "happy" movie
- Lots of modularization

# Day 11 - 12/01/26

- Top 3 implemented but not stylized
- will need to figure out how to make the tailwind bg class sycned to the one in the thing

# Day 12 - 13/01/26

- Loading States implemented
- Improvement for var names maybe
- Top emotion not stylized yet
- Could improve loading for MovieDisplayPage
