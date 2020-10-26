//MEDIA QUERY MANAGER
/*
0-600px: Phone
600 - 900px: Tablet portrait
900 - 1200px: Tablet landscape
1200-1800px: Our normal desktop styles
1800px +: big desktop
ORDER:  Base + typography > general layout + grid >
        page layout > components
$breakpoint arguments choices:
-phone-small
-phone
-tab-prt
-tab-land
-big-desktop
1em = 16px
*/
export const respond = (breakpoint, content)  =>{
    //for 450px
    if (breakpoint === "phone-small") {
        return (
        `@media only screen and (max-width: 28.125em) {
            ${content}
        };`
        );
    }
    //for 600px
    else if (breakpoint === "phone") {
        return (
        `@media only screen and (max-width: 37.5em) {
            ${content}
        };`
        );
    }
    //for 900px
    if (breakpoint === "tab-port") {
        return (
        `@media only screen and (max-width: 56.25em) {
            ${content}
        };`
        );
    }
    //for 1200px
    if (breakpoint === "tab-land") {
        return (
        `@media only screen and (max-width: 75em) {
            ${content}
        };`
        );
    }
    //for 1800px
    if (breakpoint === "big-desktop") {
        return (
        `@media only screen and (max-width: 112.5em) {
            ${content}
        };`
        );
    }
}