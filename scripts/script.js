// GOOGLE
let searchGoogle = document.getElementById('search-google');

searchGoogle.addEventListener('input', () => {
    if (searchGoogle.value == '') {
        document.getElementById('btn-srch-google').disabled = true;
        document.getElementById('btn-clr-google').disabled = true;
    } else {
        document.getElementById('btn-srch-google').disabled = false;
        document.getElementById('btn-clr-google').disabled = false;
    }
});
document.getElementById("btn-clr-google").addEventListener('click', () => {
    document.getElementById('search-google').value = '';
    document.getElementById('btn-clr-google').disabled = true;
    document.getElementById('btn-srch-google').disabled = true;
    document.getElementById('search-google').focus();
});


// DUCKDUCKGO
let searchDuck = document.getElementById('search-duck');

searchDuck.addEventListener('input', () => {
    if (searchDuck.value == '') {
        document.getElementById('btn-srch-duck').disabled = true;
        document.getElementById('btn-clr-duck').disabled = true;
    } else {
        document.getElementById('btn-srch-duck').disabled = false;
        document.getElementById('btn-clr-duck').disabled = false;
    }
});
document.getElementById("btn-clr-duck").addEventListener('click', () => {
    document.getElementById('search-duck').value = '';
    document.getElementById('btn-clr-duck').disabled = true;
    document.getElementById('btn-srch-duck').disabled = true;
    document.getElementById('search-duck').focus();
});


// BING
let searchBing = document.getElementById('search-bing');

searchBing.addEventListener('input', () => {
    if (searchBing.value == '') {
        document.getElementById('btn-srch-bing').disabled = true;
        document.getElementById('btn-clr-bing').disabled = true;
    } else {
        document.getElementById('btn-srch-bing').disabled = false;
        document.getElementById('btn-clr-bing').disabled = false;
    }
});
document.getElementById("btn-clr-bing").addEventListener('click', () => {
    document.getElementById('search-bing').value = '';
    document.getElementById('btn-clr-bing').disabled = true;
    document.getElementById('btn-srch-bing').disabled = true;
    document.getElementById('search-bing').focus();
});
