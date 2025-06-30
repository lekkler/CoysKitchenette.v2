document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Menu tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked button
            this.classList.add('active');

            // Hide all menu categories
            menuCategories.forEach(cat => cat.classList.remove('active'));
            // Show the selected category
            const tab = this.getAttribute('data-tab');
            document.getElementById(tab).classList.add('active');
        });
    });

   const menuData = {
    sizzlings: [
        {
            name: "Sizzling Pork Sisig",
            description: "Crispy pork belly with onions, chili peppers, and egg",
            prices: [
                { label: "Solo", value: 109, stock: 20 },
                { label: "Platter", value: 190, stock: 15 }
            ],
            image: "designs/sisig.jpg"
        },
        {
            name: "Sizzling Pork Chop",
            description: "Crispy pork chop with special gravy",
            prices: [
                { label: "Solo", value: 119, stock: 18 },
                { label: "Platter", value: 190, stock: 12 }
            ],
            image: "designs/porkchop.jpg"
        },
        {
            name: "Sizzling Liempo",
            description: "Pork belly with special gravy",
            prices: [
                { label: "Solo", value: 119, stock: 15 },
                { label: "Platter", value: 190, stock: 10 }
            ],
            image: "designs/liempo.jpg"
        },
        {
            name: "Sizzling Bangus Sisig",
            description: "Juicy bangus with onions, chili peppers.",
            prices: [
                { label: "Solo", value: 139, stock: 15 },
                { label: "Platter", value: 220, stock: 8 }
            ],
            image: "designs/bangus.webp"
        },
        {
            name: "Sizzling Chicken Katsu",
            description: "Crispy chicken cutlet with special gravy and vegetables.",
            prices: [
                { label: "Solo", value: 139, stock: 20 },
                { label: "Platter", value: 220, stock: 10 }
            ],
            image: "designs/katsu.jpg"
        },
        {
            name: "Sizzling Spicy Chicken",
            description: "Crispy chicken cutlet with special gravy and vegetables.",
            prices: [
                { label: "Solo", value: 139, stock: 18 },
                { label: "Platter", value: 220, stock: 10 }
            ],
            image: "designs/chick.jpg"
        },
        {
            name: "Sizzling Garlic Pepper Beef",
            description: "Tender beef strips stir-fried with garlic and pepper.",
            prices: [
                { label: "Solo", value: 139, stock: 15 },
                { label: "Platter", value: 220, stock: 8 }
            ],
            image: "designs/garlic.webp"
        },
        {
            name: "UNLI RICE SIZZLING",
            description: "Just Add ₱35 for unlimited rice with any sizzling dish",
            prices: [
                { label: "Unli Rice", value: 35, stock: 999 } // High stock for add-ons
            ],
            image: "designs/rice.jpg"
        }
    ],

    silog: [
        {
            name: "TapSilog",
            description: "Beef tapa, garlic fried rice, and egg",
            price: "₱109",
            stock: 25,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvi-y6FvVXNKZP1XysDhEJYD9qOFKLzL8gBQ&s"
        },
        {
            name: "ChickSilog",
            description: "Juicy Chicken, garlic rice, and egg",
            price: "₱109",
            stock: 25,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Xr5MjTpLlLt6PfFBITNuKXT5dDy9eLVMTQ&s"
        },
        {
            name: "LiempoSilog",
            description: "Pork belly, garlic rice, and egg",
            price: "₱109",
            stock: 20,
            image: "https://raketcontent.com/Liempo_Silog_a717c5b8da.jpg"
        },
        {
            name: "PorkSilog",
            description: "Fried pork, garlic rice, and egg",
            price: "₱109",
            stock: 20,
            image: "https://i.pinimg.com/474x/ec/88/9f/ec889f7a304ee1befc5760bd74689978.jpg"
        },
        {
            name: "BangSilog",
            description: "Fried bangus, garlic rice, and egg",
            price: "₱99",
            stock: 15,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDid8PU8boKc2sILWtSre1DuaCB0VxCMgGlQ&s"
        },
        {
            name: "HotSilog",
            description: "Fried hotdog, garlic rice, and egg",
            price: "₱99",
            stock: 30,
            image: "https://raketcontent.com/Hot_Silog_d4e455cb54.jpg"
        },
        {
            name: "SpamSilog",
            description: "Fried spam, garlic rice, and egg",
            price: "₱99",
            stock: 25,
            image: "https://wfg32p.s3.amazonaws.com/media/dishes/spamsilog_5460-med.jpg"
        }
    ],
    chao: [
        {
            name: "Chao Fan Pork Siomai",
            description: "Special fried rice with Pork Siomai",
            price: "₱89",
            stock: 30,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLoDBuQTWOWUy6wk0jNYU7j3vCoCuOZtLxQ&s"
        },
        {
            name: "Chao Fan Beef Siomai",
            description: "Special fried rice with Beef Siomai",
            price: "₱99",
            stock: 25,
            image: "https://www.pinasgifts.com/image/cache/data/chowking/beef%20chao%20fan%20with%20siomai-500x500.jpg"
        },
        {
            name: "Chao Fan Dumplings",
            description: "Special fried rice with Dumplings",
            price: "₱99",
            stock: 20,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGQ5eCCTR13wMM9RDGFewJK4ZDggjzjqiFw&s"
        },
        {
            name: "Chao Fan Shanghai",
            description: "Special fried rice with Shanghai",
            price: "₱99",
            stock: 20,
            image: "https://orderun.ph/cdn/shop/products/b44619f3-2cba-4680-a884-03fe3ef708e2.png?v=1581345819"
        },
        {
            name: "5 pcs Beef Siomai",
            description: "5 pieces of Beef Siomai",
            price: "₱45",
            stock: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71kBdkOvZ-WdbCYD3pdfgflz6eWoBL-J2Wg&s"
        },
        {
            name: "5 pcs Pork Siomai",
            description: "5 pieces of Pork Siomai",
            price: "₱45",
            stock: 50,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPToDOdUI16N2djcXZYb62MbgbJe_O7zoMZA&s"
        },
        {
            name: "5 pcs Japanese Siomai",
            description: "5 pieces of Japanese Siomai",
            price: "₱55",
            stock: 40,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaj9tSRhRXrbKL2mweWaIKQl_PTPhoNrsLcw&s"
        },
        {
            name: "5 pcs Dumplings",
            description: "5 pieces of Dumplings",
            price: "₱55",
            stock: 40,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxZ4eXd1iO9vdg84jT65_fMRmYNJXGeZeig&s"
        },
        {
            name: "5 pcs Gyoza",
            description: "5 pieces of Gyoza",
            price: "₱55",
            stock: 35,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbPF9G9qxO-odeLx6fhgay78AUET8YQMSww&s"
        },
        {
            name: "5 pcs Shanghai",
            description: "5 pieces of Shanghai",
            price: "₱55",
            stock: 40,
            image: "https://sweetsimplevegan.com/wp-content/uploads/2020/09/Vegan-Lumpiang-Shanghai-Filipino-Spring-Rolls-Sweet-Simple-Vegan-4.jpg"
        }
    ],
    other: [
        {
            name: "Lomi Batangas",
            description: "Noodle Soup specialty of Batangas",
            prices: [
                { label: "Regular", value: 99, stock: 20 },
                { label: "Special", value: 105, stock: 15 },
                { label: "Overload", value: 399, stock: 5 }
            ],
            image: "https://i.ytimg.com/vi/iQCG9aYIYQE/maxresdefault.jpg"
        },
        {
            name: "Bulalo",
            description: "Beef shank soup",
            prices: [
                { label: "Solo", value: 145, stock: 15 },
                { label: "For Sharing", value: 380, stock: 8 }
            ],
            image: "https://www.recipesbynora.com/wp-content/uploads/2024/02/Bulalo-Recipe-Featured-Image-500x500.jpg"
        },
        {
            name: "Braised Beef",
            description: "Beef with Flavor",
            prices: [
                { label: "Solo", value: 169, stock: 12 },
                { label: "w/ Drinks", value: 189, stock: 10 }
            ],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHiDcqWJD08_yk-p01xxW8MogarMwq9WKI4Q&s"
        },
        {
            name: "Extra Rice",
            description: "Fried rice or Plain rice",
            price: "₱20",
            stock: 999, // Essentially unlimited
            image: "designs/rice.jpg"
        },
        {
            name: "Bento Boxes (20+ Orders)",
            description: "Customizable bento boxes for events, Contact us For Details and Menus",
            prices: [
                { label: "Depends on Menu", value: 150, stock: 999 },
                { label: "Depends on Menu", value: 250, stock: 999 }
            ],
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-eqgvcSx1Gl_guNBijjRJePTtONjmYh2Xg&s"
        },
        {
            name: "Catering Foods",
            description: "Packaged foods for events, Contact us For Details and Menus",
            price: "₱0 - Price depends on the menu",
            stock: 999, // Special order item
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfOasRbVUiH44ZfqhoR2ZZl6kM4SN7z9-Wlw&s"
        }
    ],
    drinks: [
        {
            name: "1 Pitcher of Iced Tea",
            description: "Refreshing house blend iced tea",
            price: "₱85",
            stock: 20,
            image: "https://gringo.ph/cdn/shop/products/HouseBrewedIcedTeaPitchercopy_600x600.png?v=1627977851"
        },
        {
            name: "1 Pitcher of Lemonade",
            description: "Refreshing lemonade",
            price: "₱85",
            stock: 20,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdnhevYZdbhXCWEa1ZKfIJHbcuA8K-lSfEg&s"
        },
        {
            name: "Fruit Soda Strawberry",
            description: "Strawberries blended with soda",
            price: "₱49 / ₱59 with yakult",
            stock: 30,
            image: "https://www.shutterstock.com/image-photo/fresh-strawberry-soda-drink-recipe-600nw-2273824635.jpg"
        },
        {
            name: "Fruit Soda Green Apple",
            description: "Green apple blended with soda",
            price: "₱49 / ₱59 with yakult",
            stock: 30,
            image: "https://media.istockphoto.com/id/868491054/photo/iced-apple-soda-drink-selective-focus-on-glass.jpg?s=170667a&w=0&k=20&c=yWcxfZU1F-PpUxamq8SQhp0IWyB8Fjjp3iEi4W4u0qQ="
        },
        {
            name: "Fruit Soda Lychee",
            description: "Lychee blended with soda",
            price: "₱49 / ₱59 with yakult",
            stock: 25,
            image: "https://www.shutterstock.com/image-photo/lychee-soda-takeaway-glass-on-260nw-2370110523.jpg"
        },
        {
            name: "Fruit Soda Blueberry",
            description: "Blueberrie blended with soda",
            price: "₱49 / ₱59 with yakult",
            stock: 25,
            image: "https://previews.123rf.com/images/naypong/naypong1511/naypong151100005/47504226-blueberry-soda-ice.jpg"
        }
    ]
};

