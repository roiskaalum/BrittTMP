// vendor.js

const coupons = [
    { vendor: "McDonald's", title: "2 for 1 Menu", description: "Få 2 for prisen af 1 hos McDonald's.", cost: 10, type: "2 for 1", discount: 50, image: "images/mcdonalds-brand-logo.jpg" },
    { vendor: "Jack and Jones", title: "20% off", description: "Få 20% rabat hos Jack and Jones.", cost: 50, type: "percentage", discount: 20, image: "images/images.png" },
    { vendor: "H&M", title: "60% off", description: "Få 60% rabat hos H&M.", cost: 30, type: "percentage", discount: 60, image: "images/H&M-Logo.svg.png" },
    { vendor: "Sunset Boulevard", title: "15% off", description: "Få 15% rabat hos Sunset Boulevard.", cost: 5, type: "percentage", discount: 15, image: "images/sunset_logo-400x400.png" }
];

function getVendorDiscounts(vendorName) {
    return coupons.filter(coupon => coupon.vendor === vendorName);
}

function generateVendorPage(vendorName) {
    const vendorDiscounts = getVendorDiscounts(vendorName);
    const vendorContainer = document.getElementById('vendor-container');
    vendorContainer.innerHTML = '';

    if (vendorDiscounts.length > 0) {
        const vendorImage = document.createElement('img');
        vendorImage.src = vendorDiscounts[0].image;
        vendorImage.alt = vendorName;
        vendorImage.style.width = '10rem';
        vendorImage.style.height = '10rem';
        vendorImage.style.borderRadius = '50%';
        vendorImage.style.marginBottom = '1rem';
        vendorContainer.appendChild(vendorImage);

        const vendorTitle = document.createElement('h2');
        vendorTitle.textContent = vendorName + " Rabatter";
        vendorTitle.style.fontSize = '2rem';
        vendorTitle.style.fontWeight = 'bold';
        vendorTitle.style.paddingBlock = '1rem';
        vendorTitle.style.textAlign = 'center';
        
        
        vendorContainer.appendChild(vendorTitle);

        vendorDiscounts.forEach(discount => {
            const discountCard = document.createElement('div');
            discountCard.className = 'coupon-item';
            discountCard.innerHTML = `
                <img src="${discount.image}" alt="${discount.title}">
                <div class="coupon-details">
                    <h5 class="coupon-title">${discount.title}</h5>
                    <p class="coupon-text">${discount.description}</p>
                    <p class="coupon-text"><small class="text-muted">Cost: ${discount.cost} points</small></p>
                </div>
            `;
            vendorContainer.appendChild(discountCard);
        });
    } else {
        const noDiscountsMessage = document.createElement('p');
        noDiscountsMessage.textContent = 'No discounts available for this vendor.';
        vendorContainer.appendChild(noDiscountsMessage);
    }
}

// Get the vendor name from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const vendorName = urlParams.get('vendor');
if (vendorName) {
    generateVendorPage(vendorName);
}