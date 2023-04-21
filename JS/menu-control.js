var currentUrl = window.location.pathname;
var pathnameArray = currentUrl.split('/');
var filename = pathnameArray[pathnameArray.length - 1];
let newUrl = './' + filename;
console.log(newUrl);

$('a[href="' + newUrl + '"]').each(function () {
    if (!$(this).hasClass('logo')) {
        console.log("Funcionando");
        $(this).addClass('activeLink');
    }
});
