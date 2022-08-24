---
layout: post
title: 'Kỹ thuật CSS Grid dàn Layouts!'
date: 2021-01-13 22:16:06 +0700
categories: styles
---

# Kỹ thuật CSS Grid dàn Layouts

> Mô-đun bố cục lưới CSS cung cấp một hệ thống bố cục dựa trên lưới, với các hàng và cột, giúp thiết kế các trang web dễ dàng hơn mà không cần phải sử dụng `float` và `position`.

## Grid Elements

> Một bố cục lưới sẽ bao gồm một hoặc nhiều phần tử con.

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>
```

- Một phần tử html trở thành 1 `grid` khi thuộc tính `display` được thiết lập với giá trị: `grid` hoặc `inline-grid`. [Ví dụ ở đây](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_display_grid){:target="\_blank"}

```css
.grid-container {
  display: grid;

  /** display: inline-grid */
}
```

- Tất cả các phần tử con trong thuộc tính cha được thiết lập là `grid` sẽ tự động chuyển thành `1 item grid`.

- Grid sẽ bao gồm cột `columns` và hàng `rows`.

### Grid Columns

Các đường thẳng đứng của lưới được gọi là cột.

![Grid-Columns](https://www.w3schools.com/css/grid_columns.png?raw=true)

### Grid Rows

Các đường nằm ngang như ảnh dưới được gọi là dòng.

![Grid-Rows](https://www.w3schools.com/css/grid_rows.png?raw=true)

### Grid Gaps

Là khoảng cách giữa các hàng với hàng, cột với cột. Để điều chỉnh khoảng cách giữa các cột ta sử dụng các thuộc tính sau:

1. grid-column-gap
2. grid-row-gap
3. grid-gap

Giá trị của `Gap` là: `px, em, rem, % ...`.
ví dụ:

```css
.div {
  display: grid;
  grid-row-gap: 50px; /* dòng cách dòng 50px */
  grid-column-gap: 50px; /* cột cách cột 50px */
  grid-gap: 100px 50px;
  /* Thuộc tính grid-gap sẽ bao gồm cả row - column.
  grid-row-gap: 100px và grid-column-gap: 50px*/
}
```

[Ví dụ ở đây.](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_grid-gap){:target="\_blank"}

![Grid-Gaps](https://www.w3schools.com/css/grid_gaps.png?raw=true)

### Grid-lines

là các đường thẳng nằm giữa các cột và hàng.

> Điều này sẽ xác định phạm vi của `1 item` được tính dòng bắt đầu đến dòng kết thúc.

![image-lines-example](/blog/images/css/Grid-lines.png?raw=true)

## Grid-container

Để làm cho một phần tử html hoạt động như một `grid-container`, bạn cần thiết lập thuộc tính với `grid` và `inline-grid`.
`Grid-container` bao gồm các phần tử con, được đặt bên trong cột và hàng.

### grid-template-columns

- Là thuộc tính định nghĩa số cột trong grid layout, và nó có thể định nghĩa cả chiều rộng cho mỗi cột.
- Các giá trị được phân cách bằng dấu cách `space`, mỗi giá trị tương ứng với chiều rộng của mỗi cột.
- Nếu bạn muốn `layout` có chứa 4 cột hãy chỉ định chiều rộng của 4 cột hoặc chiều rộng là `auto` nếu tất cả có cùng chiều rộng như nhau.

> Chú ý:
> Nếu có nhiều hơn số item trong grid mà bạn đã định nghĩa nó sẽ tự động xuống dòng mới.

```css
.div {
  display: grid;
  grid-template-columns: auto auto auto auto;
  /* grid-template-columns: 100px 200px 300px 100px */
}
```

### grid-template-rows

- Định nghĩa chiều cao mỗi dòng.
- Mỗi giá trị sẽ được cách nhau bởi dấu cách `space`, mỗi giá trị sẽ định nghĩa chiều cao cho dòng tương ứng.

```css
.div {
  display: grid;
  grid-template-rows: 80px 200px;
}
```

![grid-template-rows](/blog/images/css/grid-template-rows-min.png)

### justify-content (định nghĩa item theo chiều ngang)

Là thuộc tính được sử dụng để căn chỉnh toàn bộ phần tử lưới bên trong container.

> Để thuộc tính `justify-content` có hiệu lực thì chiều rộng của lưới phải nhỏ hơn chiều rộng của `container`.

**Các giá trị được sử dụng trong:** `justify-content`:
[**space-evenly:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_justify-content_space-evenly){:target="\_blank"} sẽ cung cấp khoảng cách giữa các cột bằng nhau.

[**space-around:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_justify-content_space-around){:target="\_blank"} sẽ cung cấp khoảng cách giữa các cột đối xứng bằng nhau.

[**space-between:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_justify-content_space-between){:target="\_blank"} sẽ cung cấp giữa các cột khoảng không gian giữa chúng (không cách lề).

[**center:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_justify-content_center){:target="\_blank"} sẽ căn chỉnh các item trong grid ở giữa container.

[**start:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_justify-content_start){:target="\_blank"} sẽ căn chỉnh các item trong grid ở bên trái (bắt đầu của vùng chứa) container.

[**end:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_justify-content_end){:target="\_blank"} sẽ căn chỉnh các item trong grid ở bên phải container (gần giống text-align: right).

### align-content (định nghĩa item theo chiều dọc)

> **Lưu ý:** Tổng chiều cao của lưới phải nhỏ hơn chiều cao của vùng chứa để thuộc tính align-content có hiệu lực.

[**center:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_align-content_center){:target="\_blank"} sẽ căn chỉnh các dòng ở giữa container.

[**space-around:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_align-content_space-evenly){:target="\_blank"} sẽ cung cấp các hàng 1 khoảng không bằng nhau.

[**space-between:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_align-content_space-evenly){:target="\_blank"} sẽ cung cấp các hàng khoảng không bằng nhau xung quanh chúng (hiển thị như chiều ngang).

[**start:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_align-content_start){:target="\_blank"} sẽ hiển thị các hàng về đầu theo chiều dọc của container.

[**end:**](https://www.w3schools.com/css/tryit.asp?filename=trycss_grid_align-content_end){:target="\_blank"} sẽ hiển thị các hàng về cuối theo chiều dọc của container.
