# Temperature Converter CLI

The **Temperature Converter CLI** is a *command-line application* created to seamlessly convert temperatures across various scales. This project stands as a tangible illustration of the **SOLID principles** in practice, emphasizing a **structural design** focused on features rather than technical intricacies.

## Table of Contents

- [Temperature Converter CLI](#temperature-converter-cli)
  - [Table of Contents](#table-of-contents)
  - [Usage](#usage)
  - [Features](#features)
  - [Source Code Architecture](#source-code-architecture)
    - [Directory Structure](#directory-structure)
    - [SOLID Principles in Action](#solid-principles-in-action)
  - [Contributing](#contributing)
  - [Contact](#contact)

## Usage

To effectively utilize the **Temperature Converter CLI**, initiate the application in your terminal by executing the command `node index.js`. The main parameter, representing the source degree scale, should be specified in lowercase (e.g., celsius, fahrenheit, kelvin). Additionally, use the -d flag followed by the temperature value to input the degrees, and the -s flag followed by the target scale in lowercase too to indicate the desired conversion. For example, to convert 25 degrees Celsius to Fahrenheit, the command would be `node index.js celsius -d 25 -s fahrenheit`. The CLI interface guides you through the process, providing the converted temperature as output.

```cmd
> node .\index.js celsius -s farenheit -d 100
100 celsius degrees are 212 farenheit degrees
```

## Features

The **Temperature Converter CLI** boasts a range of features designed to provide a seamless and efficient temperature conversion experience. Each feature aligns with the SOLID principles, ensuring a modular and extensible codebase. Whether you are a developer exploring the application's inner workings or an end user seeking a straightforward conversion process, these features collectively contribute to a robust and user-friendly CLI. Let's delve into the key functionalities that make the **Temperature Converter CLI** a versatile and educational tool for working with temperature scales.

- **Feature 1 - Converts Celsius to Fahrenheit, Kelvin, and Reaumur**: This feature allows users to input a temperature value in Celsius and obtain its equivalent in Fahrenheit, Kelvin, and Reaumur, providing a comprehensive conversion experience.
- **Feature 2 - Converts Fahrenheit to Celsius**: Users can input a temperature value in Fahrenheit to receive its equivalent in Celsius. This feature facilitates seamless conversion between the two widely used temperature scales.
- **Feature 3 - Converts Kelvin to Celsius**: This functionality enables users to convert temperatures from Kelvin to Celsius. It supports scientific and engineering applications where Kelvin is commonly used.
- **Feature 4 - Converts Reaumur to Celsius**: Users can input a temperature value in Reaumur, and the CLI will convert it to Celsius. This feature accommodates scenarios where Reaumur is utilized and allows for flexible temperature unit conversions.

## Source Code Architecture

Understanding the architecture of the **Temperature Converter CLI** is crucial for developers seeking insights into the organization and design principles applied in the codebase. The architecture is crafted to align with best practices, fostering maintainability, extensibility, and adherence to SOLID principles. Below, we delve into the key architectural components of the project:

### Directory Structure

The project is organized into feature folders, each dedicated to a specific temperature scale, alongside a Core folder for shared components. Within each feature folder, there are two subfolders:

- **Celsius/, Fahrenheit/, Kelvin/, Reaumur/**: Feature folders managing the logic for temperature conversion specific to each scale.
  - **Actions/**: Contains action modules responsible for executing specific tasks based on the arguments passed to the command. An orchestrator action coordinates the execution of the sub-actions.
  - **Commands/**: Holds command modules that define the commands related to the respective temperature scale.
- **Core/**: Contains common or shared components utilized across different temperature scales.
- **index.js**: The entry point of the CLI, orchestrating the interaction between the feature modules and providing a unified command-line interface.

### SOLID Principles in Action

The feature folders, with *Actions* and *Commands* subfolders, align with *SOLID principles*, providing a modular and maintainable design:

- **Single Responsibility Principle (SRP)**: In each feature folder, there's one main job. The *Actions* part deals with how things are done or executed, and the *Commands* part is in charge of defining what specific commands should do. Also, each separate code file has its own specific job or responsibility within these folders.
- **Open/Closed Principle (OCP)**: The feature folders are designed so we can easily add new things if needed without changing the existing ones. An example of this is the orchestrator action, which decides what to do based on the information given, without needing to change the existing features.
- **Liskov Substitution Principle (LSP)**: Inside each feature folder, we can switch out or replace smaller parts without messing up the whole system. This works well for *Actions*, especially with the orchestrator. The orchestrator figures out the right action based on the given information. So, you can have different actions using the same basic structure.
- **Interface Segregation Principle (ISP)**: The *Actions* and *Commands* subfolders stick to certain rules or patterns, which helps to avoid unnecessary connections between different parts. Even though these rules aren't written down in the code, the JavaScript functions in both *Actions* and *Commands* follow the same basic structure. This helps keep things organized and avoids unnecessary complications.
- **Dependency Inversion Principle (DIP)**: The main parts of the program, found in the *index.js* entry point, use abstract ideas provided by the feature folders. This setup encourages a flexible connection between different parts. Specifically, we're adding support for new commands using the *Command* interface from the *Commander* package. Any new commands we add to the application depend on this common interface.

This architectural overview provides a clear and granular structure, allowing developers to navigate the codebase efficiently and promoting a modular and maintainable design.

## Contributing

Thank you for your interest in contributing to the **Temperature Converter CLI**! Your contributions help enhance the functionality and versatility of the project. If you have ideas for additional features or improvements, we encourage you to bring them to life! Your creativity and expertise can make a significant impact.

To contribute, please follow these general guidelines:

1. **Fork the Repository**: Start by forking the repository to your GitHub account.
1. **Clone the Repository**: Clone the forked repository to your local machine using the git clone command.
1. **Create a Branch**: Create a new branch for your contribution with a descriptive name.
1. Make Changes: Implement your changes or add new features. Ensure that your code adheres to the established coding standards.
1. **Commit Changes**: Commit your changes with a clear and concise commit message.
1. **Push Changes**: Push your changes to your forked repository on GitHub.
1. **Submit a Pull Request**: Open a pull request on the main repository. Provide a detailed description of your changes, the rationale behind them, and any relevant information for reviewers.
1. **Discuss and Improve**: Participate in discussions, address feedback, and make any necessary improvements to your pull request.

## Contact

If you have questions, suggestions, or just want to connect, feel free to reach out:

- X: [@jaloplo](https://twitter.com/jaloplo)
- Mastodon: [@jaimelopezlopez@techhub.social](https://techhub.social/@jaimelopezlopez)
- Blog: [Intranet from the Trenches](https://intranetfromthetrenches.substack.com/)

I look forward to hearing from you!
