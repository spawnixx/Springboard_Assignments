export default class Post{
    constructor(title,content){
        this.title = title,
        this.content = content;
    }
    publish(){
        console.log(`Publishing: ${this.title}`);
        console.log(`${this.content}`);
    }
}