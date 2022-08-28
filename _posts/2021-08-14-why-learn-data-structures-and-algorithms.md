---
layout: post
title: 'Tại sao nên học cấu trúc dữ liệu và giải thuật'
# subtitle: xxx
date: 2021-01-13 22:16:06 +0700
# categories:
# - dsa
# - blogs
category: dsa
lead: "Đây là bài viết dành cho bất kỳ ai có thể học thuật toán và tự hỏi mức độ ảnh hưởng của việc thúc đẩy sự nghiệp / kỹ năng lập trình của họ. Nó cũng dành cho những người thắc mắc tại sao các công ty lớn như: Google, Facebook và Amazon..."
author: CongDC
---
# Tại sao nên học cấu trúc dữ liệu và giải thuật ?
Trong bài viết này, chúng ta sẽ tìm hiểu tại sao mỗi chương trình nên học cấu trúc dữ liệu và giải thuật với sự trợ giúp của các ví dụ.

Đây là bài viết dành cho bất kỳ ai có thể học thuật toán và tự hỏi mức độ ảnh hưởng của việc thúc đẩy sự nghiệp / kỹ năng lập trình của họ. Nó cũng dành cho những người thắc mắc tại sao các công ty lớn như: Google, Facebook và Amazon lại thuê các lập trình viên đặc biệt giỏi trong việc tối ưu hóa thuật toán.

## Thuật toán là gì ?
Không chính thức, một thuật toán không là gì ngoài việc đề cập đến các bước để giải quyết một vấn đề. Chúng thực chất là một giải pháp.

Cho ví dụ, một thuật toán để giải quyết vấn đề về giai thứa có thể trông như sau:
**Vấn đề: Tìm giai thừa của `n`**
```
khởi tạo fact = 1
cho mỗi value v trong đoạn từ 1 -> n
    nhân fact với v
fact chứa nhiều giai thừa của n
```

Nhắc lại định nghĩa của giai thừa:
Giai thừa là một toán tử một ngôi trên tập hợp các số tự nhiên. Cho n là một số tự nhiên dương,"n giai thừa", ký hiệu n! là tích của n số tự nhiên dương đầu tiên.

n! = 1.2.3....n
VD: 4! = 1.2.3.4 = 24

Để giải quyết vấn đề trên, bài toán sẽ thể hiện nó với code của ngôn ngữ javascript như sau:

```javascript
function factorial(n) {
    let fact = 1;
    for (let v = 1; v <= n; v++) {
        fact = fact * v;
    }
    return fact;
}
```
Lập trình là tất cả cấu trúc dữ liệu và thuật toán. Cấu trúc dữ liệu là được sử dụng để nắm dữ liệu trong khi thuật toán để sử dụng để giải quyết vấn đề về dữ liệu.

Cấu trúc dữ liệu và giải thuật (DSA) đi qua các giải pháp cho các vấn đề tiêu chuẩn một cách chi tiết và cung cấp cho bạn cái nhìn sâu sắc về mức độ hiệu quả của việc sử dụng từng vấn đề trong chúng. Nó cũng dạy bạn khoa học về đánh giá hiệu quả của một thuật toán. Điều này cho phép bạn chọn cách tốt nhất trong số các lựa chọn khác nhau.

---

## Sử dụng cấu trúc dữ liệu và giải thuật làm code của bạn có thể mở rộng.

**Thời gian là quý giá**

Cho rằng, Tí và Tèo đang cố gắng giải quyết một vấn đề đơn giản là tìm tổng của 10^11 số tự nhiên. Trong khi Tèo đang viết thuật toán, Tí đã thực hiện giải bài toán này đơn giản như sau:
```
khởi tạo sum = 0
cho mỗi số tự nhiên n trong đoạn từ 1 -> 10^11
    n + sum
sum là câu trả lời
```

code của Tí:
```javascript
function findSum () {
    let sum = 0;
    for (let v = 1; v <= 100000000000; v++) {
        sum = sum +v;
    }
    return sum;
}
```
Tèo và Tí đang cảm thấy phấn khích về bản thân rằng có thể xây dựng một cái gì đó của riêng mình trong thời gian gần như không có.

Tí: Hãy chạy dòng code này và tìm ra tổng.
Tèo: Tôi chạy đoạn code này một vài phút nhưng nó vẫn không hiển thị kết quả. Có gì sai với nó ?

