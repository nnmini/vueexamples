new Vue({
    el: "#app",
    data: {
        submissions: Seed.submissions
    },
    computed: {
        sortedSubmissions(){
            return this.submissions.sort((a,b)=>b.votes-a.votes)
        }
    },
    methods: {
        upVote(submittedId){
         const submission=  this.submissions.find(
                (submission)=> submittedId===submission.id
            )
            submission.votes++
        }
    }
}
)