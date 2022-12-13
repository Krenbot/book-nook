const newReviewBtn = document.getElementById("newReview")
const newReviewSubmit = document.getElementById("newReviewSubmit")

newReviewBtn?.addEventListener("click",async(event)=>{
    event.preventDefault()
    fetch(`${window.location.href}/newReview`).then(window.location.href=`${window.location.href}/newReview` )
})


//post new review to book
/*
newReviewSubmit.addEventListener("submit", async(event)=>{
    event.preventDefault()
    const newReviewTitle = document.getElementById("newReviewTitle").value
    const newReviewContents = document.getElementById("newReviewContents").value



})*/