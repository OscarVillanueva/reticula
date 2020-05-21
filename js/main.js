Vue.component("materia", {
    template: "#materia-template",
    props: [ "subject", "uid", "credits", "requirements" ],

    data() {
        return {
            // Verificamos que esten los requisitos
            isReq: this.requirements !== undefined,

            // Verificamos si hay prerequisitos
            isPre: this.requirements.pre !== undefined,

            // Verificamos si hay correquisitos
            isCo: this.requirements.co !== undefined,
        }
    }
})

new Vue({
    el: "#app",
    mounted() {
        console.log(this.subjects);
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
            console.log(this.grouped);
            return this.grouped

        }
    },
    data() {
        return {

            subjects: [
                {
                    nombre: "React",
                    clave: "a866s",
                    semestre: "1",
                    creditos: "4-3-2",
                    requisitos: {
                        pre: [
                            "JavaScript",
                        ],
                        co: [
                            "Base de datos"
                        ]
                    }
                },
                {
                    nombre: "Angular",
                    clave: "a866s",
                    semestre: "1",
                    creditos: "4-3-2",
                    requisitos: {
                        pre: [
                            "JavaScript",
                        ],
                        co: [
                            "Base de datos"
                        ]
                    }
                },
                {
                    nombre: "Vue",
                    clave: "a866s",
                    semestre: "2",
                    creditos: "4-3-2",
                    requisitos: {
                        pre: [
                            "JavaScript",
                        ],
                        co: [
                            "Base de datos"
                        ]
                    }
                }
            ],

            grouped: []

        }
    }
})