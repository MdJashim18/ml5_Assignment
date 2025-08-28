document.getElementById("love_icon").addEventListener('click', function() {
    console.log("Mohammad Jashim Uddin");
    const loveCnt = document.getElementById("love_cnt").innerText;
    const loveNumber = parseInt(loveCnt);
    const love_cntIncreament = loveNumber+1;

    document.getElementById("love_cnt").innerText = love_cntIncreament;
});
