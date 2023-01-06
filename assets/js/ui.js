class UI{
    constructor(){
        this.designContainer = document.querySelector('#designs');
        this.alert = document.querySelector('#alert');
    }

    showDesign(design){
        this.designContainer.innerHTML = `


        <div class="col-md-4">
        <div class="card">
            <div class="card-body position-relative">
                <img class="img-fluid" src="${design.images}" alt="Market Card">
                <div class="market-info d-flex justify-content-between">
                    <div class="market-designs__author d-flex align-items-center">
                        <img class="img-fluid" src="images/designer.png" alt="John Doe">
                        <p class="card-text pl-2 ml-2 pr-2">by <strong>${design.username}</strong></p>
                    </div>
                    <div class="market-designs__static d-flex align-items-center">
                        <img src="images/code.png" width="26" height="26" alt="Code Icon">
                        <span>${design.code}</span>
                        <img src="images/appreciate.png" width="26" height="26" alt="Code Icon">
                        <span>${design.like}</span>
                    </div>
                </div>
            </div>
            <div class="market-designs__brand position-absolute justify-content-start">
                <a href="#">
                    <img class="img-fluid" src="${design.brandlogo}" alt="">
                </a>
            </div>
        </div>
    </div>        
        `;
    }

    showAlert(text){
        this.alert.innerHTML =`${text} is not found.`;
    }

    clear(){
        this.designContainer.innerHTML="";
        this.alert.innerHTML="";
    }

}