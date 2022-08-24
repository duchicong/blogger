---
layout: post
title: 'Phân tích các ký hiệu về tiệm cận'
date: 2021-01-13 22:16:06 +0700
categories: dsa
---
# Asymptotic Analysis: Big-O Notation and more (Phân tích tiệm cận: Ký hiệu Big-O và nhiều hơn nữa)
Đây là hướng dẫn, bạn sẽ học về những ký hiệu tiệm cận. Vì vậy, bạn sẽ học về ký hiệu `Big-O`, `Theta` và `Omega`.

Hiệu quả của thuật toán phụ thuộc vào số lượng thời gian, lưu trữ và tài nguyên khác được yêu cầu để xử lý thuật toán. Hiệu quả được đo với sự trợ giúp của các ký hiệu tiệm cận.

Một thuật toán có thể không có thể không có cùng hiệu suất cho các đầu vào khác nhau. Với kích thước đàu vào tăng lên, hiệu suất sẽ thay đổi.

Nghiên cứu thay đổi trong hiệu sauats của thuật toán với thay đổi trong phục vụ của kích thước đầu vào là được định nghĩa phân tích tiệm cận.

## Asymptotic Notations (Phân tích tiệm cận)
Phân tích tiệm cận là ký hiệu toán học được sử dụng để miêu tả thời gian chạy của thuật toán là tuyến tính. Tức là trường hợp tốt nhất.

Khi mảng đầu vào không được sắp xếp hoặc theo thứ tự ngược lại, thì nó sẽ mất thời gian trung bình.
Các khoảng thời gian này được biểu thị bằng cách sử dụng ký hiệu tiệm cận.

Có 3 loại ký hiệu tiệm cận:
+ Big-O
+ Omega
+ Theta

## Ký hiệu Big-O (O)
Ký hiệu Big-O đại diện giới hạn trên của thời gian chạy của 1 thuật toán. Do đó, nó đưa ra mức độ phức tạp trong trường hợp xấu nhất của 1 thuật toán.

| ![Big-O đưa giới hạn trên của 1 hàm](https://cdn.programiz.com/sites/tutorial2program/files/big0.png?raw=true) | 
|:--:| 
| *Big-O đưa giới hạn trên của 1 hàm* |

```
O(g(n)) = { f(n): Tồn tại các hằng số dương c và n0 sao cho 0 ≤ f(n) ≤ cg(n) cho tất cả n ≥ n0 }
```

Biểu thức trên còn có thể được mô tả như 1 hàm `f(n)` thuộc tập `O(g(n))` nếu tồn tại hằng số dương `c` sao cho nó nằm khoảng từ 0 đến cg(n), với `n` đủ lớn.
Cho giá trị bất kỳ của `n`, thời gian chạy của 1 thuật toán không vượt qua thời gian được cung cấp bởi `O(g(n))`.
Vì nó cung cấp thời gian chạy trong trường hợp xấu nhất của 1 thuật toán, nó được sử dụng rộng rãi để phân tích một thuật toán vì chung ta luôn quan tâm đến trường hợp xấu nhất.

## Ký hiệu Omega (Ω)
Ký hiệu Omega đại diện cho giới hạn dưới của thời gian chạy của một thuật toán. Do đó, nó cung cấp độ phức tạp trường hợp tốt nhất của 1 thuật toán.

| ![Omega đưa giới hạn dưới của 1 hàm](https://cdn.programiz.com/sites/tutorial2program/files/omega.png?raw=true) | 
|:--:| 
| *Omega đưa giới hạn dưới của 1 hàm* |

```
Ω(g(n)) = { f(n): Tồn tại các hằng số dương c và n0 sao cho 0 ≤ cg(n) ≤ f(n) cho tất cả n ≥ n0 }
```

Biểu thức trên có thể được miêu tả như 1 hàm `f(n)` thuộc tập `Ω(g(n))` nếu tồn tại hằng số dương `c` sao cho nó nằm trên `cg(n)`, với `n` đủ lớn.
Cho giá trị bất kỳ của `n`, thời gian nhỏ nhất yêu cầu bởi thuật toán là đưa bởi Omega `Ω(g(n))`.

## Ký hiệu Theta (Θ)
Ký hiệu Theta bao quanh hàm từ bên trên và bên dưới. Vì nó đại diện cho giới hạn trên và giới hạn dưới của thời gian chạy của một thuật toán, nó được sử dụng để phân tích độ phức tạp trong trường hợp trung bình của một thuật toán.

| ![Theta giới hạn hàm trong các yếu tố hằng số](https://cdn.programiz.com/sites/tutorial2program/files/theta.png?raw=true) | 
|:--:| 
| *Theta giới hạn hàm trong các yếu tố hằng số* |

Đối với một hàm `g(n)`, `Θ(g(n))` được cho bởi quan hệ:
```
Θ(g(n)) = { f(n): Tồn tại các hằng số dương c1, c2 và n0 sao cho 0 ≤ c1g(n) ≤ f(n) ≤ c2g(n) cho tất cả n ≥ n0 }
```
Biểu thức trên có thể được miêu tả như 1 hàm `f(n)` thuộc tập `Θ(g(n))` nếu tồn tại hằng số dương `c1` và `c2` sao cho nó có thể kẹp giữa `c1g(n)` và `c2g(n)`, với n đủ lớn.
Nếu 1 hàm `f(n)` nằm ở bất kỳ vị trí nào giữa `c1g(n)` và `c2g(n)` cho tất cả `n >= n0`, thì `f(n)` được cho là tiệm cận chặt chẽ.

**Tham khảo:**
[https://www.programiz.com/dsa/asymptotic-notations](https://www.programiz.com/dsa/asymptotic-notations)
