// get the current URL path
const path = window.location.pathname;

// check if the path matches '/day-2' or '/day-3'
if (path === '/challenge/day-2' || path === '/challenge/day-3') {
    // redirect to the homepage
    window.location.href = '/';
}