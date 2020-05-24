Vue.component("materia", {
    template: "#materia-template",
    props: [ "subject", "uid", "credits", "requirements" ],
    computed: {
        isReq () {
            // Verificamos que esten los requisitos
            return this.requirements !== undefined
        },
        isPre() {
            if ( this.isReq ) return this.requirements.pre !== undefined
            else return false
        },
        isCo() {
            if ( this.isReq ) return this.requirements.co !== undefined
            else return false
        }
    },
    mounted() {
        // console.log("montado");
    }
})

new Vue({
    el: "#app",
    async mounted() {

        const response = await fetch("db.json")
        const { Materias } = await response.json()

        this.subjects = Materias
    },
    computed: {
        subjectsBySemester(){

            if ( this.subjects.length > 0 ) {

                let semester = 1 
                let bridge = []

                do {

                    bridge = this.subjects.filter( subject => Number(subject.semestre) ===  semester)
    
                    if (bridge.length > 0)
                        this.grouped.push( bridge )
    
                    semester = semester + 1
                }
                while ( bridge.length > 0 );

            }
            return this.grouped

        }
    },
    data() {
        return {

            subjects: [],
            grouped: []

        }
    }
})