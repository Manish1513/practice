

const posts = [];
let lastActivityTime;


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}


function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });
}


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}
createPost({ title: 'Post One', body: 'This is Post One' })
    .then(() => updateLastUserActivityTime())
    .then(updatedActivityTime => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', updatedActivityTime);
    })
    .then(() => deletePost())
    .then(deletedPost => {
        console.log('Deleted Post:', deletedPost);
        console.log('Remaining Posts:', posts);
    })
    .catch(error => console.error(error));
