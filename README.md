How did event.preventDefault() help in handling form submission?
event.preventDefault() stops the form from submitting and refreshing the page. This lets me check the inputs using JavaScript first. So, the form only submits when everything is correct.


What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
HTML5 validation uses built-in rules like required, email type, and pattern. It is easy to use but has limited control.
JavaScript validation gives more flexibility and allows us to show custom messages and handle cases like password matching.
We use both because HTML5 does basic checking and JavaScript improves user experience.


Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
I used localStorage to save the username after form submission. When the page reloads, the username is fetched and filled automatically.
The limitation is that localStorage is not secure. Anyone can access the data from the browser, so we should not store sensitive information like passwords.


Describe a challenge you faced in implementing the real-time validation and how you solved it.
One challenge I faced was checking the confirm password field in real time. It should match the password while the user is typing.
I solved this by writing a function to compare both fields and running it on every input.


How did you ensure that custom error messages were user-friendly and displayed at the appropriate times
I displayed error messages below each input field. The messages show only when there is an error and disappear when the user corrects it.
This helps the user understand the issue clearly and fix it easily.