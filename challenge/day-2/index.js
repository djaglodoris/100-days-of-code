// get the current URL path
const path = window.location.pathname;

// check if the path matches '/day-2' or '/day-3'
if (path === 'https://github.com/djaglodoris/100-days-of-code/main/challenge/day-2' || path === 'https://github.com/djaglodoris/100-days-of-code/main/challenge/day-3') {
    // redirect to the homepage
    window.location.href = 'djaglodoris.github.io/100-days-of-code/';
}