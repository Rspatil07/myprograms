A=(1,21,31,21,31,4,5,8)
print(A)
B=(1,3,2,67,8,1)
print(B)

#Concatenation
C=A+B
print(C)

#Slicing of tuple
print(C[1:])
print(A[3:4])
print(B[:-1])
print(A[5:]) 
print(B.index(67))
print(A.count(8)) 
print(len(A))
print(any(B))
print(all(C))
print(enumerate(A))
print(max(A))
print(min(B))
print(sum(A))
print(sorted(C))
print(tuple(C)) 