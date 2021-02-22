// class Story {
//     constructor(title, creator) {
//         this.title = title;
//         this.creator = creator;
//         this._comments = [];
//         this._likes = [];
//     }

//     get likes() {
//         if (this._likes.length <= 0) {
//             return `${this.title} has 0 likes`;
//         }

//         if (this._likes.length === 1) {
//             return `${this._likes.shift()} likes this story!`;
//         }

//         return `${this.creator} of the first person that liked the story and ${this._likes.length} others like this story!`;
//     }

//     like(username) {
//         let check = this._likes.find(x => x.includes(username));

//         if (check) {
//             throw new Error(`You can't like the same story twice!`);
//         }

//         if (username === this.creator) {
//             throw new Error(`You can't like your own story!`);
//         }

//         this._likes.push(username);
//         return `${username} liked ${this.title}!`;
//     }

//     dislike(username) {
//         let check = this._likes.find(x => x.includes(username));

//         if (!check) {
//             throw new Error(`You can't dislike this story!`);
//         }

//         return `${username} disliked ${this.title}`;
//     }

//     comment(username, content, id) {
//         let idCheck = this._likes.find(x => x.id == id);



//         return `${username} commented on ${this.title}`;
//     }
// }
class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }
 
    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }
        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }
 
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (this.creator === username) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }
 
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        const checkFirst = this._likes.indexOf(username);
        this._likes.splice(checkFirst, 1);
        return `${username} disliked ${this.title}`;
    }
 
    comment(username, content, id = undefined) {
        const idFirst = this._comments.filter((c) => c.id === id)[0];
        if (id === undefined || idFirst === undefined) {
            const idSecond = this._comments.length + 1;
            this._comments.push({
                id: idSecond,
                username,
                content,
                replies: [],
            });
            return `${username} commented on ${this.title}`;
        }
        const reolyed = `${id}.${idFirst.replies.length + 1}`;
        idFirst.replies.push({
            id: reolyed,
            username,
            content,
        });
        return 'You replied successfully';
    }
 
    toString(sortingType) {
        let ress = `Title: ${this.title}\n`;
        ress += `Creator: ${this.creator}\n`;
        ress += `Likes: ${this._likes.length}\nComments:`;
        this._comments.sort(this.sortBy(sortingType)).forEach((com) => {
            let allReplies = [];
            ress += `\n-- ${com.id}. ${com.username}: ${com.content}`;
            if (com.replies.length > 0) {
                ress += '\n';
            }
            com.replies.sort(this.sortBy(sortingType)).forEach((rep) => {
                allReplies.push(`--- ${rep.id}. ${rep.username}: ${rep.content}`);
            });
            ress += allReplies.join('\n');
        });
        return ress;
    }
 
    sortBy(type) {
        if (type === 'asc') {
            return (a, b) => a.id - b.id;
        } else if (type === 'desc') {
            return (a, b) => b.id - a.id;
        }
        return (a, b) => a.username.localeCompare(b.username);
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));

