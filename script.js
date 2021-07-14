window.onload = () => {

    document.getElementById("billboard").style.minHeight = window.innerHeight + 'px';


    /* Change Image for mobile */
    const windowResize = window.onresize = () => {

        const adSectionImageOne = document.getElementById("ad-section-image-1");
        const mq = window.matchMedia("(max-width: 500px)"); /* Save the media query match rule in a variable*/

        if (mq.matches) { /* If the rule MATCHES*/
            adSectionImageOne.src = "images/section-1-bg-m.jpg"; /* Change image */
        } else {
            adSectionImageOne.src = "images/section-1-bg.jpg";
        }


    }

    windowResize();

    /* End of change image for mobile*/



    /* Show and Hide Mobile Menu */

    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuLinks = document.querySelectorAll(".mobile-nav-a");

    mobileMenuButton.onclick = () => {

        if (mobileMenu.style.display === "flex") {

            document.body.style.overflow = "visible";

            mobileMenu.style.height = "0vh";

            setTimeout(() => {
                for (i = 0; i < mobileMenuLinks.length; i++) {
                    mobileMenuLinks[i].style.display = "none";
                }
            }, 200);

            setTimeout(() => {
                mobileMenu.style.display = "none";
            }, 500);

        }

        else {

            document.body.style.overflow = "hidden";

            mobileMenu.style.display = "flex";

            setTimeout(() => {
                mobileMenu.style.height = "100vh";
            }, 100);

            setTimeout(() => {
                for (i = 0; i < mobileMenuLinks.length; i++) {
                    mobileMenuLinks[i].style.display = "block";
                }
            }, 200);
        }

    }

    /* End of Show and Hide Mobile Menu */





}