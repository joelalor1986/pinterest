window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
        loadMoreContent();
    }
});

function loadMoreContent() {
    alert('hola');
}