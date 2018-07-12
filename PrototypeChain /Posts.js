function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let post = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;

            if (this.comments.length > 0) {
                post += "\nComments:";

                for (let comment of this.comments) {
                    post += `\n * ${comment}`;
                }
            }

            return post;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

console.log(posts());

let classes = posts();

let test = new classes.BlogPost("TestTitle", "TestContent", 5);
console.log(test.toString());
test.view().view().view();
console.log(test.toString());