
function LoveIconClick(id) {
    const loveCnt = document.getElementById(id).innerText;
    const loveNumber = parseInt(loveCnt);
    const love_cntIncreament = loveNumber + 1;

    document.getElementById(id).innerText = love_cntIncreament;
}

document.getElementById("love_icon").addEventListener('click', function () {
    LoveIconClick("love_cnt");
});
document.getElementById("love_icon1").addEventListener('click', function () {
    LoveIconClick("love_cnt");
});
document.getElementById("love_icon2").addEventListener('click', function () {
    LoveIconClick("love_cnt");
});
document.getElementById("love_icon3").addEventListener('click', function () {
    LoveIconClick("love_cnt");
});
document.getElementById("love_icon4").addEventListener('click', function () {
    LoveIconClick("love_cnt");
});
document.getElementById("love_icon5").addEventListener('click', function () {
    LoveIconClick("love_cnt");
});
document.getElementById("love_icon6").addEventListener('click', function () {
    LoveIconClick("love_cnt");
});
document.getElementById("love_icon7").addEventListener('click', function () {
    LoveIconClick("love_cnt");
});
document.getElementById("love_icon8").addEventListener('click', function () {
    LoveIconClick("love_cnt");
});

const serviceArray = [];
function coinDecrease(id, id1, id2) {
    const coinNumber = document.getElementById(id).innerText;
    const coinNumberInt = parseInt(coinNumber);
    const serviceName = document.getElementById(id1).innerText;
    const serviceNumber = document.getElementById(id2).innerText;
    if (coinNumberInt < 20) {
        alert("You don't have enough coin.To call at least 20 coin");
        return;
    }
    alert(serviceName + " - " + serviceNumber);
    const coinDecrease = coinNumberInt - 20;
    document.getElementById(id).innerText = coinDecrease;


    const serviceObject = {
        name: "",
        number: 0,
        date: new Date().toLocaleTimeString()
    }
    serviceObject.name = serviceName;
    serviceObject.number = serviceNumber;
    serviceArray.push(serviceObject);


    const containerServices = document.getElementById("show_services");
    containerServices.innerHTML = "";
    for (const element of serviceArray) {

        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FAFAFA] p-5 rounded-xl mt-5">
                <div>
                    <h1 class="text-2xl font-bold font-['Roboto']">${element.name}</h1>
                    <p class="text-lg text-gray-400">${element.number}</p>
                </div>
                <div>
                    <h1>${element.date}</h1>
                </div>
        </div>
        `
        containerServices.appendChild(div);
    }

}


document.getElementById("call_button").addEventListener('click', function () {
    coinDecrease("coin", "service_name", "service_Number");

});
document.getElementById("call_button1").addEventListener('click', function () {
    coinDecrease("coin", "service_name1", "service_Number1");
});
document.getElementById("call_button2").addEventListener('click', function () {
    coinDecrease("coin", "service_name2", "service_Number2");
});
document.getElementById("call_button3").addEventListener('click', function () {
    coinDecrease("coin", "service_name3", "service_Number3");
});
document.getElementById("call_button4").addEventListener('click', function () {
    coinDecrease("coin", "service_name4", "service_Number4");
});
document.getElementById("call_button5").addEventListener('click', function () {
    coinDecrease("coin", "service_name5", "service_Number5");
});
document.getElementById("call_button6").addEventListener('click', function () {
    coinDecrease("coin", "service_name6", "service_Number6");
});
document.getElementById("call_button7").addEventListener('click', function () {
    coinDecrease("coin", "service_name7", "service_Number7");
});
document.getElementById("call_button8").addEventListener('click', function () {
    coinDecrease("coin", "service_name8", "service_Number8");
});





document.getElementById("clear_history").addEventListener('click', function () {
    document.getElementById("show_services").innerHTML = "";
    while (serviceArray.length > 0) {
        serviceArray.pop();
    }
});


function copyNumberIncreament(id, id1) {
    const copyCnt = document.getElementById(id).innerText;
    const copyCntInt = parseInt(copyCnt);
    const copyCntIncrease = copyCntInt + 1;

    document.getElementById("copy_link").innerText = copyCntIncrease;
    const serviceNumber = document.getElementById(id1).innerText;
    alert("Number has been copied" + " - " + serviceNumber);
    navigator.clipboard.writeText(serviceNumber).then()
}
document.getElementById("copy_button").addEventListener('click', function () {
    copyNumberIncreament("copy_link", "service_Number");

});
document.getElementById("copy_button1").addEventListener('click', function () {
    copyNumberIncreament("copy_link", "service_Number1");

});
document.getElementById("copy_button2").addEventListener('click', function () {
    copyNumberIncreament("copy_link", "service_Number2");

});
document.getElementById("copy_button3").addEventListener('click', function () {
    copyNumberIncreament("copy_link", "service_Number3");

});
document.getElementById("copy_button4").addEventListener('click', function () {
    copyNumberIncreament("copy_link", "service_Number4");

});
document.getElementById("copy_button5").addEventListener('click', function () {
    copyNumberIncreament("copy_link", "service_Number5");

});
document.getElementById("copy_button6").addEventListener('click', function () {
    copyNumberIncreament("copy_link", "service_Number6");

});
document.getElementById("copy_button7").addEventListener('click', function () {
    copyNumberIncreament("copy_link", "service_Number7");

});
document.getElementById("copy_button8").addEventListener('click', function () {
    copyNumberIncreament("copy_link", "service_Number8");

});
