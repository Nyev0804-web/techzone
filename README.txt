TECHZONE — ASM XÂY DỰNG TRANG WEB

Cấu trúc thư mục:
- index.html: website TechZone hoàn chỉnh
- product-detail.html: trang riêng hồ sơ cấu hình từng sản phẩm (mở qua tham số ?id=keyboard/mouse/headset/pad/earphones)
- css/style.css: CSS giao diện chính, bố cục, thẻ sản phẩm, giỏ hàng và responsive
- css/labs.css: các phần mở rộng theo khung Lab 8.2 (slideshow, bảng so sánh, video, map, hộp trợ giúp)
- js/script.js: lọc/tìm sản phẩm, xem nhanh, giỏ hàng demo, form liên hệ
- js/product-detail.js: dữ liệu và chức năng trang hồ sơ sản phẩm
- js/labs.js: slideshow, hộp trợ giúp, chia sẻ website
- images/: thư mục dành cho ảnh tài nguyên (các minh họa sản phẩm hiện được dựng bằng CSS)
- lab-framework-reference.html: file khung Lab 8.2 do người học cung cấp để tham khảo
- Assignment.pdf: đề ASM được cung cấp

CÁCH CHẠY
1. Giải nén TechZone-ASM-Lab.zip.
2. Mở thư mục TechZone-ASM-Lab bằng VS Code.
3. Mở index.html bằng Live Server (khuyến nghị) hoặc mở trực tiếp bằng Chrome/Edge.
4. Để các phần Google Maps/YouTube/font ngoài hiển thị, cần kết nối Internet.

ĐỐI CHIẾU YÊU CẦU ASM
- Y1: HTML có văn bản, liên kết, danh sách, form, bảng so sánh; CSS tách file ngoài.
- Y2: box model, hover/transform/transition và animation.
- Y3: bố cục dùng Grid/Flexbox.
- Y4: slideshow, cửa sổ xem nhanh sản phẩm/lightbox kiểu modal, video nhúng, bản đồ nhúng, hộp trợ giúp, responsive.

LƯU Ý DEMO
- Sản phẩm, giá và nội dung cửa hàng là dữ liệu minh họa.
- Giỏ hàng lưu trong localStorage của trình duyệt; chưa có thanh toán hoặc backend.
- Form chỉ kiểm tra dữ liệu ở trình duyệt, không gửi lên máy chủ.
- Hộp trợ giúp là UI liên kết nhanh, không phải chatbot người thật.
- Video/bản đồ phụ thuộc dịch vụ bên ngoài và có thể không hiển thị nếu mạng/chính sách trình duyệt chặn.

HỒ SƠ SẢN PHẨM
- Chọn “Xem hồ sơ cấu hình” trên mỗi thẻ sản phẩm để mở trang chi tiết riêng.
- Trang có mô tả, giá demo, bảng thông số, trọng lượng/kích thước tham khảo, chất liệu, kết nối, công nghệ và trường hợp sử dụng.
- Các thông số kỹ thuật hiện là dữ liệu minh họa cho ASM, chưa được xác minh với nhà sản xuất.


BỔ SUNG ATK GEAR (2026)
- Mục ATK Gear mới gồm RS7 Turbo HE, ATK68 Magnetic, Blazing Sky F1, Neptune N9 Ultra, IEM và Dragon/Leviatan Pad.
- Hồ sơ từng mẫu có thể mở từ thẻ sản phẩm; thông số và giá được ghi rõ là tham khảo, cần kiểm tra đúng SKU.
- Ảnh images/atk-setup.png là ảnh minh họa phong cách setup do AI tạo, không phải ảnh chụp sản phẩm chính thức.
- Nguồn hãng được gắn ở trang chi tiết khi có trang chính thức phù hợp.
