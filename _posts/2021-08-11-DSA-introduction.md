---
layout: post
title: 'Giới thiệu cấu trúc dữ liệu và giải thuật'
date: 2021-01-13 22:16:06 +0700
categories: dsa
---

# Algorithm: thuật toán là gì?
> Trong trong dẫn này, chúng ta sẽ tìm hiểu thuật toán là gì với các ví dụ.

- Trong thuật ngữ `Lập trình máy tính`, thuật toán là một tập hợp các hướng dẫn được xác định rõ ràng để giải quyết một vấn đề cụ thể. Nó cần input/output cụ thể.
Ví dụ:
    1. inputs là 2 số.
    2. cộng 2 số
    3. Hiển thị kết quả

## Chất lượng của thuật toán tốt
- Input và Output nên được định nghĩa cẩn thận.
- Mỗi bước trong thuật toán nên rõ ràng.
- Thuật toán nên hiệu quả trong nhiều cách khác nhau để giải quyết một vấn đề.
- Một thuật toán không bao gồm mã máy tính. Thay vào đó, thuật toán nên được viết theo cách mà nó có thể được sử dụng trong nhiều ngôn ngữ lập trình khác nhau.

## Các ví dụ về thuật toán

1. **Thuật toán: Cộng 2 số bất kì.**
    ```
        Bước 1: Bắt đầu
        Bước 2: khai báo 2 tham số num1, num2 và sum. 
        Bước 3: Đọc các giá trị num1 và num2. 
        Bước 4: Cộng num1 và num2 và gán kết quả đến sum.
                sum ← num1 + num2 
        Bước 5: Hiển thị sum
        Bước 6: Dừng
    ```
2. **Thuật toán: Tìm số lớn nhất trong 3 số.**
    ```
        Bước 1: Bắt đầu
        Bước 2: Khai báo các tham số a, b, c
        Bước 3: Đọc các tham số a, b, c
        Bước 4: if a > b
                    if a > c
                        hiển thị a là số lớn nhất
                    else
                        hiển thị c là số lớn nhất
                else
                    if b > c 
                        hiển thị b là số lớn nhất
                    else
                        hiển thị c là số lớn nhất
        Bước 5: Dừng
    ```
3. **Thuật toán: giải phương trình bậc 2.**
    ```
        Bước 1: Bắt đầu
        Bước 2: Khai báo a, b, c, Delta, x1, x2, 
    ```