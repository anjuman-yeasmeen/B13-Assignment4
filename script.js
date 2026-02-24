let interviewList = [];
let rejectionList = [];
let currentStatus = 'all-filter-btn';


const total = document.getElementById("total");
const interviewCount = document.getElementById("interviewCount");
const rejectionCountDashboard = document.getElementById("rejectionCount"); 
const availableCountText = document.getElementById("availableCount"); 

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");
const filterSection = document.getElementById("filter-section");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");


function calculateCount() {
   
    const allCardsCount = allCardSection.querySelectorAll('.card').length;
   
   
    const totalJobs = allCardsCount + interviewList.length + rejectionList.length;
    
   
    total.innerText = totalJobs;
    interviewCount.innerText = interviewList.length;
    rejectionCountDashboard.innerText = rejectionList.length;

    
    if (availableCountText) {
        if (currentStatus === 'all-filter-btn') {
            availableCountText.innerText = `${allCardsCount} jobs`;
            
          
            if (allCardsCount === 0) {
                allCardSection.innerHTML = emptyMessage("Available Jobs");
            }
        } else if (currentStatus === 'interview-filter-btn') {
            availableCountText.innerText = `${interviewList.length} out of ${totalJobs}`;
        } else if (currentStatus === 'rejected-filter-btn') {
            availableCountText.innerText = `${rejectionList.length} out of ${totalJobs}`;
        }
    }
}

function toggleStyle(id) {
    [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
        btn.classList.remove("bg-[#3B82F6]", "text-white");
        btn.classList.add("bg-white", "text-[#64748B]");
    });

    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove("bg-white", "text-[#64748B]");
    selected.classList.add("bg-[#3B82F6]", "text-white");

    if (id === "all-filter-btn") {
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
    } else {
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        if (id === "interview-filter-btn") renderInterview();
        if (id === "rejected-filter-btn") renderRejected();
    }
    calculateCount(); 
}

mainContainer.addEventListener("click", function (event) {
    const target = event.target;
    const parenNode = target.closest('.card');
    if (!parenNode) return;

    const companyNameElement = parenNode.querySelector(".companyName");
    if (!companyNameElement) return;
    const companyName = companyNameElement.innerText;

   
    if (target.classList.contains("interview-btn")) {
        const cardInfo = getCardData(parenNode, "interview");
        if (!interviewList.find(item => item.companyName === companyName)) {
            interviewList.push(cardInfo);
        }
        rejectionList = rejectionList.filter(item => item.companyName !== companyName);
        
        if (parenNode.parentNode.id === "allCards") {
            parenNode.remove();
        }
        updateUI();
    }

   
    else if (target.classList.contains("rejected-btn")) {
        const cardInfo = getCardData(parenNode, "rejected");
        if (!rejectionList.find(item => item.companyName === companyName)) {
            rejectionList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.companyName !== companyName);
        
        if (parenNode.parentNode.id === "allCards") {
            parenNode.remove();
        }
        updateUI();
    }

   
    else if (target.classList.contains("delete")) {
        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectionList = rejectionList.filter(item => item.companyName !== companyName);
        parenNode.remove();
        updateUI();
    }
});

function updateUI() {
    calculateCount();
    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();
}


function getCardData(node, status) {
    const locNode = node.querySelector(".location");
    const spans = locNode.querySelectorAll("span:not(.text-slate-300)");
    
    return {
        companyName: node.querySelector(".companyName").innerText,
        position: node.querySelector(".position").innerText,
        location: spans[0]?.innerText || "N/A",
        type: spans[1]?.innerText || "N/A",
        salary: spans[2]?.innerText || "N/A",
        status: status,
        description: node.querySelector(".description").innerText,
    };
}

function renderInterview() {
    filterSection.innerHTML = interviewList.length === 0 ? emptyMessage("Interviews") : "";
    interviewList.forEach(item => filterSection.appendChild(createCardUI(item, "text-green-600")));
}

function renderRejected() {
    filterSection.innerHTML = rejectionList.length === 0 ? emptyMessage("Rejections") : "";
    rejectionList.forEach(item => filterSection.appendChild(createCardUI(item, "text-red-500")));
}

function createCardUI(data, statusColor) {
    let div = document.createElement("div");
    div.className = "card p-6 bg-white rounded-2xl items-start flex justify-between mb-4 shadow-sm";
    div.innerHTML = `
        <div class="space-y-6">
            <div>
                <p class="companyName text-[#002C5C] text-lg font-medium">${data.companyName}</p>
                <p class="position text-[#64748B] text-xs font-normal">${data.position}</p>
            </div>
            <div class="location flex items-center gap-2 text-sm text-slate-500 font-medium">
                <span>${data.location}</span> <span class="text-slate-300">•</span>
                <span>${data.type}</span> <span class="text-slate-300">•</span>
                <span>${data.salary}</span>
            </div>
            <div>
                <p class="status ${statusColor} font-bold capitalize">${data.status}</p>
                <p class="description text-slate-600">${data.description}</p>
            </div>
            <div class="flex gap-2">
                <button class="interview-btn border-2 border-green-500 text-[#10B981] rounded px-6 py-2">interview</button>
                <button class="rejected-btn border-2 border-[#EF4444] text-[#EF4444] rounded px-6 py-2">Rejected</button>
            </div>
        </div>
        <div><img class="delete cursor-pointer" src="./image/Trash.png" alt="delete" /></div>`;
    return div;
}

function emptyMessage(type) {
    return `
    <div class="card p-10 bg-white rounded-2xl shadow-sm flex flex-col items-center 
    justify-center text-center w-full mt-4">
        <img src="./image/jobs.png" alt="No Jobs" class="w-20 h-20 mb-4" />
        
        <p class="text-slate-500">Check back later for new opportunities</p>
    </div>`;
}


calculateCount();