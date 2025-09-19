// favourite count function
function heartsCount(id) {
    const heartCount = parseInt(document.getElementById('heart-count').innerText)
    const newHeartCount = heartCount + 1
    document.getElementById('heart-count').innerText = newHeartCount 
}

document.getElementById('favourite1').addEventListener('click', function (e) {
    e.preventDefault();
    heartsCount('favourite1')
})
document.getElementById('favourite2').addEventListener('click', function (e) {
    e.preventDefault();
    heartsCount('favourite2')
})
document.getElementById('favourite3').addEventListener('click', function (e) {
    e.preventDefault();
    heartsCount('favourite3')
})
document.getElementById('favourite4').addEventListener('click', function (e) {
    e.preventDefault();
    heartsCount('favourite4')
})
document.getElementById('favourite5').addEventListener('click', function (e) {
    e.preventDefault();
    heartsCount('favourite5')
})
document.getElementById('favourite6').addEventListener('click', function (e) {
    e.preventDefault();
    heartsCount('favourite6')
})
document.getElementById('favourite7').addEventListener('click', function (e) {
    e.preventDefault();
    heartsCount('favourite7')
})
document.getElementById('favourite8').addEventListener('click', function (e) {
    e.preventDefault();
    heartsCount('favourite8')
})
document.getElementById('favourite9').addEventListener('click', function (e) {
    e.preventDefault();
    heartsCount('favourite9')
})




// coin reduce
function coinsCounter(id) {
    const coinCount = parseInt(document.getElementById('coin-count').innerText)

    if (coinCount < 20) {
        alert('Not enough Coin to make call')
        return
    }
    const newCoin = coinCount - 20;

    document.getElementById('coin-count').innerText = newCoin;
}


document.getElementById('call1').addEventListener('click', function (e) {
    e.preventDefault()

    coinsCounter('call1');
    
})
document.getElementById('call2').addEventListener('click', function (e) {
    e.preventDefault()

    coinsCounter('call2');
    
})
document.getElementById('call3').addEventListener('click', function (e) {
    e.preventDefault()

    coinsCounter('call3');
    
})
document.getElementById('call4').addEventListener('click', function (e) {
    e.preventDefault()

    coinsCounter('call4');
    
})
document.getElementById('call5').addEventListener('click', function (e) {
    e.preventDefault()

    coinsCounter('call5');
    
})
document.getElementById('call6').addEventListener('click', function (e) {
    e.preventDefault()

    coinsCounter('call6');
    
})
document.getElementById('call7').addEventListener('click', function (e) {
    e.preventDefault()

    coinsCounter('call7');
    
})
document.getElementById('call8').addEventListener('click', function (e) {
    e.preventDefault()

    coinsCounter('call8');
    
})
document.getElementById('call9').addEventListener('click', function (e) {
    e.preventDefault()

    coinsCounter('call9');
    
})



// Call History


