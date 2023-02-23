module.exports = {
  // Specify the directories where SCSS files are located
  includePaths: ['./src/styles'],

  // Define your custom SCSS variables
  // For example, to define a variable named "$primary-color" with the value "#007bff":
  // data: `$primary-color: #007bff;`

  // Enable automatic CSS vendor prefixing
  autoprefixer: {
    overrideBrowserslist: ['> 1%', 'last 2 versions'],
  },
};
