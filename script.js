let interviewList = [];
let rejectionList = [];

let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectionCount = document.getElementById("rejectionCount");

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector("main");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

function calculateCount() {
  total.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectionCount.innerText = rejectionList.length;
}
calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedFilterBtn.classList.remove("bg-[#3B82F6]", "text-white");

  allFilterBtn.classList.add("bg-white", "text-[#64748B]");
  interviewFilterBtn.classList.add("bg-white", "text-[#64748B]");
  rejectedFilterBtn.classList.add("bg-white", "text-[#64748B]");

  const selected = document.getElementById(id);

  selected.classList.remove("bg-white", "text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-white");
}

mainContainer.addEventListener("click", function (event) {
  const parenNode = event.target.parentNode.parentNode.parentNode;
  const companyName = parenNode.querySelector(".companyName").innerText;
  const position = parenNode.querySelector(".position").innerText;
  const fullLocationText = parenNode.querySelector(".location").innerText;
  const parts = fullLocationText.split("•");
  const location = parts[0].trim();
  const type = parts[1].trim();
  const salary = parts[2].trim();
  const status = parenNode.querySelector(".status").innerText;
  const description = parenNode.querySelector(".description").innerText;

  const cardInfo = {
    companyName,
position, 
location,
type,
salary,
status,
description,

  }
  console.log(cardInfo)
});
