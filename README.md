# JS-Audit-Tools

## Script to Find Constructors in Solidity Contracts
This script allows you to find and analyze constructors in Solidity contracts. It scans a single file or all files within a directory and extracts information about the constructors found.

## Prerequisites
Node.js and npm should be installed on your system.
## Installation
1. Clone the repository or download the script file directly.
2. Open a terminal and navigate to the script's directory.
3. Run the following command to install the required dependencies:
```
Copy code
npm install
```
## Usage
1. Open a terminal and navigate to the script's directory.
2. Run the following command to execute the script:
```
node script.js
```
3. The script will prompt you to enter the file path or folder you want to analyze. You can provide the path to a single Solidity file or a directory containing multiple Solidity files.
4. Once the analysis is complete, the script will display the information about each constructor found in the specified file(s). It includes details such as the file name, presence of 0 address checks, constructor arguments, and the constructor code.
- If the constructor code includes == address(0), it indicates the potential existence of a check for a 0 address.
- If the constructor code does not include any checks for a 0 address, it will display a message indicating the absence of such checks.
## Example
Here is an example of running the script:
```
$ node script.js
Enter file path or folder: contracts/
```
In this case, the script will analyze all Solidity files within the contracts/ directory and display the information about the constructors found.

## Notes
- The script uses regular expressions to identify constructors in the Solidity files. Ensure that your Solidity code follows standard formatting for constructors for accurate results.
- The script requires appropriate read permissions to access the specified file(s) or folder.
- The script is provided as-is and may require modification or further customization based on your specific requirements.
## License
This script is licensed under the MIT License. Feel free to use, modify, and distribute it according to the terms of the license.