// Add stock display to menu cards
function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    
     let priceHTML = '';
    if (item.prices) {
        priceHTML = item.prices.map(price => {
            const isOutOfStock = price.stock <= 0;
            return `
                <div class="price-option ${isOutOfStock ? 'out-of-stock' : ''}">
                    <span class="price-label">${price.label}:</span>
                    <span class="price-value">₱${price.value}</span>
                    <span class="stock-info">${isOutOfStock ? 'OUT OF STOCK' : `${price.stock} available`}</span>
                </div>
            `;
        }).join('');
    } else {
        const isOutOfStock = item.stock <= 0;
        priceHTML = `
            <div class="price ${isOutOfStock ? 'out-of-stock' : ''}">
                ${item.price}
                <span class="stock-info">${isOutOfStock ? 'OUT OF STOCK' : `${item.stock} available`}</span>
            </div>
        `;
    }
    
    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-details">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            ${priceHTML}
            <div class="add-to-cart">
                <input type="number" min="1" value="1" class="quantity" ${item.stock <= 0 ? 'disabled' : ''}>
                <button class="add-btn" ${item.stock <= 0 ? 'disabled' : ''}>${item.stock <= 0 ? 'Out of Stock' : 'Add to Order'}</button>
            </div>
        </div>
    `;
    
    return card;
}

// Update the addToCart function to check stock
function addToCart(item, variant, quantity) {
    const category = Object.keys(menuData).find(cat => 
        menuData[cat].some(menuItem => menuItem.name === item.name)
    );
    
    const menuItem = menuData[category].find(i => i.name === item.name);
    
    if (menuItem.prices) {
        const priceOption = menuItem.prices.find(p => p.label === variant);
        if (priceOption.stock < quantity) {
            alert(`Only ${priceOption.stock} available!`);
            return false;
        }
        priceOption.stock -= quantity;
    } else {
        if (menuItem.stock < quantity) {
            alert(`Only ${menuItem.stock} available!`);
            return false;
        }
        menuItem.stock -= quantity;
    }
    
    updateStockDisplay();
    return true;
}

function updateStockDisplay() {
    document.querySelectorAll('.menu-card').forEach(card => {
        const itemName = card.querySelector('h3').textContent;
        const category = Object.keys(menuData).find(cat => 
            menuData[cat].some(item => item.name === itemName)
        );
        
        const item = menuData[category].find(i => i.name === itemName);
        
        if (item.prices) {
            item.prices.forEach(price => {
                const priceOption = card.querySelector(`.price-option:contains("${price.label}")`);
                if (priceOption) {
                    const stockElement = priceOption.querySelector('.stock-info');
                    const isOutOfStock = price.stock <= 0;
                    
                    stockElement.textContent = isOutOfStock ? 'OUT OF STOCK' : `${price.stock} available`;
                    priceOption.classList.toggle('out-of-stock', isOutOfStock);
                    
                    // Disable add to cart button if out of stock
                    const addBtn = card.querySelector('.add-btn');
                    const quantityInput = card.querySelector('.quantity');
                    if (isOutOfStock) {
                        addBtn.disabled = true;
                        addBtn.textContent = 'Out of Stock';
                        quantityInput.disabled = true;
                    }
                }
            });
        } else {
            const isOutOfStock = item.stock <= 0;
            const stockElement = card.querySelector('.stock-info');
            const priceElement = card.querySelector('.price');
            const addBtn = card.querySelector('.add-btn');
            const quantityInput = card.querySelector('.quantity');
            
            stockElement.textContent = isOutOfStock ? 'OUT OF STOCK' : `${item.stock} available`;
            priceElement.classList.toggle('out-of-stock', isOutOfStock);
            
            if (isOutOfStock) {
                addBtn.disabled = true;
                addBtn.textContent = 'Out of Stock';
                quantityInput.disabled = true;
            }
        }
    });
}
// After successfully submitting an order
function handleOrderSubmission(orderData) {
    // ... existing order processing code ...
    
    // Notify admin (in real app, this would be a server call)
    if (typeof simulateNewOrder === 'function') {
        // This is just for demo when both are on same page
        // In real app, you would send to server which would notify admin
        simulateNewOrder();
    } else {
        console.log('New order placed - would notify admin in real app');
    }
    
}function populateMenu(category, items) {
    const menuGrid = document.querySelector(`#${category} .menu-grid`);
    if (!menuGrid) return;

    menuGrid.innerHTML = '';

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';

        // Check if item has multiple prices or single price
        const hasVariants = item.prices && item.prices.length > 0;

        // Generate price options HTML
        let priceOptions = '';
        if (hasVariants) {
            priceOptions = `<div class="menu-item-choices">` +
                item.prices.map(price => {
                    const isOutOfStock = price.stock <= 0;
                    return `
                        <label class="${isOutOfStock ? 'out-of-stock' : ''}">
                            <input type="radio" name="price-${category}-${item.name.replace(/\s/g, '')}" 
                                   value="${price.value}" data-label="${price.label}" 
                                   ${isOutOfStock ? 'disabled' : 'checked'}>
                            ${price.label} <span class="price">₱${price.value}</span>
                            <span class="stock-status">${isOutOfStock ? ' (Out of Stock)' : ` (${price.stock} left)`}</span>
                        </label>
                    `;
                }).join('') + `</div>`;
        } else {
            const isOutOfStock = item.stock <= 0;
            priceOptions = `
                <div class="price ${isOutOfStock ? 'out-of-stock' : ''}">
                    ${item.price}
                    <span class="stock-status">${isOutOfStock ? ' (Out of Stock)' : ` (${item.stock} left)`}</span>
                </div>
            `;
        }

        // Check if entire item is out of stock
        const isItemOutOfStock = hasVariants 
            ? item.prices.every(price => price.stock <= 0) 
            : item.stock <= 0;

        menuItem.innerHTML = `
            <div class="menu-item-img">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                ${priceOptions}
                <button class="add-to-cart" ${isItemOutOfStock ? 'disabled' : ''}>
                    ${isItemOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        `;

        menuGrid.appendChild(menuItem);
    });
}
    // Populate all menus
    for (const category in menuData) {
        populateMenu(category, menuData[category]);
    }

    // Update active nav link based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    

    // Cart functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const closeCart = document.querySelector('.close-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total span');
    const cartCount = document.querySelector('.cart-count');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const checkoutModal = document.querySelector('.checkout-modal');
    const closeModal = document.querySelector('.close-modal');
    const orderSummary = document.getElementById('order-summary');
    const orderTotal = document.getElementById('order-total');
    const checkoutForm = document.getElementById('checkout-form');
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const gcashDetails = document.getElementById('gcash-details');
    const verificationMethod = document.getElementById('verification-method');
    const referenceInput = document.getElementById('reference-input');
    const screenshotInput = document.getElementById('screenshot-input');
    
    let cart = [];

    // Toggle cart sidebar
    cartIcon.addEventListener('click', () => {
        cartSidebar.classList.add('active');
    });

    closeCart.addEventListener('click', () => {
        cartSidebar.classList.remove('active');
    });

    closeModal.addEventListener('click', () => {
        checkoutModal.style.display = 'none';
    });

    // Payment method toggle
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.value === 'gcash') {
                gcashDetails.style.display = 'block';
            } else {
                gcashDetails.style.display = 'none';
            }
        });
    });

    // Verification method toggle
    verificationMethod.addEventListener('change', function() {
        const method = this.value;
        referenceInput.style.display = method === 'reference' ? 'block' : 'none';
        screenshotInput.style.display = method === 'screenshot' ? 'block' : 'none';
        
        // Update required fields
        document.getElementById('gcash-reference').required = method === 'reference';
        document.getElementById('gcash-screenshot').required = method === 'screenshot';
    });

    // Add to cart functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const menuItem = e.target.closest('.menu-item');
            const name = menuItem.querySelector('h3').textContent;
            
            // Check for multiple price options
            const selected = menuItem.querySelector('input[type="radio"]:checked');
            let price = 0;
            let label = '';
            
            if (selected) {
                price = parseFloat(selected.value);
                label = selected.getAttribute('data-label');
            } else {
                // Fallback for single price
                const priceText = menuItem.querySelector('.menu-item-price')?.textContent;
                const priceMatch = priceText?.match(/\d+/);
                price = priceMatch ? parseFloat(priceMatch[0]) : 0;
            }
            
            const finalName = label ? `${name} (${label})` : name;
            addToCart(Date.now().toString(), finalName, price);
        }
    });

    function addToCart(id, name, price) {
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id,
                name,
                price,
                quantity: 1
            });
        }

        updateCart();
        cartSidebar.classList.add('active');
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            
            cartItemElement.innerHTML = `
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-quantity">
                    <button class="decrease-quantity" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-price">₱${(item.price * item.quantity).toFixed(2)}</div>
                <div class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></div>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
            total += item.price * item.quantity;
            itemCount += item.quantity;
        });

        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = itemCount;

        // Add event listeners to new buttons
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                updateQuantity(id, -1);
            });
        });

        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                updateQuantity(id, 1);
            });
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const id = this.getAttribute('data-id');
                removeFromCart(id);
            });
        });
    }

    function updateQuantity(id, change) {
        const item = cart.find(item => item.id === id);
        if (item) {
            item.quantity += change;
            
            if (item.quantity <= 0) {
                cart = cart.filter(item => item.id !== id);
            }
            
            updateCart();
        }
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.id !== id);
        updateCart();
    }

    // Checkout functionality
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Update GCash amount display
        document.getElementById('gcash-amount').textContent = cartTotal.textContent;
        
        // Populate order summary
        orderSummary.innerHTML = '';
        let total = 0;
        
        cart.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>₱${(item.price * item.quantity).toFixed(2)}</span>
            `;
            orderSummary.appendChild(orderItem);
            total += item.price * item.quantity;
        });

        orderTotal.textContent = `₱${total.toFixed(2)}`;
        checkoutModal.style.display = 'block';
    });

    // Form submission
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('customer-name').value;
        const address = document.getElementById('customer-address').value;
        const phone = document.getElementById('customer-phone').value;
        const serviceType = document.querySelector('input[name="service-type"]:checked').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        const verificationMethod = document.getElementById('verification-method').value;
        
        let paymentProof = '';
        if (paymentMethod === 'gcash') {
            if (verificationMethod === 'reference') {
                paymentProof = `GCash Ref: ${document.getElementById('gcash-reference').value}`;
            } else {
                paymentProof = 'GCash Screenshot uploaded';
            }
        }
        
        // Format order details for Messenger
        const orderDetails = cart.map(item => 
            `• ${item.name} (x${item.quantity}) - ₱${(item.price * item.quantity).toFixed(2)}`
        ).join('\n');
        
        const totalAmount = cartTotal.textContent;
        const paymentStatus = paymentMethod === 'gcash' ? 
            `PAID via GCash (${verificationMethod === 'reference' ? 'Ref: '+document.getElementById('gcash-reference').value : 'Screenshot sent'})` : 
            'TO PAY at Counter';
        
        // Create Messenger share link
        const message = `NEW ORDER\n\n` +
                       `Customer: ${name}\n` +
                       `Address: ${address}\n` +
                       `Contact: ${phone}\n` +
                       `Service Type: ${serviceType}\n\n` +
                       `ORDER DETAILS:\n${orderDetails}\n\n` +
                       `TOTAL: ₱${totalAmount}\n` +
                       `PAYMENT: ${paymentStatus}\n\n` +
                       `Please confirm this order.`;
        
        const encodedMessage = encodeURIComponent(message);
        const messengerLink = `https://m.me/109770141877066?text=${encodedMessage}`;
        
        // Show confirmation and open Messenger
        if (confirm('Order complete! Click OK to send your order via Messenger.')) {
            window.open(messengerLink, '_blank');
        }
        
        // Reset cart and close modal
        cart = [];
        updateCart();
        checkoutModal.style.display = 'none';
        cartSidebar.classList.remove('active');
        this.reset();
        
        // Hide GCash details by default for next order
        gcashDetails.style.display = 'none';
    });
    // Config