Ồ, điều gì đó sai sai! Quay lại và cố gắng chạy lại sẽ không giúp ích được gì. Vì vậy, hãy phân tích điều gì sai với đoạn mã đơn giản này.

Hai trong số tài nguyên quý giá nhất cho 1 chương trình đó là `Thời gian` và `Bộ nhớ`.
```
Time to run code = number of instructions * time to execute each instruction
```
> Số lượng hướng dẫn sẽ phụ thuộc vào code bạn sử dụng, và thời gian thực thi mỗi dòng code sẽ phụ thuộc vào máy và trình biên dịch.

Trong trường hợp này, tổng số lệnh được thực thi (giả sử x) là
`x = 1 + (1011 + 1) + (1011) + 1`, đó là `x = 2 * 1011 + 3`.

Giả sử rằng một máy tính có thể thực hiện các y = 10^8/s (nó có thể thay đổi tùy theo cấu hình máy). thì thời gian thực thi những dòng code trên ước tính hơn 16 phút.
```
Thời gian chạy mã = x/y (lớn hơn 16 phút)
```

Có thể tối ưu hóa thuật toán để Tèo và Tí không phải đợi 16 phút cho mỗi lần họ chạy đoạn mã này không ?

Tôi chắc chắn rằng bạn đã đoán đúng phương pháp. Tổng của số tự nhiên N đầu tiên được cho bởi công thức:
```
Sum = N * (N+1) / 2
```
Chuyển nó thành code sẽ trông như sau:
```javascript
function sum(n) {
    return n * (n + 1) / 2;
}
```
Với đoạn code trên, code chỉ thực hiện chạy trong 1 lần và hoàn thành nhiệm vụ với giá trị bất kỳ là bao nhiêu. Giả sử để n là một số lớn tự nhiên vô hạn nhưng nó sẽ tìm thấy kết quả ngay lập tức.

`Thời gian` để ta giải quyết vấn đề, trong trường hợp này, ước tính là 1/y (đó là 10 ns). Nhân tiện, phản ứng nhiệt hạch của 1 quả bom khinh khí mất 40 - 50ns, có nghĩa là chương trình của bạn sẽ thành công ngay cả khi bị ai đó ném một quả bom khinh khí vào máy tính của bạn cùng lúc bạn chạy mã của mình :-)
> Chú ý: Máy tính thực hiện một số hướng dẫn (không phải 1) để phép tính nhân chia. Tôi đã nói 1 chỉ vì mục đích đơn giản.

---

## Khả năng mở rộng
Khả năng mở rộng là quy mô + khả năng, nghĩa là chất lượng của một thuật toán/hệ thống để xử lý vấn đề cỡ lớn.

Thử xem xét vấn đề thiết lập một phòng học có 50 sinh viên. Một trong những giải pháp đơn giản nhất là đặt phòng, lấy bảng đen, một vài viên phấn là vấn đề được giải quyết.

**Nhưng điều gì sẽ xảy ra nếu kích thước vấn đề tăng lên ? Nếu số lượng sinh viên tăng đến 200 ?**

Giải pháp vẫn vậy, nhưng có điều là cần nhiều tài nguyên hơn. Trong trường hợp này, bạn sẽ cần một phòng khá rộng (có thể là một nhà hát).

**Điều gì sẽ xảy ra khi số lượng sinh viên tăng lên 1000 ?**
Giải pháp thất bại hoặc sử dụng nhiều tài nguyên hơn khi vấn đề ngày càng tăng. Điều này có nghĩa là, giải pháp này là không thẻ mở rộng.

