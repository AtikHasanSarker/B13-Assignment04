console.log("file connected")

let totalList = [];
let interviewList = [];
let rejectList = [];

const interviewCount = document.getElementById('interviewCount');
interviewCount.innerText = interviewList.length;
const rejectCount = document.getElementById('rejectCount');
rejectCount.innerText = rejectList.length;

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectFilterBtn = document.getElementById('reject-filter-btn');

const allCards = document.getElementById('allCards');
const emptySection = document.getElementById('empty-section');
const filteredSection = document.getElementById('filtered-section');


// Total job counter 
const childAllCards = allCards.children;
console.log(childAllCards)
totalList = childAllCards;

const totalCount = document.querySelectorAll('.totalCount');
totalCount.forEach(i => {
    i.innerHTML = totalList.length;
})


//ToggleStyle
function toggleStyle(id){
    //add bg-white class
    allFilterBtn.classList.add("bg-white", "text-[#64748B]", "border-[#F1F2F4]", "font-medium")
    interviewFilterBtn.classList.add("bg-white", "text-[#64748B]", "border-[#F1F2F4]", "font-medium")
    rejectFilterBtn.classList.add("bg-white", "text-[#64748B]", "border-[#F1F2F4]", "font-medium")
    //remove bg-primary class
    allFilterBtn.classList.remove("bg-primary", "text-white", "font-semibold")
    interviewFilterBtn.classList.remove("bg-primary", "text-white", "font-semibold")
    rejectFilterBtn.classList.remove("bg-primary", "text-white", "font-semibold")
    //selected style;
    const selected = document.getElementById(id);
    console.log(selected)
    selected.classList.remove("bg-white", "text-[#64748B]", "border-[#F1F2F4]", "font-medium");
    selected.classList.add("bg-primary", "text-white", "font-semibold");

    //Visible section
    if (id == 'all-filter-btn') {
        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden')
        emptySection.classList.add('hidden');
        // renderThriving()
    } else if (id == 'interview-filter-btn') {
        allCards.classList.add('hidden');
        if(interviewList.length == 0){
            emptySection.classList.remove('hidden')
        }else{
            filteredSection.classList.remove('hidden')
        }
    } else if (id == 'reject-filter-btn') {
        allCards.classList.add('hidden');
        if(rejectList.length == 0){
            emptySection.classList.remove('hidden')
        }else{
            filteredSection.classList.remove('hidden')
        }
    }
}




//
// function getInterviewBtn(){
     
// }


