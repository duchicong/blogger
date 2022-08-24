---
layout: post
title: 'Cấu trúc dữ liệu và kiểu'
date: 2021-01-13 22:16:06 +0700
categories: dsa
---

# Cấu trúc dữ liệu và kiểu
Trong bài viết này, bạn sẽ học về cấu trúc dữ liệu và kiểu.

## Cấu trúc dữ liệu là gì ?
- Cấu trúc dữ liệu là 1 kho lưu trữ được sử dụng dể lưu trữ và tổ chức dữ liệu. Đó là một cách sắp xếp dữ liệu trên máy tính để có thể truy cập, cập nhật một cách hiệu quả
- Tùy thuộc vào yêu cầu và dự án của bạn, điều quan trọng là chọn cấu trúc dữ liệu phù hợp cho dự án của bạn. Ví dụ: nếu bạn muốn lưu trữ dữ liệu tuần tự trong bộ nhớ, thì bạn có thể sử dụng cấu trúc dữ liệu Mảng.<br/>

| ![Array data Structure Representation](https://cdn.programiz.com/cdn/farfuture/xl3N_KXHJEeqp83aLDgy9mO6yAKNM93I_rTfJXz8I0Q/mtime:1623152250/sites/tutorial2program/files/array_dsa.png) | 
|:--:| 
| *Array data Structure Representation* |

> Chú ý:
> Cấu trúc dữ liệu và kiểu dữ liệu hơi khác nhau. Cấu trúc dữ liệu và tập hợp các kiểu dữ liệu được sắp xếp theo trật tự cụ thể.

## Các kiểu của cấu trúc dữ liệu
Cơ bản, cấu trúc dữ liệu là chia thành 2 loại: `tuyến tính` và `phi tuyến tính`.

### Cấu trúc dữ liệu tuyến tính
- Trong cấu trúc dữ liệu tuyến tính, các phần tử là được sắp xếp theo thứ tự lần lượt. Vì các phần tử được sắp xếp theo thứ tự cụ thể, chúng rất dễ thực hiện.
- Tuy nhiên, khi độ phức tạp của chương trình ngày càng tăng, dữ liệu tuyến tính không phải là sự lựa chọn tốt nhất vì sự phức tạp trong hoạt động.
**Các cấu trúc dữ liệu phổ biến:**
#### 1. Array
Trong một mảng, các phần tử trong bộ nhớ được sắp xếp trong bộ nhớ liên tục. Các phần tử của một mảng là tương tự nhau. Và, kiểu của các phần tử đó có thể được lưu trữ ở dạng mảng được xác định bởi ngôn ngữ lập trình.<br/>

| ![Mỗi phần tử của 1 mảng đại diện cho 1 index](https://cdn.programiz.com/cdn/farfuture/CvSYKIrQaK-KlCU2PC0qZULI9kZa33XK3-HH1uipQIE/mtime:1623152231/sites/tutorial2program/files/array_.png) | 
|:--:| 
| *Mỗi phần tử của 1 mảng đại diện cho 1 index* |

#### 2. Stack (Ngăn xếp)
Trong stack, các phần tử được lưu trữ trong nguyên tắc LIFO. Rằng, phần tử cuối cùng được lưu trữ in 1 stack sẽ được xóa đầu tiên.
Nó làm việc như 1 đống đĩa mà đĩa cuối cùng được giữ trên đống sẽ được lấy ra trước.<br/>

| ![Trong 1 ngăn xếp, các hoạt động chỉ có thể được thực hiện từ một đầu (trên cùng ở đây).](https://cdn.programiz.com/cdn/farfuture/kDcDcLDytJ7-aLU-7zVQAIiMLfh4TOvi-mZR10hOCFg/mtime:1623152242/sites/tutorial2program/files/stack_dsa.png) | 
|:--:| 
| *Trong 1 ngăn xếp, các hoạt động chỉ có thể được thực hiện từ một đầu (trên cùng ở đây).* |

#### 3. Queue (Hàng đợi)
Không như Stack, cấu trúc dữ liệu `Queue` làm việc trong nguyên tắc FIFO ở phần tử đầu tiên được lưu trữ trong hàng đợi sẽ được loại bỏ đầu tiên. 
Nó làm việc như cách mà người xếp hàng trong quầy vé, nơi người đầu tiên trong hàng đợi sẽ nhận được vé trước.<br/>

| ![Trong hàng đợi, hành động thêm và xóa được thực hiện ở các đầu riêng biệt](https://cdn.programiz.com/cdn/farfuture/Li6chlo-utkw-FHPvLC_IiManoc41y1yEpUzwkj8iY8/mtime:1623152237/sites/tutorial2program/files/queue_dsa.png) | 
|:--:| 
| *Trong hàng đợi, hành động thêm và xóa được thực hiện ở các đầu riêng biệt* |


#### 3. Linked List (Danh sách được liên kết)
Trong `linked list`, các phần tử dữ liệu được liên kết thông qua 1 loạt các nút. Và, mỗi nút chứa các mục dữ liệu và địa chỉ đến nút tiếp theo.<br/>

| ![một linked list](https://cdn.programiz.com/cdn/farfuture/m9VXEfUlR739aTq0OmxoCW3z5sgKYuMLajEmP-q3J88/mtime:1623152210/sites/tutorial2program/files/linked-list_dsa.png) | 
|:--:| 
| *một linked list* |

---

### Cấu trúc dữ liệu phi tuyến tính (Non linear data structures)
Không như dữ liệu tuyến tính `(linear data structures)`, các phần tử trong dữ liệu phi tuyến tính không theo bất kỳ trình tự nào.

Cấu trúc dữ liệu phi tuyến tính được chia thành các cấu trúc dữ liệu `Graph` đồ thị và `Tree` cây.

#### 1. Graph
Trong cấu trúc dữ liệu `Graph`, mỗi nút được gọi đỉnh, mỗi đỉnh được nối với các đỉnh khác thông qua các cạnh.<br/>

| ![ví dụ về graph](https://cdn.programiz.com/cdn/farfuture/9QtvaweNfvWiBsAgt81aNynEhJXovky4lCoFgyU_Y-0/mtime:1623152219/sites/tutorial2program/files/graph_dsa.png) | 
|:--:| 
| *ví dụ graph* |

**Các dạng đồ thị phổ biến:**
- [Cây kéo dài và cây kéo dài tối thiểu](https://www.programiz.com/dsa/spanning-tree-and-minimum-spanning-tree)
- [Các thành phần được kết nối mạnh mẽ](https://www.programiz.com/dsa/strongly-connected-components)
- [Ma trận phụ cận](https://www.programiz.com/dsa/graph-adjacency-matrix)
- [Danh sách phụ cận](https://www.programiz.com/dsa/graph-adjacency-list)

#### 2. Tree
Tương tự một `graph`, một `Tree` là tập hợp của các đỉnh và các cạnh. Tuy nhiên, trong cấu trúc dữ liệu cây, chỉ có thể có 1 cạnh giữa 2 đỉnh.<br/>

| ![ví dụ về tree](https://cdn.programiz.com/cdn/farfuture/oJBsOWQ4sBd6DYjtaDq4MtU2fIxMWfuD-eMU0ePauIE/mtime:1623152223/sites/tutorial2program/files/tree_dsa.png?raw=true) | 
|:--:| 
| *ví dụ về tree* |

**Các dạng đồ thị phổ biến:**
- [Binary Tree](https://www.programiz.com/dsa/binary-tree)
- [Binary Search Tree](https://www.programiz.com/dsa/binary-search-tree)
- [AVL Tree](https://www.programiz.com/dsa/avl-tree)
- [B-Tree](https://www.programiz.com/dsa/b-tree)

### Tuyến tính vs phi tuyến tính
Bây giờ, chúng ta biết về tuyến tính và phi tuyến tính, chúng ta sẽ xem sự khác biệt giữa chúng. <br/>

| Linear Data Structures | non Linear Data Structures |
|-----------|-----------|
| Các mục dữ liệu được sắp xếp theo thứ tự nối tiếp nhau | Các mục dữ liệu được sắp xếp theo thứ tự không tuần tự |
| Tất cả các item đều có trên 1 lớp  | Các mục dữ liệu đều là các lớp khác nhau |
| Nó có thể được duyệt qua một lần chạy. Có nghĩa là, nếu chúng ta bắt đầu từ phần tử đầu tiên, chúng ta có thể duyệt tất cả các phần tử theo trình tự trong một lần chuyển | Nó yêu cầu chạy nhiều lần. Có nghĩa là, nếu chúng ta bắt đầu từ phần tử đầu tiên thì có thể không thể duyệt qua tất cả các phần tử trong 1 lần chuyển. |
| Việc sử dụng bộ nhớ không hiệu quả | Các cấu trúc khác nhau sử dụng bộ nhớ theo những cách hiệu quả khác nhau tùy thuộc vào nhu cầu. |
| Độ phức tạp về thời gian tăng theo kích thước dữ liệu | Độ phức tạp về thời gian vẫn như cũ |
| Example: Arrays, Stack, Queue | Example: Tree, Graph, Map |

### Tại sao là nên học cấu trúc dữ liệu ?
Am hiểu về cấu trúc dữ liệu sẽ giúp bạn hiểu cách làm việc của mỗi cấu trúc dữ liệu. Và cơ bản điều đó bạn có thể chọn cấu trúc dữ liệu thích hợp cho dự án của bạn.

Điều này sẽ giúp bạn tiết kiệm bộ nhớ và code hiệu quả hơn.
