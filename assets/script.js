const DOM = {
    rangeStyle() {
        const slider = document.querySelector('.range1');
        const min = slider.min;
        const max = slider.max;
        const value = slider.value;

        slider.style.background = `linear-gradient(to right, hsl(224, 65%, 95%) 0%, hsl(224, 65%, 95%) ${(value-min)/(max-min)*100}%`;

        slider.oninput = function() {
        this.style.background = `linear-gradient(to right, hsl(174, 86%, 45%), hsl(174, 86%, 45%) ${(this.value-this.min)/(this.max-this.min)*100}%, hsl(224, 65%, 95%) ${(this.value-this.min)/(this.max-this.min)*100}%, hsl(224, 65%, 95%)`;
        }
    }
}

const Price = {
    flagDiscount: false,

    currentPosition: 0,

    dataPrice: [
        {
        price:15,
        pageViews:"10K",
        } 
        ,
        {
          price:60,
          pageViews:"50K",
        } 
        ,
       {
          price:120,
          pageViews:"100K",
        } 
        ,
        {
          price:240,
          pageViews:"500K",
        } 
        ,
        {
          price:360,
          pageViews:"1M",
        },      
    ],

    checkDiscount(flag = false) {
        const discount = document.querySelector('.discount');
        const choiceDiscount = document.querySelector('.btn-choice');
        
        if(flag){        
            if (discount.matches(".discount.on")) {
                choiceDiscount.classList.toggle('on');
                discount.classList.toggle('on'); 
                this.flagDiscount = false;
            } else {
                choiceDiscount.classList.toggle('on');
                discount.classList.toggle('on');
                this.flagDiscount = true;
            }
        }

        this.priceRange(this.currentPosition);
    },

    assignPrice(value) {
        let price;

        if(this.flagDiscount) {
            price = this.dataPrice[value].price * 0.75;
        } else {
            price = this.dataPrice[value].price;
        }

        return price;
    },

    priceRange(value) {
        this.currentPosition = value;
        let newPrice;
        let newViews;

        const price = document.querySelector('.price > span');
        const pageViews = document.querySelector('.page-views');

        newViews = this.dataPrice[value].pageViews;
        newPrice = this.assignPrice(value);

        price.innerHTML = newPrice.toFixed(2);
        pageViews.innerHTML = newViews;
    }
}

DOM.rangeStyle();
