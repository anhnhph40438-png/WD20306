//BÀI 1: TEMPLATE EMAIL THÔNG BÁO
const user = {
    firstName: "Nguyễn",
    lastName: "Hoàng Anh",
    product: "Laptop HP ProBook 450 G5",
    price: 25000000,
    orderDate: "2025-11-05",
};

const emailTemplate = `
Xin chào ${user.firstName} ${user.lastName},

Cảm ơn bạn đã đặt hàng tại cửa hàng của chúng tôi!

Thông tin đơn hàng của bạn:
- Sản phẩm: ${user.product}
- Giá: ${user.price.toLocaleString("vi-VN")}₫
- Ngày đặt hàng: ${user.orderDate}

Chúng tôi sẽ liên hệ với bạn khi đơn hàng được vận chuyển.

Trân trọng,
Cửa hàng LAPTOP-FPOLY
`;

console.log("==== EMAIL THÔNG BÁO ====");
console.log(emailTemplate);


//BÀI 2: TEMPLATE HTML CARD SẢN PHẨM
const product = {
  name: "iPhone 15",
  price: 20000000,
  discount: 10,
  inStock: true,
};

// Tính giá sau giảm
const finalPrice = product.price * (1 - product.discount / 100);

// Tạo template HTML
const productCard = `
<div class="product-card">
  <h2>${product.name}</h2>
  <p>Giá gốc: ${product.price.toLocaleString('vi-VN')}₫</p>
  <p>Giảm: ${product.discount}%</p>
  <p><strong>Giá sau giảm: ${finalPrice.toLocaleString('vi-VN')}₫</strong></p>
  <p>Trạng thái: ${product.inStock ? "✅ Còn hàng" : "❌ Hết hàng"}</p>
</div>
`;

console.log("\n==== CARD SẢN PHẨM ====");
console.log(productCard);
