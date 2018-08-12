export var QuoteList = []

export class Quote {
    private id: number;
    public created: Date;
    public detailsVisible: boolean;
    public quoteUpvotes: number;
    public quoteDownvotes: number;

    constructor(public creator: string, public qouteName: string, public description: string) {
        this.id = QuoteList.length + 1
        this.created = new Date()
        this.detailsVisible = false
        this.quoteUpvotes = 0
        this.quoteDownvotes = 0 
    }
}
