const submitBtn = document.querySelector(".submitbtn");
const selectedRatingDiv = document.querySelector(".rating");
const ratingCard = document.querySelector("#ratingcard")
let selectedRating;
selectedRatingDiv.addEventListener('click', e=>{
    // console.log(e.target)
    if(e.target.dataset.rating){
        selectedRating = e.target.dataset.rating
    }
})
submitBtn.addEventListener('click',(e)=>{
    // let ratingValue = selectedRating.value;
    console.log(selectedRating);
    // console.log("button");
    let thankyouCard = document.getElementById("card1");
    ratingCard.style.display="none";
    thankyouCard.style.display="block";

    showThankyoustate(selectedRating);


})

function showThankyoustate(selectedRating){
    let ratingSubmit = document.getElementById("submittedrating");
    
    ratingSubmit.textContent= ` You selected ${selectedRating} out of 5`;

}