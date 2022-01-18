
class Classe {

    name: String;
    description: String;
    video: String;
    date_init: Date;
    date_end: Date;
    date_created: Date;
    date_updated: Date;
    total_comments: Number;

    constructor(classe: Classe) {
        this.name = classe.name
        this.description = classe.description;
        this.video = classe.video
        this.date_init = classe.date_init
        this.date_end = classe.date_end
        this.date_created = classe.date_created
        this.date_updated = classe.date_updated
        this.total_comments = classe.total_comments
    }
}

export = Classe;