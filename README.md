# JS-Audit-Tools

## Script to Find Constructors in Solidity Contracts
This script allows you to find and analyze constructors in Solidity contracts. It scans a single file or all files within a directory and extracts information about the constructors found.

## Prerequisites
Node.js and npm should be installed on your system.

## Installation
1. Copy-paste the script into a separate file in the project you want to scan on the code editor of your choice.
- **Note:** In the example on this page, the script is in the same directory as the contract to be tested, in a separate file named `script.js`.
2. Make sure to have installed the remaining dependencies.
```
npm install readline colors
```

## Usage
1. Open the terminal and navigate to the directory that contains both the script and the contract.
- **Example:**
```
cd contracts
```
2. Run the following command to execute the script:
```
node script.js
```
3. The script will prompt you to enter the file path or folder you want to analyze. You can provide the path to a single Solidity file or a directory containing multiple Solidity files.
4. Once the analysis is complete, the script will display the information about each constructor found in the specified file(s). It includes details such as the file name, presence of 0 address checks, constructor arguments, and the constructor code.
- If the constructor code includes == address(0), it indicates the potential existence of a check for a 0 address.
- If the constructor code does not include any checks for a 0 address, it will display a message indicating the absence of such checks.
- 
## Example
Here is an example of running the script:
```
$ node script.js
Enter file path or folder: ./
```
In this case, the script will analyze all Solidity files within the same directory and display the information about the constructors found.
**Example output:**
```
Constructor in JBXBuybackDelegate.sol:
No checks for 0 address exist
Arguments: IERC20 _projectToken,
        IWETH9 _weth,
        IUniswapV3Pool _pool,
        IJBPayoutRedemptionPaymentTerminal3_1 _jbxTerminal
Code: projectToken = _projectToken;
        pool = _pool;
        jbxTerminal = _jbxTerminal;
        _projectTokenIsZero = address(_projectToken) < address(_weth);
        weth = _weth;
==============================
```

## Notes
- The script uses regular expressions to identify constructors in the Solidity files. Ensure that your Solidity code follows standard formatting for constructors for accurate results.
- The script requires appropriate read permissions to access the specified file(s) or folder.
- The script is provided as-is and may require modification or further customization based on your specific requirements.

## Acknowledgements
This script is a JavaScript adaptation of the original Python script created by pxng0lin (https://github.com/pxng0lin/python-tools).

## License
This script is licensed under the MIT License. Feel free to use, modify, and distribute it according to the terms of the license.
