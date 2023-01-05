
# Leetcode Time Analyzer

The Leetcode Time Analyzer is a web app that allows users to track and analyze the time they spend solving Leetcode coding challenges. With this app, users can add data about the time they take to solve a particular question, along with tags and the difficulty of the question. The app then generates bar charts that visualize this data, allowing users to see how their performance on Leetcode varies by difficulty and by tag. The charts are also customizable, allowing users to filter the data by tag to see their performance on specific types of questions.

## Demo

To see a demo of the app in action, please click 




## Run Locally

Clone the project

```bash
  git clone https://github.com/ravichauhan0407/nearByevents-
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Usage/Examples

- To use the Leetcode Time Analyzer, follow these steps:

- Open the app in your web browser at http://localhost:3000.

- Click on the "Login" button in the navigation bar.

- Enter your login credentials and click on the "Submit" button.

- Once you are logged in, you will see a "Add Entry" button in the right corner of the navigation bar. Click on this button to add a new entry.

- Enter the details of the Leetcode question you solved, including the time you took to solve it, the tags for the question, and the difficulty of the question.

- Click on the "Save" button to save the entry to the database.

- To view the generated charts, click on the "Plot Chart" button. The charts will show the data you have entered, including a bar chart of your performance by difficulty and a bar chart of your performance by tag.

- To customize the charts, use the dropdown  to select which tags you want to include in the charts. The charts will update to show only the data for the selected tags.
## Technologies
The Leetcode Time Analyzer was built using the following technologies:

- MongoDB: NoSQL database used to store the data entered by users
- Express: Backend web framework for building the API
- React: Frontend JavaScript library for building the user interface
- Node.js: JavaScript runtime for running the backend server and building the API
- Recharts: React library for generating charts and graphs
