# QILUVI — GitHub Pages website V1.0

Website tĩnh, miễn phí lưu trữ trên GitHub Pages (với repo public), không có backend, framework hay yêu cầu build.

## Cấu trúc thư mục

```text
qiluvi/
├── index.html             # Website một trang: 5 dịch vụ, QiMap, liên hệ
├── qimap/
│   └── index.html         # Chuyển đến QiMap hiện tại bằng trình duyệt
├── assets/
│   ├── styles.css         # Giao diện responsive
│   ├── site.js            # VI / EN / 简体 / 繁體
│   ├── qiluvi-brand.jpg   # Ảnh logo do chủ QILUVI cung cấp
│   ├── qiluvi-monogram.webp
│   └── favicon.png
├── .nojekyll
└── README.md
```

## Xuất bản trong khoảng 5 bước

1. Vào GitHub tài khoản `02zmarketingcontact-del`, tạo **repository Public mới tên `qiluvi`** (không dùng `atlas-bds-tphcm`).
2. Giải nén ZIP, chọn các file và thư mục bên trong `QILUVI-GitHub-Pages/` (không upload file ZIP). Trên GitHub chọn **Add file → Upload files** rồi Commit trực tiếp vào `main`. **`index.html` phải ở thư mục gốc của repository**, không nằm trong thư mục lồng nhau.
3. Trong repository mới vào **Settings → Pages → Build and deployment**.
4. Chọn **Deploy from a branch → main → /(root)**, nhấn **Save**.
5. Sau khi GitHub Pages hoàn tất, URL dự kiến: `https://02zmarketingcontact-del.github.io/qiluvi/`. Nếu GitHub báo URL khác, dùng URL trong Settings → Pages.

### Liên kết đang có
- QiMap (bản đồ): https://02zmarketingcontact-del.github.io/atlas-bds-tphcm/map-v4.html
- QiMap (thư mục dự án): https://02zmarketingcontact-del.github.io/atlas-bds-tphcm/secondary-catalog.html
- Từ website QILUVI mới, đường dẫn `/qimap/` dùng chuyển hướng trình duyệt đến bản đồ QiMap cũ. Đây không phải HTTP 301 vĩnh viễn.
- Tuyệt đối **không thay `index.html` của `atlas-bds-tphcm`** khi chỉ muốn tạo website công ty, bởi trang đó đang chuyển hướng các deep links của QiMap.

## Cách chỉnh sửa
- Thay nội dung: sửa `assets/site.js` ở cả 4 ngôn ngữ (VI, EN, zh-CN, zh-TW).
- Thay cấu trúc hiển thị: sửa `index.html`.
- Thay kiểu thiết kế: sửa `assets/styles.css`.
- Đổi link QiMap: sửa URL trong `qimap/index.html` và nút danh mục trong `index.html`.
- Thông tin liên hệ: Felix 陳歸, `0966108018`, Zalo và WhatsApp đã có đường dẫn; WeChat chưa có ID hay QR xác nhận, chỉ hiện hướng dẫn xin QR.
- Logo: hiện dùng ảnh cung cấp từ card visit; khi có bản vector chuẩn, thay tài sản ảnh để tăng độ sắc nét cho các màn hình lớn.

## Lưu ý về vận hành
- Site là profile dịch vụ, không tuyên bố đã có pháp nhân/giấy phép/chứng nhận chưa xác minh.
- Không thu thập dữ liệu khách hàng qua form; khách liên hệ trực tiếp qua nền tảng nhắn tin.
- Giá và vị trí trên QiMap hiện là dữ liệu nghiên cứu, có mức xác minh khác nhau. Website giới thiệu rõ đây là sản phẩm đang phát triển.
- Chưa có Google Analytics, pixels, cookie banner hay CMS. Có thể bổ sung sau khi cần.
- GitHub Pages không hỗ trợ redirect 301/302 HTTP tùy chỉnh theo cách website tĩnh thông thường. File `qimap/index.html` dùng JavaScript và meta refresh để chuyển hướng.
- Nếu sau này có domain riêng, cấu hình **Settings → Pages → Custom domain** và DNS theo hướng dẫn GitHub. Không tự điền `CNAME` nếu chưa sở hữu tên miền.