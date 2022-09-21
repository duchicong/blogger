---
layout: post
title: 'background-origin trong css'
date: 2022-09-20 21:33:06 +0700
category: css
lead: "background-origin là thuộc tính chỉ định vị trí gốc của ảnh nền."
---

<style>
  .demo {
    margin: 30px;
    padding:20px;
    border:10px dashed;
    height: 200px;
    background-image: url('img/icons/css.svg');
    background-repeat: no-repeat;
    background-size: 100px;
  }
  .example {
    background-color: #e1e1e1;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .paddingBox {
    background-origin: padding-box;
  }
  .borderBox {
    background-origin: border-box;
  }
  .contentBox {
    background-origin: content-box;
  }
</style>

# Thuộc tính Background Origin
background-origin là thuộc tính chỉ định vị trí gốc của ảnh nền.

> Note: Thuộc tính background-origin không làm việc khi background-attachment chỉ định là fixed.

## Giá trị của background-origin

| Giá trị  | Miêu tả |
|-------------|-------------|
| padding-box  | *Giá trị mặc định*, hình nền sẽ hiển thị từ vị trí padding |
| border-box  | Hình nền sẽ hiển thị từ vị trí của border |
| content-box | Hình nền sẽ hiển thị từ vị trí của content |
| initial | background-origin sẽ lấy giá trị khởi tạo là padding-box |
| inherit | Kế thừa giá trị của thuộc tính background-origin từ phần tử cha của nó |

## Giải thích
Thông thường, 1 phần tử sẽ có 4 thành phần:

```
margin > border > padding > content
```
Tương ứng sẽ hiển thị như sau:
<div style="max-width: 500px;padding: 5px;border: 1px dashed; background-color: #FF8C00">
  margin
  <div style="margin: 0px 10px 10px;padding: 5px;border: 1px solid;background-color:#FFA500">
    border
    <div style="margin:0px 10px 10px;padding:5px;border:1px solid;background-color:#8FBC8B">
      padding
      <div style="margin:0px 10px 10px;padding:5px;border:1px solid;background-color:#6B8E23">
        content
      </div>
    </div>
  </div>
</div>

Với mỗi thành phần của 1 phần tử thì các giá trị hiển thị sẽ tướng ứng như sau:
border => border-box
padding => padding-box
content => content-box

## Áp dụng
Tôi sẽ làm một ví dụ nhỏ về 3 giá trị: border-box, padding-box, content-box.
Với mỗi value vị trí hình nền sẽ hiển thị khác nhau. Ví du thực tế như sau:

Tôi sẽ dựng sẵn source code html và css.

```css
// code css
.demo {
  margin: 30px;
  padding:30px;
  border:10px dashed;
  height: 200px;
  background-image: url('img/icons/css.svg');
  background-repeat: no-repeat;
  background-size: 100px;
}
.example {
  background-color: #e1e1e1;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
```
```html
<!-- html -->
<div class="example">
  <div class="demo">
    Lorem Ipsum is simply dummy text
  </div>
</div>
```

- border-box.
<div class="example">
  <div class="demo borderBox">
    Lorem Ipsum is simply dummy text
  </div>
</div>

**Source code:**
```css
.borderBox {
  background-origin: border-box;
}
```
```html
<div class="example">
  <div class="demo borderBox">
    Lorem Ipsum is simply dummy text
  </div>
</div>
```
- `padding-box` hoặc `initial`.
<div class="example">
  <div class="demo paddingBox">
    Lorem Ipsum is simply dummy text
  </div>
</div>

**Source code:**
```css
.paddingBox {
  background-origin: padding-box;
}
```
```html
<div class="example">
  <div class="demo paddingBox">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  </div>
</div>
```


- `content-box`.
<div class="example">
  <div class="demo contentBox">
    Lorem Ipsum is simply dummy text
  </div>
</div>

**Source code:**
```css
.contentBox {
  background-origin: content-box;
}
```
```html
<div class="example">
  <div class="demo contentBox">
    Lorem Ipsum is simply dummy text
  </div>
</div>
```

