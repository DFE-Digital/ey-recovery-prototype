// 1. install pa11y as detailed here: https://github.com/pa11y/pa11y
// 2. install node
// 3. add urls for any new pages
// 4. run this on the command line: node ./interimSite.js 

const pa11y = require('pa11y');

// Uncomment the line for the WCAG 2.1 level that you want to test against. 2.1 AA is our target.
// const wcagStandard = "WCAG2A";
const wcagStandard = "WCAG2AA";
// const wcagStandard = "WCAG2AAA";


const runners = ['axe','htmlcs'];

// These are the basic auth credentials for the interim site:
const credentials = 'eye:recovery';
const encodedCredentials = Buffer.from(credentials).toString('base64');

// This is the base URL for the interim site
const baseUrl = 'https://child-development-training-prototype.london.cloudapps.digital/';


// This is the list of pages to test. It's a simple baseUrl + page slug combination.
processPage(baseUrl);
processPage(baseUrl + 'home-existing');
processPage(baseUrl + 'introduction/introduction-overview');
processPage(baseUrl + 'introduction/1');
processPage(baseUrl + 'introduction/1-1');
processPage(baseUrl + 'introduction/1-1-1');
processPage(baseUrl + 'introduction/1-1-1-1');
processPage(baseUrl + 'introduction/1-1-1-2');
processPage(baseUrl + 'introduction/1-1-1-3');
processPage(baseUrl + 'introduction/1-1-1-4');
processPage(baseUrl + 'introduction/1-1-1-5');
processPage(baseUrl + 'introduction/1-1-1-6');
processPage(baseUrl + 'introduction/1-1-1-7');
processPage(baseUrl + 'introduction/1-1-2');
processPage(baseUrl + 'introduction/1-1-2-1');
processPage(baseUrl + 'introduction/1-1-2-2');
processPage(baseUrl + 'introduction/1-1-2-3');
processPage(baseUrl + 'introduction/1-1-2-4');
processPage(baseUrl + 'introduction/1-1-2-5');
processPage(baseUrl + 'introduction/1-1-2-6');
processPage(baseUrl + 'introduction/1-1-2-7');
processPage(baseUrl + 'introduction/1-1-2-8');
processPage(baseUrl + 'introduction/1-1-2-9');
processPage(baseUrl + 'introduction/1-1-2-10');

/// I'm not sure any of these pages still exist...
// processPage(baseUrl + 'development/brain-development-overview-existing');
// processPage(baseUrl + 'module-intro');
// processPage(baseUrl + 'submodule-intro');
// processPage(baseUrl + 'topic-intro');
// processPage(baseUrl + 'brain-parts');
// processPage(baseUrl + 'quiz-1');
// processPage(baseUrl + 'quiz-1-right');
// processPage(baseUrl + 'development-birth-two');
// processPage(baseUrl + 'piaget-sensorimotor');
// processPage(baseUrl + 'piaget-current-research');
// processPage(baseUrl + 'relationships-emotions');
// processPage(baseUrl + 'recap');
// processPage(baseUrl + 'test-intro');

// process page for accessibility issues. Takes a URL of a page.
function processPage(url)
{
    // The actions to be performed before testing...
    var actions = 
    {
        standard: wcagStandard, // Set the WCAG level
        runners: runners,       // Set the accessibility test runner(s)
        headers: {              // Set the Basic Auth credentials
            Authorization: `Basic ${encodedCredentials}`
        },
    };

    // Execute the tests on the page (url) first setting up pa11y (actions)
    pa11y( url, actions )
        .then((results) => { // then, when we get some results...
            dumpResults(url, results); // dump the results to the console.log
        });
}

// Dump the results of testing the page specified by url
function dumpResults(url, results)
{
    // Printout the page url
    console.log("Page: " + url);

    // If we have any errors... print out the error count 
    if( results.issues != null && results.issues.length > 0)
    {
        const errorCount = "Errors: " + results.issues.length;
        console.log(errorCount);
    }
   
    // For each error...
    for( i = 0; i < results.issues.length; i++)
    {
        // Log the type of issue, and the category of error
        console.log("\t" + results.issues[0].type + " : " + results.issues[0].code);
        // Log out the error description
        console.log("\t\t" + results.issues[0].message);
        // Log out the html that is... problematic.
        console.log("\t\t" + results.issues[0].context);
    }
}
interimSite.js
Displaying interimSite.js.