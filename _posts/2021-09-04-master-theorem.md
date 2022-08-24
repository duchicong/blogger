---
layout: post
title: 'Định lý Master'
date: 2021-01-13 22:16:06 +0700
categories: dsa
---
# Master Theorem (Định lý Master)
Trong hướng dẫn này, bạn sẽ học `master theorem` là gì và làm thế nào nó được sử dụng để giải quyết các quan hệ lặp lại.

Phương thức master là một công thức để giải quyết các quan hệ lặp lại có dạng:
```
T(n) = aT(n/b) + f(n),
điều kiện,
n = kích thước đầu vào
a = số bài toán con trong đệ quy
n/b = kích thước mỗi bài toán con. Tất cả các bài toán con được giả định để có cùng kích thước.
f(n) = chi phí của công việc được thực hiện bên ngoài cuộc gọi đệ quy,
trong đó bao gồm chi phí phân chia vấn đề và chi phí hợp nhất các giải pháp.

Ở đây, a ≥ 1 và b > 1 là hằng số, và f(n) là 1 hàm dương tiệm cận.
```

Một hàm tiện cận dương có nghĩa là với một giá trị đủ lớn của n, ta có f(n) > 0.

> Định lý master được sử dụng để tính toán thời gian phức tạp của quan hệ lặp lại ([thuật toán chia và chinh phục](https://www.programiz.com/dsa/divide-and-conquer)) một cách đơn giản và nhanh chóng.

## Master Theorem
Nếu `a >= 1` và `b > 1` là những hằng số và hàm `f(n)` là tiệm cận dương, thì thời gian phức tạp của quan hệ đệ quy được đưa ra bởi

![]( /images/dsa/master-theorem.png)

Mỗi điều kiện trên có thể được diễn giải như sau:
1. Nếu chi phí giải quyết bài toán con ở mỗi cấp tăng lên một hệ số nhất định, giá trị của `f(n)` sẽ trở thành đa thức nhỏ hơn $n^{log{_b}\space{a}}$ . Vì thế, thời gian phức tạp bị áp chế bởi chi phí của mức cuối cùng là $n^{log{_b}\space{a}}$.
2. Nếu chi phí giải quyết bài toán con của mỗi cấp là gần bằng nhau, thì giá trị của `f(n)` sẽ là $n^{log{_b}\space{a}}$. Vì thế, thời gian phức tạp sẽ là `f(n)` nhân với tổng số cấp tức là $n^{log{_b}\space{a}} * log \space n$.
3. Nếu chi phí giải quyết bài toán con theo mỗi cấp độ giảm bởi 1 yếu tố nhất định, thì giá trị của `f(n)` sẽ trở thành đa thức lớn hơn $n^{log{_b}\space{a}}$. Do đó, thời gian phức tạp là bị áp chế bởi chi phí `f(n)`.

### Ví dụ được giải quyết bởi Định lý Master
![](/images/dsa/example-of-master-theorem.png)

## Giới hạn của định lý Master
Định lý Master không thể sử dụng nếu:
+ `T(n)` không phải là đơn điệu. Ex: `T(n) = sin n`
+ `f(n)` không phải là đa thức. Ex: `f(n) = 2^n`
+ `a` không phải là hằng số. Ex: `a = 2n`
+ `a < 1`

**Tham khảo:**
[https://www.programiz.com/dsa/master-theorem](https://www.programiz.com/dsa/master-theorem)