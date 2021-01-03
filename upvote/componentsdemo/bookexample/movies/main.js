new Vue({
    el: "#app",
    data: {
        movies: Seed.movies
    },
    computed: {
        sortedMovies(){
            return this.movies.sort((a,b)=>b.rating-a.rating)
        }
    },
    methods: {
        upVote(movieId){
         const movie=  this.movies.find(
                (movie)=> movieId===movie.id
            )
            movie.rating++
        }
    }
    
}

)