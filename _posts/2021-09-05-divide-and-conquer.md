---
layout: post
title: 'Thuật toán chia để trị'
date: 2021-01-13 22:16:06 +0700
categories: dsa
---

# Divide and Conquer Algorithm (Thuật toán chia để trị)
Trong hướng dẫn này, bạn sẽ học cách làm thế nào để làm việc với 2 thuật toán: phân chia và chinh phục. Chúng tôi sẽ so sánh `divide` và `conquer` so với các cách tiếp cận khác để giải quyết một bài toán đệ quy.

Thuật toán `Divide` và `Conquer` là chiến lược giải quyết một vấn đề lớn bằng cách:
1. Chia vấn đề thành các vấn đề nhỏ hơn
2. Giải quyết các vấn đề nhỏ, và
3. Kết hợp chúng để có đầu ra mong muốn.

Để sử dụng thuật toán `Divide` và `Conquer`, **đệ quy** là được sử dụng. Bạn có thể học `đệ quy` trong bất kì ngôn ngữ lập trình nào bạn biết.

---

## Làm thế nào để làm việc với `Divider` và `Conquer` ?
Dưới đây là các bước liên quan:
1. **Divide:** Chia bài toán đã cho thành các bài toán con bằng cách sử dụng đệ quy.
2. **Conquer:** Giải quyết các vấn đề nhỏ với đệ quy. Nếu bài toán con đủ nhỏ, hãy giải nó trực tiếp.
3. **Combine:** Kết hợp lời giải của các bài toán con là một phần của quá trình đệ quy để giải quyết bài toán thực tế.

Bây giờ, chúng ta sẽ tìm hiểu thông qua một ví dụ.
Ở đây, chúng tôi sẽ sắp xếp mảng sử dụng `divide` và `conquer` tiếp cận ([merge sort](https://www.programiz.com/dsa/merge-sort)).

1. Có 1 mảng đã cho:

| ![Mảng hỗn hợp nhiều phần tử](https://cdn.programiz.com/sites/tutorial2program/files/divide-and-conquer-0.png?raw=true) | 
|:--:| 
| *Mảng hỗn hợp nhiều phần tử* |

2. Phân chia mảng thành 2 nửa

| ![Phân chia mảng thành 2 nửa](https://cdn.programiz.com/sites/tutorial2program/files/divide-and-conquer-1.png?raw=true) | 
|:--:| 
| *Phân chia mảng thành 2 nửa* |

Lần nữa, tiếp tục chia đệ quy mỗi phần con thành hai nửa cho đến khi bạn nhận được các phần tử riêng lẻ.

| ![Phân chia mảng thành những phần nhỏ hơn](https://cdn.programiz.com/sites/tutorial2program/files/divide-and-conquer-2.png?raw=true) | 
|:--:| 
| *Phân chia mảng thành những phần nhỏ hơn* |

3. Bây giờ, kết hợp các yếu tố riêng lẻ theo cách được sắp xếp. Tại đây, hãy chinh phục và kết hợp các bước đi song song với nhau

| ![kết hợp các thành phần con](https://cdn.programiz.com/sites/tutorial2program/files/divide-and-conquer-3.png?raw=true) | 
|:--:| 
| *Kết hợp các thành phần con* |

## Time Complexity (Thời gian phức tạp)
Sự phức tạp của 2 thuật toán `Divider` và `Conquer` là được tính toán sử dụng [định lý Master](https://www.programiz.com/dsa/master-theorem)

```
T(n) = aT(n/b) + f(n),
điều kiện,
n = kích thước đầu vào
a = số vấn đề nhỏ theo đệ quy
n/b = kích thước mỗi vấn đề.
    Giả sử: tất cả các vấn đề nhỏ có kích thước tương tự nhau.
f(n) = chi phí của công việc được thực hiện bên ngoài cuộc gọi đệ quy,
    bao gồm chi phí phân chia vấn đề và chi phí hợp nhất các giải pháp.
```

Để chúng tôi đưa cho bạn 1 ví dụ về tìm thời gian phức tạp của đệ quy.
Cho một mảng kết hợp, phương trình được kết hợp dưới dạng:

```
T(n) = aT(n/b) + f(n)
     = 2T(n/2) + O(n)
điều kiện, 
a = 2 (mỗi lần, 1 vấn đề được chia thành 2 vấn đề con)
n/b = n/2 (kích thước của mỗi vấn đề con bằng một nửa so với kích thước đầu vào)
f(n) = Thời gian cần thiết để phân chia vấn đề và hợp nhất các vấn đề con
T(n/2) = O(n log n) (Để hiểu điều này, làm ơn tìm hiểu về định lý Master.)

Now, T(n) = 2T(n log n) + O(n)
          ≈ O(n log n)
```

## Phương pháp chia để trị với phương pháp Dynamic
Phương pháp `Divide` và `Conquer` chia 1 vấn đề thành nhiều vấn đề nhỏ; các bài toán con này tiếp tục được giải một cách đệ quy. Kết quả của mỗi vấn đề nhỏ không được lưu trữ tham khảo trong tương lai, ngược lại, trong cách tiếp cận `Dynamic`, kết quả của mỗi bài toán con được lưu trữ để tham khảo trong tương lai.

Sử dụng phương pháp chia để trị khi cùng một bài toán con không được giải nhiều lần. Sử dụng phương pháp tiếp cận động khi kết quả của một bài toán con sẽ được sử dụng nhiều lần trong tương lai.

Hãy để chúng tôi hiểu điều này với một ví dụ. Giả sử chúng ta đang cố gắng tìm chuỗi Fibonacci. Sau đó,

### Phương pháp chia để trị
```
fib(n)
    If n < 2, return 1
    Else , return f(n - 1) + f(n - 2)
```

### Phương pháp quy hoạch động
```
mem = []
fib(n)
    If n in mem: return mem[n] 
    else,     
        If n < 2, f = 1
        else , f = f(n - 1) + f(n - 2)
        mem[n] = f
        return f
```
Trong phương pháp này, `mem` lưu trữ kết quả của mỗi bài toán con.

## Nâng cao của thuật toán chia để trị
Độ phức tạp của phép nhân hai ma trận bằng phương pháp ngây thơ là $0(n^3)$, trong khi sử dụng cách `Chia để trị` (tức là phép nhân ma trận của Otrassen) là $0(n^{2.8074})$. Cách tiếp cận này cũng đơn giản hóa các vấn đề khác, chẳng hạn như tháp Hà Nội.

Cách tiếp cận này phù hợp với các hệ thống đa xử lý.

Nó sử dụng bộ nhớ đệm một cách hiệu quả.

## Ứng dụng phương pháp chia để trị
- [Binary search](https://www.programiz.com/dsa/binary-search)
- [Merge sort](https://www.programiz.com/dsa/merge-sort)
- [Quick sort](https://www.programiz.com/dsa/quick-sort)
- Strassen's Matrix multiplication
- Thuật toán Karatsuba

**Tham khảo:**
[https://www.programiz.com/dsa/divide-and-conquer](https://www.programiz.com/dsa/divide-and-conquer)