document.getElementById('call1').addEventListener('click', function (e) {
    e.preventDefault()
    const callHistory = document.getElementById('call-history')


    const data = {
        name : "National Emergency Number",
        no : 999,
        date : new Date().toLocaleTimeString() 
    }

        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mt-4 space-y-3 overflow-y-auto max-h-[500px]">
                    <div class="flex justify-between items-center text-sm p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <p class="text-[18px] font-semibold">${data.name}</p>
                            <p>${data.no}</p>
                        </div>
                        <span class="text-[18px]">${data.date}</span>
                    </div>
                    
            </div>
        `
        callHistory.appendChild(div)
})
document.getElementById('call2').addEventListener('click', function (e) {
    e.preventDefault()
    const callHistory = document.getElementById('call-history')


    const data = {
        name : "Police Helpline Number",
        no : 999,
        date : new Date().toLocaleTimeString() 
    }

        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mt-4 space-y-3 overflow-y-auto max-h-[500px]">
                    <div class="flex justify-between items-center text-sm p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <p class="text-[18px] font-semibold">${data.name}</p>
                            <p>${data.no}</p>
                        </div>
                        <span class="text-[18px]">${data.date}</span>
                    </div>
                    
            </div>
        `
        callHistory.appendChild(div)
})
document.getElementById('call3').addEventListener('click', function (e) {
    e.preventDefault()
    const callHistory = document.getElementById('call-history')

    const data = {
        name : "Fire Service Number",
        no : 999,
        date : new Date().toLocaleTimeString() 
    }

        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mt-4 space-y-3 overflow-y-auto max-h-[500px]">
                    <div class="flex justify-between items-center text-sm p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <p class="text-[18px] font-semibold">${data.name}</p>
                            <p>${data.no}</p>
                        </div>
                        <span class="text-[18px]">${data.date}</span>
                    </div>
                    
            </div>
        `
        callHistory.appendChild(div)
})
document.getElementById('call4').addEventListener('click', function (e) {
    e.preventDefault()
    const callHistory = document.getElementById('call-history')


    const data = {
        name : "Ambulance Service",
        no : 1994-999999,
        date : new Date().toLocaleTimeString() 
    }

        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mt-4 space-y-3 overflow-y-auto max-h-[500px]">
                    <div class="flex justify-between items-center text-sm p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <p class="text-[18px] font-semibold">${data.name}</p>
                            <p>${data.no}</p>
                        </div>
                        <span class="text-[18px]">${data.date}</span>
                    </div>
                    
            </div>
        `
        callHistory.appendChild(div)
})
document.getElementById('call5').addEventListener('click', function (e) {
    e.preventDefault()
    const callHistory = document.getElementById('call-history')


    const data = {
        name : "Women & Child Helpline",
        no : 109,
        date : new Date().toLocaleTimeString() 
    }

        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mt-4 space-y-3 overflow-y-auto max-h-[500px]">
                    <div class="flex justify-between items-center text-sm p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <p class="text-[18px] font-semibold">${data.name}</p>
                            <p>${data.no}</p>
                        </div>
                        <span class="text-[18px]">${data.date}</span>
                    </div>
                    
            </div>
        `
        callHistory.appendChild(div)
})
document.getElementById('call6').addEventListener('click', function (e) {
    e.preventDefault()
    const callHistory = document.getElementById('call-history')


    const data = {
        name : "Anti-Corruption Helpline",
        no : 106,
        date : new Date().toLocaleTimeString() 
    }

        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mt-4 space-y-3 overflow-y-auto max-h-[500px]">
                    <div class="flex justify-between items-center text-sm p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <p class="text-[18px] font-semibold">${data.name}</p>
                            <p>${data.no}</p>
                        </div>
                        <span class="text-[18px]">${data.date}</span>
                    </div>
                    
            </div>
        `
        callHistory.appendChild(div)
})
document.getElementById('call1').addEventListener('click', function (e) {
    e.preventDefault()
    const callHistory = document.getElementById('call-history')


    const data = {
        name : "Electricity Helpline",
        no : 16216,
        date : new Date().toLocaleTimeString() 
    }

        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mt-4 space-y-3 overflow-y-auto max-h-[500px]">
                    <div class="flex justify-between items-center text-sm p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <p class="text-[18px] font-semibold">${data.name}</p>
                            <p>${data.no}</p>
                        </div>
                        <span class="text-[18px]">${data.date}</span>
                    </div>
                    
            </div>
        `
        callHistory.appendChild(div)
})
document.getElementById('call8').addEventListener('click', function (e) {
    e.preventDefault()
    const callHistory = document.getElementById('call-history')
    

    const data = {
        name : "Brac Helpline",
        no : 16445,
        date : new Date().toLocaleTimeString() 
    }

        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mt-4 space-y-3 overflow-y-auto max-h-[500px]">
                    <div class="flex justify-between items-center text-sm p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <p class="text-[18px] font-semibold">${data.name}</p>
                            <p>${data.no}</p>
                        </div>
                        <span class="text-[18px]">${data.date}</span>
                    </div>
                    
            </div>
        `
        callHistory.appendChild(div)
})
document.getElementById('call9').addEventListener('click', function (e) {
    e.preventDefault()
    const callHistory = document.getElementById('call-history')

    const data = {
        name : "Bangladesh Railway Helpline",
        no : 163,
        date : new Date().toLocaleTimeString() 
    }

        const div = document.createElement("div")
        div.innerHTML = `
            <div class="mt-4 space-y-3 overflow-y-auto max-h-[500px]">
                    <div class="flex justify-between items-center text-sm p-4 bg-[#FAFAFA] rounded-lg">
                        <div>
                            <p class="text-[18px] font-semibold">${data.name}</p>
                            <p>${data.no}</p>
                        </div>
                        <span class="text-[18px]">${data.date}</span>
                    </div>
                    
            </div>
        `
        callHistory.appendChild(div)
})


// Clearing Call History

document.getElementById('clear-btn').addEventListener('click', function (e) {
    e.preventDefault()
     document.getElementById('call-history').innerText = "";    
})



// copy functionalities

document.getElementById('copy1').addEventListener('click', function (e) {
    e.preventDefault()
    const number = document.getElementById('number1').innerText

    navigator.clipboard.writeText(number)


})
document.getElementById('copy2').addEventListener('click', function (e) {
    e.preventDefault()
    const number = document.getElementById('number2').innerText

    navigator.clipboard.writeText(number)


})
document.getElementById('copy3').addEventListener('click', function (e) {
    e.preventDefault()
    const number = document.getElementById('number3').innerText

    navigator.clipboard.writeText(number)


})
document.getElementById('copy4').addEventListener('click', function (e) {
    e.preventDefault()
    const number = document.getElementById('number4').innerText

    navigator.clipboard.writeText(number)


})
document.getElementById('copy5').addEventListener('click', function (e) {
    e.preventDefault()
    const number = document.getElementById('number5').innerText

    navigator.clipboard.writeText(number)


})
document.getElementById('copy6').addEventListener('click', function (e) {
    e.preventDefault()
    const number = document.getElementById('number6').innerText

    navigator.clipboard.writeText(number)


})
document.getElementById('copy7').addEventListener('click', function (e) {
    e.preventDefault()
    const number = document.getElementById('number7').innerText

    navigator.clipboard.writeText(number)


})
document.getElementById('copy8').addEventListener('click', function (e) {
    e.preventDefault()
    const number = document.getElementById('number8').innerText

    navigator.clipboard.writeText(number)


})
document.getElementById('copy9').addEventListener('click', function (e) {
    e.preventDefault()
    const number = document.getElementById('number9').innerText

    navigator.clipboard.writeText(number)


})