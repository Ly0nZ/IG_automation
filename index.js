let count = 0;
setInterval(function() {
    let likes = document.getElementsByClassName('glyphsSpriteHeart__outline__24__grey_9'),
        nextArrow = document.querySelector('.coreSpriteRightPaginationArrow');
    if (likes[1]) {
        likes = likes[1].parentElement;
        likeCount++ , likes.click();
    }
    nextArrow.click();
    console.log(`Posts liked: ${likeCount}`);
}, 4000);