**Vậy thì giải pháp có thể mở rộng là gì ?**
Hãy xem xét một website như [Khanacademy](https://www.khanacademy.org/), vài tỷ sinh viên có thể truy cập và có thể xem được nhiều video. Vì vậy, giải pháp có thể giải quyết vấn đề lớn hơn trong điều kiện hạn chế tài nguyên.

Quay lại bài toán số tự nhiên, nếu bạn nhìn vào giải pháp đầu tiên là tìm tổng của N số tự nhiên, nó không thể mở rộng. Đó là bởi vì nó đòi hỏi sự phát triển tuyến tính trong thời gian với sự tăng trưởng tuyến tính về quy mô của vấn đề. Các thuật toán như vậy còn được gọi là các thuật toán có thể mở rộng tuyến tính.

Giải pháp thứ 2 của chúng ta là có tính rất mở rộng và không cần sử dụng thêm thời gian để giải quyết vấn đề có kích thước lớn hơn. Chúng được gọi là `thuật toán thời gian không đổi`.

## Bộ nhớ là đắt đỏ
Bộ nhớ là không phải lúc nào cũng có sẵn. Trong khi xử lý mã / hệ thống đòi hỏi bạn phải lưu trữ hoặc tạo ra nhiều dữ liệu, điều quan trọng đối với thuật toán của bạn là tiết kiệm việc sử dụng bộ nhớ ở bất kỳ đâu có thể.

Ví dụ: Trong khi lưu trữ dữ liệu về mọi người, bạn có thể tiết kiệm bộ nhớ bằng cách chỉ lưu trữ ngày sinh, không lưu trữ tuổi của họ. Bạn luôn có thể tính toán nó một cách nhanh chóng bằng cách sử dụng ngày sinh và ngày hiện tại của họ.

## Các ví dụ hiệu quả về thuật toán
**Ví dụ 1: vấn đề nhóm tuổi**
Các vấn đề như tìm người ở một nhóm tuổi nhất định có thể dễ dàng được giải quyết với một phiên bản sửa đổi nhỏ của thuật toán tìm kiếm nhị phân (giả sử rằng dữ liệu đã được sắp xếp).

Thuật toán ngây thơ đi qua tất cả từng người một và kiểm tra xem người đó thuộc nhóm tuổi nhất định có thể mở rộng tuyến tính hay không. Trong khi đó, tìm kiếm nhị phân tự nhận mình là một thuật toán có thể mở rộng theo logarit. Điều này có nghĩa là nếu kích thước của vấn đề được bình phương, thì thời gian cần thiết để giải quyết nó chỉ tăng lên gấp đôi.

Giả sử, mất 1 giây để tìm tất cả những người ở một độ tuổi nhất định cho một nhóm 1000 người. Sau đó, với một nhóm 1 triệu người,
- Thuật toán tìm kiếm nhị phân sẽ chỉ mất 2 giây để giải quyết vấn đề
- Thuật toán ngây thơ có thể mất 1 triệu giây, tức là khoảng 12 ngày

Thuật toán tìm kiếm nhị phân tương tự được sử dụng để tìm căn bậc hai của một số.

**Ví dụ 2: Bài toán khối lập phương Rubik**
Thử tưởng tượng, bạn viết 1 chương trình tìm giải pháp cho khối Rubik
Câu đố trông dễ thương này có 43,252,003,274,489,856,000 vị trí, và đây chỉ là các vị trí! Hãy tưởng tượng số lượng con đường mà một người có thể đi để đến các vị trí sai.

May mắn thay, cách giải quyết vấn đề này có thể được biểu diễn bằng [cấu trúc dữ liệu đồ thị](https://www.programiz.com/dsa/graph). Có một thuật toán đồ thị được gọi là [thuật toán Dijkstra](https://www.programiz.com/dsa/dijkstra-algorithm) cho phép bạn giải quyết vấn đề này trong thời gian tuyến tính. Đúng, bạn nghe đúng đấy. Nó có nghĩa là nó cho phép bạn đạt được vị trí đã giải quyết trong một số trạng thái tối thiểu.

---

## Lời cuối cùng
Nói chung là, phát triển phần mềm liên quan đến việc học các công nghệ mới hàng ngày. Bạn có thể tìm hiểu hầu hết các công nghệ này khi sử dụng chúng trong một trong các dự án của mình. Tuy nhiên, nó không phải là trường hợp với các thuật toán.

Nếu bạn không biết rõ về các thuật toán, bạn sẽ không thể xác định được liệu bạn có thể tối ưu hóa mã bạn đang viết ngay bây giờ hay không. Bạn phải biết trước về chúng và áp dụng chúng bất cứ khi nào có thể và thuật toán vô cùng quan trọng.

Chúng tôi đã nói riêng về khả năng mở rộng của các thuật toán. Một hệ thống phần mềm bao gồm nhiều thuật toán như vậy. Tối ưu hóa bất kỳ một trong số chúng sẽ dẫn đến một hệ thống tốt hơn.

Tuy nhiên, điều quan trọng cần lưu ý là đây không phải là cách duy nhất để làm cho hệ thống có thể mở rộng. Ví dụ, một kỹ thuật được gọi là tính toán phân tán cho phép các phần độc lập của một chương trình chạy tới nhiều máy cùng nhau, làm cho nó thậm chí còn có khả năng mở rộng hơn.