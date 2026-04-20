

// Step 5: Import datejs 
require('datejs');

/**
 * Task 2: Create the combineUsers function
 */
function combineUsers(...args) {
    // Initialize the return object
    const combinedObject = {
        users: []
    };

    // Use spread operator to merge all arrays into one
    args.forEach(userArray => {
        combinedObject.users = [...combinedObject.users, ...userArray];
    });

    // Use datejs to format today's date as M/d/yyyy
    const today = new Date();
    combinedObject.merge_date = today.toString('M/d/yyyy');

    return combinedObject;
}

// Export for the test suite
module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};