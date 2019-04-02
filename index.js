let likeCount = 0; //count tracks number of 'likes' completed
setInterval(function () {
    //likes stores the like button for each post
    let likes = document.getElementsByClassName('glyphsSpriteHeart__outline__24__grey_9'),
        //nextArrow captures the selection to move to the next post
        nextArrow = document.querySelector('.coreSpriteRightPaginationArrow');
    if (likes[1]) {
        likes = likes[1].parentElement;
        likeCount++ , likes.click();
    }
    nextArrow.click();
    console.log(`Posts liked: ${likeCount}`); //prints number of 'likes' performed to console
}, 12000); //sets the frequency to perform function; 12000 = 12 seconds