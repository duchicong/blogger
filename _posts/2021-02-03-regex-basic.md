---
layout: post
title: 'Regex Cơ bản'
date: 2021-01-13 22:16:06 +0700
categories: regex
---

# REGEX CƠ BẢN

- `+` one or more quantifier (một hoặc nhiều định lượng ).
  > Cho phép kí tự trước nó lặp lại 1 lần hoặc nhiều lần. Tương đương với cách viết {1,}

ex1: `/a+/` ===> `aaaa, a` khớp 1 hoặc nhiều ký tự `a` liền nhau.

- `\` The escape character
  > Một dấu gạch chéo ngược sẽ biến một kí tự thường liền kế phía sau thành một kí tự đặc biệt

ex2: `/abc\*/` ==> `abc*` dấu `\*` được hiểu là dấu `*`

- `[]` tập hợp những ký tự
- `[^]` tập hợp những ngoại trừ

- `?` The zero-or-one quantifier (makes a preceding char optional)
  > Làm cho 1 hoặc nhiều ký tự trước đó là tuỳ chọn.

ex1: `/he([a-z]{3})?/ ==> hello, helli, he`
ex2: `/he?llo?/ ==> hello, hllo, hll`

- `.` Any character whatsoever (expert the newline character)
  > Bất kỳ ký tự nào bao gồm cả ký tự xuống dòng.

ex1: `/a./ ==> ah, aa a_`
ex2: `/.+/ ==> fjasldkfjasldfjasdklfalsdfjlaskdflas234234324####()*%^&$%^#`

- `*` The 0-or-more quantifier (a bit like +)
  > Một hoặc nhiều định lượng (giống như `+`)

ex1: `/a[a-z]*/` ==> `fsadjflasdjflasdfjfalsdjf` (chỉ được phép nhập chữ và `a` là chữ cái đầu tiên)

- `$` So khớp ở cuối chuỗi. Nếu gắn cờ multiline (đa dòng), nó sẽ khớp ngay trước kí tự xuống dòng.
  ex1: /t$/ không khớp với 't' trong chuỗi "eater" nhưng lại khớp trong chuỗi "eat".

- `\t` tab
- `\n` dòng mới
- `\r` ký tự xuống dòng (hữu ích trong môi trường window)
- `\s` khớp với bất kỳ khoảng trắng nào
- `\S` bất kỳ ký tự nào không phải là khoảng trắng
- `\d` ký tự số
- `\D` không phải ký tự số
- `\w` bất kỳ ký tự nào bao gồm chữ hoặc số
- `\W` bất kỳ ký tự nào không phải chữ hoặc số

- `^...$` điểm bắt đầu và kết thúc dòng để thắt chặt những chuỗi muốn được định nghĩa chính xác

## Match Groups (ghép nhóm)

- `(...)` nhóm các ký tự và bắt giữ chúng.

  > Bất kỳ thành phần con nào bên trong một cặp dấu ngoặc sẽ được ghi lại thành một nhóm. Trong thực tế, điều này có thể được sử dụng để trích xuất thông tin như số điện thoại hoặc email từ tất cả các loại dữ liệu.

  ex: /^(IMG(\d+))\.png$/

- `x|y` một hoặc nhiều thành phần
  ex: `/(p|t)ype/` ==> `type, pype`

## Một số ví dụ về REGEX

**Format Email**

```js
let email = /([a-z\d+_.-]+)\@[a-z]{2,8}(\.[a-z]{2,8})+/gm

/*
 * hợp lệ:
 * du.chi-cong@gmail.com
 * example+200@gmail.com.vn
 * test_1+1@test.com.vn
 * _congdu@gmail.com
 */
```

> `a-z`: chữ cái từ a-z  
> `\d`: `[0-9]` chữ số  
> `[a-z\d+_.-]`: thiết lập những ký tự đặc biệt bao gồm: `+_.-`, chữ la tinh, và số  
> `[...]+` : cộng thêm nhiều ký tự đã được định nghĩa sẵn  
> `\@`: là ký tự `@` > `\.`: là ký tự `.` > `{2,8}`: từ 2 đến 8 ký tự  
> tham số `g`: global, `m`: multiple line

**Format Phone Number**

```js
let phone = /(?=.{11,15}$)((\+84)?\d{3}(((-| )+)\d{3,4})+)/gm

/*
 * hợp lệ:
 * +8456 469 2021
 * 059-960-9999
 * 012-3456-789
 * 012 345 6789
 */
```

> `+84`: có thể có `+84`  
> `\d{3}`: `[0-9]` nhập 3 chữ số  
> `(-| )`: lưu lại ký tự `-` và ` ` (space)  
> `(((-| )+)\d{3,4})` : lưu lại ký tự `-| ` và 3-4 ký tự số sau mỗi lần nhập  
> `(?=.{11,15}$)`: tìm trong chuỗi đoạn phù hợp từ 11-15 ký tự  
> tham số `g`: global, `m`: multiple line

**Format hex colors**

```js
let hexColor = /\#([a-fA-F\d]{3,6})/

/*
 * hợp lệ:
 * #ff0000
 * #000
 * #aaaff
 * #0f0f0f
 */
```
