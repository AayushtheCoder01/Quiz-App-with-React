const javascriptQuestions = [
  {
    questionNumber: 1,
    question: 'What is the result of the following expression: 2 + 2 + "2"?',
    type: 'multipleChoice',
    options: {
      a: '6',
      b: '22',
      c: '4',
      d: 'Error',
    },
    correctAnswer: '22',
  },
  {
    questionNumber: 2,
    question: 'Which keyword is used to declare a variable in JavaScript?',
    type: 'multipleChoice',
    options: {
      a: 'var',
      b: 'let',
      c: 'const',
      d: 'variable',
    },
    correctAnswer: 'var',
  },
  {
    questionNumber: 3,
    question: 'What does the "this" keyword refer to in JavaScript?',
    type: 'multipleChoice',
    options: {
      a: 'The current function',
      b: 'The global object',
      c: 'The calling function',
      d: 'The prototype object',
    },
    correctAnswer: 'The calling function',
  },
  {
    questionNumber: 4,
    question: 'What is the purpose of the "let" keyword in JavaScript?',
    type: 'multipleChoice',
    options: {
      a: 'To declare a constant variable',
      b: 'To declare a block-scoped variable',
      c: 'To declare a global variable',
      d: 'To declare a function',
    },
    correctAnswer: 'To declare a block-scoped variable',
  },
  {
    questionNumber: 5,
    question: 'Which method is used to add a new element to the end of an array?',
    type: 'multipleChoice',
    options: {
      a: 'push()',
      b: 'pop()',
      c: 'shift()',
      d: 'unshift()',
    },
    correctAnswer: 'push()',
  },
  {
    questionNumber: 6,
    question: 'What is the purpose of the "=== operator" in JavaScript?',
    type: 'multipleChoice',
    options: {
      a: 'Assignment',
      b: 'Equality comparison',
      c: 'Type conversion',
      d: 'Logical AND',
    },
    correctAnswer: 'Equality comparison',
  },
  {
    questionNumber: 7,
    question: 'Which function is used to parse a JSON string?',
    type: 'multipleChoice',
    options: {
      a: 'JSON.stringify()',
      b: 'JSON.parse()',
      c: 'JSON.stringifyify()',
      d: 'JSON.parseify()',
    },
    correctAnswer: 'JSON.parse()',
  },
  {
    questionNumber: 8,
    question: 'What does the "NaN" value represent in JavaScript?',
    type: 'multipleChoice',
    options: {
      a: 'Not a Node',
      b: 'Null and Negative',
      c: 'Not a Number',
      d: 'New and Negative',
    },
    correctAnswer: 'Not a Number',
  },
  {
    questionNumber: 9,
    question: 'What is the purpose of the "querySelector" method in JavaScript?',
    type: 'multipleChoice',
    options: {
      a: 'To select multiple elements',
      b: 'To select the first element that matches a specified CSS selector',
      c: 'To select elements by their class names',
      d: 'To select elements by their tag names',
    },
    correctAnswer: 'To select the first element that matches a specified CSS selector',
  },
  {
    questionNumber: 10,
    question: 'Which event is triggered when a user clicks on an HTML element?',
    type: 'multipleChoice',
    options: {
      a: 'change',
      b: 'submit',
      c: 'click',
      d: 'keydown',
    },
    correctAnswer: 'click',
  },
];

export default javascriptQuestions;
