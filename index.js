const apikey="15e383204c1b8a09dbfaaa4c01ed7e17";
const apiEndpoint="https://api.themoviedb.org/3";
const apiPaths={
    fetchAllCategories: apiEndpoint+"/genre/movie/list?api_key="+apikey,
    fetchMoviesList: (id)=>apiEndpoint+"/discover/movie?api_key="+apikey+"&with_genres="+id
}

    function init(){
    fetchAndBuildAllSections();
}

function fetchAndBuildAllSections(){
    fetch(apiPaths.fetchAllCategories)
        .then(res => res.json())
        .then(res=>{
            const categories=res.genres;
            if (Array.isArray(categories)&&categories.length){
                categories.forEach(category => {
                    fetchAndbuildMovieSection(apiPaths.fetchMoviesList(category.id),category);

                });
            }
            // console.table(categories);
        })
        .catch(err=>console.error(err));

}
function fetchAndbuildMovieSection(fetchUrl,category){
    console.log(fetchUrl,category);
    fetch(fetchUrl)
    .then(res => res.json())
    .then(res => {
        console.table(res.results);
    })
    .catch(err=>console.error(err))
}

window.addEventListener('load',function(){
init();
})