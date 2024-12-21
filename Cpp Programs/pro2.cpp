//inheritance program in cpp?
class A
{
  int i;
 public:
  A(int ii) : i(ii) {}
}


 class B : public A
 {
 public:
   B(int i) : A(i) {}
 }