const API_URL = "https://script.google.com/macros/s/AKfycbwmgCU4k0e9KKUVZAM589lobIrzKf-eVho3MaiOi9P-fBL_-wemzOqkeKGA98JyRI3x-g/exec";

// 1. Fetch Live Menu Data
async function loadMenu() {
  try {
    const response = await fetch(`${API_URL}?sheet=MenuItems`);
    const data = await response.json();
    
    // Convert sheet data to your menu structure
    const menuData = {};
    data.slice(1).forEach(row => { // Skip header
      const [category, name, variant, price, stock] = row;
      
      if (!menuData[category]) menuData[category] = [];
      
      const existingItem = menuData[category].find(item => item.name === name);
      if (variant && variant !== "-") {
        if (!existingItem) {
          menuData[category].push({
            name,
            prices: [{ label: variant, value: price, stock }],
            image: row[5] // ImagePath
          });
        } else {
          existingItem.prices.push({ label: variant, value: price, stock });
        }
      } else {
        menuData[category].push({
          name,
          price: `₱${price}`,
          stock,
          image: row[5]
        });
      }
    });
    
    renderMenu(menuData);
  } catch (error) {
    console.error("Failed to load menu:", error);
  }
}

// 2. Save Order to Sheet
async function submitOrder(order) {
  const rowData = [
    new Date().toLocaleString(), // Timestamp
    order.customerName,
    order.customerPhone,
    JSON.stringify(order.items), // Items as JSON
    order.total,
    "Pending" // Status
  ];
  
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      sheetName: "Orders",
      rowData
    })
  });
}
});
fetch('admin/menuData.json')
  .then(response => response.json())
  .then(data => {
    // Gamitin ang data para i-display ang menu sa homepage
  });