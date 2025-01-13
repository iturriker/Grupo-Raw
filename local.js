let headerLinks = document.body.querySelectorAll(".header-list > li > a");

// HEADER LINKS
for (i=0; i<headerLinks.length; i++)
{
    if (location.href.includes(headerLinks[i].getAttribute('href')))
        {headerLinks[i].classList.add("lastlink");}
}