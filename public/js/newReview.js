const newReviewBtn = document.getElementById("newReview")
const newReviewSubmit = document.getElementById("newReviewSubmit")

newReviewBtn?.addEventListener("click",async(event)=>{
    event.preventDefault()
    fetch(`${window.location.href}/newReview`).then(window.location.href=`${window.location.href}/newReview` )
})


newReviewSubmit?.addEventListener("submit", async(event)=>{
    event.preventDefault()
    const bookTitle = document.getElementById("bookTitle").innerText
    const newReviewTitle = document.getElementById("newReviewTitle").value
    const newReviewContents = document.getElementById("newReviewContents").value
    fetch("/reviews",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({newReviewTitle,newReviewContents,bookTitle})
    }).then((data)=>
        window.location.href = "/"
    )
})


